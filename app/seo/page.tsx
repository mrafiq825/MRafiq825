import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "SEO Services for Developers and AI Startups",
  description:
    "Learn how technical SEO, AI search optimization, and content architecture help developers and startups get discovered by search engines and AI assistants.",
  alternates: {
    canonical: "https://rafiq.dev/seo",
  },
  openGraph: {
    title: "SEO Services for Developers and AI Startups",
    description:
      "Technical SEO and AI search optimization for modern products, portfolios, and developer content.",
    url: "https://rafiq.dev/seo",
    type: "website",
    siteName: "Muhammad Rafiq Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services for Developers and AI Startups",
    description:
      "Technical SEO and AI search optimization for modern products, portfolios, and developer content.",
  },
};

const seoPoints = [
  {
    title: "Technical SEO",
    body: "Improve crawlability, indexing quality, and page performance with clean metadata, structured routes, and strong internal linking.",
  },
  {
    title: "AI Search Optimization",
    body: "Structure content for AI assistants, Google AI Overviews, and answer engines with clear headings, concise definitions, and FAQ sections.",
  },
  {
    title: "Content Architecture",
    body: "Turn product pages, blogs, and case studies into topic clusters that help search engines understand your expertise and authority.",
  },
];

export default function SEOPage() {
  return (
    <main className="min-h-screen bg-bg-page px-4 py-24 text-text-primary">
      <Container className="space-y-10">
        <section className="glass-panel rounded-3xl border border-border-default/40 p-8 sm:p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent-600">
            SEO & AI Visibility
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            Search engine optimization for founders, developers, and AI-focused
            teams.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-text-secondary">
            I help modern products and personal brands become easier to find,
            easier to trust, and easier for AI systems to cite.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="rounded-full bg-accent-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-700"
            >
              Explore the blog
            </Link>
            <Link
              href="/"
              className="rounded-full border border-border-default/50 px-5 py-2.5 text-sm font-medium text-text-primary transition hover:bg-white/10"
            >
              Back to portfolio
            </Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {seoPoints.map((point) => (
            <article
              key={point.title}
              className="glass-panel rounded-2xl border border-border-default/40 p-6"
            >
              <h2 className="text-xl font-semibold text-text-primary">
                {point.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                {point.body}
              </p>
            </article>
          ))}
        </section>

        <section className="glass-panel rounded-3xl border border-border-default/40 p-8 sm:p-10">
          <h2 className="font-heading text-3xl font-semibold">
            What this page covers
          </h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-text-primary">
                Core SEO strategy
              </h3>
              <p className="mt-2 text-sm leading-7 text-text-secondary">
                I focus on page-level clarity, metadata quality, internal
                linking, and technical signals that improve how content is
                discovered and understood.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary">
                AI search readiness
              </h3>
              <p className="mt-2 text-sm leading-7 text-text-secondary">
                Content is structured so it can be surfaced in answer engines,
                AI overviews, and conversational search experiences without
                sacrificing readability.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
