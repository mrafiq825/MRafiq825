import Section from "~/components/layout/Section";
import Badge from "~/components/ui/Badge";
import Button from "~/components/ui/Button";
import { site } from "~/data/site";

const HeroSection = () => {
  return (
    <Section id="home" className="pb-16 pt-24 md:pt-32">
      <div className="grid items-start gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="relative overflow-hidden rounded-[2rem] border border-sky-200/10 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-slate-950/95 p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-14 -top-20 h-52 w-52 rounded-full bg-sky-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-14 left-8 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative z-10 flex flex-wrap items-center gap-3">
            <Badge>{site.availability}</Badge>
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            {site.greeting}
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl xl:text-6xl">
            <span className="block text-slate-100">{site.name}</span>
            <span className="mt-2 block bg-gradient-to-r from-sky-200 via-cyan-200 to-slate-300 bg-clip-text text-transparent">
              {site.role}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {site.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              href={site.cvUrl}
              download="Muhammad-Rafiq-CV.pdf"
              variant="secondary"
              className="border-sky-300/30 bg-sky-400/10 text-sky-100 hover:bg-sky-400/20"
            >
              Download CV
            </Button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {site.stats.slice(0, 4).map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-800/80 bg-slate-950/50 px-4 py-3"
              >
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-100">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-3 top-8 hidden h-28 w-28 rounded-2xl border border-cyan-300/20 bg-cyan-300/5 blur-[1px] sm:block" />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/70 p-3 shadow-[0_28px_80px_rgba(2,6,23,0.65)]">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/50 to-transparent" />
            <div className="rounded-[1.55rem] border border-slate-700/80 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-3">
              <img
                src="/profile.png"
                alt="Muhammad Rafiq - Full-Stack Developer & AI Engineer"
                className="h-[440px] w-full rounded-[1.25rem] object-contain sm:h-[500px]"
              />
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-800/90 bg-slate-900/75 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Quick Intro
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              I build polished digital products with a strong focus on
              performance, maintainability, and measurable business impact.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
