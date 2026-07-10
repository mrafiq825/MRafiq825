"use client";

import { useState } from "react";
import {
  AppleArrowRight,
  AppleDownload,
  AppleBriefcase,
  AppleCpu,
  AppleAward,
  AppleSparkles
} from "@/components/ui/AppleIcons";
import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";
import AnimatedButton from "@/components/ui/AnimatedButton";
import RadialGlowButton from "@/components/ui/RadialGlowButton";
import Modal from "@/components/ui/Modal";
import { site } from "@/data/site";

const HeroSection = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  // Capping tech badges: Display top 4 and link the remaining count
  const topSkills = ["Javascript", "React", "Node.js", "Python"];
  const remainingCount = site.skills.length - topSkills.length;

  return (
    <Section id="home" className="pb-16 pt-8 md:pt-12">
      <div className="grid items-center gap-12 xl:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Left Column: Redesigned Typography and Details */}
        <div className="flex flex-col items-start text-left">
          {/* Animated Availability Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <Badge>
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {site.availability}
            </Badge>
          </div>

          <p className="mt-8 font-mono text-[13px] font-semibold tracking-[0.24em] text-accent-700/90">
            {site.greeting}
          </p>

          <h1 className="mt-3 font-heading text-hero font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-[#e2e8f0] to-accent-600">
            {site.name}
          </h1>

          <h2 className="mt-4 font-mono text-small sm:text-body font-semibold tracking-wide text-text-secondary">
            {site.role}
          </h2>

          <p className="mt-6 max-w-[52ch] font-body text-body leading-relaxed text-text-secondary">
            {site.intro}
          </p>

          {/* Capped Tech Stack Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-text-muted mr-1.5">
              Stack:
            </span>
            {topSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center font-mono text-[11px] bg-bg-surface-hover text-text-secondary px-2.5 py-1 rounded-[6px] border border-border-default font-medium"
              >
                {skill}
              </span>
            ))}
            {remainingCount > 0 && (
              <a
                href="#tech-stack"
                className="inline-flex items-center font-mono text-[11px] bg-accent-50/10 text-accent-700 hover:bg-accent-50/20 px-2.5 py-1 rounded-[6px] border border-accent-600/30 transition-colors font-medium hover:border-accent-600/50"
              >
                +{remainingCount} more
              </a>
            )}
          </div>

          {/* Interactive CTAs */}
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <RadialGlowButton
              href="#projects"
              className="py-3 px-6 rounded-[12px] font-semibold text-sm tracking-wide"
            >
              <span>Explore My Work</span>
              <AppleArrowRight className="h-4.5 w-4.5 ml-1" />
            </RadialGlowButton>

            <AnimatedButton
              as="a"
              href={site.cvUrl}
              target="_blank"
              dark
              className="group py-3 px-6 rounded-[12px] font-semibold text-sm transition-all duration-300 border border-border-default bg-[#0d0e12] hover:bg-[#14161c]"
            >
              <AppleDownload className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              <span>Resume</span>
            </AnimatedButton>
          </div>
        </div>

        {/* Right Column: Clean Code Terminal & Stacked Profile Card */}
        <div className="relative w-full max-w-[500px] xl:max-w-none mx-auto flex flex-col gap-6">
          {/* Subtle accent glow behind the terminal mockup */}
          <div className="absolute -inset-4 rounded-[2rem] bg-accent-600/5 blur-3xl pointer-events-none" />

          {/* Apple-styled IDE Terminal Mockup */}
          <div className="relative w-full overflow-hidden rounded-[1.5rem] border border-border-default bg-[#0c0d12]/95 backdrop-blur-xl shadow-2xl">
            {/* Editor Top Bar */}
            <div className="flex items-center justify-between border-b border-border-default bg-[#07080b]/80 px-4 py-3.5 select-none">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="font-mono text-xs text-text-muted">MuhammadRafiq.ts</span>
              <span className="w-12" />
            </div>

            {/* Simulated Code Space */}
            <div className="p-6 font-mono text-[12px] sm:text-[13px] leading-relaxed text-text-secondary select-none overflow-x-auto no-scrollbar">
              <div>
                <span className="code-keyword">const</span> <span className="text-accent-600">engineer</span> = &#123;
              </div>
              <div className="pl-4">
                name: <span className="code-string">"{site.name}"</span>,
              </div>
              <div className="pl-4">
                role: <span className="code-string">"Full-Stack Software Engineer"</span>,
              </div>
              <div className="pl-4">
                experience: <span className="code-string">"3+ Years"</span>,
              </div>
              <div className="pl-4">
                passions: <span className="text-accent-600">[</span>
                <span className="code-string">"Scalable Backends"</span>, <span className="code-string">"Aesthetics"</span>, <span className="code-string">"DevOps"</span>
                <span className="text-accent-600">]</span>,
              </div>
              <div className="pl-4">
                status: <span className="code-string">"{site.availability}"</span>
              </div>
              <div>&#125;;</div>

              <div className="mt-4">
                <span className="code-comment">// Let's engineering something meaningful</span>
              </div>
              <div>
                <span className="code-keyword">if</span> (project.isComplex || project.needsAutomation) &#123;
              </div>
              <div className="pl-4 text-accent-700">
                engineer.collaborate(project);
              </div>
              <div>&#125;</div>
            </div>
          </div>

          {/* Combined Profile Photo & Philosophy Glass Card */}
          <div className="relative rounded-[1.5rem] glass-panel p-5 flex flex-col sm:flex-row items-center gap-5.5 shadow-xl border border-border-default hover:border-accent-600/20 hover:translate-y-[-2px] transition-all duration-300 group">
            {/* Interactive Image Frame */}

            <div className="text-center sm:text-left flex-1">
              <div className="flex items-center justify-center sm:justify-between flex-wrap gap-2">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent-700">
                  Core Philosophy
                </p>
              </div>
              <p className="mt-2 text-xs sm:text-[13px] italic leading-relaxed text-text-secondary">
                "A great software engineer does not just write code; they analyze complex problems, design modular, resilient systems, and ship products that deliver measurable real-world value."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats metrics layout at the bottom of HeroSection */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
        {site.stats.map((stat, idx) => {
          const Icon = [AppleBriefcase, AppleCpu, AppleAward, AppleSparkles][idx] || AppleAward;
          return (
            <div
              key={stat.label}
              className="glass-panel rounded-[1.25rem] p-5 hover:translate-y-[-3px] hover:border-accent-600/30 transition-all duration-300 select-none group"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-accent-600 group-hover:text-accent-700 transition-colors">
                  {stat.value}
                </span>
              </div>
              <p className="mt-2.5 text-[11px] font-mono uppercase tracking-wider text-text-secondary leading-tight">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Profile Image Modal Popup */}
      <Modal
        isOpen={isImageOpen}
        onClose={() => setIsImageOpen(false)}
        title="Muhammad Rafiq"
      >
        <div className="relative overflow-hidden rounded-[16px] bg-bg-page border border-border-default w-full max-w-sm sm:max-w-md mx-auto shadow-2xl p-2 flex items-center justify-center">
          <img
            src="/profile.png"
            alt={site.name}
            className="w-full h-auto max-h-[70vh] object-contain rounded-[12px]"
          />
        </div>
      </Modal>
    </Section>
  );
};

export default HeroSection;
