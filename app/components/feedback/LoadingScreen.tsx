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
    <main className="page-shell flex min-h-screen items-center justify-center bg-bg-page px-6">
      <div className="relative z-10 w-full max-w-xl rounded-[20px] border border-border-default bg-bg-surface px-6 py-10 text-center shadow-sm sm:px-10">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-border-default bg-bg-surface-hover shadow-sm">
          <img
            src="/Rafiq-logo.png"
            alt="Muhammad Rafiq logo - Full-Stack Developer & Software Engineer"
            className="h-16 w-16 object-contain"
          />
        </div>

        <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {typedTitle || (showTypewriter ? "" : "\u00a0")}
          {(showTypewriter || typedTitle.length > 0) && (
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-[1em] w-0.5 animate-pulse bg-accent-600 align-[-0.15em]"
            />
          )}
        </h1>
        <p className="mt-3 min-h-6 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-accent-700 sm:text-sm">
          {typedMessage || (showTypewriter ? "" : "\u00a0")}
          {typedTitle.length === title.length &&
            typedMessage.length < message.length && (
              <span
                aria-hidden="true"
                className="ml-1 inline-block h-[1em] w-0.5 animate-pulse bg-accent-600 align-[-0.15em]"
              />
            )}
        </p>
        <p
          className={`mt-3 font-body text-sm leading-relaxed text-text-secondary transition-opacity duration-500 sm:text-base ${
            typedMessage.length === message.length ? "opacity-100" : "opacity-0"
          }`}
        >
          {subtitle}
        </p>

        <div className="mt-8 h-2 overflow-hidden rounded-full bg-bg-surface-hover border border-border-default">
          <div className="h-full w-2/3 rounded-full bg-accent-600" />
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent-600" />
          <span>{isTyping ? "Starting up" : "Preparing the experience"}</span>
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent-600 [animation-delay:150ms]" />
        </div>
      </div>
    </main>
  );
};

export default LoadingScreen;
