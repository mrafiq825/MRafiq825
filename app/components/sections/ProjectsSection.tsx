import { useState } from "react";
import {
  FiLayers,
  FiExternalLink,
  FiCode,
  FiTrendingUp,
  FiGithub,
  FiSmartphone,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";
import Section from "~/components/layout/Section";
import Card from "~/components/ui/Card";
import Modal from "~/components/ui/Modal";
import { projects } from "~/data/projects";
import { ICON_CLASS } from "~/lib/constants";
import type { Project } from "~/types/project";

const STATUS_CONFIG: Record<
  string,
  { color: string; bg: string; border: string }
> = {
  Live: {
    color: "text-emerald-400",
    bg: "bg-emerald-950/30",
    border: "border-emerald-800/40",
  },
  "In Progress": {
    color: "text-amber-400",
    bg: "bg-amber-950/30",
    border: "border-amber-800/40",
  },
  Archived: {
    color: "text-neutral-400",
    bg: "bg-neutral-900/30",
    border: "border-neutral-800/40",
  },
  "APK Available": {
    color: "text-blue-400",
    bg: "bg-blue-950/30",
    border: "border-blue-800/40",
  },
};

const getStatusConfig = (status: string) => {
  return STATUS_CONFIG[status] || STATUS_CONFIG["Live"];
};

const ProjectsSection = () => {
  const [selectedProjectForApk, setSelectedProjectForApk] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      title={
        <>
          <FiLayers className={`${ICON_CLASS.section} text-accent-600`} />
          Featured Projects
        </>
      }
      description="Explore innovative projects where each build solves a unique challenge with modern technology."
      className="border-t border-border-default bg-transparent"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const statusConfig = getStatusConfig(project.status);
          
          // Tag capping configuration (AGENTS.md: limit to 4, +X more)
          const maxTags = 4;
          const visibleTech = project.tech.slice(0, maxTags);
          const remainingTagsCount = project.tech.length - maxTags;

          return (
            <div key={project.id} className="flex h-full flex-col">
              <Card className="flex flex-col h-full justify-between">
                <div>
                  {/* Header Section */}
                  <div className="mb-6 pb-6 border-b border-border-default">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex-1">
                        <h3 className="font-heading text-lg font-bold text-text-primary">
                          {project.title}
                        </h3>
                      </div>
                      <div className="shrink-0">
                        <div
                          className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ${statusConfig.color} border ${statusConfig.border} ${statusConfig.bg}`}
                        >
                          <span
                            className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current"
                          />
                          {project.status}
                        </div>
                      </div>
                    </div>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FiCode className="w-4 h-4 text-accent-600" />
                      <p className="font-mono text-xs font-bold uppercase tracking-wide text-text-muted">
                        Tech Stack
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {visibleTech.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center font-mono text-[13px] bg-accent-50 text-accent-700 px-2.5 py-1 rounded-[8px] border-none font-medium select-none"
                        >
                          {item}
                        </span>
                      ))}
                      {remainingTagsCount > 0 && (
                        <span className="inline-flex items-center font-mono text-[13px] text-text-muted select-none font-medium px-1">
                          +{remainingTagsCount} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="flex gap-2 pt-6 border-t border-border-default">
                  {project.status === "APK Available" ? (
                    <button
                      onClick={() => setSelectedProjectForApk(project)}
                      className="flex-1 inline-flex items-center justify-center gap-2 font-body text-sm font-medium cursor-pointer transition-all duration-200 ease-out bg-accent-600 text-white rounded-[12px] px-4 py-2.5 hover:bg-accent-700 active:bg-accent-800 shadow-sm"
                    >
                      <FiSmartphone className="w-4 h-4" />
                      <span>Get APK</span>
                    </button>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 font-body text-sm font-medium transition-all duration-200 ease-out bg-accent-600 text-white rounded-[12px] px-4 py-2.5 hover:bg-accent-700 active:bg-accent-800 shadow-sm"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.detailsUrl ? (
                    <a
                      href={project.detailsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 font-body text-sm font-medium transition-all duration-200 ease-out bg-transparent border border-border-default text-text-primary rounded-[12px] px-4 py-2.5 hover:border-border-hover hover:bg-bg-surface-hover active:bg-bg-surface-hover/80"
                    >
                      <FiGithub className="w-4 h-4 text-text-secondary" />
                      <span>View Code</span>
                    </a>
                  ) : null}
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      {/* GitHub CTA at bottom */}
      <div className="mt-12 rounded-[16px] glass-panel p-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-2">
            <FiTrendingUp className="w-5 h-5 text-accent-600" />
            <p className="text-sm font-medium text-text-secondary">
              Currently working on{" "}
              <span className="text-accent-700 font-bold">new projects</span>{" "}
              that push boundaries
            </p>
          </div>
          <a
            href="https://github.com/mrafiq825"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-medium transition-all duration-200 ease-out bg-transparent border border-border-default text-text-primary rounded-[12px] px-6 py-2.5 hover:border-border-hover hover:bg-bg-surface-hover active:bg-bg-surface-hover/80"
          >
            <FiGithub className="w-4 h-4 text-text-secondary" />
            <span>View More Projects on GitHub</span>
          </a>
        </div>
      </div>

      {/* APK Review Modal */}
      <Modal
        isOpen={selectedProjectForApk !== null}
        onClose={() => setSelectedProjectForApk(null)}
        title="APK Review Request"
      >
        {selectedProjectForApk && (
          <div className="space-y-5">
            <div className="flex items-center gap-3 p-4 rounded-[16px] bg-accent-50/50 border border-accent-100/50">
              <FiSmartphone className="w-8 h-8 text-accent-600 shrink-0" />
              <div>
                <h4 className="font-heading font-bold text-text-primary text-[15px]">
                  {selectedProjectForApk.title}
                </h4>
                <p className="text-xs text-text-secondary mt-0.5">
                  Mobile Application Build (APK)
                </p>
              </div>
            </div>

            <p className="text-[14px] text-text-secondary leading-relaxed">
              This project is built for Android mobile devices. To review the application, test its features, or request the APK file for installation, please get in touch.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`mailto:rafkhan9323@gmail.com?subject=APK%20Review%20Request:%20${encodeURIComponent(
                  selectedProjectForApk.title,
                )}`}
                className="flex-1 inline-flex items-center justify-center gap-2 font-body text-sm font-medium transition-all duration-200 ease-out bg-accent-600 text-white rounded-[12px] px-5 py-3 hover:bg-accent-700 active:bg-accent-800 shadow-sm"
              >
                <FiMail className="w-4 h-4" />
                <span>Email Request</span>
              </a>
              <a
                href="#contact"
                onClick={() => {
                  setSelectedProjectForApk(null);
                  setTimeout(() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 font-body text-sm font-medium transition-all duration-200 ease-out bg-transparent border border-border-default text-text-primary rounded-[12px] px-5 py-3 hover:border-border-hover hover:bg-bg-surface-hover active:bg-bg-surface-hover/80"
              >
                <FiMessageCircle className="w-4 h-4 text-text-secondary" />
                <span>Contact Form</span>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
};

export default ProjectsSection;
