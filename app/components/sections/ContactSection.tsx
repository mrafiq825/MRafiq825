import {
  FiMail,
  FiMessageCircle,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Section from "~/components/layout/Section";
import Card from "~/components/ui/Card";
import Chatbot from "~/components/ui/Chatbot";
import { site } from "~/data/site";
import { socials } from "~/data/socials";
import { ICON_CLASS } from "~/lib/constants";

const SOCIAL_ICONS = {
  Facebook: FaFacebookF,
  Github: FaGithub,
  X: FaXTwitter,
  Linkedin: FaLinkedinIn,
  Instagram: FaInstagram,
  Whatsapp: FaWhatsapp,
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
          <FiMail className={`${ICON_CLASS.section} text-accent-600`} />
          Contact and Chat
        </>
      }
      description="Use the contact form for project inquiries and the chatbot panel for quick questions about services, availability, and next steps."
      className="border-t border-border-default bg-bg-page"
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="relative flex flex-col justify-between">
          <div className="relative">
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-accent-100 bg-accent-50 text-accent-700">
                <FiMessageCircle className={ICON_CLASS.nav} />
              </span>
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                  Contact form
                </p>
                <p className="text-sm text-text-secondary">
                  Start a project conversation
                </p>
              </div>
            </div>

            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent-700 mb-6">
              {site.availability}
            </p>

            {state.succeeded && (
              <div className="mt-6 rounded-[12px] border border-emerald-200 bg-emerald-50 p-4 text-center">
                <div className="mb-2 flex items-center justify-center">
                  <FiCheckCircle className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="mb-1 text-base font-bold text-emerald-800">
                  Message sent
                </h3>
                <p className="text-sm text-emerald-700">
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
                <label className="space-y-2 block">
                  <span className="text-sm font-medium text-text-secondary">
                    Your name
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Muhammad Rafiq"
                    required
                    className="w-full bg-bg-surface border border-border-default rounded-[10px] py-2.5 px-3.5 text-text-primary outline-none transition duration-200 placeholder:text-text-muted focus:border-accent-600 focus:ring-4 focus:ring-accent-50"
                  />
                  <ValidationError field="name" errors={state.errors} />
                </label>

                <label className="space-y-2 block">
                  <span className="text-sm font-medium text-text-secondary">
                    Email address
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full bg-bg-surface border border-border-default rounded-[10px] py-2.5 px-3.5 text-text-primary outline-none transition duration-200 placeholder:text-text-muted focus:border-accent-600 focus:ring-4 focus:ring-accent-50"
                  />
                  <ValidationError field="email" errors={state.errors} />
                </label>
              </div>

              <label className="space-y-2 block">
                <span className="text-sm font-medium text-text-secondary">
                  Subject
                </span>
                <input
                  type="text"
                  name="subject"
                  placeholder="Need a portfolio website redesign"
                  className="w-full bg-bg-surface border border-border-default rounded-[10px] py-2.5 px-3.5 text-text-primary outline-none transition duration-200 placeholder:text-text-muted focus:border-accent-600 focus:ring-4 focus:ring-accent-50"
                />
                <ValidationError field="subject" errors={state.errors} />
              </label>

              <label className="space-y-2 block">
                <span className="text-sm font-medium text-text-secondary">
                  Message
                </span>
                <textarea
                  name="message"
                  placeholder="Tell me about your goals, timeline, and what you want to build."
                  rows={6}
                  required
                  className="w-full resize-none bg-bg-surface border border-border-default rounded-[10px] py-2.5 px-3.5 text-text-primary outline-none transition duration-200 placeholder:text-text-muted focus:border-accent-600 focus:ring-4 focus:ring-accent-50"
                />
                <ValidationError field="message" errors={state.errors} />
              </label>

              {Array.isArray(state.errors) && state.errors.length > 0 && (
                <div className="rounded-[12px] border border-rose-200 bg-rose-50 p-4">
                  <div className="flex items-center gap-2 text-sm text-rose-800">
                    <FiAlertCircle className="h-4 w-4 text-rose-700" />
                    <span>Please check the errors above and try again.</span>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex items-center justify-center rounded-[12px] bg-accent-600 text-white px-6 py-3 text-sm font-medium transition-all duration-200 ease-out hover:bg-accent-700 active:bg-accent-800 disabled:cursor-not-allowed disabled:bg-accent-100 disabled:text-text-muted"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center justify-center rounded-[12px] border border-border-default bg-transparent text-text-primary px-6 py-3 text-sm font-medium transition hover:border-border-hover hover:bg-bg-surface-hover active:bg-bg-surface-hover/80"
                >
                  Direct Email
                </a>
              </div>
            </form>

            <div className="mt-6 border-t border-border-default pt-5">
              <p className="text-sm text-text-secondary">
                Reach me at{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-bold text-accent-700 hover:text-accent-800 transition-colors"
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
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-default bg-transparent text-text-primary transition hover:border-border-hover hover:bg-bg-surface-hover hover:text-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2"
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
