import { SITE_PHONE } from "@/lib/constants";

export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const number = SITE_PHONE.replace(/\D/g, "");
  const requestUrl = new URL(request.url);
  const source = requestUrl.searchParams.get("source") || "website";
  const from = requestUrl.searchParams.get("from") || "/";

  const destination = new URL(`https://wa.me/${number}`);
  destination.searchParams.set(
    "text",
    "Hello, I am contacting you from gcmaf.net."
  );

  return new Response(null, {
    status: 307,
    headers: {
      Location: destination.toString(),
      "Cache-Control": "no-store, max-age=0",
      "X-Robots-Tag": "noindex, nofollow",
      "X-WhatsApp-Source": source,
      "X-WhatsApp-From": from,
    },
  });
}
