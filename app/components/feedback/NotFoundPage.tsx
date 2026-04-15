import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <main className="page-shell flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <section className="w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center shadow-[0_20px_50px_rgba(2,6,23,0.6)]">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-7 flex items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-sky-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
          >
            Go Home
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
          >
            Go Back
          </button>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
