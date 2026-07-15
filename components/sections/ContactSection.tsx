import {
  AppleMail,
  AppleMessage,
  AppleCheckCircle,
  AppleWarning,
  AppleFacebook,
  AppleGithub,
  AppleInstagram,
  AppleLinkedin,
  AppleWhatsapp,
  AppleXSocial,
} from "@/components/ui/AppleIcons";
import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Section from "@/components/layout/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import AnimatedButton from "@/components/ui/AnimatedButton";
import Chatbot from "@/components/ui/Chatbot";
import { site } from "@/data/site";
import { socials } from "@/data/socials";
import { ICON_CLASS } from "@/lib/constants";

const SOCIAL_ICONS = {
  Facebook: AppleFacebook,
  Github: AppleGithub,
  X: AppleXSocial,
  Linkedin: AppleLinkedin,
  Instagram: AppleInstagram,
  Whatsapp: AppleWhatsapp,
  WhatsApp: AppleWhatsapp,
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
          <AppleMail className={`${ICON_CLASS.section} text-accent-600`} />
          Contact and Chat
        </>
      }
      description="Use the contact form for project inquiries and the chatbot panel for quick questions about services, availability, and next steps."
      className="border-t border-border-default bg-transparent pt-0 md:pt-5"
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="relative flex flex-col justify-between">
          <div className="relative">
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-accent-100 bg-accent-50 text-accent-700">
                <AppleMessage className={ICON_CLASS.nav} />
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
              <div className="mt-6 rounded-[12px] border border-emerald-800/40 bg-emerald-950/30 p-4 text-center">
                <div className="mb-2 flex items-center justify-center">
                  <AppleCheckCircle className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="mb-1 text-base font-bold text-emerald-400">
                  Message sent
                </h3>
                <p className="text-sm text-emerald-400/90">
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
                    className="w-full glass-input rounded-[10px] py-2.5 px-3.5 text-text-primary placeholder:text-text-muted"
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
                    className="w-full glass-input rounded-[10px] py-2.5 px-3.5 text-text-primary placeholder:text-text-muted"
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
                  className="w-full glass-input rounded-[10px] py-2.5 px-3.5 text-text-primary placeholder:text-text-muted"
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
                  className="w-full resize-none glass-input rounded-[10px] py-2.5 px-3.5 text-text-primary placeholder:text-text-muted"
                />
                <ValidationError field="message" errors={state.errors} />
              </label>

              {Array.isArray(state.errors) && state.errors.length > 0 && (
                <div className="rounded-[12px] border border-rose-800/40 bg-rose-950/30 p-4">
                  <div className="flex items-center gap-2 text-sm text-rose-400">
                    <AppleWarning className="h-4 w-4 text-rose-400" />
                    <span>Please check the errors above and try again.</span>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  type="submit"
                  disabled={state.submitting}
                  variant="metal"
                  size="sm"
                  dark
                  icon={state.submitting ? null : <AppleMessage className="h-4 w-4" />}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
                <AnimatedButton
                  as="a"
                  href={`mailto:${site.email}`}
                  dark
                  className="group py-3 font-medium transition-all duration-300"
                >
                  Direct Email
                </AnimatedButton>
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
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full glass-button-secondary text-text-primary hover:text-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-600"
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
