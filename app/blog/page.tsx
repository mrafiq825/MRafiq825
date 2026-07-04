import type { Metadata } from "next";
import BlogListClient from "@/components/blog/BlogListClient";

export const metadata: Metadata = {
  title: "Blog & Insights | Muhammad Rafiq | AI & Full Stack Engineer",
  description: "Read technical articles, case studies, and guides on AI & Machine Learning, Full Stack Development, System Design, DevOps & SRE, and Career Learning by Muhammad Rafiq.",
  keywords: "Software Engineering, AI Engineering, Machine Learning, RAG, System Design, DevOps, SRE, Full Stack, React, Next.js, Node.js, FastAPI, Docker, Kubernetes, AEO, Answer Engine Optimization",
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
  alternates: {
    canonical: "https://rafiq.dev/blog",
  },
  openGraph: {
    title: "Blog & Insights | Muhammad Rafiq | AI & Full Stack Engineer",
    description: "Read technical articles, case studies, and guides on AI & Machine Learning, Full Stack Development, System Design, DevOps & SRE, and Career Learning.",
    url: "https://rafiq.dev/blog",
    siteName: "Muhammad Rafiq Portfolio",
    type: "website",
    images: [
      {
        url: "https://rafiq.dev/images/og-blog-default.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Rafiq Blog & Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Insights | Muhammad Rafiq | AI & Full Stack Engineer",
    description: "Read technical articles, case studies, and guides on AI & Machine Learning, Full Stack Development, System Design, DevOps & SRE, and Career Learning.",
    images: ["https://rafiq.dev/images/og-blog-default.png"],
  },
};

export default function BlogPage() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://rafiq.dev/#website",
      "name": "Muhammad Rafiq Portfolio",
      "url": "https://rafiq.dev",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://rafiq.dev/blog?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://rafiq.dev/#organization",
      "name": "Muhammad Rafiq Portfolio",
      "url": "https://rafiq.dev",
      "logo": "https://rafiq.dev/favicon.ico",
      "sameAs": [
        "https://github.com/Rafiqdevhub",
        "https://linkedin.com/in/muhammadrafiq"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://rafiq.dev/#person",
      "name": "Muhammad Rafiq",
      "jobTitle": "Full Stack Developer & AI Engineer",
      "url": "https://rafiq.dev",
      "sameAs": [
        "https://github.com/Rafiqdevhub",
        "https://linkedin.com/in/muhammadrafiq"
      ]
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
        }
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <BlogListClient />
    </>
  );
}
