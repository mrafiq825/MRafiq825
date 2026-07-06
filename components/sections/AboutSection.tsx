import * as React from "react";
import {
  AppleCode,
  AppleZap,
  AppleSparkles,
  AppleAward,
  AppleMapPin,
  AppleCalendar,
  AppleCheckCircle,
  AppleMessage,
} from "@/components/ui/AppleIcons";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { education } from "@/data/education";

// Custom inline SVG Icons matching AppleIconProps conventions
const AppleMonitor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const AppleReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const AppleServerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="2.5" />
    <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="2.5" />
    <line x1="2" y1="10" x2="22" y2="10" strokeDasharray="3 3" opacity="0.3" />
  </svg>
);

const AppleCloudIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17.5 19A5.5 5.5 0 0 0 18 8.02a7.5 7.5 0 0 0-14.56 2.18A5.5 5.5 0 0 0 4.5 21h13a.5.5 0 0 0 0-2z" />
  </svg>
);

const AppleBoxIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const AppleFigmaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5zM5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5zM5 19.5A3.5 3.5 0 0 1 8.5 16H12v4.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 5 19.5zM12 2h3.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5H12V2zM19 12.5a3.5 3.5 0 0 1-3.5 3.5H12v-7h3.5a3.5 3.5 0 0 1 3.5 3.5z" />
  </svg>
);

const Apple3dIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);

const AppleShieldIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

// Map dynamic skill names to corresponding custom icons
const getSkillIcon = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes("typescript") || lower.includes("javascript")) return AppleCode;
  if (lower.includes("react") || lower.includes("next")) return AppleReactIcon;
  if (lower.includes("node") || lower.includes("express") || lower.includes("api") || lower.includes("restful")) return AppleServerIcon;
  if (lower.includes("aws") || lower.includes("azure") || lower.includes("cloud")) return AppleCloudIcon;
  if (lower.includes("docker") || lower.includes("k8s") || lower.includes("sql") || lower.includes("mongo")) return AppleBoxIcon;
  if (lower.includes("figma") || lower.includes("design")) return AppleFigmaIcon;
  if (lower.includes("three") || lower.includes("webgl")) return Apple3dIcon;
  if (lower.includes("performance") || lower.includes("ci/cd") || lower.includes("zap") || lower.includes("git") || lower.includes("playwright")) return AppleZap;
  return AppleShieldIcon;
};

const AboutSection = () => {
  // Extract clean uppercase title from site role
  const displayRole = (site.role.split("|")[0] || "Full-Stack Software Engineer")
    .trim()
    .toUpperCase();

  // Extract years of experience stat
  const yearsExp = site.stats.find((s) => s.label.toLowerCase().includes("years"))
    ?.value || "3+";

  return (
    <Section id="about" className="bg-transparent">
      {/* 1. Introduction Card / Hero Section */}
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center pt-8 pb-12">
        <div className="flex flex-col items-start text-left">
          <span className="inline-flex items-center font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-accent-700 bg-accent-50/10 border border-accent-100 px-3.5 py-1.5 rounded-full select-none">
            {displayRole}
          </span>
          <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.12]">
            Crafting <span className="text-accent-600">Scalable</span> <br />
            Digital Ecosystems.
          </h1>
          <p className="mt-8 text-base text-text-secondary leading-relaxed font-body max-w-xl">
            {site.intro}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3 text-sm font-semibold tracking-wider uppercase text-text-primary">
              <AppleMonitor className="h-5.5 w-5.5 text-accent-600" />
              <span>Full-Stack Expert</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold tracking-wider uppercase text-text-primary">
              <AppleSparkles className="h-5.5 w-5.5 text-accent-600" />
              <span>UI Innovator</span>
            </div>
          </div>
        </div>

        {/* Image Card Frame */}
        <div className="relative group max-w-sm mx-auto lg:mr-0 w-full">
          {/* Subtle glow behind card */}
          <div className="absolute -inset-2.5 rounded-[24px] bg-accent-600/10 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000" />

          <div className="relative overflow-hidden rounded-[20px] border border-border-default bg-bg-surface aspect-square shadow-2xl">
            <img
              src="/about.jpeg"
              alt="Muhammad Rafiq"
              className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] group-hover:scale-103 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Overlapping Overlay Stat Badge */}
          <div className="absolute -bottom-5 -left-5 rounded-2xl glass-panel p-4 flex items-center gap-4.5 shadow-xl border border-border-hover min-w-[190px]">
            <div className="text-4xl font-extrabold tracking-tight text-accent-700 font-heading">
              {yearsExp}
            </div>
            <div className="h-8 w-px bg-border-default" />
            <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-text-muted leading-tight">
              Years of<br />Experience
            </div>
          </div>
        </div>
      </div>

      {/* 2. Academic Foundation / Education Credentials */}
      <div className="mt-28 mb-12 flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 border-b border-border-default/50 pb-4">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary">
          Academic <span className="text-accent-600">Foundation</span>
        </h2>
        <span className="font-mono text-[11px] tracking-widest text-text-muted uppercase">
          Education & Qualifications
        </span>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {education.map((item) => (
          <div
            key={item.id}
            className="glass-panel rounded-[20px] p-6 sm:p-8 relative overflow-hidden group"
          >
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pb-6 border-b border-border-default/30">
              <div className="space-y-3.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider bg-accent-50/15 border border-accent-100 px-2.5 py-1 rounded-[6px] text-accent-700">
                    <AppleAward className="h-3.5 w-3.5 text-accent-600" />
                    {item.degree}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-primary">
                    {item.institution}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-5 text-xs text-text-secondary font-medium">
                  <span className="flex items-center gap-1.5">
                    <AppleMapPin className="h-4 w-4 text-accent-600/80" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <AppleCalendar className="h-4 w-4 text-accent-600/80" />
                    {item.period}
                  </span>
                </div>
              </div>
              {/* Year highlight badge (desktop only) */}
              <div className="hidden sm:flex shrink-0 flex-col items-center justify-center rounded-2xl glass-panel-inset px-6 py-4.5 text-center min-w-[120px]">
                <span className="text-3xl font-extrabold leading-none text-accent-700 font-heading">
                  {item.endYear}
                </span>
                <span className="mt-1.5 text-[9px] font-bold uppercase tracking-widest text-text-muted">
                  Graduated
                </span>
              </div>
            </div>

            {/* Body content (Highlights & Courses) */}
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {/* Highlights */}
              <div>
                <div className="mb-4.5 flex items-center gap-2">
                  <AppleCheckCircle className="h-5 w-5 text-accent-600" />
                  <h4 className="text-xs font-bold uppercase tracking-widest text-text-primary font-mono">
                    Key Highlights
                  </h4>
                </div>
                <ul className="space-y-3 text-[13.5px] leading-relaxed text-text-secondary">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Courses */}
              <div>
                <div className="mb-4.5 flex items-center gap-2">
                  <AppleCode className="h-5 w-5 text-accent-600" />
                  <h4 className="text-xs font-bold uppercase tracking-widest text-text-primary font-mono">
                    Key Coursework
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.courses.map((course) => (
                    <span
                      key={course}
                      className="inline-flex items-center font-mono text-[9px] uppercase tracking-wider glass-badge px-2.5 py-1 rounded-[6px] font-semibold text-accent-700"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Technical Mastery Skill Grid */}
      <div className="mt-28 mb-12 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary">
          Technical <span className="text-accent-600">Mastery</span>
        </h2>
        <p className="mt-3 text-sm text-text-secondary max-w-md mx-auto leading-relaxed font-body">
          A curated selection of the tools and technologies I use to bring vision to
          life.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto py-4">
        {site.skills.map((skillName) => {
          const IconComponent = getSkillIcon(skillName);

          return (
            <div
              key={skillName}
              className="flex items-center gap-3.5 px-5 py-3 rounded-[14px] border border-border-default bg-bg-surface/50 hover:bg-bg-surface-hover hover:border-accent-600/30 transition-all duration-300 hover:-translate-y-0.5 shadow-sm group select-none"
            >
              <IconComponent className="w-4.5 h-4.5 text-accent-600 group-hover:text-accent-700 transition-colors" />
              <span className="font-mono text-xs uppercase tracking-[0.14em] font-semibold text-text-primary">
                {skillName}
              </span>
            </div>
          );
        })}
      </div>

      {/* 4. Ready to Collaborate CTA Card */}
      <div className="mt-28">
        <div className="relative overflow-hidden rounded-[24px] glass-panel p-8 sm:p-12 lg:p-16 text-center">
          {/* Decorative ambient background glows */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-600/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-accent-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-accent-700/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
              Ready to <span className="text-accent-600">Collaborate?</span>
            </h2>
            <p className="mt-4 text-[15px] sm:text-base text-text-secondary leading-relaxed font-body">
              I am currently open to high-impact projects and architectural
              consulting for forward-thinking companies. Let's build something
              exceptional together.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                href="#contact"
                variant="metal"
                dark
                icon={<AppleMessage className="h-4.5 w-4.5" />}
                size="md"
              >
                Send a Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
