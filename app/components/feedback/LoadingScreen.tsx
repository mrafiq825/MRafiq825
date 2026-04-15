type LoadingScreenProps = {
  message?: string;
};

const LoadingScreen = ({ message = "Loading..." }: LoadingScreenProps) => {
  return (
    <main className="page-shell flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/75 px-6 py-8 text-center shadow-[0_16px_42px_rgba(2,6,23,0.6)]">
        <div className="mx-auto h-11 w-11 animate-spin rounded-full border-2 border-slate-700 border-t-sky-300" />
        <p className="mt-4 text-sm font-medium text-slate-300">{message}</p>
      </div>
    </main>
  );
};

export default LoadingScreen;
