import { UserCircle2 } from "lucide-react";

import Section from "~/components/layout/Section";
import Badge from "~/components/ui/Badge";
import { site } from "~/data/site";

const STRENGTHS = [
  {
    title: "FULL-STACK",
    description:
      "End-to-end web and mobile solutions from concept to deployment.",
  },
  {
    title: "SDET",
    description:
      "Quality-first test automation and reliability-focused engineering.",
  },
  {
    title: "DEVOPS",
    description:
      "Seamless CI/CD pipelines, cloud deployment, and observability.",
  },
  {
    title: "AI/ML",
    description:
      "Intelligent automation, AI integrations, and practical ML insights.",
  },
];

const AboutSection = () => {
  return (
    <Section
      id="about"
      title={
        <>
          <UserCircle2 className="h-8 w-8 text-sky-400" />
          Why Choose Me
        </>
      }
      description="A comprehensive skill set delivering end-to-end solutions from concept to deployment."
      className="border-t border-slate-800"
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-slate-100">
            Always Learning, Always Growing
          </h3>
          <p className="mt-3 text-slate-300">
            I work at the intersection of product, engineering, and performance
            to build software that drives measurable outcomes.
          </p>
          <p className="mt-4 text-slate-300">
            Based in {site.location}, I specialize in full-stack web systems,
            test quality, deployment workflows, and AI-powered product
            experiences.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-100">Core Skills</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {site.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {STRENGTHS.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-5"
          >
            <h4 className="text-sm font-bold tracking-wide text-slate-100">
              {item.title}
            </h4>
            <p className="mt-2 text-sm text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default AboutSection;
