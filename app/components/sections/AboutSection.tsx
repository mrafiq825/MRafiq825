import {
  FiArrowUpRight,
  FiCpu,
  FiCode,
  FiTrendingUp,
  FiUser,
  FiZap,
} from "react-icons/fi";
import Section from "~/components/layout/Section";
import Badge from "~/components/ui/Badge";
import { site } from "~/data/site";
import { ICON_CLASS } from "~/lib/constants";

const STRENGTHS = [
  {
    title: "FULL-STACK",
    description:
      "End-to-end web and mobile solutions from concept to deployment.",
    icon: FiCode,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "SDET",
    description:
      "Quality-first test automation and reliability-focused engineering.",
    icon: FiTrendingUp,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "DEVOPS",
    description:
      "Seamless CI/CD pipelines, cloud deployment, and observability.",
    icon: FiZap,
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "AI/ML",
    description:
      "Intelligent automation, AI integrations, and practical ML insights.",
    icon: FiCpu,
    gradient: "from-emerald-500/20 to-green-500/20",
  },
];

const AboutSection = () => {
  return (
    <Section
      id="about"
      title={
        <>
          <FiUser className={`${ICON_CLASS.section} text-sky-400`} />
          Why Choose Me
        </>
      }
      description="A blend of product thinking, engineering craft, and delivery discipline that turns ideas into polished digital experiences."
      className="border-t border-slate-800"
    >
      <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="relative overflow-hidden rounded-4xl border border-slate-800/80 bg-linear-to-br from-slate-900/95 via-slate-900/85 to-slate-950/95 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.45)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative z-10 flex flex-wrap items-center gap-3">
            <Badge>Passion-Driven Developer</Badge>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-200">
              <span className="h-2 w-2 rounded-full bg-sky-300" />
              Product-minded, delivery-focused
            </span>
          </div>

          <div className="relative z-10 mt-6 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Why I build the way I do
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
              Always learning, always shipping work that feels intentional.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              I work at the intersection of product, engineering, and
              performance to build software that drives measurable outcomes.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              My focus spans full-stack web systems, test quality, deployment
              workflows, and AI-powered product experiences, with a strong eye
              for usability and maintainability.
            </p>
          </div>

          <div className="relative z-10 mt-8 grid gap-3 sm:grid-cols-3">
            {[
              {
                label: "Build",
                value: "Scalable systems",
                icon: FiCode,
                tone: "from-sky-500/20 to-cyan-500/20",
              },
              {
                label: "Verify",
                value: "Reliable delivery",
                icon: FiTrendingUp,
                tone: "from-emerald-500/20 to-teal-500/20",
              },
              {
                label: "Automate",
                value: "Smarter workflows",
                icon: FiZap,
                tone: "from-amber-500/20 to-orange-500/20",
              },
            ].map((item) => {
              const ItemIcon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`rounded-2xl border border-slate-700/80 bg-linear-to-br ${item.tone} p-4 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5`}
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-white/10 bg-slate-950/60 p-2 text-sky-200 shadow-inner shadow-slate-950/30">
                      <ItemIcon className={ICON_CLASS.action} />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-100">
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
          <div className="rounded-4xl border border-slate-800 bg-slate-900/70 p-6 shadow-[0_22px_60px_rgba(2,6,23,0.32)] backdrop-blur-sm sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Tech Arsenal
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-50">
                  Tools I reach for every week
                </h3>
              </div>
              <div className="rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-200">
                Always evolving
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {site.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-700/80 bg-linear-to-r from-slate-950/80 to-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Approach
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
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
                className="group rounded-2xl border border-slate-800 bg-linear-to-br from-slate-900/90 to-slate-950/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/25 hover:shadow-[0_18px_45px_rgba(2,6,23,0.35)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                      0{index + 1}
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-300">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-3xl font-bold text-slate-50">
                      {stat.value}
                    </p>
                  </div>
                  <FiArrowUpRight
                    className={`${ICON_CLASS.action} mt-1 text-sky-300`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Core Competencies
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-100 sm:text-xl">
              The areas where I add the most value
            </h3>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-400 md:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Built for product teams that care about quality
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {STRENGTHS.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-linear-to-br ${item.gradient} p-6 shadow-[0_14px_50px_rgba(2,6,23,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-600/80 hover:shadow-[0_18px_60px_rgba(2,6,23,0.34)]`}
              >
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/0 via-white/0 to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-3 text-sky-200 shadow-inner shadow-slate-950/30">
                      <IconComponent className={ICON_CLASS.section} />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-8 flex-1">
                    <h4 className="text-sm font-bold tracking-[0.22em] text-slate-50 transition-colors group-hover:text-white">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300 transition-colors group-hover:text-slate-200">
                      {item.description}
                    </p>
                  </div>

                  <div
                    className={`mt-6 h-px w-full bg-linear-to-r ${item.gradient}`}
                  />
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
