import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/blog", "/blog/", "/seo", "/prompts"],
        disallow: ["/admin", "/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "anthropic-ai",
          "Google-Extended",
          "Bingbot",
        ],
        allow: ["/", "/blog", "/blog/"],
        disallow: ["/admin", "/api/"],
      },
    ],
    host: "https://mrafiq.vercel.app",
    sitemap: "https://mrafiq.vercel.app/sitemap.xml",
  };
}
