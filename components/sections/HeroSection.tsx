"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  AppleArrowRight,
  AppleDownload,
  AppleBriefcase,
  AppleCpu,
  AppleAward,
  AppleSparkles,
  AppleMessage,
} from "@/components/ui/AppleIcons";
import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";
import AnimatedButton from "@/components/ui/AnimatedButton";
import RadialGlowButton from "@/components/ui/RadialGlowButton";
import Modal from "@/components/ui/Modal";
import HeroScene3D from "@/components/sections/HeroScene3D";
import { site } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";

const ROTATING_TEXTS = [
  "Building AI Products",
  "Creating Modern Web Apps",
  "Mobile Development",
  "Cloud Solutions",
  "Automation Systems",
];

const HeroSection = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  // Rotating subtitle loop
  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const topSkills = ["TypeScript", "Next.js", "React Native", "Python", "FastAPI"];
  const remainingCount = site.skills.length - topSkills.length;

  return (
    <Section id="home" className="pb-10 pt-8 md:pt-2 md:pb-2 relative overflow-hidden">
      {/* 3D WebGL Background Scene */}
      <HeroScene3D />

      {/* Ambient Lighting Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#7C3AED]/20 to-[#00E5FF]/20 rounded-full blur-[140px] opacity-40" />
      </div>

      {/* Animated Availability Badge */}
      <div className="relative z-10 flex justify-center mb-8">
        <Badge>
          <span className="relative flex h-2 w-2 mr-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]"></span>
          </span>
          {site.availability}
        </Badge>
      </div>

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="flex flex-col items-start text-left">
          <p className="font-mono text-[13px] font-semibold tracking-[0.25em] text-[#00E5FF] uppercase">
            {site.greeting}
          </p>

          <h1 className="mt-4 font-heading text-hero font-extrabold leading-[1.05] tracking-tight text-white">
            MUHAMMAD <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#00E5FF] bg-clip-text text-transparent">RAFIQ</span>
          </h1>

          <h2 className="mt-3 font-mono text-sm sm:text-base font-medium tracking-wide text-text-secondary">
            Full Stack Developer | AI Engineer | React Native Developer
          </h2>

          {/* Dynamic Rotating Text Banner */}
          <div className="mt-4 h-9 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={textIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="inline-flex items-center font-mono text-sm sm:text-base font-bold text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/30 px-3.5 py-1 rounded-lg shadow-[0_0_15px_rgba(0,229,255,0.2)]"
              >
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                {ROTATING_TEXTS[textIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="mt-6 max-w-[54ch] font-body text-body leading-relaxed text-text-secondary">
            {site.intro}
          </p>

          {/* Capped Tech Stack Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-text-muted mr-1.5">
              Core Stack:
            </span>
            {topSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center font-mono text-[11px] bg-[#101010] text-[#00E5FF] px-2.5 py-1 rounded-[8px] border border-white/10 font-medium"
              >
                {skill}
              </span>
            ))}
            {remainingCount > 0 && (
              <a
                href="#tech-stack"
                className="inline-flex items-center font-mono text-[11px] bg-[#7C3AED]/15 text-white hover:bg-[#7C3AED]/30 px-2.5 py-1 rounded-[8px] border border-[#7C3AED]/40 transition-colors font-medium hover:border-[#00E5FF]/50"
              >
                +{remainingCount} more
              </a>
            )}
          </div>

          {/* CTAs matching IMPLEMENTATION.md */}
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <RadialGlowButton
              href="#projects"
              className="py-3.5 px-6 rounded-[12px] font-semibold text-sm tracking-wide bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            >
              <span>View Projects</span>
              <AppleArrowRight className="h-4.5 w-4.5 ml-1.5" />
            </RadialGlowButton>

            <AnimatedButton
              as="a"
              href="#contact"
              dark
              className="group py-3.5 px-6 rounded-[12px] font-semibold text-sm transition-all duration-300 border border-white/10 bg-[#101010] hover:bg-[#181922] text-white hover:border-[#00E5FF]/40"
            >
              <AppleMessage className="mr-2 h-4 w-4 text-[#00E5FF]" />
              <span>Book a Call</span>
            </AnimatedButton>

            <AnimatedButton
              as="a"
              href={site.cvUrl}
              target="_blank"
              dark
              className="group py-3.5 px-6 rounded-[12px] font-semibold text-sm transition-all duration-300 border border-white/10 bg-[#101010] hover:bg-[#181922] text-white"
            >
              <AppleDownload className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              <span>Download Resume</span>
            </AnimatedButton>
          </div>
        </div>

        {/* Right Column: Particle Emergence Profile Card & Code IDE */}
        <div className="relative w-full max-w-[480px] lg:max-w-none mx-auto flex flex-col gap-6">
          {/* Subtle accent glow */}
          <div className="absolute -inset-4 rounded-[2rem] bg-[#7C3AED]/15 blur-3xl pointer-events-none" />

          {/* IDE Terminal Window */}
          <div className="relative w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 bg-black/80 px-4 py-3 select-none">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="font-mono text-xs text-text-muted">
                mrafiqdot825.ts
              </span>
              <span className="w-12" />
            </div>

            <div className="p-5 font-mono text-[12px] sm:text-[13px] leading-relaxed text-text-secondary select-none overflow-x-auto no-scrollbar">
              <div>
                <span className="code-keyword">const</span>{" "}
                <span className="text-[#00E5FF]">engineer</span> = &#123;
              </div>
              <div className="pl-4">
                name: <span className="code-string">"{site.name}"</span>,
              </div>
              <div className="pl-4">
                role: <span className="code-string">"Full Stack Engineer | AI/ML Enthusiast"</span>,
              </div>
              <div className="pl-4">
                passions: <span className="text-[#7C3AED]">[</span>
                <span className="code-string">"AI Agents"</span>,{" "}
                <span className="code-string">"Web/Mobile"</span>,{" "}
                <span className="code-string">"DevOps"</span>
                <span className="text-[#7C3AED]">]</span>,
              </div>
              <div className="pl-4">
                status: <span className="code-string">"{site.availability}"</span>
              </div>
              <div>&#125;;</div>

              <div className="mt-3">
                <span className="code-comment">// Ready to build scalable systems</span>
              </div>
              <div>
                <span className="code-keyword">if</span> (project.isAmbitious) &#123;
              </div>
              <div className="pl-4 text-[#00E5FF]">
                engineer.collaborate(project);
              </div>
              <div>&#125;</div>
            </div>
          </div>

          {/* Profile Card with Glass Emergence Effect */}
          <div
            onClick={() => setIsImageOpen(true)}
            className="relative rounded-[1.75rem] glass-panel bg-[#101010]/80 p-5 flex items-center gap-5 cursor-pointer group border border-white/10 hover:border-[#00E5FF]/40 hover:shadow-[0_0_30px_rgba(0,229,255,0.25)] transition-all duration-500"
          >

            <div className="flex-1">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#00E5FF]">
                mrafiqdot825
              </span>
              <h3 className="font-heading text-xl font-bold text-white mt-0.5">
                Muhammad Rafiq
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mt-1">
                Engineering intelligent AI agent architectures and responsive mobile & web interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Grid */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
        {site.stats.map((stat, idx) => {
          const Icon = [AppleBriefcase, AppleCpu, AppleAward, AppleSparkles][idx] || AppleAward;
          return (
            <div
              key={stat.label}
              className="glass-panel rounded-[1.25rem] p-5 hover:-translate-y-1 hover:border-[#7C3AED]/50 transition-all duration-300 select-none group bg-[#101010]/80"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#00E5FF] group-hover:text-white transition-colors">
                  {stat.value}
                </span>
                <Icon className="h-5 w-5 text-[#7C3AED] group-hover:scale-110 transition-transform" />
              </div>
              <p className="mt-2.5 text-[11px] font-mono uppercase tracking-wider text-text-secondary leading-tight">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Profile Image Modal */}
      <Modal
        isOpen={isImageOpen}
        onClose={() => setIsImageOpen(false)}
        title="Muhammad Rafiq"
      >
        <div className="relative overflow-hidden rounded-[16px] bg-[#050505] border border-white/10 w-full max-w-sm sm:max-w-md mx-auto shadow-2xl p-2 flex items-center justify-center">
          <Image
            src="/profile.png"
            alt={site.name}
            width={900}
            height={900}
            priority
            className="w-full h-auto max-h-[70vh] object-contain rounded-[12px]"
          />
        </div>
      </Modal>
    </Section>
  );
};

export default HeroSection;
