export interface Author {
  name: string;
  role: string;
  avatar: string; // Initials or image path
}

export type BlogCategory =
  | "AI & Machine Learning"
  | "Full Stack Development"
  | "System Design"
  | "DevOps & SRE"
  | "Project Case Studies"
  | "Career & Learning";

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle?: string;
  metaDescription: string;
  category: BlogCategory;
  excerpt: string;
  content: string; // Rich HTML string
  publishedAt: string;
  readTime: string;
  tags: string[];
  coverGradient: string;
  author: Author;
  ogImage?: string;
  quickAnswer?: string;
  tldr?: {
    build: string;
    technologies: string[];
    learnings: string[];
    readTime?: string;
  };
  faqs?: {
    question: string;
    answer: string;
  }[];
  references?: {
    title: string;
    url: string;
  }[];
  cta?: {
    title: string;
    description: string;
    linkText: string;
    linkUrl: string;
  };
  topicCluster?: string;
  lastUpdated?: string;
  githubUrl?: string;
  demoUrl?: string;
}
