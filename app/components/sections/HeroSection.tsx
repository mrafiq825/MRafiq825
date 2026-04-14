import Section from "~/components/layout/Section";
import Badge from "~/components/ui/Badge";
import Button from "~/components/ui/Button";
import { socials } from "~/data/socials";
import { site } from "~/data/site";

const HeroSection = () => {
  return (
    <Section id="home" className="pb-12 pt-24 md:pt-32">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-sky-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-sky-300/10 blur-3xl" />

          <Badge>{site.availability}</Badge>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            {site.greeting}
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-white via-sky-200 to-slate-300 bg-clip-text text-transparent">
              {site.name}
            </span>
          </h1>

          <p className="mt-4 text-lg font-semibold text-sky-300 sm:text-2xl">
            {site.role}
          </p>
          <p className="mt-5 max-w-2xl text-slate-300">{site.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.primaryCtaHref}>{site.primaryCtaLabel}</Button>
            <Button href={site.cvUrl} variant="secondary">
              Download CV
            </Button>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-sky-300/50 hover:text-sky-200"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-3 shadow-[0_20px_50px_rgba(2,6,23,0.6)]">
            <div className="rounded-2xl border border-slate-700/80 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-3">
              <img
                src="/profile.png"
                alt="Muhammad Rafiq - Full-Stack Developer & AI Engineer"
                className="h-[460px] w-full rounded-xl object-contain"
              />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {site.stats.slice(0, 2).map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-800 bg-slate-900/70 p-3"
              >
                <p className="text-[10px] uppercase tracking-wide text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-100">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
