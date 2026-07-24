"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AppleCpu } from "@/components/ui/AppleIcons";

type TechItem = {
  name: string;
  category: string;
  years: string;
  projectsCount: string;
  description: string;
  radius: number;
  speed: number;
  color: string;
};

const TECH_ORBITS: TechItem[] = [
  { name: "React", category: "Frontend", years: "3+ Yrs", projectsCount: "25+ Proj", description: "UI component architecture & state hooks", radius: 120, speed: 22, color: "#00E5FF" },
  { name: "Next.js", category: "Full-Stack", years: "3+ Yrs", projectsCount: "20+ Proj", description: "App Router, SSR, SSG & Server Actions", radius: 170, speed: 28, color: "#7C3AED" },
  { name: "TypeScript", category: "Language", years: "3+ Yrs", projectsCount: "30+ Proj", description: "Strict static typing & interfaces", radius: 220, speed: 34, color: "#3178C6" },
  { name: "Node.js", category: "Backend", years: "3+ Yrs", projectsCount: "20+ Proj", description: "Asynchronous backend microservices", radius: 140, speed: 24, color: "#339933" },
  { name: "Python", category: "AI & Backend", years: "2+ Yrs", projectsCount: "15+ Proj", description: "FastAPI, LangChain & AI model scripts", radius: 190, speed: 30, color: "#3776AB" },
  { name: "FastAPI", category: "Backend", years: "2+ Yrs", projectsCount: "10+ Proj", description: "High-performance Python REST APIs", radius: 240, speed: 36, color: "#009688" },
  { name: "Gemini AI", category: "AI Engineering", years: "2+ Yrs", projectsCount: "8+ Proj", description: "Google Multimodal LLM integration", radius: 160, speed: 26, color: "#8B5CF6" },
  { name: "OpenAI", category: "AI Engineering", years: "2+ Yrs", projectsCount: "10+ Proj", description: "GPT-4o API & function calling", radius: 210, speed: 32, color: "#10A37F" },
  { name: "LangChain", category: "AI Engineering", years: "2+ Yrs", projectsCount: "6+ Proj", description: "Agentic tool orchestration & RAG", radius: 260, speed: 40, color: "#00E5FF" },
  { name: "React Native", category: "Mobile", years: "2+ Yrs", projectsCount: "8+ Proj", description: "Cross-platform iOS & Android apps", radius: 130, speed: 23, color: "#61DAFB" },
  { name: "Docker", category: "DevOps", years: "2+ Yrs", projectsCount: "12+ Proj", description: "Containerization & microservices", radius: 180, speed: 29, color: "#2496ED" },
  { name: "MongoDB", category: "Database", years: "3+ Yrs", projectsCount: "15+ Proj", description: "NoSQL document persistence", radius: 230, speed: 35, color: "#47A248" },
  { name: "PostgreSQL", category: "Database", years: "2+ Yrs", projectsCount: "10+ Proj", description: "Relational database modeling", radius: 270, speed: 42, color: "#4169E1" },
  { name: "Tailwind", category: "Styling", years: "3+ Yrs", projectsCount: "35+ Proj", description: "Utility-first design tokens", radius: 150, speed: 25, color: "#06B6D4" },
  { name: "Framer Motion", category: "Animation", years: "2+ Yrs", projectsCount: "18+ Proj", description: "Fluid UI physics & spring transitions", radius: 200, speed: 31, color: "#E535AB" },
];

export default function TechStackOrbit3D() {
  const [activeTech, setActiveTech] = useState<TechItem | null>(null);

  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden bg-transparent">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 px-4">
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Tech Stack <span className="bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] bg-clip-text text-transparent">Solar Orbit</span>
        </h2>
        <p className="mt-3 text-sm text-text-secondary font-body leading-relaxed">
          Solar system visualization of technologies orbiting Muhammad Rafiq. Hover any node to view experience details.
        </p>
      </div>

      {/* Orbit Canvas Container */}
      <div className="relative w-full max-w-5xl h-[580px] mx-auto flex items-center justify-center">
        {/* Orbital Rings */}
        {[120, 150, 180, 210, 240, 270].map((r) => (
          <div
            key={r}
            className="absolute rounded-full border border-white/5 pointer-events-none"
            style={{
              width: r * 2,
              height: r * 2,
            }}
          />
        ))}

        {/* Center Node: Muhammad Rafiq */}
        <div className="relative z-20 flex flex-col items-center justify-center h-28 w-28 rounded-full border-2 border-[#7C3AED] bg-[#101010] shadow-[0_0_40px_rgba(124,58,237,0.6)] p-2 text-center">
          <div className="h-8 w-8 rounded-full bg-[#7C3AED]/20 flex items-center justify-center text-[#00E5FF] mb-1">
            <AppleCpu className="w-5 h-5" />
          </div>
          <span className="font-heading text-xs font-bold text-white leading-tight">
            Muhammad
          </span>
          <span className="font-mono text-[10px] text-[#00E5FF]">Rafiq</span>
        </div>

        {/* Orbiting Nodes */}
        {TECH_ORBITS.map((tech, idx) => {
          const initialAngle = (idx * (360 / TECH_ORBITS.length)) * (Math.PI / 180);

          return (
            <motion.div
              key={tech.name}
              className="absolute top-1/2 left-1/2 -mt-4 -ml-4 z-10 cursor-pointer"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: tech.speed,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: tech.radius * 2,
                height: tech.radius * 2,
                marginTop: -tech.radius,
                marginLeft: -tech.radius,
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            >
              <div
                onMouseEnter={() => setActiveTech(tech)}
                onMouseLeave={() => setActiveTech(null)}
                className="absolute pointer-events-auto rounded-full px-3 py-1 bg-[#101010]/90 border border-white/10 flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,0,0,0.8)] hover:scale-125 hover:border-[#00E5FF] transition-all duration-300 group"
                style={{
                  top: "0%",
                  left: "50%",
                  transform: `translate(-50%, -50%) rotate(-${initialAngle}rad)`,
                  borderColor: tech.color,
                }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: tech.color }}
                />
                <span className="font-mono text-[11px] font-semibold text-white whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          );
        })}

        {/* Active Tech Hover Modal Card */}
        {activeTech && (
          <div className="absolute bottom-6 z-30 max-w-sm w-full px-4">
            <div className="glass-panel rounded-2xl p-5 border border-[#00E5FF]/40 bg-[#101010]/95 shadow-[0_0_30px_rgba(0,229,255,0.3)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                <div>
                  <h4 className="font-heading text-lg font-bold text-white">
                    {activeTech.name}
                  </h4>
                  <span className="font-mono text-[10px] text-[#00E5FF] uppercase tracking-wider">
                    {activeTech.category}
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-block font-mono text-xs font-bold bg-[#7C3AED]/20 text-[#7C3AED] px-2 py-0.5 rounded-md border border-[#7C3AED]/30">
                    {activeTech.years}
                  </span>
                </div>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed font-body">
                {activeTech.description}
              </p>
              <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-text-muted">
                <span>Projects Delivered:</span>
                <span className="text-white font-bold">{activeTech.projectsCount}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
