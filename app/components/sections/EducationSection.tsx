import {
  FiBook,
  FiCalendar,
  FiMapPin,
  FiAward,
  FiCheckCircle,
  FiCode,
} from "react-icons/fi";
import Section from "~/components/layout/Section";
import Badge from "~/components/ui/Badge";
import Card from "~/components/ui/Card";
import { education } from "~/data/education";
import { ICON_CLASS } from "~/lib/constants";

const EducationSection = () => {
  return (
    <Section
      id="education"
      title={
        <>
          <FiBook className={`${ICON_CLASS.section} text-violet-400`} />
          Education
        </>
      }
      description="The academic foundation that shaped my engineering mindset, blending theory with hands-on software development."
      className="border-t border-slate-800"
    >
      <div className="space-y-8">
        {education.map((item) => (
          <Card
            key={item.id}
            className="group relative overflow-hidden border-slate-800/80 bg-slate-900/85 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_18px_40px_rgba(139,92,246,0.12)]"
          >
          

            {/* Decorative background glow */}
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-600/5 blur-3xl transition-all duration-500 group-hover:bg-violet-600/10" />

            {/* Header */}
            <div className="relative mt-6 flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-3">
                {/* Degree badge + mode indicator */}
                <div className="flex flex-wrap items-center gap-2">
                  <FiAward className="h-5 w-5 text-violet-400" />
                  <Badge>{item.degree}</Badge>
                  <Badge>{item.period}</Badge>
                </div>

                {/* Field & Institution */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-50 transition-colors group-hover:text-white">
                    {item.field}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                    <p className="font-semibold text-slate-200">
                      {item.institution}
                    </p>
                  </div>
                </div>

                {/* Location & Years */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <FiMapPin className="h-3.5 w-3.5 text-violet-400/70" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiCalendar className="h-3.5 w-3.5 text-violet-400/70" />
                    {item.startYear} – {item.endYear}
                  </span>
                </div>
              </div>

              {/* Year badge — desktop */}
              <div className="hidden shrink-0 flex-col items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 px-5 py-3 text-center md:flex">
                <span className="text-3xl font-extrabold leading-none text-violet-300">
                  {item.endYear}
                </span>
                <span className="mt-1 text-xs font-medium uppercase tracking-widest text-violet-400/70">
                  Graduated
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="relative mt-8 grid gap-8 md:grid-cols-2">
              {/* Highlights */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <FiCheckCircle className="h-5 w-5 text-emerald-400" />
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-100">
                    Highlights
                  </h4>
                </div>
                <ul className="space-y-3 text-sm">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400" />
                      <span className="leading-relaxed text-slate-300 transition-colors group-hover:text-slate-100">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Courses */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <FiCode className="h-5 w-5 text-violet-400" />
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-100">
                    Key Courses
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.courses.map((course) => (
                    <span
                      key={course}
                      className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300 transition-colors duration-200 hover:border-violet-400/40 hover:bg-violet-500/20 hover:text-violet-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default EducationSection;
