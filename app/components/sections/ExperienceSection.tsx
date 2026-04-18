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
  // Add more specific roles if needed
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
      <div className="space-y-6">
        {/* Timeline Visual */}
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50" />

          <div className="space-y-6 pl-16">
            {experience.map((item, index) => {
              const colors = getRoleColors(item.role);
              return (
                <div key={item.id} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-14 top-2 flex items-center gap-3">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute h-4 w-4 rounded-full bg-linear-to-r from-blue-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300" />
                      <div className="h-2 w-2 rounded-full bg-slate-900" />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <Card className="group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all duration-300">
                    {/* Header with gradient background */}
                    <div
                      className={`-mx-6 -mt-6 mb-6 bg-linear-to-r ${colors.gradient} px-6 py-6 rounded-t-xl border-b border-slate-700/50`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <FiCode className={`w-5 h-5 ${colors.icon}`} />
                            <Badge>{item.mode}</Badge>
                          </div>
                          <h3 className="text-2xl font-bold bg-linear-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent group-hover:to-white transition-all">
                            {item.role}
                          </h3>
                          <div className="mt-2 flex items-center gap-2">
                            <p className="text-sm font-semibold text-slate-200">
                              {item.company}
                            </p>
                            <FiArrowRight className="w-4 h-4 text-slate-500" />
                            <Badge>{item.period}</Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <FiCheckCircle className="w-5 h-5 text-emerald-400" />
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-100">
                          Key Responsibilities
                        </h4>
                      </div>
                      <ul className="space-y-3 text-sm">
                        {item.responsibilities.map((point, idx) => (
                          <li
                            key={point}
                            className="group/item flex gap-3 items-start"
                          >
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-linear-to-r from-blue-400 to-cyan-400 shrink-0 group-hover/item:shadow-lg group-hover/item:shadow-blue-400/50 transition-all" />
                            <span className="text-slate-300 group-hover/item:text-slate-100 transition-colors leading-relaxed">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="border-t border-slate-700/50 pt-6">
                      <div className="flex items-center gap-2 mb-4">
                        <FiCode className="w-5 h-5 text-purple-400" />
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-100">
                          Tech Stack
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <div
                            key={tech}
                            className="group/tech px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group-hover/tech:shadow-lg group-hover/tech:shadow-purple-500/20"
                          >
                            <span className="text-xs font-semibold text-slate-300 group-hover/tech:text-purple-300 transition-colors">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
