"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import { services } from "@/data/services";
import { ICON_CLASS } from "@/lib/constants";
import {
  AppleSparkles,
  AppleReactIcon,
  AppleCpu,
  AppleDevice,
  AppleServerIcon,
  AppleChevronDown,
  AppleCheckCircle,
  AppleArrowLeft,
  AppleMessage,
  AppleCode,
  AppleLayers,
  AppleFolder,
  AppleCloudIcon,
  AppleBoxIcon,
  AppleSliders,
} from "@/components/ui/AppleIcons";

// Map string icon names to their respective components for service tracks
const ICON_MAP: Record<string, React.ComponentType<any>> = {
  AppleReactIcon: AppleReactIcon,
  AppleCpu: AppleCpu,
  AppleDevice: AppleDevice,
  AppleServerIcon: AppleServerIcon,
};

// Map tech names to their visual icon representation for tags
const TECH_ICON_MAP: Record<string, React.ComponentType<any>> = {
  "React.js": AppleReactIcon,
  "React Native": AppleDevice,
  "Next.js": AppleReactIcon,
  "Redux Toolkit": AppleLayers,
  "TypeScript": AppleCode,
  "JavaScript": AppleCode,
  "Python": AppleCode,
  "Gemini API": AppleCpu,
  "OpenAI API": AppleCpu,
  "LangChain": AppleSparkles,
  "Vapi AI": AppleMessage,
  "Node.js": AppleServerIcon,
  "Express.js": AppleServerIcon,
  "FastAPI": AppleServerIcon,
  "MongoDB": AppleFolder,
  "PostgreSQL": AppleServerIcon,
  "Tailwind CSS": AppleSliders,
  "NativeWind": AppleSliders,
  "Docker": AppleBoxIcon,
  "CI/CD": AppleCloudIcon,
  "GitHub Actions": AppleCloudIcon,
  "Playwright": AppleCheckCircle,
  "Jest": AppleCheckCircle,
  "Vitest": AppleCheckCircle,
};

export default function ServicesClient() {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <Navbar />
      <main className="page-shell bg-transparent text-text-primary pt-2 pb-21 min-h-screen">
        <Container>
          {/* Back Navigation Link */}
          <div className="mb-2 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-2.5 text-xs font-mono font-bold tracking-wider text-text-secondary hover:text-text-primary border border-border-default hover:border-accent-600 bg-white/5 hover:bg-accent-600/10 transition-all duration-300 group shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] cursor-pointer"
            >
              <AppleArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1 text-text-secondary group-hover:text-accent-700" />
              <span>BACK TO PORTFOLIO</span>
            </Link>
          </div>

          {/* Hero Header */}
          <div className="mb-0 border-b border-border-default/50 pb-0 max-w-4xl mx-auto text-center flex flex-col items-center">
            <h1 className="font-heading text-h1 font-bold tracking-tight text-text-primary mb-2">
              Engineered <span className="text-accent-600">Services</span>
            </h1>
            <p className="font-body text-[17px] text-text-secondary leading-relaxed max-w-3xl mb-6">
              I provide high-fidelity full-stack engineering, production-grade AI agent integrations,
              cross-platform mobile apps, and zero-defect QA automation systems. Every project is scoped
              for optimal performance, scalability, and measurable business outcomes.
            </p>
          </div>

          {/* Immersive Services Showcase */}
          <div className="space-y-10 max-w-4xl mx-auto">
            {services.map((service) => {
              const IconComponent = ICON_MAP[service.iconName] || AppleSparkles;
              const isExpanded = expandedServiceId === service.id;

              // Email pre-filled contact parameters
              const emailSubject = encodeURIComponent(`Inquiry: ${service.title}`);
              const emailBody = encodeURIComponent(`Hi Rafiq,\n\nI'm interested in your "${service.title}" services. Let's discuss a potential project.\n\nBest regards,`);
              const mailToUrl = `mailto:rafkhan9323@gmail.com?subject=${emailSubject}&body=${emailBody}`;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="glass-panel p-6 sm:p-8 rounded-[24px] relative overflow-hidden group transition-all duration-300"
                >
                  {/* Accent Top Border Glow */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-600/40 to-transparent" />

                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                    {/* Left Column: Service Details */}
                    <div className="flex-1 space-y-5">
                      {/* Icon & Title */}
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50/50 border border-accent-100 text-accent-600 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                          <IconComponent className="w-7 h-7 stroke-[1.9] shrink-0" />
                        </div>
                        <div>
                          <h2 className="font-heading text-xl sm:text-2xl font-bold text-text-primary">
                            {service.title}
                          </h2>
                          <p className="font-mono text-xs tracking-wider font-semibold text-accent-600 uppercase mt-0.5">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Main Service Description */}
                      <p className="font-body text-[15px] text-text-secondary leading-relaxed">
                        {service.description}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="space-y-3">
                        <h3 className="font-heading text-sm font-bold text-text-primary uppercase tracking-wider">
                          Key Deliverables
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-body text-[13.5px] text-text-secondary">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                              <AppleCheckCircle className="w-4 h-4 shrink-0 text-accent-600/80 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack (Tag Capping Applied - Max 4) */}
                      <div className="pt-4 border-t border-border-default/30 flex flex-wrap items-center gap-1.5">
                        <span className="font-mono text-[10px] text-text-muted font-bold mr-1.5">
                          TECH WORKSPACE:
                        </span>
                        {service.techStack.slice(0, 4).map((tech) => {
                          const TechIcon = TECH_ICON_MAP[tech] || AppleCode;
                          return (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider glass-badge px-2 py-0.5 rounded-[4px] font-semibold text-accent-700"
                            >
                              <TechIcon className="w-3 h-3 stroke-[1.9] shrink-0" />
                              <span>{tech}</span>
                            </span>
                          );
                        })}
                        {service.techStack.length > 4 && (
                          <span className="font-mono text-[9px] text-text-muted px-1.5 py-0.5 select-none font-semibold">
                            +{service.techStack.length - 4} MORE
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Performance Metrics & CTA Actions */}
                    <div className="w-full lg:w-72 flex flex-col gap-5 justify-between self-stretch border-t lg:border-t-0 lg:border-l border-border-default/30 pt-6 lg:pt-0 lg:pl-8">
                      {/* Metric Dashboard */}
                      <div className="space-y-4">
                        <h3 className="font-heading text-sm font-bold text-text-primary uppercase tracking-wider">
                          Proven Impact
                        </h3>
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                          {service.metrics.map((metric, idx) => (
                            <div
                              key={idx}
                              className="p-3.5 rounded-xl border border-border-default bg-bg-page/50 flex flex-col justify-center"
                            >
                              <span className="font-heading text-2xl font-bold text-text-primary tracking-tight">
                                {metric.value}
                              </span>
                              <span className="font-mono text-[9px] text-text-muted tracking-wider uppercase mt-1 leading-normal">
                                {metric.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Triggers */}
                      <div className="space-y-3 pt-4 border-t border-border-default/30 mt-auto">
                        <a
                          href={mailToUrl}
                          className="w-full flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold font-mono tracking-wider transition duration-200 liquid-glass-accent-button text-white cursor-pointer"
                        >
                          <AppleMessage className={ICON_CLASS.action} />
                          HIRE FOR THIS SERVICE
                        </a>

                        <button
                          onClick={() => toggleExpand(service.id)}
                          className="w-full flex items-center justify-between py-2.5 px-4 rounded-full bg-bg-surface-hover/20 hover:bg-bg-surface-hover/50 border border-border-default/45 text-text-secondary hover:text-text-primary transition-all duration-200 text-[11px] font-semibold font-mono cursor-pointer"
                          aria-expanded={isExpanded}
                        >
                          <span>VIEW SERVICE FAQS</span>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                          >
                            <AppleChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Accordion FAQs section */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 border-t border-border-default/20 mt-6 space-y-4 max-w-3xl">
                          <h3 className="font-heading text-sm font-bold text-text-primary uppercase tracking-wider mb-2">
                            Frequently Asked Questions
                          </h3>
                          {service.faqs.map((faq, idx) => (
                            <div key={idx} className="space-y-1.5 p-4 rounded-xl border border-border-default/20 bg-bg-page/25">
                              <h4 className="font-heading text-[14px] font-bold text-text-primary leading-tight flex items-start gap-2">
                                <span className="text-accent-600">Q:</span>
                                <span>{faq.question}</span>
                              </h4>
                              <p className="font-body text-[13px] text-text-secondary leading-relaxed pl-6">
                                {faq.answer}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Container>
      </main>
    </>
  );
}
