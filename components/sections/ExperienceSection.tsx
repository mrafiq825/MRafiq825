import * as React from "react";
import Section from "@/components/layout/Section";
import { experience } from "@/data/experience";

// Colors for alternating timeline dots and glowing drop-shadows
const TIMELINE_COLORS = [
  { dot: "bg-accent-600", glow: "rgba(59, 130, 246, 0.4)" }, // blue
  { dot: "bg-purple-500", glow: "rgba(167, 139, 250, 0.4)" }, // purple
  { dot: "bg-cyan-500", glow: "rgba(34, 211, 238, 0.4)" },   // cyan
];

const ExperienceSection = () => {
  return (
    <Section id="experience" className="bg-transparent pt-12 md:pt-5">
      {/* Professional Journey Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 border-b border-border-default/50 pb-4">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary">
          Professional <span className="text-accent-600">Journey</span>
        </h2>
        <span className="font-mono text-[11px] tracking-widest text-text-muted uppercase">
          A dynamic timeline of roles and engineered impact.
        </span>
      </div>

      <div className="relative max-w-5xl mx-auto py-12 pl-10 md:pl-0">
        {/* Timeline Center Line */}
        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-border-default -translate-x-1/2" />

        <div className="space-y-12 md:space-y-16">
          {experience.map((item, index) => {
            const isEven = index % 2 === 0;
            const colors = TIMELINE_COLORS[index % TIMELINE_COLORS.length];

            return (
              <div
                key={item.id}
                className="relative grid md:grid-cols-2 gap-8 md:gap-24 items-center"
              >
                {/* Timeline Dot Node */}
                <div className="absolute left-[15px] md:left-1/2 top-5 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8">
                  <div
                    className={`h-4 w-4 rounded-full ${colors.dot} border-[3px] border-bg-page ring-1 ring-border-default`}
                    style={{ boxShadow: `0 0 16px 4px ${colors.glow}` }}
                  />
                </div>

                {/* Period/Year - alternating columns on desktop */}
                <div
                  className={`order-1 mb-1 font-mono text-xs font-semibold uppercase tracking-wider md:mb-0 md:flex md:items-center ${isEven
                    ? "md:order-1 md:justify-end md:pr-12 text-accent-700"
                    : "md:order-2 md:justify-start md:pl-12 text-text-secondary"
                    }`}
                >
                  {item.period}
                </div>

                {/* Card Container - alternating columns on desktop */}
                <div
                  className={`order-2 ${isEven ? "md:order-2 md:pl-12" : "md:order-1 md:pr-12"
                    }`}
                >
                  <div
                    className={`glass-panel rounded-[16px] p-6 max-w-[460px] ${isEven ? "mr-auto" : "ml-auto"
                      }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-heading text-lg font-bold text-text-primary">
                        {item.role}
                      </h3>
                      <span className="inline-flex items-center font-mono text-[9px] uppercase tracking-wider border border-border-default bg-bg-surface-hover/30 px-2 py-0.5 rounded-[4px] text-text-muted">
                        {item.mode}
                      </span>
                    </div>
                    <p className="font-mono text-xs font-semibold tracking-wider text-accent-700 mt-1.5">
                      {item.company}
                    </p>

                    {/* Responsibilities list */}
                    <ul className="text-[13px] text-text-secondary mt-3.5 space-y-2 leading-relaxed font-body">
                      {item.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-600/75" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies list with tag capping (Max 4 visible) */}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="mt-5 pt-3.5 border-t border-border-default/30 flex flex-wrap items-center gap-1.5">
                        {item.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center font-mono text-[9px] uppercase tracking-wider glass-badge px-2 py-0.5 rounded-[4px] font-semibold text-accent-700"
                          >
                            {tech}
                          </span>
                        ))}
                        {item.technologies.length > 4 && (
                          <span className="font-mono text-[9px] text-text-muted px-1.5 py-0.5 select-none font-semibold">
                            +{item.technologies.length - 4} MORE
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
