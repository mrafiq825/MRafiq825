import { FiCpu, FiSend, FiStar, FiUser } from "react-icons/fi";
import { type FormEvent, useEffect, useRef, useState } from "react";
import Card from "./Card";
import { CHATBOT_QUICK_PROMPTS } from "~/data/chatbotContext";
import { useGeminiChat } from "~/lib/useGeminiChat";
import { ICON_CLASS } from "~/lib/constants";

const renderMessageText = (text: string) => {
  const lines = text.split("\n");

  return (
    <div className="space-y-2">
      {lines.map((rawLine, index) => {
        const line = rawLine.trim();

        if (!line) {
          return <div key={`space-${index}`} className="h-2" />;
        }

        const bulletMatch = line.match(/^[-*]\s+(.*)$/);
        if (bulletMatch) {
          return (
            <div key={`bullet-${index}`} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/80" />
              <p className="text-sm leading-relaxed text-inherit">
                {bulletMatch[1]}
              </p>
            </div>
          );
        }

        const numberedMatch = line.match(/^(\d+)\.\s+(.*)$/);
        if (numberedMatch) {
          return (
            <div key={`numbered-${index}`} className="flex items-start gap-2">
              <span className="min-w-5 text-xs font-semibold text-slate-300/90">
                {numberedMatch[1]}.
              </span>
              <p className="text-sm leading-relaxed text-inherit">
                {numberedMatch[2]}
              </p>
            </div>
          );
        }

        const headingMatch = line.match(/^\*\*(.+)\*\*:?$/);
        if (headingMatch) {
          return (
            <p
              key={`heading-${index}`}
              className="pt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300"
            >
              {headingMatch[1]}
            </p>
          );
        }

        return (
          <p
            key={`paragraph-${index}`}
            className="text-sm leading-relaxed text-inherit"
          >
            {line}
          </p>
        );
      })}
    </div>
  );
};

const Chatbot = () => {
  const [chatInput, setChatInput] = useState("");
  const messageListRef = useRef<HTMLDivElement>(null);
  const { chatMessages, isLoading, sendChatMessage } = useGeminiChat();

  useEffect(() => {
    if (!messageListRef.current) {
      return;
    }

    messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
  }, [chatMessages, isLoading]);

  const handleChatSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendChatMessage(chatInput);
    setChatInput("");
  };

  return (
    <Card className="relative overflow-hidden border-slate-700/80 bg-slate-900/90 p-0">
      <div className="pointer-events-none absolute -right-20 top-6 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-12 h-32 w-32 rounded-full bg-sky-300/10 blur-3xl" />

      <div className="relative flex h-full min-h-140 flex-col">
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/70 px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
              <FiCpu className={ICON_CLASS.nav} />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-100">
                Portfolio Assistant
              </p>
              <p className="flex items-center gap-2 text-xs text-slate-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Online now
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 px-3 py-4">
          <div
            ref={messageListRef}
            className="h-82.5 space-y-4 overflow-y-auto rounded-2xl border border-slate-800/90 bg-slate-950/60 p-3"
          >
            {chatMessages.map((chatMessage) => {
              const isAssistant = chatMessage.role === "assistant";

              return (
                <div
                  key={chatMessage.id}
                  className={`flex items-end gap-2 ${
                    isAssistant ? "justify-start" : "justify-end"
                  }`}
                >
                  {isAssistant && (
                    <span className="mb-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                      <FiStar className={ICON_CLASS.action} />
                    </span>
                  )}

                  <div
                    className={`max-w-[84%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                      isAssistant
                        ? "rounded-bl-md border border-slate-700 bg-slate-900/90 text-slate-200"
                        : "rounded-br-md border border-cyan-300/20 bg-cyan-400/10 text-slate-100"
                    }`}
                  >
                    {renderMessageText(chatMessage.text)}
                    <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-slate-400">
                      {isAssistant ? "Assistant" : "You"} • {chatMessage.time}
                    </p>
                  </div>

                  {!isAssistant && (
                    <span className="mb-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-300">
                      <FiUser className={ICON_CLASS.action} />
                    </span>
                  )}
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-end gap-2">
                <span className="mb-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                  <FiStar className={ICON_CLASS.action} />
                </span>
                <div className="rounded-2xl rounded-bl-md border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.2s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.1s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {CHATBOT_QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => sendChatMessage(prompt)}
                disabled={isLoading}
                className="rounded-full border border-slate-700 bg-slate-900/90 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-cyan-400/40 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 bg-slate-950/70 p-3">
          <form className="flex items-center gap-2" onSubmit={handleChatSubmit}>
            <div className="relative flex-1">
              <input
                type="text"
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                placeholder="Type your message about experience, skills, or bio..."
                disabled={isLoading}
                className="w-full rounded-full border border-slate-700 bg-slate-900/80 py-3 pl-4 pr-12 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 disabled:opacity-50"
              />
              <span className="pointer-events-none absolute inset-y-0 right-3 inline-flex items-center text-slate-500">
                <FiCpu className={ICON_CLASS.action} />
              </span>
            </div>
            <button
              type="submit"
              disabled={isLoading || !chatInput.trim()}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cyan-300 text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Send message"
            >
              <FiSend className={ICON_CLASS.action} />
            </button>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default Chatbot;
