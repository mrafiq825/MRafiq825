import { Mail } from "lucide-react";

import Section from "~/components/layout/Section";
import Button from "~/components/ui/Button";
import { site } from "~/data/site";
import { socials } from "~/data/socials";

const ContactSection = () => {
  return (
    <Section
      id="contact"
      title={
        <>
          <Mail className="h-8 w-8 text-sky-400" />
          Let's Talk
        </>
      }
      description="Want to dive deeper? Feel free to reach out. I am always excited to share insights and collaborate."
      className="border-t border-slate-800"
    >
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
          {site.availability}
        </p>
        <p className="text-slate-300">
          Reach me at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-sky-300"
          >
            {site.email}
          </a>
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button href={`mailto:${site.email}`}>Send Email</Button>
          <Button href={site.cvUrl} variant="secondary">
            Download CV
          </Button>
          {socials.map((social) => (
            <Button key={social.label} href={social.href} variant="secondary">
              {social.label}
            </Button>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
