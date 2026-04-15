import {
  FiCpu,
  FiMail,
  FiMessageCircle,
  FiSend,
  FiStar,
  FiUser,
} from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { type FormEvent, useState } from "react";

import Section from "~/components/layout/Section";
import Card from "~/components/ui/Card";
import { site } from "~/data/site";
import { socials } from "~/data/socials";
import { ICON_CLASS } from "~/lib/constants";

const SOCIAL_ICONS = {
  Github: FaGithub,
  Linkedin: FaLinkedinIn,
  Instagram: FaInstagram,
};

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      text: "Hi, I’m the portfolio assistant. Ask about services, availability, or how to start a project.",
    },
  ]);

  const quickPrompts = [
    "What services do you offer?",
    "Are you available for new projects?",
    "How can I contact you directly?",
  ];

  const sendChatMessage = (text: string) => {
    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    const nextUserMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      text: trimmedText,
    };

    const lowerText = trimmedText.toLowerCase();
    let reply =
      "Thanks for reaching out. Leave your message in the contact form and I’ll respond as soon as possible.";

    if (lowerText.includes("service") || lowerText.includes("offer")) {
      reply =
        "I build full-stack web apps, mobile-ready interfaces, AI/ML integrations, and reliable delivery workflows.";
    } else if (lowerText.includes("avail") || lowerText.includes("hire")) {
      reply =
        "Yes, I’m currently available for new projects and collaboration opportunities.";
    } else if (lowerText.includes("contact") || lowerText.includes("email")) {
      reply = `You can email me directly at ${site.email} or use the form beside this chat.`;
    } else if (lowerText.includes("project") || lowerText.includes("build")) {
      reply =
        "If you have a project in mind, share the goals, timeline, and scope. I’ll help you shape the next step.";
    }

    const nextAssistantMessage: ChatMessage = {
      id: Date.now() + 1,
      role: "assistant",
      text: reply,
    };

    setChatMessages((currentMessages) => [
      ...currentMessages,
      nextUserMessage,
      nextAssistantMessage,
    ]);
    setChatInput("");
  };

  const handleChatSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendChatMessage(chatInput);
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mailSubject =
      subject.trim() || `Project inquiry from ${name || "the website"}`;
    const mailBody = [
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      "",
      message.trim() || "No message provided.",
    ].join("\n");

    const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailtoHref;
  };

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

            <form className="mt-6 space-y-4" onSubmit={handleContactSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-200">
                    Your name
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Muhammad Rafiq"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-200">
                    Email address
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20"
                  />
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-200">
                  Subject
                </span>
                <input
                  type="text"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  placeholder="Need a portfolio website redesign"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-200">
                  Message
                </span>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell me about your goals, timeline, and what you want to build."
                  rows={6}
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20"
                />
              </label>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-sky-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
                >
                  Send Message
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

        <Card className="flex h-full flex-col border-slate-700/80 bg-slate-900/80">
          <div className="mb-5 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
              <FiCpu className={ICON_CLASS.nav} />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Chatbot area
              </p>
              <p className="text-sm text-slate-300">
                Quick portfolio assistant
              </p>
            </div>
          </div>

          <div className="flex-1 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <div className="max-h-90 space-y-3 overflow-y-auto pr-1">
              {chatMessages.map((chatMessage) => {
                const isAssistant = chatMessage.role === "assistant";

                return (
                  <div
                    key={chatMessage.id}
                    className={`flex items-start gap-3 ${
                      isAssistant ? "justify-start" : "justify-end"
                    }`}
                  >
                    {isAssistant && (
                      <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                        <FiCpu className={ICON_CLASS.action} />
                      </span>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        isAssistant
                          ? "border border-slate-700 bg-slate-900/80 text-slate-200"
                          : "border border-sky-400/20 bg-sky-400/10 text-slate-100"
                      }`}
                    >
                      <p className="mb-1 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {isAssistant ? (
                          <>
                            <FiStar className={ICON_CLASS.label} /> Assistant
                          </>
                        ) : (
                          <>
                            <FiUser className={ICON_CLASS.label} /> You
                          </>
                        )}
                      </p>
                      <p>{chatMessage.text}</p>
                    </div>

                    {!isAssistant && (
                      <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/10 text-sky-300">
                        <FiUser className={ICON_CLASS.action} />
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendChatMessage(prompt)}
                  className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-cyan-400/40 hover:bg-slate-800"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form className="mt-4 flex gap-3" onSubmit={handleChatSubmit}>
              <input
                type="text"
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                placeholder="Ask a quick question..."
                className="min-w-0 flex-1 rounded-full border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                <FiSend className={`${ICON_CLASS.action} mr-2`} />
                Send
              </button>
            </form>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-4 text-sm text-slate-300">
            <p className="font-semibold text-slate-100">
              What the chatbot can do
            </p>
            <p className="mt-1">
              Answer project questions, share availability, and point visitors
              to the best contact path for serious inquiries.
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default ContactSection;
