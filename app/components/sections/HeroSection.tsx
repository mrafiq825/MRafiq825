import { FiArrowRight, FiDownload } from "react-icons/fi";
import Section from "~/components/layout/Section";
import Badge from "~/components/ui/Badge";
import Button from "~/components/ui/Button";
import { site } from "~/data/site";

const HeroSection = () => {
  return (
    <Section id="home" className="pb-5 pt-5 md:pt-5">
      <div className="grid items-start gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        {/* Left Column: Content */}
        <div className="relative overflow-hidden rounded-[2rem] glass-panel p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <Badge>{site.availability}</Badge>
            {site.role.split(" & ").map((rolePart) => (
              <span
                key={rolePart}
                className="inline-flex items-center font-mono text-[13px] bg-bg-surface-hover text-text-secondary px-2.5 py-1 rounded-[8px] border border-border-default font-medium"
              >
                {rolePart}
              </span>
            ))}
          </div>

          <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-text-muted">
            {site.greeting}
          </p>

          <h1 className="mt-3 font-heading text-hero font-extrabold leading-tight tracking-tight text-text-primary">
            {site.name}
          </h1>

          <h2 className="mt-2 font-heading text-h3 font-medium leading-tight text-text-secondary">
            {site.role}
          </h2>

          <p className="mt-6 max-w-[50ch] font-body text-body-lg leading-relaxed text-text-secondary">
            {site.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Button
              href="#projects"
              variant="primary"
              className="group bg-gradient-to-r from-accent-600 via-indigo-600 to-violet-600 hover:from-accent-700 hover:via-indigo-700 hover:to-violet-700 text-white shadow-[0_4px_20px_rgba(59,130,246,0.25)] hover:shadow-[0_4px_30px_rgba(99,102,241,0.45)] hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-300 border-0 font-medium"
            >
              <span>View Projects</span>
              <FiArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button
              href={site.cvUrl}
              target="_blank"
              variant="secondary"
              className="group hover:border-accent-600/50 hover:bg-bg-surface-hover hover:text-accent-600 hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-300 font-medium"
            >
              <FiDownload className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              <span>Resume</span>
            </Button>
          </div>
        </div>

        {/* Right Column: Profile & Summary */}
        <div className="relative flex flex-col gap-6">
          <div className="relative overflow-hidden rounded-[2rem] glass-panel p-3">
            <div className="rounded-[1.55rem] glass-panel-inset p-3">
              <div className="overflow-hidden rounded-[1.25rem] transition-transform duration-300 hover:scale-[1.02] transform-gpu">
                <img
                  src="/profile.png"
                  alt={`${site.name} - ${site.role}`}
                  className="w-full rounded-[1.25rem] object-contain transition-transform duration-300 hover:scale-105"
                  style={{ willChange: "transform" }}
                />
              </div>
            </div>
          </div>

          {/* Core Philosophy */}
          <div className="rounded-[16px] glass-panel p-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              Core Philosophy
            </p>
            <p className="mt-2 text-sm italic leading-relaxed text-text-secondary">
              "A great software engineer does not just write code; they analyze complex problems, design modular, resilient systems, and ship products that deliver measurable real-world value."
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;

