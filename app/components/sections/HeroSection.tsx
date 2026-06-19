import Section from "~/components/layout/Section";
import Badge from "~/components/ui/Badge";
import Button from "~/components/ui/Button";
import Card from "~/components/ui/Card";
import { site } from "~/data/site";

const HeroSection = () => {
  return (
    <Section id="home" className="pb-12 pt-16 md:pt-5">
      <div className="grid items-start gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        {/* Left Column: Content */}
        <div className="relative overflow-hidden rounded-[2rem] border border-border-default bg-bg-surface p-6 sm:p-8 lg:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
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
              variant="secondary"
            >
              View Projects
            </Button>
            <Button
              href={site.cvUrl}
              download="Muhammad-Rafiq-CV.pdf"
              variant="secondary"
            >
              Download CV
            </Button>
          </div>
        </div>

        {/* Right Column: Profile & Summary */}
        <div className="relative flex flex-col gap-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-border-default bg-bg-surface p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="rounded-[1.55rem] border border-border-default bg-bg-page p-3">
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

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {site.stats.map((stat) => (
              <Card key={stat.label} className="p-4 sm:p-5 flex flex-col justify-center text-center">
                <span className="font-heading text-3xl font-extrabold text-accent-600">
                  {stat.value}
                </span>
                <span className="mt-1 font-mono text-[11px] font-bold uppercase tracking-wider text-text-secondary">
                  {stat.label}
                </span>
              </Card>
            ))}
          </div>

          {/* Core Philosophy */}
          <div className="rounded-[16px] border border-border-default bg-bg-surface p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              Core Philosophy
            </p>
            <p className="mt-2 text-sm italic leading-relaxed text-text-secondary">
              "A great developer isn't someone who memorizes code; a great developer is someone who understands the problem and solves it with sharp technical expertise."
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;

