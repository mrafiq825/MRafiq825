"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Navbar from "~/components/layout/Navbar";
import { blogPosts } from "~/data/blog";
import { AppleArrowLeft, AppleCalendar, AppleClock, AppleShare, AppleArrowRight } from "~/components/ui/AppleIcons";

interface BlogDetailClientProps {
  slug: string;
}

const BlogDetailClient = ({ slug }: BlogDetailClientProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  // Find the current post
  const post = useMemo(() => {
    return blogPosts.find((p) => p.slug === slug) || null;
  }, [slug]);

  // Track scroll progress
  useEffect(() => {
    if (!post) return;

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post]);

  // Dynamically extract headings (H2s) for the Table of Contents & setup IntersectionObserver
  useEffect(() => {
    if (!post) return;

    const container = document.getElementById("blog-content-body");
    if (!container) return;

    const h2Elements = container.querySelectorAll("h2");
    const extractedHeadings: { id: string; text: string }[] = [];

    h2Elements.forEach((el, index) => {
      const text = el.innerText;
      const cleanId = `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
      el.id = cleanId;
      extractedHeadings.push({ id: cleanId, text });
    });

    setHeadings(extractedHeadings);

    // IntersectionObserver to highlight active item in TOC
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -60% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    h2Elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [post]);

  // Automatically inject code copy buttons into rendered HTML
  useEffect(() => {
    if (!post) return;

    const container = document.getElementById("blog-content-body");
    if (!container) return;

    const wrappers = container.querySelectorAll(".code-block-wrapper");
    wrappers.forEach((wrapper) => {
      const pre = wrapper.querySelector("pre");
      const header = wrapper.querySelector(".flex");
      if (pre && header && !header.querySelector(".copy-btn")) {
        const btn = document.createElement("button");
        btn.className = "copy-btn text-xs font-mono text-text-muted hover:text-accent-600 transition-colors duration-150 cursor-pointer flex items-center gap-1 bg-transparent border-0 outline-none py-0.5 px-1.5 rounded";
        btn.innerHTML = "Copy";
        btn.onclick = () => {
          navigator.clipboard.writeText(pre.innerText.trim());
          btn.innerHTML = "Copied!";
          setTimeout(() => {
            btn.innerHTML = "Copy";
          }, 2000);
        };
        header.appendChild(btn);
      }
    });
  }, [post]);

  // Find related posts based on category and tags matching relevance
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts
      .filter((p) => p.slug !== post.slug)
      .map((p) => {
        let score = 0;
        if (p.category === post.category) score += 3;
        const sharedTags = p.tags.filter((t) => post.tags.includes(t)).length;
        score += sharedTags;
        return { post: p, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 2)
      .map((item) => item.post);
  }, [post]);

  // Share link handler
  const handleShare = () => {
    if (typeof window === "undefined") return;
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (!post) return null;

  return (
    <>
      <Navbar />

      {/* Reading Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-border-default/30">
        <div
          className="h-full bg-accent-600 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="page-shell min-h-screen bg-transparent text-text-primary pt-12 pb-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto mt-8">
          
          {/* Back button */}
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent-600 transition-colors duration-200 mb-8"
          >
            <AppleArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Articles
          </Link>

          {/* Grid Layout (Article vs TOC) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Article Content */}
            <div className="lg:col-span-9">
              <article className="overflow-hidden rounded-[24px] border border-border-default bg-bg-surface shadow-sm mb-8 glass-panel">
                {/* Visual Cover Gradient */}
                <div
                  className="h-44 md:h-60 w-full relative"
                  style={{ background: post.coverGradient }}
                >
                  <div className="absolute inset-0 bg-black/15 backdrop-blur-[2px]" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block px-3 py-1 text-[10px] font-mono font-bold tracking-widest uppercase text-white bg-black/25 backdrop-blur-md rounded-md mb-3 border border-white/10">
                      {post.category}
                    </span>
                    <h1 className="font-heading text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                      {post.title}
                    </h1>
                  </div>
                </div>

                {/* Info bar */}
                <div className="px-6 md:px-8 py-4 border-b border-border-default/40 bg-bg-surface-hover/30 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs font-mono text-text-muted">
                    <span className="inline-flex items-center gap-1">
                      <AppleCalendar />
                      {post.publishedAt}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <AppleClock />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Share button */}
                  <button
                    onClick={handleShare}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-text-secondary hover:text-accent-600 bg-bg-surface border border-border-default/80 hover:border-accent-100 rounded-lg py-1.5 px-3 transition-all duration-200 cursor-pointer"
                  >
                    <AppleShare />
                    {isCopied ? "Link Copied!" : "Share Post"}
                  </button>
                </div>

                {/* Article Content */}
                <div
                  id="blog-content-body"
                  className="prose-custom px-6 md:px-8 py-8 border-b border-border-default/40"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Article Footer */}
                <div className="px-6 md:px-8 py-6 bg-bg-surface-hover/30 flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-mono text-text-muted mr-2">Tags:</span>
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-[6px] text-xs font-mono bg-accent-50 text-accent-700 border border-accent-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>

              {/* Author Bio Card */}
              <div className="p-6 md:p-8 rounded-[24px] border border-border-default bg-bg-surface shadow-sm glass-panel flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-12">
                <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent-600 text-white font-mono text-2xl font-bold border border-accent-100 shadow-sm">
                  {post.author.avatar}
                </span>
                <div className="text-center sm:text-left">
                  <h4 className="font-heading text-lg font-bold text-text-primary mb-1">
                    {post.author.name}
                  </h4>
                  <p className="text-xs font-mono text-accent-700 font-semibold mb-3">
                    {post.author.role}
                  </p>
                  <p className="text-sm font-body text-text-secondary leading-relaxed">
                    Muhammad Rafiq is a Full-Stack Developer and AI Engineer specializing in building scalable distributed backends, Retrieval-Augmented Generation (RAG) platforms, optimized container pipelines, and site reliability telemetry.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Table of Contents (TOC) */}
            <div className="lg:col-span-3 hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-text-muted mb-4 pl-1">
                Table of Contents
              </h4>
              <nav className="flex flex-col gap-1.5">
                {headings.map((h) => (
                  <a
                    key={h.id}
                    href={`#${h.id}`}
                    className={`text-xs py-1.5 px-3 rounded-lg font-body transition-all duration-200 border-l-2 leading-snug ${
                      activeId === h.id
                        ? "border-accent-600 bg-accent-50 text-accent-700 font-semibold"
                        : "border-transparent text-text-secondary hover:text-text-primary hover:bg-bg-surface-hover/50"
                    }`}
                  >
                    {h.text}
                  </a>
                ))}
              </nav>
            </div>

          </div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-12 border-t border-border-default/50 pt-10">
              <h3 className="font-heading text-xl font-bold mb-6 text-text-primary pl-1 border-l-4 border-accent-600">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((rPost) => (
                  <Link key={rPost.slug} href={`/blog/${rPost.slug}`} className="group block">
                    <article className="h-full flex flex-col justify-between overflow-hidden rounded-[16px] border border-border-default bg-bg-surface shadow-sm glass-panel glass-panel-hover">
                      <div className="p-5 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 text-[10px] font-mono text-text-muted mb-2">
                            <span>{rPost.publishedAt}</span>
                            <span>•</span>
                            <span>{rPost.readTime}</span>
                          </div>
                          <h4 className="font-heading text-base font-bold text-text-primary group-hover:text-accent-600 transition-colors duration-200 leading-snug line-clamp-2">
                            {rPost.title}
                          </h4>
                          <p className="mt-2 font-body text-xs text-text-secondary leading-relaxed line-clamp-2">
                            {rPost.excerpt}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-border-default/30 flex items-center justify-between">
                          <span className="text-[10px] font-mono text-accent-700 bg-accent-50 px-2 py-0.5 rounded border border-accent-100">
                            {rPost.category}
                          </span>
                          <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-accent-700 group-hover:translate-x-0.5 transition-transform duration-200">
                            Read <AppleArrowRight />
                          </span>
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

export default BlogDetailClient;
