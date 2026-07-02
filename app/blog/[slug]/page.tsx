import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import BlogDetailClient from "./BlogDetailClient";

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
  return {
    title: `${post.seoTitle || post.title} | Muhammad Rafiq`,
    description: post.metaDescription || post.excerpt,
    keywords: `${post.category}, ${post.tags.join(", ")}, Portfolio Blog`,
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      type: "article",
      siteName: "Muhammad Rafiq Blog",
      images: [post.ogImage || "https://mrafiq85.vercel.app/images/og-default.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription || post.excerpt,
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailClient slug={slug} />;
}
