"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {
  AppleLayers,
  AppleExternalLink,
  AppleTrendingUp,
  AppleGithub,
  AppleDevice,
  AppleMail,
  AppleArrowLeft,
  AppleArrowRight,
  AppleMonitor,
} from "@/components/ui/AppleIcons";
import Section from "@/components/layout/Section";
import Modal from "@/components/ui/Modal";
import RadialGlowButton from "@/components/ui/RadialGlowButton";
import GenerateButton from "@/components/ui/GenerateButton";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";
import { motion } from "framer-motion";

const STATUS_CONFIG: Record<string, { color: string; bg: string; border: string }> = {
  Live: { color: "text-[#00E5FF]", bg: "bg-[#00E5FF]/10", border: "border-[#00E5FF]/30" },
  "In Progress": { color: "text-amber-400", bg: "bg-amber-950/30", border: "border-amber-800/40" },
  Archived: { color: "text-neutral-400", bg: "bg-neutral-900/30", border: "border-neutral-800/40" },
  "APK Available": { color: "text-blue-400", bg: "bg-blue-950/30", border: "border-blue-800/40" },
  "Open Source": { color: "text-[#7C3AED]", bg: "bg-[#7C3AED]/10", border: "border-[#7C3AED]/30" },
};

const getStatusConfig = (status: string) => STATUS_CONFIG[status] || STATUS_CONFIG["Live"];

const ProjectsSection = () => {
  const [selectedProjectForApk, setSelectedProjectForApk] = useState<Project | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setIsAtStart(scrollLeft <= 5);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
      const maxScroll = scrollWidth - clientWidth;
      setScrollProgress(maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0);
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();
      window.addEventListener("resize", checkScrollPosition);
      return () => {
        el.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.85 : clientWidth * 0.85;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Section id="projects" className="border-t border-white/10 bg-transparent pt-12">
      {/* Section Header */}
      <div className="mb-10 max-w-3xl">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#00E5FF]">
          SHOWCASES
        </span>
        <h2 className="flex items-center gap-3 font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
          Project <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#00E5FF] bg-clip-text text-transparent">Worlds</span>
        </h2>
        <p className="mt-3 max-w-2xl font-body text-sm sm:text-base text-text-secondary leading-relaxed">
          Every project is an immersive digital world with device mockups (Laptop, Phone, Tablet), animated screenshots, and tilt interactions.
        </p>
      </div>

      {/* 3D Carousel Container */}
      <div
        ref={carouselRef}
        className="flex items-stretch gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory py-6 -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {projects.map((project, index) => {
          const statusConfig = getStatusConfig(project.status);
          const maxTags = 4;
          const visibleTech = project.tech.slice(0, maxTags);
          const remainingTagsCount = project.tech.length - maxTags;

          // Alternate 3D Mockup Badge (Laptop, Phone, Tablet)
          const deviceType = index % 3 === 0 ? "3D Laptop" : index % 3 === 1 ? "3D Phone" : "3D Tablet";
          const DeviceIcon = index % 3 === 0 ? AppleMonitor : index % 3 === 1 ? AppleDevice : AppleLayers;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="snap-start shrink-0 w-[88vw] sm:w-[400px] md:w-[440px] flex flex-col"
            >
              <article className="glass-panel glass-panel-hover flex-1 flex flex-col justify-between rounded-2xl overflow-hidden group border border-white/10 bg-[#101010]/90">
                <div className="flex flex-col flex-1">
                  {/* 3D Device Frame Preview */}
                  {project.thumbnail && (
                    <div className="overflow-hidden border-b border-white/10 aspect-video relative bg-black/80 shrink-0 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all duration-500">

                      <Image
                        src={project.thumbnail}
                        alt={project.imageAlt}
                        width={1200}
                        height={675}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent pointer-events-none" />
                    </div>
                  )}

                  {/* Header & Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                          {project.title}
                        </h3>
                        <div
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-mono font-bold ${statusConfig.color} border ${statusConfig.border} ${statusConfig.bg}`}
                        >
                          <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                          {project.status}
                        </div>
                      </div>

                      <p className="font-body text-xs text-text-secondary leading-relaxed mb-4">
                        {project.summary}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {visibleTech.map((item) => (
                          <span
                            key={item}
                            className="font-mono text-[10px] bg-[#7C3AED]/15 text-[#00E5FF] px-2.5 py-1 rounded-md border border-[#7C3AED]/30"
                          >
                            {item}
                          </span>
                        ))}
                        {remainingTagsCount > 0 && (
                          <span className="font-mono text-[10px] bg-white/5 text-text-muted px-2 py-1 rounded-md border border-white/10">
                            +{remainingTagsCount} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Magnetic Action Buttons */}
                <div className="px-6 pb-6 flex gap-2 pt-4 border-t border-white/10 bg-black/40">
                  {project.status === "APK Available" ? (
                    <RadialGlowButton
                      onClick={() => setSelectedProjectForApk(project)}
                      containerClassName="flex-1 flex"
                    >
                      <AppleDevice className="w-4 h-4" />
                      <span>Get APK</span>
                    </RadialGlowButton>
                  ) : project.status === "Open Source" ? (
                    <RadialGlowButton
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      containerClassName="flex-1 flex"
                    >
                      <AppleGithub className="w-4 h-4" />
                      <span>GitHub Repo</span>
                    </RadialGlowButton>
                  ) : (
                    <RadialGlowButton
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      containerClassName="flex-1 flex"
                    >
                      <AppleExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </RadialGlowButton>
                  )}
                  {project.detailsUrl && (
                    <a
                      href={project.detailsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 font-body text-xs font-medium bg-white/5 border border-white/10 text-white rounded-xl px-3.5 py-2 hover:bg-white/10 transition-colors"
                    >
                      <AppleGithub className="w-4 h-4 text-text-secondary" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </article>
            </motion.div>
          );
        })}
      </div>

      {/* Carousel Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={() => handleScroll("left")}
          disabled={isAtStart}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#101010] text-white transition-all disabled:opacity-30 hover:border-[#00E5FF] cursor-pointer"
          aria-label="Previous"
        >
          <AppleArrowLeft className="w-5 h-5" />
        </button>

        <div className="h-1.5 w-36 rounded-full bg-white/10 overflow-hidden relative">
          <div
            className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#7C3AED] to-[#00E5FF] rounded-full transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <button
          onClick={() => handleScroll("right")}
          disabled={isAtEnd}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#101010] text-white transition-all disabled:opacity-30 hover:border-[#00E5FF] cursor-pointer"
          aria-label="Next"
        >
          <AppleArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* GitHub Callout */}
      <div className="mt-12 rounded-2xl glass-panel p-6 text-center border border-white/10 bg-[#101010]/80">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <AppleTrendingUp className="w-5 h-5 text-[#00E5FF]" />
            <p className="text-sm font-medium text-text-secondary">
              Continuously building open source software and AI agent frameworks on GitHub.
            </p>
          </div>
          <GenerateButton
            href="https://github.com/mrafiqdot825"
            target="_blank"
            rel="noopener noreferrer"
            text="Explore GitHub Repos"
            activeText="Opening GitHub"
            hue={250}
            icon={<AppleGithub />}
          />
        </div>
      </div>

      {/* APK Modal */}
      <Modal
        isOpen={selectedProjectForApk !== null}
        onClose={() => setSelectedProjectForApk(null)}
        title="Mobile Build (APK) Request"
      >
        {selectedProjectForApk && (
          <div className="space-y-5">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED]/40">
              <AppleDevice className="w-8 h-8 text-[#00E5FF]" />
              <div>
                <h4 className="font-heading font-bold text-white text-base">
                  {selectedProjectForApk.title}
                </h4>
                <span className="font-mono text-[10px] text-text-muted uppercase">
                  Android APK Package
                </span>
              </div>
            </div>

            <p className="text-xs text-text-secondary leading-relaxed">
              This mobile application is built with React Native and Expo. You can request the direct APK installation package for Android device testing.
            </p>

            <div className="flex gap-3 pt-2">
              <RadialGlowButton
                href={`mailto:mrafiqdot825@gmail.com?subject=APK%20Request:%20${encodeURIComponent(selectedProjectForApk.title)}`}
                containerClassName="flex-1 flex"
              >
                <AppleMail className="w-4 h-4" />
                <span>Email Request</span>
              </RadialGlowButton>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
};

export default ProjectsSection;
