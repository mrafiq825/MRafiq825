import { FiUser, FiCode, FiTrendingUp, FiZap, FiCpu } from "react-icons/fi";
import Section from "~/components/layout/Section";
import Badge from "~/components/ui/Badge";
import { site } from "~/data/site";
import { ICON_CLASS } from "~/lib/constants";

const STRENGTHS = [
  {
    title: "FULL-STACK",
    description:
      "End-to-end web and mobile solutions from concept to deployment.",
    icon: FiCode,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "SDET",
    description:
      "Quality-first test automation and reliability-focused engineering.",
    icon: FiTrendingUp,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "DEVOPS",
    description:
      "Seamless CI/CD pipelines, cloud deployment, and observability.",
    icon: FiZap,
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "AI/ML",
    description:
      "Intelligent automation, AI integrations, and practical ML insights.",
    icon: FiCpu,
    gradient: "from-emerald-500/20 to-green-500/20",
  },
];

const AboutSection = () => {
  return (
    <Section
      id="about"
      title={
        <>
          <FiUser className={`${ICON_CLASS.section} text-sky-400`} />
          Why Choose Me
        </>
      }
      description="A comprehensive skill set delivering end-to-end solutions from concept to deployment."
      className="border-t border-slate-800"
    >
      {/* Hero Section */}
      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <div className="space-y-4">
          <div className="inline-block">
            <span className="inline-flex items-center rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300 border border-sky-500/20">
              Passion-Driven Developer
            </span>
          </div>
          <h3 className="text-2xl font-bold bg-linear-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
            Always Learning, Always Growing
          </h3>
          <p className="text-base text-slate-300 leading-relaxed">
            I work at the intersection of product, engineering, and performance
            to build software that drives measurable outcomes.
          </p>
          <p className="text-base text-slate-400 leading-relaxed">
            I specialize in full-stack web systems, test quality, deployment
            workflows, and AI-powered product experiences.
          </p>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-4">
              Tech Arsenal
            </h3>
            <div className="flex flex-wrap gap-2">
              {site.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
          <div className="mt-6 p-4 rounded-lg bg-linear-to-r from-slate-800/50 to-slate-700/50 border border-slate-700/50">
            <p className="text-xs text-slate-400 font-medium">
              Combining cutting-edge tools with proven best practices
            </p>
          </div>
        </div>
      </div>

      {/* Strengths Grid */}
      <div>
        <h3 className="text-lg font-semibold text-slate-100 mb-6">
          Core Competencies
        </h3>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STRENGTHS.map((item) => {
            const IconComponent = item.icon;
            return (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-xl border border-slate-700 bg-linear-to-br ${item.gradient} p-6 transition-all duration-300 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-900/20 backdrop-blur-sm hover:-translate-y-1`}
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-linear-to-br from-slate-600/0 to-slate-900/0 group-hover:from-slate-600/10 group-hover:to-slate-900/20 transition-all duration-300" />

                {/* Content */}
                <div className="relative">
                  <h4 className="text-sm font-bold tracking-wider text-slate-100 group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm text-slate-300 group-hover:text-slate-200 transition-colors leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-300 bg-linear-to-r ${item.gradient}`}
                />
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
