import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="inline-flex items-center rounded-full border border-sky-300/15 bg-linear-to-r from-slate-900/95 to-slate-800/70 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-slate-200 shadow-[0_8px_24px_rgba(2,6,23,0.25)] backdrop-blur-sm transition-colors duration-300 hover:border-sky-300/30 hover:text-white">
      {children}
    </span>
  );
};

export default Badge;
