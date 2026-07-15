import Image from "next/image";
import * as React from "react";
import dynamic from "next/dynamic";
import {
  AppleCode,
  AppleZap,
  AppleSparkles,
  AppleMapPin,
  AppleCalendar,
  AppleCheckCircle,
  AppleMessage,
  AppleMonitor,
  AppleReactIcon,
  AppleServerIcon,
  AppleCloudIcon,
  AppleBoxIcon,
  AppleFigmaIcon,
  Apple3dIcon,
  AppleShieldIcon,
} from "@/components/ui/AppleIcons";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { education } from "@/data/education";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-[160px]">
        <div className="animate-pulse flex space-x-2">
          <div className="h-3 w-3 bg-accent-600/40 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-3 w-3 bg-accent-600/40 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-3 w-3 bg-accent-600/40 rounded-full animate-bounce"></div>
        </div>
      </div>
    ),
  }
);


// Map dynamic skill names to corresponding custom icons
const getSkillIcon = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes("typescript") || lower.includes("javascript"))
    return AppleCode;
  if (lower.includes("react") || lower.includes("next")) return AppleReactIcon;
  if (
    lower.includes("node") ||
    lower.includes("express") ||
    lower.includes("api") ||
    lower.includes("restful")
  )
    return AppleServerIcon;
  if (
    lower.includes("aws") ||
    lower.includes("azure") ||
    lower.includes("cloud")
  )
    return AppleCloudIcon;
  if (
    lower.includes("docker") ||
    lower.includes("k8s") ||
    lower.includes("sql") ||
    lower.includes("mongo")
  )
    return AppleBoxIcon;
  if (lower.includes("figma") || lower.includes("design"))
    return AppleFigmaIcon;
  if (lower.includes("three") || lower.includes("webgl")) return Apple3dIcon;
  if (
    lower.includes("performance") ||
    lower.includes("ci/cd") ||
    lower.includes("zap") ||
    lower.includes("git") ||
    lower.includes("playwright")
  )
    return AppleZap;
  return AppleShieldIcon;
};

// Skill categories configuration with styling tokens
const SKILL_CATEGORIES = [
  {
    id: "languages",
    title: "Programming Languages",
    description:
      "The foundational syntax and type systems used to write clean, maintainable, and type-safe source code.",
    icon: AppleCode,
    skills: ["javascript", "python"],
    theme: {
      accent: "text-sky-400",
      glowBg: "from-sky-600/10 via-transparent to-transparent",
      borderColor: "hover:border-sky-500/30",
      badgeHover:
        "hover:bg-sky-500/10 hover:border-sky-500/30 hover:text-sky-300",
    },
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description:
      "Creating responsive, fast, and visually beautiful client-side applications.",
    icon: AppleReactIcon,
    skills: ["react.js", "next.js", "react native"],
    theme: {
      accent: "text-blue-400",
      glowBg: "from-blue-600/10 via-transparent to-transparent",
      borderColor: "hover:border-blue-500/30",
      badgeHover:
        "hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-300",
    },
  },
  {
    id: "backend",
    title: "Backend & Systems",
    description:
      "Architecting robust servers, scalable REST/GraphQL APIs, and microservices.",
    icon: AppleServerIcon,
    skills: ["node.js", "express.js", "nestjs", "fastapi", "restful apis"],
    theme: {
      accent: "text-violet-400",
      glowBg: "from-violet-600/10 via-transparent to-transparent",
      borderColor: "hover:border-violet-500/30",
      badgeHover:
        "hover:bg-violet-500/10 hover:border-violet-500/30 hover:text-violet-300",
    },
  },
  {
    id: "databases",
    title: "Databases & BaaS",
    description:
      "Modeling schemas, query tuning, and managing persistent cloud data layers.",
    icon: AppleBoxIcon,
    skills: ["sql", "mongodb", "postgresql", "supabase", "firebase",],
    theme: {
      accent: "text-emerald-400",
      glowBg: "from-emerald-600/10 via-transparent to-transparent",
      borderColor: "hover:border-emerald-500/30",
      badgeHover:
        "hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-300",
    },
  },
  {
    id: "devops",
    title: "DevOps & Tooling",
    description:
      "Automating integration pipelines, container deployment, and quality assurance.",
    icon: AppleZap,
    skills: [
      "docker",
      "ci/cd",
      "github actions",
      "playwright",
      "git",
      "postman",
    ],
    theme: {
      accent: "text-amber-400",
      glowBg: "from-amber-600/10 via-transparent to-transparent",
      borderColor: "hover:border-amber-500/30",
      badgeHover:
        "hover:bg-amber-500/10 hover:border-amber-500/30 hover:text-amber-300",
    },
  },
];

const AboutSection = () => {
  const [selectedYear, setSelectedYear] = React.useState<number | "last">("last");

  // Group site skills dynamically
  const categorizedGroups = SKILL_CATEGORIES.map((category) => {
    const matchedSkills = site.skills.filter((skill) =>
      category.skills.includes(skill.toLowerCase()),
    );
    return {
      ...category,
      matchedSkills,
    };
  });

  // Collect any skills in site.skills that were not matched by any category definition
  const allCategorySkillsLower = SKILL_CATEGORIES.flatMap((c) => c.skills);
  const unmatchedSkills = site.skills.filter(
    (skill) => !allCategorySkillsLower.includes(skill.toLowerCase()),
  );

  // Add a fallback group if there are unmatched skills
  const finalGroups = [...categorizedGroups];
  if (unmatchedSkills.length > 0) {
    finalGroups.push({
      id: "other",
      title: "Additional Technologies",
      description:
        "Other tools, libraries, and auxiliary packages in my development utility belt.",
      icon: AppleShieldIcon,
      skills: unmatchedSkills.map((s) => s.toLowerCase()),
      matchedSkills: unmatchedSkills,
      theme: {
        accent: "text-text-secondary",
        glowBg: "from-neutral-600/10 via-transparent to-transparent",
        borderColor: "hover:border-neutral-500/30",
        badgeHover:
          "hover:bg-neutral-500/10 hover:border-neutral-500/30 hover:text-neutral-300",
      },
    });
  }

  // Extract clean uppercase title from site role
  const displayRole = (
    site.role.split("|")[0] || "Full-Stack Software Engineer"
  )
    .trim()
    .toUpperCase();

  // Extract years of experience stat
  const yearsExp =
    site.stats.find((s) => s.label.toLowerCase().includes("years"))?.value ||
    "3+";

  return (
    <Section id="about" className="bg-transparent">
      {/* 1. Introduction Card / Hero Section */}
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center pt-5 pb-12">
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
          <div className="relative overflow-hidden rounded-[20px] border border-border-default bg-bg-surface aspect-square shadow-2xl p-1.5">
            <Image
              src="/profile.png"
              alt="Muhammad Rafiq"
              width={900}
              height={900}
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="w-full h-full object-contain rounded-[16px] grayscale-[15%] contrast-[1.05] group-hover:scale-103 transition-transform duration-700 ease-out"
            />
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
      <div id="tech-stack" className="mt-28 mb-12 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary">
          Technical <span className="text-accent-600">Mastery</span>
        </h2>
        <p className="mt-3 text-sm text-text-secondary max-w-md mx-auto leading-relaxed font-body">
          A curated selection of the tools and technologies I use to bring
          vision to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto py-4 px-4 sm:px-0">
        {finalGroups.map((group) => {
          const CategoryIcon = group.icon;
          return (
            <div
              key={group.id}
              className={`glass-panel rounded-[22px] p-6 sm:p-8 relative overflow-hidden group hover:bg-bg-surface-hover/60 ${group.theme.borderColor} transition-all duration-500 hover:-translate-y-1 shadow-md ${group.id === "languages" ? "md:col-span-2" : ""}`}
            >
              {/* Radial gradient glow in top corner of card, faint and premium */}
              <div
                className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${group.theme.glowBg} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
              />

              {/* Card Header */}
              <div className="flex items-center gap-4.5 mb-4 relative z-10">
                <div
                  className={`p-3.5 rounded-[16px] bg-bg-surface border border-border-default/50 ${group.theme.accent} transition-transform duration-500 group-hover:scale-105`}
                >
                  <CategoryIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-text-primary tracking-tight">
                    {group.title}
                  </h3>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
                    {group.matchedSkills.length} Technologies
                  </span>
                </div>
              </div>

              {/* Card Description */}
              <p className="text-[13px] leading-relaxed text-text-secondary font-body mb-6 relative z-10">
                {group.description}
              </p>

              {/* Skills grid/flex list */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {group.matchedSkills.map((skillName) => {
                  const SkillIcon = getSkillIcon(skillName);
                  return (
                    <div
                      key={skillName}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-[10px] border border-border-default bg-bg-surface/30 ${group.theme.badgeHover} transition-all duration-300 select-none group/badge`}
                    >
                      <SkillIcon className="w-3.5 h-3.5 text-text-muted group-hover/badge:text-accent-600 transition-colors" />
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] font-semibold text-text-secondary group-hover/badge:text-text-primary">
                        {skillName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3.5 GitHub Contributions Calendar */}
      <div id="github-activity" className="mt-28 mb-12 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary">
          Proof of <span className="text-accent-600">Work</span>
        </h2>
        <p className="mt-3 text-sm text-text-secondary max-w-md mx-auto leading-relaxed font-body">
          A live look at my contributions and commit activity on GitHub.
        </p>
      </div>

      <div className="max-w-5xl mx-auto py-4 px-4 sm:px-0">
        <div className="glass-panel rounded-[22px] p-6 sm:p-8 relative overflow-hidden group hover:bg-bg-surface-hover/60 transition-all duration-500 shadow-md">
          {/* Subtle glow */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-accent-600/10 via-transparent to-transparent rounded-full blur-2xl opacity-60 pointer-events-none" />

          {/* GitHub Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center gap-4.5">
              <div className="p-3.5 rounded-[16px] bg-bg-surface border border-border-default/50 text-accent-600">
                <AppleCode className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-heading text-xl font-bold text-text-primary tracking-tight">
                  mrafiq825
                </h3>
                <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
                  GitHub Profile
                </span>
              </div>
            </div>
            <div>
              <Button
                href="https://github.com/mrafiq825"
                variant="metal"
                dark
                size="sm"
                icon={<AppleZap className="h-4 w-4" />}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </Button>
            </div>
          </div>

          {/* Year Selector */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-border-default/30 pb-4 relative z-10 justify-start items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted mr-2">
              Filter by Year:
            </span>
            {(['last', 2026, 2025, 2024, 2023] as const).map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-3 py-1.5 rounded-[8px] font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${selectedYear === year
                  ? 'bg-accent-600/20 text-accent-700 border border-accent-600/50'
                  : 'bg-bg-surface border border-border-default text-text-secondary hover:text-text-primary hover:border-border-hover'
                  }`}
              >
                {year === 'last' ? 'Last Year' : year}
              </button>
            ))}
          </div>

          {/* Calendar Wrapper */}
          <div className="overflow-x-auto flex justify-center py-2 min-h-[160px] relative z-10">
            <div className="min-w-[800px] sm:min-w-0 w-full flex justify-center">
              <GitHubCalendar
                username="mrafiq825"
                year={selectedYear}
                colorScheme="dark"
                theme={{
                  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
                labels={{
                  totalCount: '{{count}} contributions in the last year',
                }}
              />
            </div>
          </div>
        </div>
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
