import { FiBriefcase } from "react-icons/fi";

import Section from "~/components/layout/Section";
import Badge from "~/components/ui/Badge";
import Card from "~/components/ui/Card";
import { experience } from "~/data/experience";
import { ICON_CLASS } from "~/lib/constants";

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
      <div className="grid gap-5">
        {experience.map((item) => (
          <Card key={item.id}>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-100">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  {item.company} | {item.mode}
                </p>
              </div>
              <Badge>{item.period}</Badge>
            </div>

            <h4 className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-200">
              Key Responsibilities
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {item.responsibilities.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <h4 className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-200">
              Technologies Used
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
