import {
  AppleBriefcase,
  AppleCheckCircle,
  AppleCode,
  AppleArrowRight,
} from "@/components/ui/AppleIcons";
import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { experience } from "@/data/experience";
import { ICON_CLASS } from "@/lib/constants";

const ExperienceSection = () => {
  return (
    <Section
      id="experience"
      title={
        <>
          <AppleBriefcase className={`${ICON_CLASS.section} text-accent-600`} />
          Professional Experience
        </>
      }
      description="A journey through roles and impactful work spanning full-stack development, AI/ML, SDET, and DevOps."
      className="border-t border-border-default bg-transparent"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {experience.map((item) => {
          return (
            <Card key={item.id} className="flex flex-col h-full justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <AppleCode className="w-5 h-5 text-accent-600" />
                  <Badge>{item.mode}</Badge>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-text-primary">
                    {item.role}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                    <p className="font-bold text-text-secondary">
                      {item.company}
                    </p>
                    <AppleArrowRight className="h-4 w-4 text-text-muted" />
                    <Badge>{item.period}</Badge>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-4 flex items-center gap-2">
                    <AppleCheckCircle className="h-5 w-5 text-accent-600" />
                    <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-text-primary">
                      Key Responsibilities
                    </h4>
                  </div>
                  <ul className="space-y-3 text-sm">
                    {item.responsibilities.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-600" />
                        <span className="leading-relaxed text-text-secondary">
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
