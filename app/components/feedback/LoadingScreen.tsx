import { useEffect, useState } from "react";

type LoadingScreenProps = {
  message?: string;
  title?: string;
  subtitle?: string;
};

const LoadingScreen = ({
  message = "Loading...",
  title = "Muhammad Rafiq",
  subtitle = "Full-Stack Developer | DevOps | SDET",
}: LoadingScreenProps) => {
  const INTRO_DELAY_MS = 450;
  const TITLE_SPEED_MS = 55;
  const BETWEEN_PHASE_DELAY_MS = 220;
  const MESSAGE_SPEED_MS = 40;

  const [showTypewriter, setShowTypewriter] = useState(false);
  const [typedTitle, setTypedTitle] = useState("");
  const [typedMessage, setTypedMessage] = useState("");
  const [canTypeMessage, setCanTypeMessage] = useState(false);

  useEffect(() => {
    const introTimer = window.setTimeout(() => {
      setShowTypewriter(true);
    }, INTRO_DELAY_MS);

    return () => {
      window.clearTimeout(introTimer);
    };
  }, []);

  useEffect(() => {
    if (
      !showTypewriter ||
      typedTitle.length !== title.length ||
      canTypeMessage
    ) {
      return;
    }

    const betweenPhaseTimer = window.setTimeout(() => {
      setCanTypeMessage(true);
    }, BETWEEN_PHASE_DELAY_MS);

    return () => {
      window.clearTimeout(betweenPhaseTimer);
    };
  }, [
    showTypewriter,
    typedTitle.length,
    title.length,
    canTypeMessage,
    BETWEEN_PHASE_DELAY_MS,
  ]);

  useEffect(() => {
    if (!showTypewriter) {
      return;
    }

    if (typedTitle.length < title.length) {
      const titleTimer = window.setTimeout(() => {
        setTypedTitle(title.slice(0, typedTitle.length + 1));
      }, TITLE_SPEED_MS);

      return () => {
        window.clearTimeout(titleTimer);
      };
    }

    if (canTypeMessage && typedMessage.length < message.length) {
      const messageTimer = window.setTimeout(() => {
        setTypedMessage(message.slice(0, typedMessage.length + 1));
      }, MESSAGE_SPEED_MS);

      return () => {
        window.clearTimeout(messageTimer);
      };
    }
  }, [
    showTypewriter,
    title,
    message,
    typedTitle,
    typedMessage,
    canTypeMessage,
    TITLE_SPEED_MS,
    MESSAGE_SPEED_MS,
  ]);

  const isTyping =
    showTypewriter &&
    (typedTitle.length < title.length || typedMessage.length < message.length);

  return (
    <main className="page-shell flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_52%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.1),transparent_48%)]" />
      <div className="relative z-10 w-full max-w-xl rounded-4xl border border-slate-800/80 bg-slate-950/70 px-6 py-10 text-center shadow-[0_28px_90px_rgba(2,6,23,0.72)] backdrop-blur-xl sm:px-10">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-sky-400/30 bg-slate-900/80 shadow-[0_0_0_1px_rgba(125,211,252,0.1),0_0_50px_rgba(56,189,248,0.16)]">
          <img
            src="/Rafiq-logo.png"
            alt="Rafiq logo"
            className="h-16 w-16 object-contain"
          />
        </div>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {typedTitle || (showTypewriter ? "" : "\u00a0")}
          {(showTypewriter || typedTitle.length > 0) && (
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-[1em] w-0.5 animate-pulse bg-sky-300 align-[-0.15em]"
            />
          )}
        </h1>
        <p className="mt-3 min-h-6 text-xs font-semibold uppercase tracking-[0.38em] text-sky-300/80 sm:text-sm">
          {typedMessage || (showTypewriter ? "" : "\u00a0")}
          {typedTitle.length === title.length &&
            typedMessage.length < message.length && (
              <span
                aria-hidden="true"
                className="ml-1 inline-block h-[1em] w-0.5 animate-pulse bg-sky-300 align-[-0.15em]"
              />
            )}
        </p>
        <p
          className={`mt-3 text-sm leading-6 text-slate-300 transition-opacity duration-500 sm:text-base ${
            typedMessage.length === message.length ? "opacity-100" : "opacity-0"
          }`}
        >
          {subtitle}
        </p>

        <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full w-2/3 rounded-full bg-linear-to-r from-sky-300 via-cyan-300 to-sky-500 shadow-[0_0_18px_rgba(125,211,252,0.65)]" />
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-sky-300" />
          <span>{isTyping ? "Starting up" : "Preparing the experience"}</span>
          <span className="h-2 w-2 animate-pulse rounded-full bg-sky-300 [animation-delay:150ms]" />
        </div>
      </div>
    </main>
  );
};

export default LoadingScreen;
