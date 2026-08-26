import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const forwarded = process.argv.slice(2);
let hostname = "0.0.0.0";
let port = "4173";

for (let index = 0; index < forwarded.length; index += 1) {
  if (forwarded[index] === "--host" && forwarded[index + 1]) {
    hostname = forwarded[index + 1];
    index += 1;
  } else if (forwarded[index] === "--port" && forwarded[index + 1]) {
    port = forwarded[index + 1];
    index += 1;
  }
}

const nextCli = fileURLToPath(
  new URL("../node_modules/next/dist/bin/next", import.meta.url),
);

const child = spawn(
  process.execPath,
  [nextCli, "dev", "--hostname", hostname, "--port", port],
  { stdio: "inherit", env: process.env },
);

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  else process.exit(code ?? 1);
});
