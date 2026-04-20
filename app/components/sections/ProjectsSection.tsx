import {
  FiLayers,
  FiExternalLink,
  FiCode,
  FiTrendingUp,
  FiGithub,
} from "react-icons/fi";
import Section from "~/components/layout/Section";
import Card from "~/components/ui/Card";
import { projects } from "~/data/projects";
import { ICON_CLASS } from "~/lib/constants";

const STATUS_CONFIG: Record<
  string,
  { color: string; gradient: string; bgGradient: string }
> = {
  Live: {
    color: "text-emerald-400",
    gradient: "from-emerald-500/20 to-teal-500/20",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
  },
  "In Progress": {
    color: "text-amber-400",
    gradient: "from-amber-500/20 to-orange-500/20",
    bgGradient: "from-amber-500/10 to-orange-500/10",
  },
  Archived: {
    color: "text-slate-400",
    gradient: "from-slate-500/20 to-slate-600/20",
    bgGradient: "from-slate-500/10 to-slate-600/10",
  },
};

const getStatusConfig = (status: string) => {
  return STATUS_CONFIG[status] || STATUS_CONFIG["Live"];
};

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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const statusConfig = getStatusConfig(project.status);
          return (
            <div key={project.id} className="group relative">
              {/* Background glow effect */}
              <div
                className={`absolute -inset-0.5 bg-linear-to-br ${statusConfig.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur`}
              />

              {/* Card */}
              <Card
                className={`relative flex h-full flex-col bg-linear-to-br ${statusConfig.bgGradient} border-slate-700 group-hover:border-slate-600 transition-all duration-300`}
              >
                {/* Header Section */}
                <div className="mb-6 pb-6 border-b border-slate-700/50">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold bg-linear-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent group-hover:to-white transition-all">
                        {project.title}
                      </h3>
                    </div>
                    <div className="shrink-0">
                      <div
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ${statusConfig.color} border border-current/20 bg-current/5`}
                      >
                        <span
                          className={`mr-1.5 h-2 w-2 rounded-full bg-current animate-pulse`}
                        />
                        {project.status}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <FiCode className="w-4 h-4 text-purple-400" />
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                      Tech Stack
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <div
                        key={item}
                        className="group/tech inline-flex items-center gap-1 rounded-lg bg-slate-800/50 px-2.5 py-1.5 text-xs font-semibold text-slate-300 border border-slate-700/50 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="flex gap-2 pt-6 border-t border-slate-700/50">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex-1 flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-sky-500/20 to-cyan-500/20 px-4 py-2.5 text-sm font-semibold text-sky-300 border border-sky-500/30 hover:border-sky-400 hover:text-sky-200 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  {project.detailsUrl ? (
                    <a
                      href={project.detailsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-slate-700/60 to-slate-600/60 px-4 py-2.5 text-sm font-semibold text-slate-200 border border-slate-600/50 hover:border-slate-500 hover:text-white hover:shadow-lg hover:shadow-slate-700/40 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <FiGithub className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                  ) : null}
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Optional: Stats or CTA at bottom */}
      <div className="mt-12 rounded-xl border border-slate-700/50 bg-linear-to-r from-slate-800/30 to-slate-700/30 p-6 backdrop-blur-sm">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-2">
            <FiTrendingUp className="w-5 h-5 text-emerald-400" />
            <p className="text-sm font-semibold text-slate-300">
              Currently working on{" "}
              <span className="text-emerald-400 font-bold">new projects</span>{" "}
              that push boundaries
            </p>
          </div>
          <a
            href="https://github.com/mrafiq825"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-slate-700/50 to-slate-600/50 px-6 py-2.5 text-sm font-semibold text-slate-200 border border-slate-600/50 hover:border-slate-500 hover:text-white hover:shadow-lg hover:shadow-slate-700/50 transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <FiGithub className="w-4 h-4 group-hover:text-slate-100" />
            <span>View More Projects on GitHub</span>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default ProjectsSection;
