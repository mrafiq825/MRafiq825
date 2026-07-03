import { NextResponse } from "next/server";
import { blogPosts, getAeoEnrichedPost } from "@/data/blog";

export async function GET() {
  const baseUrl = "https://rafiq.dev";
  
  // Sort posts by date descending so the latest uploads are always at the top
  const sortedPosts = [...blogPosts].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  const rssItems = sortedPosts
    .map((post) => {
      const enriched = getAeoEnrichedPost(post);
      const publishDate = new Date(post.publishedAt);
      const formattedDate = isNaN(publishDate.getTime())
        ? new Date().toUTCString()
        : publishDate.toUTCString();

      // Escape special characters in XML content
      const escapeXml = (unsafe: string) => {
        return unsafe.replace(/[<>&'"]/g, (c) => {
          switch (c) {
            case "<": return "&lt;";
            case ">": return "&gt;";
            case "&": return "&amp;";
            case "'": return "&apos;";
            case "\"": return "&quot;";
            default: return c;
          }
        });
      };

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${formattedDate}</pubDate>
      <description>${escapeXml(post.metaDescription || post.excerpt)}</description>
      <category>${escapeXml(post.category)}</category>
    </item>`;
    })
    .join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Muhammad Rafiq | Blog &amp; Insights</title>
    <link>${baseUrl}/blog</link>
    <description>Technical articles, case studies, and guides on AI &amp; Machine Learning, Full Stack Development, System Design, DevOps &amp; SRE by Muhammad Rafiq.</description>
    <language>en-us</language>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
