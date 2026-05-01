import { useEffect, useState } from "react";
import Section from "~/components/layout/Section";
import Badge from "~/components/ui/Badge";
import Button from "~/components/ui/Button";
import { site } from "~/data/site";

const HeroSection = () => {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    // Simple typewriter effect for the intro blurb
    const text = site.intro ?? "";
    let i = 0;
    const interval = setInterval(() => {
      setTyped((prev) => prev + text.charAt(i));
      i += 1;
      if (i >= text.length) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, []);

  // animated stat counters
  const [counters, setCounters] = useState<string[]>(
    site.stats.slice(0, 4).map((s) => s.value),
  );

  useEffect(() => {
    const targets = site.stats.slice(0, 4).map((s) => {
      const num = parseInt(String(s.value).replace(/\D/g, "")) || 0;
      return num;
    });

    const duration = 900;
    const start = performance.now();

    const raf = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const next = targets.map((target) => Math.round(target * t));
      setCounters(
        next.map((n, i) => {
          const raw = site.stats[i].value;
          // preserve suffixes like + or %
          const suffix = String(raw).replace(/\d+/g, "");
          return `${n}${suffix}`;
        }),
      );
      if (t < 1) requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <Section id="home" className="pb-16 pt-24 md:pt-32">
      <div className="grid items-start gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="relative overflow-hidden rounded-[2rem] border border-sky-200/10 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-slate-950/95 p-6 sm:p-8 lg:p-10">
          <style>{`
            @keyframes floaty { 0%{transform:translateY(0)}50%{transform:translateY(-8px)}100%{transform:translateY(0)} }
            @keyframes slideGradient { 0%{background-position:0% 50%}100%{background-position:100% 50%} }
            .gradientMove { background: linear-gradient(90deg,#0ea5e9,#7c3aed,#f472b6); background-size:200% 200%; animation: slideGradient 4s linear infinite; }
            .floaty { animation: floaty 6s ease-in-out infinite; }
            .typed-caret::after { content: "|"; opacity: 0.9; margin-left:6px; animation: blink 1s steps(2,start) infinite; }
            @keyframes blink { 50% { opacity: 0 } }
            .socialIcon { display:inline-flex; align-items:center; justify-content:center; height:38px; width:38px; border-radius:10px; background:rgba(255,255,255,0.02); transition:transform .22s ease, box-shadow .22s ease; }
            .socialIcon:hover { transform:translateY(-4px) scale(1.06); box-shadow:0 6px 18px rgba(124,58,237,0.18); }
            .socialIcon svg { height:18px; width:18px; color:transparent; filter:drop-shadow(0 1px 0 rgba(0,0,0,0.2)); }
            .particle { position:absolute; inset:0; pointer-events:none; opacity:0.18 }
          `}</style>
          <svg
            className="particle"
            viewBox="0 0 800 400"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.06" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="40" r="60" fill="url(#g1)"></circle>
            <circle
              cx="720"
              cy="320"
              r="48"
              fill="#f472b6"
              fillOpacity="0.04"
            ></circle>
            <circle
              cx="380"
              cy="200"
              r="100"
              fill="#60a5fa"
              fillOpacity="0.03"
            ></circle>
          </svg>
          <div className="pointer-events-none absolute -right-14 -top-20 h-52 w-52 rounded-full bg-sky-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-14 left-8 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative z-10 flex flex-wrap items-center gap-3">
            <Badge>{site.availability}</Badge>
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            {site.greeting}
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl xl:text-6xl">
            <span className="block text-slate-100 font-script gradientMove">
              {site.name}
            </span>
            <span
              className="mt-2 block bg-clip-text text-transparent gradientMove"
              style={{ WebkitBackgroundClip: "text" }}
            >
              {site.role}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg typed-caret">
            {typed}
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
            {site.stats.slice(0, 4).map((stat, idx) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-800/80 bg-slate-950/50 px-4 py-3 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-100">
                  {counters[idx]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-8 hidden h-40 w-40 rounded-full bg-cyan-300/6 blur-3xl floaty sm:block" />
          <div className="absolute right-0 top-4 -z-10 hidden h-24 w-24 rounded-full bg-sky-400/6 blur-2xl floaty sm:block" />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/70 p-3 shadow-[0_28px_80px_rgba(2,6,23,0.65)]">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/50 to-transparent" />
            <div className="rounded-[1.55rem] border border-slate-700/80 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-3">
              <div className="overflow-hidden rounded-[1.25rem] ring-1 ring-sky-400/10 hover:scale-102 transition-transform duration-500 transform-gpu">
                <img
                  src="/profile.png"
                  alt="Muhammad Rafiq - Full-Stack Developer & AI Engineer"
                  className="h-[440px] w-full rounded-[1.25rem] object-cover sm:h-[500px] hover:scale-105 transition-transform duration-600"
                  style={{ willChange: "transform" }}
                />
              </div>
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
