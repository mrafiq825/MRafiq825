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
  },
  {
    title: "SDET",
    description:
      "Quality-first test automation and reliability-focused engineering.",
    icon: FiTrendingUp,
  },
  {
    title: "DEVOPS",
    description:
      "Seamless CI/CD pipelines, cloud deployment, and observability.",
    icon: FiZap,
  },
  {
    title: "AI/ML",
    description:
      "Intelligent automation, AI integrations, and practical ML insights.",
    icon: FiCpu,
  },
];

const AboutSection = () => {
  return (
    <Section
      id="about"
      title={
        <>
          <FiUser className={`${ICON_CLASS.section} text-accent-600`} />
          Why Choose Me
        </>
      }
      description="A blend of product thinking, engineering craft, and delivery discipline that turns ideas into polished digital experiences."
      className="border-t border-border-default bg-bg-page"
    >
      <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="relative overflow-hidden rounded-[20px] border border-border-default bg-bg-surface p-6 shadow-sm sm:p-8 lg:p-10">
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
                icon: FiCode,
              },
              {
                label: "Verify",
                value: "Reliable delivery",
                icon: FiTrendingUp,
              },
              {
                label: "Automate",
                value: "Smarter workflows",
                icon: FiZap,
              },
            ].map((item) => {
              const ItemIcon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border-default bg-bg-surface-hover p-4 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-border-default bg-bg-surface p-2 text-accent-700 shadow-sm">
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
          <div className="rounded-[20px] border border-border-default bg-bg-surface p-6 shadow-sm sm:p-7">
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

            <div className="mt-6 rounded-2xl border border-border-default bg-bg-surface-hover p-4">
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
                className="group rounded-2xl border border-border-default bg-bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-border-hover hover:shadow-md"
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
                  <FiArrowUpRight
                    className={`${ICON_CLASS.action} mt-1 text-accent-600`}
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
                className="group relative overflow-hidden rounded-[20px] border border-border-default bg-bg-surface p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-border-hover hover:shadow-md"
              >
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl border border-border-default bg-bg-surface-hover p-3 text-accent-700 shadow-sm">
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
