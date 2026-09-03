import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/whatsapp",
      },
    ],
    sitemap: "https://gcmaf.net/sitemap.xml",
  };
}
