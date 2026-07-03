import { useState } from "react";
import {
  AppleLayers,
  AppleExternalLink,
  AppleCode,
  AppleTrendingUp,
  AppleGithub,
  AppleDevice,
  AppleMail,
  AppleMessage,
} from "@/components/ui/AppleIcons";
import Section from "@/components/layout/Section";
import Card from "@/components/ui/Card";
import Modal from "@/components/ui/Modal";
import RadialGlowButton from "@/components/ui/RadialGlowButton";
import GenerateButton from "@/components/ui/GenerateButton";
import { projects } from "@/data/projects";
import { ICON_CLASS } from "@/lib/constants";
import type { Project } from "@/types/project";

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
          <AppleLayers className={`${ICON_CLASS.section} text-accent-600`} />
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
              <Card className="flex flex-col h-full justify-between group">
                <div>
                  {/* Project Thumbnail */}
                  {project.thumbnail && (
                    <div className="mb-5 overflow-hidden rounded-[12px] border border-border-default/50 aspect-video relative bg-bg-surface-hover/30">
                      <img
                        src={project.thumbnail}
                        alt={project.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/20 to-transparent pointer-events-none" />
                    </div>
                  )}

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
                      <AppleCode className="w-4 h-4 text-accent-600" />
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
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="flex gap-2 pt-6 border-t border-border-default">
                  {project.status === "APK Available" ? (
                    <RadialGlowButton
                      onClick={() => setSelectedProjectForApk(project)}
                      containerClassName="flex-1 flex"
                    >
                      <AppleDevice className="w-4 h-4" />
                      <span>Get APK</span>
                    </RadialGlowButton>
                  ) : (
                    <RadialGlowButton
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      containerClassName="flex-1 flex"
                    >
                      <AppleExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </RadialGlowButton>
                  )}
                  {project.detailsUrl ? (
                    <a
                      href={project.detailsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 font-body text-sm font-medium transition-all duration-200 ease-out bg-transparent border border-border-default text-text-primary rounded-[12px] px-4 py-2.5 hover:border-border-hover hover:bg-bg-surface-hover active:bg-bg-surface-hover/80"
                    >
                      <AppleGithub className="w-4 h-4 text-text-secondary" />
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
            <AppleTrendingUp className="w-5 h-5 text-accent-600" />
            <p className="text-sm font-medium text-text-secondary">
              Currently working on{" "}
              <span className="text-accent-700 font-bold">new projects</span>{" "}
              that push boundaries
            </p>
          </div>
          <GenerateButton
            href="https://github.com/mrafiq825"
            target="_blank"
            rel="noopener noreferrer"
            text="GitHub Profile"
            activeText="Opening GitHub"
            hue={250}
            icon={<AppleGithub />}
          />
        </div>
      </div>

      {/* APK Review Modal */}
      <Modal
        isOpen={selectedProjectForApk !== null}
        onClose={() => setSelectedProjectForApk(null)}
        title="APK Review Request"
      >
        {selectedProjectForApk && (
          <div className="space-y-6">
            {/* Project Details Banner */}
            <div className="flex items-center gap-4 p-4 rounded-[16px] bg-accent-600/10 border border-accent-600/20 shadow-inner">
              <div className="flex items-center justify-center w-12 h-12 rounded-[12px] bg-accent-600/20 text-accent-700 shrink-0 shadow-sm">
                <AppleDevice className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-heading font-bold text-text-primary text-[16px] truncate">
                  {selectedProjectForApk.title}
                </h4>
                <p className="text-xs font-mono text-text-muted mt-0.5 tracking-wider uppercase">
                  Mobile Build (APK)
                </p>
              </div>
            </div>

            {/* Description and Info Badge */}
            <div className="space-y-4">
              <p className="text-sm text-text-secondary leading-relaxed">
                This project is built and optimized for Android mobile devices. You can request the direct APK installation package to test and evaluate the build locally.
              </p>
              
              <div className="flex items-start gap-2.5 p-3 rounded-[12px] bg-bg-surface-hover/50 border border-border-default/50 text-[13px] text-text-muted">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-600 shrink-0 mt-1.5" />
                <span>Installation requires allowing installs from unknown sources in Android developer settings.</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <RadialGlowButton
                href={`mailto:rafkhan9323@gmail.com?subject=APK%20Review%20Request:%20${encodeURIComponent(
                  selectedProjectForApk.title,
                )}`}
                containerClassName="w-full sm:flex-1 flex"
              >
                <AppleMail className="w-4 h-4" />
                <span>Email Request</span>
              </RadialGlowButton>
              
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
                className="w-full sm:flex-1 h-11 inline-flex items-center justify-center gap-2 font-body text-sm font-medium rounded-[11px] glass-button-secondary text-text-primary transition-all duration-200"
              >
                <AppleMessage className="w-4 h-4 text-text-secondary" />
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
