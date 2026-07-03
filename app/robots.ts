import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/blog", "/blog/"],
        disallow: ["/admin", "/api/"],
      },
    ],
    sitemap: "https://rafiq.dev/sitemap.xml",
  };
}
