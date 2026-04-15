import { FiLayers } from "react-icons/fi";

import Section from "~/components/layout/Section";
import Badge from "~/components/ui/Badge";
import Card from "~/components/ui/Card";
import { projects } from "~/data/projects";
import { ICON_CLASS } from "~/lib/constants";

const ProjectsSection = () => {
  return (
    <Section
      id="projects"
      title={
        <>
          <FiLayers className={`${ICON_CLASS.section} text-sky-400`} />
          Featured Projects
        </>
      }
      description="Explore innovative projects where each build solves a unique challenge with modern technology."
      className="border-t border-slate-800"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-slate-100">
                {project.title}
              </h3>
              <Badge>{project.status}</Badge>
            </div>
            <p className="mt-3 text-sm text-slate-300">{project.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>

            <div className="mt-6 flex gap-3 text-sm font-semibold">
              <a
                href={project.liveUrl}
                className="text-sky-300 hover:text-sky-200 hover:underline"
              >
                View Live App
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
