import {
  FiBriefcase,
  FiCheckCircle,
  FiCode,
  FiArrowRight,
} from "react-icons/fi";

import Section from "~/components/layout/Section";
import Badge from "~/components/ui/Badge";
import Card from "~/components/ui/Card";
import { experience } from "~/data/experience";
import { ICON_CLASS } from "~/lib/constants";

const ROLE_COLORS: Record<
  string,
  { gradient: string; badge: string; icon: string }
> = {
  default: {
    gradient: "from-blue-500/20 to-cyan-500/20",
    badge: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    icon: "text-blue-400",
  },
};

const getRoleColors = (role: string) => {
  return ROLE_COLORS.default;
};

const ExperienceSection = () => {
  return (
    <Section
      id="experience"
      title={
        <>
          <FiBriefcase className={`${ICON_CLASS.section} text-sky-400`} />
          Professional Experience
        </>
      }
      description="A journey through roles and impactful work spanning full-stack development, AI/ML, SDET, and DevOps."
      className="border-t border-slate-800"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {experience.map((item) => {
          const colors = getRoleColors(item.role);

          return (
            <Card
              key={item.id}
              className="group h-full overflow-hidden border-slate-800/80 bg-slate-900/85 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-[0_18px_40px_rgba(2,132,199,0.12)]"
            >
              <div
                className={`-mx-6 -mt-6 h-1 bg-linear-to-r ${colors.gradient}`}
              />

              <div className="mt-6 flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <FiCode className={`w-5 h-5 ${colors.icon}`} />
                    <Badge>{item.mode}</Badge>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-50 transition-colors group-hover:text-white">
                      {item.role}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                      <p className="font-semibold text-slate-200">
                        {item.company}
                      </p>
                      <FiArrowRight className="h-4 w-4 text-slate-500" />
                      <Badge>{item.period}</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <FiCheckCircle className="h-5 w-5 text-emerald-400" />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-100">
                      Key Responsibilities
                    </h4>
                  </div>
                  <ul className="space-y-3 text-sm">
                    {item.responsibilities.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-linear-to-r from-sky-400 to-cyan-400 transition-all" />
                        <span className="leading-relaxed text-slate-300 transition-colors group-hover:text-slate-100">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default ExperienceSection;
