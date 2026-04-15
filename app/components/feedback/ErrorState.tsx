import { Link } from "react-router";

type ErrorStateProps = {
  title?: string;
  description?: string;
  stack?: string;
};

const ErrorState = ({
  title = "Something went wrong",
  description = "An unexpected error occurred. Please try again.",
  stack,
}: ErrorStateProps) => {
  return (
    <main className="page-shell flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <section className="w-full max-w-xl rounded-2xl border border-rose-400/30 bg-slate-900/80 p-6 shadow-[0_16px_42px_rgba(2,6,23,0.6)]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-300/90">
          Error
        </p>
        <h1 className="mt-2 text-2xl font-bold text-slate-100">{title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-sky-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
          >
            Back to Home
          </Link>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
          >
            Reload Page
          </button>
        </div>

        {stack && (
          <pre className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-xs text-rose-200/90">
            <code>{stack}</code>
          </pre>
        )}
      </section>
    </main>
  );
};

export default ErrorState;
