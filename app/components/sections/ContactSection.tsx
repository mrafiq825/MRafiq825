import {
  FiMail,
  FiMessageCircle,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Section from "~/components/layout/Section";
import Card from "~/components/ui/Card";
import Chatbot from "~/components/ui/Chatbot";
import { site } from "~/data/site";
import { socials } from "~/data/socials";
import { ICON_CLASS } from "~/lib/constants";

const SOCIAL_ICONS = {
  Github: FaGithub,
  Linkedin: FaLinkedinIn,
  Instagram: FaInstagram,
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mbdqoqay");
  const contactFormRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      contactFormRef.current?.reset();
    }
  }, [state.succeeded]);

  return (
    <Section
      id="contact"
      title={
        <>
          <FiMail className={`${ICON_CLASS.section} text-sky-400`} />
          Contact and Chat
        </>
      }
      description="Use the contact form for project inquiries and the chatbot panel for quick questions about services, availability, and next steps."
      className="border-t border-slate-800"
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="relative overflow-hidden border-slate-700/80 bg-slate-900/80">
          <div className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-12 h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative">
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300">
                <FiMessageCircle className={ICON_CLASS.nav} />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Contact form
                </p>
                <p className="text-sm text-slate-300">
                  Start a project conversation
                </p>
              </div>
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
              {site.availability}
            </p>

            {state.succeeded && (
              <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                <div className="mb-2 flex items-center justify-center">
                  <FiCheckCircle className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="mb-1 text-base font-semibold text-emerald-300">
                  Message sent
                </h3>
                <p className="text-sm text-emerald-200">
                  Thanks for reaching out. The form has been cleared and is
                  ready for another message.
                </p>
              </div>
            )}

            <form
              ref={contactFormRef}
              className="mt-6 space-y-4"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-200">
                    Your name
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Muhammad Rafiq"
                    required
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20"
                  />
                  <ValidationError field="name" errors={state.errors} />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-200">
                    Email address
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20"
                  />
                  <ValidationError field="email" errors={state.errors} />
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-200">
                  Subject
                </span>
                <input
                  type="text"
                  name="subject"
                  placeholder="Need a portfolio website redesign"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20"
                />
                <ValidationError field="subject" errors={state.errors} />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-200">
                  Message
                </span>
                <textarea
                  name="message"
                  placeholder="Tell me about your goals, timeline, and what you want to build."
                  rows={6}
                  required
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20"
                />
                <ValidationError field="message" errors={state.errors} />
              </label>

              {Array.isArray(state.errors) && state.errors.length > 0 && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4">
                  <div className="flex items-center gap-2 text-sm text-red-300">
                    <FiAlertCircle className="h-4 w-4" />
                    <span>Please check the errors above and try again.</span>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex items-center justify-center rounded-full bg-sky-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-200 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
                >
                  Direct Email
                </a>
              </div>
            </form>

            <div className="mt-6 border-t border-slate-800 pt-5">
              <p className="text-sm text-slate-300">
                Reach me at{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-sky-300"
                >
                  {site.email}
                </a>
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 text-slate-100 transition hover:border-sky-400/40 hover:bg-slate-800 hover:text-sky-200"
                  >
                    {social.icon ? (
                      (() => {
                        const Icon =
                          SOCIAL_ICONS[
                            social.icon as keyof typeof SOCIAL_ICONS
                          ];

                        return <Icon className={ICON_CLASS.nav} />;
                      })()
                    ) : (
                      <span className="text-xs font-semibold">
                        {social.label}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <Chatbot />
      </div>
    </Section>
  );
};

export default ContactSection;
