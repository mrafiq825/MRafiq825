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
          <FiBook className={`${ICON_CLASS.section} text-accent-600`} />
          Qualifications
        </>
      }
      description="The academic foundation that shaped my engineering mindset, blending theory with hands-on software development."
      className="border-t border-border-default bg-transparent"
    >
      <div className="space-y-8">
        {education.map((item) => (
          <Card key={item.id}>
            {/* Header */}
            <div className="relative flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-3">
                {/* Degree badge + mode indicator */}
                <div className="flex flex-wrap items-center gap-2">
                  <FiAward className="h-5 w-5 text-accent-600" />
                  <Badge>{item.degree}</Badge>
                </div>
                {/* Institution */}
                <div>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                    <p className="font-bold text-text-primary text-base">
                      {item.institution}
                    </p>
                  </div>
                </div>
                {/* Location & Years */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-text-secondary">
                  <span className="flex items-center gap-1.5">
                    <FiMapPin className="h-3.5 w-3.5 text-accent-600" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiCalendar className="h-3.5 w-3.5 text-accent-600" />
                    {item.startYear} – {item.endYear}
                  </span>
                </div>
              </div>
              {/* Year badge — desktop */}
              <div className="hidden shrink-0 flex-col items-center justify-center rounded-2xl glass-panel-inset px-5 py-3 text-center md:flex">
                <span className="text-3xl font-extrabold leading-none text-accent-700">
                  {item.endYear}
                </span>
                <span className="mt-1 text-xs font-medium uppercase tracking-widest text-text-muted">
                  Graduated
                </span>
              </div>
            </div>
            {/* Body */}
            <div className="relative mt-8 grid gap-8 md:grid-cols-2">
              {/* Highlights */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <FiCheckCircle className="h-5 w-5 text-accent-600" />
                  <h4 className="text-sm font-bold uppercase tracking-wider text-text-primary">
                    Highlights
                  </h4>
                </div>
                <ul className="space-y-3 text-sm">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-600" />
                      <span className="leading-relaxed text-text-secondary transition-colors group-hover:text-text-primary">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Courses */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <FiCode className="h-5 w-5 text-accent-600" />
                  <h4 className="text-sm font-bold uppercase tracking-wider text-text-primary">
                    Key Courses
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.courses.map((course) => (
                    <Badge key={course}>{course}</Badge>
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
