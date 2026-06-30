import {
  AppleArrowUpRight,
  AppleCpu,
  AppleCode,
  AppleTrendingUp,
  AppleUser,
  AppleZap,
  AppleCalendar,
  AppleMapPin,
  AppleAward,
  AppleCheckCircle
} from "~/components/ui/AppleIcons";
import Section from "~/components/layout/Section";
import Badge from "~/components/ui/Badge";
import Card from "~/components/ui/Card";
import { site } from "~/data/site";
import { education } from "~/data/education";
import { ICON_CLASS } from "~/lib/constants";

const STRENGTHS = [
  {
    title: "FULL-STACK",
    description:
      "Architecting and implementing scalable client-server applications and cross-platform mobile apps.",
    icon: AppleCode,
  },
  {
    title: "SDET",
    description:
      "Designing robust end-to-end test automation frameworks to guarantee high-fidelity releases.",
    icon: AppleTrendingUp,
  },
  {
    title: "DEVOPS",
    description:
      "Configuring optimized CI/CD pipelines, containerized deployments, and cloud infrastructure.",
    icon: AppleZap,
  },
  {
    title: "AI/ML",
    description:
      "Integrating state-of-the-art LLMs, AI agents, and custom machine learning inference endpoints.",
    icon: AppleCpu,
  },
];

const AboutSection = () => {
  return (
    <Section
      id="about"
      title={
        <>
          <AppleUser className={`${ICON_CLASS.section} text-accent-600`} />
          About Muhammad Rafiq
        </>
      }
      description="A blend of product thinking, engineering craft, and delivery discipline that turns ideas into polished digital experiences."
      className="border-t border-border-default bg-transparent"
    >
      {/* 1. Academic Foundation at the top */}
      <div>
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-text-muted">
              Academic Foundation
            </p>
            <h3 className="mt-2 font-heading text-lg font-semibold text-text-primary sm:text-xl">
              Education & Qualifications
            </h3>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-border-default bg-bg-surface px-4 py-2 text-xs font-medium text-text-secondary md:flex">
            <span className="h-2 w-2 rounded-full bg-accent-600" />
            Theory combined with hands-on practice
          </div>
        </div>

        <div className="space-y-8">
          {education.map((item) => (
            <Card key={item.id} className="group relative overflow-hidden">
              {/* Header */}
              <div className="relative flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-3">
                  {/* Degree badge + mode indicator */}
                  <div className="flex flex-wrap items-center gap-2">
                    <AppleAward className="h-5 w-5 text-accent-600" />
                    <Badge>{item.degree}</Badge>
                  </div>
                  {/* Institution */}
                  <div>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                      <p className="font-bold text-text-primary text-base">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                  {/* Location & Years */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-text-secondary">
                    <span className="flex items-center gap-1.5">
                      <AppleMapPin className="h-3.5 w-3.5 text-accent-600" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <AppleCalendar className="h-3.5 w-3.5 text-accent-600" />
                      {item.startYear} – {item.endYear}
                    </span>
                  </div>
                </div>
                {/* Year badge — desktop */}
                <div className="hidden shrink-0 flex-col items-center justify-center rounded-2xl glass-panel-inset px-5 py-3 text-center md:flex">
                  <span className="text-3xl font-extrabold leading-none text-accent-700">
                    {item.endYear}
                  </span>
                  <span className="mt-1 text-xs font-medium uppercase tracking-widest text-text-muted">
                    Graduated
                  </span>
                </div>
              </div>
              {/* Body */}
              <div className="relative mt-8 grid gap-8 md:grid-cols-2">
                {/* Highlights */}
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <AppleCheckCircle className="h-5 w-5 text-accent-600" />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-text-primary">
                      Highlights
                    </h4>
                  </div>
                  <ul className="space-y-3 text-sm">
                    {item.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-600" />
                        <span className="leading-relaxed text-text-secondary transition-colors group-hover:text-text-primary">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Courses */}
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <AppleCode className="h-5 w-5 text-accent-600" />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-text-primary">
                      Key Courses
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.courses.map((course) => (
                      <Badge key={course}>{course}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* 2. About Story / Tech Arsenal / Stats Grid in the middle */}
      <div className="mt-16 pt-12 border-t border-border-default/50">
        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[20px] glass-panel p-6 sm:p-8 lg:p-10">
            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <Badge>Passion-Driven Developer</Badge>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-100 bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
                <span className="h-2 w-2 rounded-full bg-accent-600" />
                Product-minded, delivery-focused
              </span>
            </div>

            <div className="relative z-10 mt-6 max-w-2xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-text-muted">
                Why I build the way I do
              </p>
              <h3 className="mt-3 font-heading text-h3 font-bold tracking-tight text-text-primary">
                Always learning, always shipping work that feels intentional.
              </h3>
              <p className="mt-5 text-base leading-relaxed text-text-secondary">
                I work at the intersection of product, engineering, and
                performance to build software that drives measurable outcomes.
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                My focus spans Full-Stack applications, test quality, deployment
                workflows, and AI-powered product experiences, with a strong eye
                for usability and maintainability.
              </p>
            </div>

            <div className="relative z-10 mt-8 grid gap-3 sm:grid-cols-3">
              {[
                {
                  label: "Build",
                  value: "Scalable systems",
                  icon: AppleCode,
                },
                {
                  label: "Verify",
                  value: "Reliable delivery",
                  icon: AppleTrendingUp,
                },
                {
                  label: "Automate",
                  value: "Smarter workflows",
                  icon: AppleZap,
                },
              ].map((item) => {
                const ItemIcon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl glass-panel-inset p-4 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl border border-border-default/50 bg-white/5 p-2 text-accent-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                        <ItemIcon className={ICON_CLASS.action} />
                      </div>
                      <div>
                        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-bold text-text-primary">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[20px] glass-panel p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-text-muted">
                    Tech Arsenal
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-bold text-text-primary">
                    Tools I reach for every week
                  </h3>
                </div>
                <div className="rounded-full border border-accent-100 bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
                  Always evolving
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {site.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>

              <div className="mt-6 rounded-2xl glass-panel-inset p-4">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                  Approach
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  I prefer lean architectures, clear interfaces, and repeatable
                  delivery practices that keep products fast to ship and easy to
                  grow.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {site.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group rounded-2xl glass-panel glass-panel-hover p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-text-muted">
                        0{index + 1}
                      </p>
                      <p className="mt-2 text-sm font-medium text-text-secondary">
                        {stat.label}
                      </p>
                      <p className="mt-2 font-heading text-3xl font-bold text-text-primary">
                        {stat.value}
                      </p>
                    </div>
                    <AppleArrowUpRight
                      className={`${ICON_CLASS.action} mt-1 text-accent-600`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Core Competencies at the bottom */}
      <div className="mt-16 pt-12 border-t border-border-default/50">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-text-muted">
              Core Competencies
            </p>
            <h3 className="mt-2 font-heading text-lg font-semibold text-text-primary sm:text-xl">
              The areas where I add the most value
            </h3>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-border-default bg-bg-surface px-4 py-2 text-xs font-medium text-text-secondary md:flex">
            <span className="h-2 w-2 rounded-full bg-accent-600" />
            Built for product teams that care about quality
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {STRENGTHS.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[20px] glass-panel glass-panel-hover p-6"
              >
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl glass-panel-inset p-3 text-accent-700 shadow-sm">
                      <IconComponent className={ICON_CLASS.section} />
                    </div>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-text-muted">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-8 flex-1">
                    <h4 className="font-mono text-sm font-bold tracking-[0.22em] text-text-primary">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 h-px w-full bg-border-default" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
