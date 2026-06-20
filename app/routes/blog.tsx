import { useState, useMemo } from "react";
import { Link } from "react-router";
import Navbar from "~/components/layout/Navbar";
import { blogPosts, type BlogCategory } from "~/data/blog";
import { FiSearch, FiCalendar, FiClock, FiArrowRight, FiUser } from "react-icons/fi";
import type { Route } from "./+types/blog";

export const meta: Route.MetaFunction = () => [
  { title: "Blog & Insights | Muhammad Rafiq" },
  {
    name: "description",
    content: "Read technical articles, case studies, and guides on AI & Machine Learning, Full Stack Development, System Design, DevOps & SRE, and Career Learning by Muhammad Rafiq.",
  },
  { name: "keywords", content: "Software Engineering, AI Engineering, Machine Learning, RAG, System Design, DevOps, SRE, Full Stack, React, Next.js, Node.js, FastAPI, Docker, Kubernetes" },
  { name: "robots", content: "index, follow" },
];

const CATEGORIES: ("All" | BlogCategory)[] = [
  "All",
  "AI & Machine Learning",
  "Full Stack Development",
  "System Design",
  "DevOps & SRE",
  "Project Case Studies",
  "Career & Learning"
];

const BlogList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | BlogCategory>("All");

  // Filter posts based on search query and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Featured post is the first match of the current filter list (or overall first)
  const featuredPost = useMemo(() => {
    return filteredPosts[0] || null;
  }, [filteredPosts]);

  // The rest of the posts in the list
  const otherPosts = useMemo(() => {
    if (!featuredPost) return [];
    return filteredPosts.slice(1);
  }, [filteredPosts, featuredPost]);

  return (
    <>
      <Navbar />
      <main className="page-shell min-h-screen bg-transparent text-text-primary pt-12 pb-32 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center md:text-left mt-8 mb-12">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent-700 bg-accent-50/70 border border-accent-100 px-3 py-1 rounded-full">
              Engineering Logs
            </span>
            <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl text-text-primary">
              The Developer Log
            </h1>
            <p className="mt-3 max-w-2xl font-body text-base md:text-lg text-text-secondary leading-relaxed">
              In-depth technical case studies, system design guides, and developer roadmap write-ups on AI, DevOps, and Full-Stack Engineering.
            </p>
          </div>

          {/* Search and Category Filters */}
          <div className="mb-12 flex flex-col gap-6 bg-bg-surface/50 backdrop-blur-md border border-border-default/40 p-5 rounded-[24px] shadow-sm">
            {/* Search Input */}
            <div className="relative w-full">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                type="text"
                placeholder="Search articles by title, tags, category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 text-sm rounded-[14px] glass-input text-text-primary placeholder-text-muted/70"
              />
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 justify-start items-center">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-[12px] text-xs font-mono transition-all duration-200 cursor-pointer ${
                    selectedCategory === category
                      ? "bg-accent-600 text-white shadow-sm font-semibold border-transparent"
                      : "bg-bg-surface border border-border-default text-text-secondary hover:bg-bg-surface-hover hover:text-text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* No Results Fallback */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20 bg-bg-surface border border-border-default rounded-[24px] glass-panel">
              <p className="font-body text-text-secondary text-base">No articles found matching your filters.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-700 hover:text-accent-800"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Featured Spotlight Card */}
          {featuredPost && (
            <div className="mb-12">
              <Link to={`/blog/${featuredPost.slug}`} className="group block">
                <article className="grid grid-cols-1 md:grid-cols-12 overflow-hidden rounded-[24px] border border-border-default bg-bg-surface shadow-sm glass-panel glass-panel-hover">
                  {/* Decorative Gradient Cover */}
                  <div
                    className="md:col-span-5 h-48 md:h-full min-h-[260px] relative transition-transform duration-500 group-hover:scale-[1.01]"
                    style={{ background: featuredPost.coverGradient }}
                  >
                    <div className="absolute inset-0 bg-black/15 backdrop-blur-[1px]" />
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                      <span className="self-start font-mono text-[10px] font-bold tracking-widest uppercase text-white bg-black/20 backdrop-blur-md px-2.5 py-1 rounded-md">
                        FEATURED WRITE-UP
                      </span>
                      <span className="self-center font-heading text-xl md:text-2xl font-extrabold text-white text-center tracking-wide opacity-90 drop-shadow-md select-none">
                        {featuredPost.category}
                      </span>
                      <div />
                    </div>
                  </div>

                  {/* Spotlight Info */}
                  <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      {/* Meta info */}
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-muted mb-4">
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-accent-50 text-accent-700 font-semibold text-[10px] uppercase">
                          {featuredPost.category}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <FiCalendar />
                          {featuredPost.publishedAt}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <FiClock />
                          {featuredPost.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight group-hover:text-accent-600 transition-colors duration-200">
                        {featuredPost.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="mt-3 font-body text-sm md:text-base text-text-secondary leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border-default/50 flex flex-wrap gap-4 items-center justify-between">
                      {/* Author Bio */}
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-600 text-white font-mono text-xs font-semibold">
                          {featuredPost.author.avatar}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-text-primary leading-none">
                            {featuredPost.author.name}
                          </span>
                          <span className="text-[10px] text-text-muted">
                            {featuredPost.author.role}
                          </span>
                        </div>
                      </div>

                      {/* CTA */}
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-700 group-hover:translate-x-1 transition-transform duration-200">
                        Read Post <FiArrowRight />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          )}

          {/* Grid of Other Posts */}
          {otherPosts.length > 0 && (
            <div>
              <h2 className="font-heading text-xl font-bold mb-6 text-text-primary pl-1 border-l-4 border-accent-600 ml-1">
                More Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherPosts.map((post) => (
                  <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
                    <article className="h-full flex flex-col justify-between overflow-hidden rounded-[20px] border border-border-default bg-bg-surface shadow-sm glass-panel glass-panel-hover">
                      {/* Gradient Header */}
                      <div
                        className="h-36 w-full relative transition-transform duration-500 group-hover:scale-[1.01]"
                        style={{ background: post.coverGradient }}
                      >
                        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
                        <span className="absolute bottom-4 left-4 font-mono text-[10px] font-bold tracking-widest uppercase text-white bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                          {post.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          {/* Meta */}
                          <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-text-muted mb-3">
                            <span className="inline-flex items-center gap-1">
                              <FiCalendar />
                              {post.publishedAt}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <FiClock />
                              {post.readTime}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="font-heading text-lg font-bold text-text-primary group-hover:text-accent-600 transition-colors duration-200 leading-tight">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="mt-2.5 font-body text-xs md:text-sm text-text-secondary leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="mt-5 pt-4 border-t border-border-default/40 flex flex-col gap-4">
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="px-2 py-0.5 rounded-[5px] text-[10px] font-mono bg-accent-50 text-accent-700 border border-accent-100">
                                {tag}
                              </span>
                            ))}
                            {post.tags.length > 3 && (
                              <span className="text-[10px] font-mono text-text-muted self-center ml-1">
                                +{post.tags.length - 3} more
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-between pt-1">
                            {/* Author Info */}
                            <div className="flex items-center gap-2">
                              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-600/90 text-white font-mono text-[9px] font-semibold">
                                {post.author.avatar}
                              </span>
                              <span className="text-[11px] font-semibold text-text-secondary">
                                {post.author.name}
                              </span>
                            </div>

                            {/* Read more */}
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent-700 group-hover:translate-x-1 transition-transform duration-200">
                              Read <FiArrowRight />
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default BlogList;
