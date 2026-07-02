import type { Metadata } from "next";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title: "Blog & Insights | Muhammad Rafiq",
  description: "Read technical articles, case studies, and guides on AI & Machine Learning, Full Stack Development, System Design, DevOps & SRE, and Career Learning by Muhammad Rafiq.",
  keywords: "Software Engineering, AI Engineering, Machine Learning, RAG, System Design, DevOps, SRE, Full Stack, React, Next.js, Node.js, FastAPI, Docker, Kubernetes",
  robots: "index, follow",
};

export default function BlogPage() {
  return <BlogListClient />;
}
