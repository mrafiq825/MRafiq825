import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getAeoEnrichedPost } from "@/data/blog";
import BlogDetailClient from "@/components/blog/BlogDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Article Not Found | Muhammad Rafiq",
      description: "The requested blog article was not found.",
    };
  }

  const enrichedPost = getAeoEnrichedPost(post);
  const publishDate = new Date(post.publishedAt);
  const updatedDate = new Date(enrichedPost.lastUpdated || post.publishedAt);

  return {
    title: `${post.seoTitle || post.title} | Muhammad Rafiq | Blog`,
    description: post.metaDescription || post.excerpt,
    keywords: `${post.category}, ${post.tags.join(", ")}, Portfolio Blog, AEO, Developer Insights`,
    alternates: {
      canonical: `https://rafiq.dev/blog/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      type: "article",
      url: `https://rafiq.dev/blog/${slug}`,
      siteName: "Muhammad Rafiq Portfolio",
      publishedTime: isNaN(publishDate.getTime()) ? undefined : publishDate.toISOString(),
      modifiedTime: isNaN(updatedDate.getTime()) ? undefined : updatedDate.toISOString(),
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.ogImage || "https://rafiq.dev/images/og-blog-default.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription || post.excerpt,
      images: [post.ogImage || "https://rafiq.dev/images/og-blog-default.png"],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const enrichedPost = getAeoEnrichedPost(post);
  const publishDate = new Date(post.publishedAt);
  const updatedDate = new Date(enrichedPost.lastUpdated || post.publishedAt);

  const schemas: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `https://rafiq.dev/blog/${slug}#article`,
      "headline": post.title,
      "description": post.metaDescription || post.excerpt,
      "image": post.ogImage || "https://rafiq.dev/images/og-blog-default.png",
      "datePublished": isNaN(publishDate.getTime()) ? undefined : publishDate.toISOString(),
      "dateModified": isNaN(updatedDate.getTime()) ? undefined : updatedDate.toISOString(),
      "author": {
        "@type": "Person",
        "name": post.author.name,
        "jobTitle": post.author.role,
        "url": "https://rafiq.dev"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://rafiq.dev/#organization",
        "name": "Muhammad Rafiq Portfolio",
        "logo": {
          "@type": "ImageObject",
          "url": "https://rafiq.dev/favicon.ico"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://rafiq.dev/blog/${slug}`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://rafiq.dev"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://rafiq.dev/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.category,
          "item": `https://rafiq.dev/blog?category=${encodeURIComponent(post.category)}`
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": post.title,
          "item": `https://rafiq.dev/blog/${slug}`
        }
      ]
    }
  ];

  if (enrichedPost.faqs && enrichedPost.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": enrichedPost.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <BlogDetailClient slug={slug} />
    </>
  );
}
