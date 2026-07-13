import { MetadataRoute } from "next";
import { blogPosts, getAeoEnrichedPost } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rafiq.dev";

  // Base static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/seo`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/prompts`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  // Dynamic article routes
  const blogRoutes = blogPosts.map((post) => {
    const enriched = getAeoEnrichedPost(post);
    const dateStr = enriched.lastUpdated || post.publishedAt;
    let lastMod = new Date();
    try {
      const parsedDate = new Date(dateStr);
      if (!isNaN(parsedDate.getTime())) {
        lastMod = parsedDate;
      }
    } catch {
      lastMod = new Date();
    }

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: lastMod,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    };
  });

  return [...staticRoutes, ...blogRoutes];
}
