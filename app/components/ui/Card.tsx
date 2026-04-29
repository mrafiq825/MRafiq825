import type { ReactNode } from "react";

import { cn } from "~/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-slate-800/90 bg-linear-to-br from-slate-900/95 via-slate-900/80 to-slate-950/95 p-6 shadow-[0_18px_50px_rgba(2,6,23,0.42)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-700",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/0 via-white/0 to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </article>
  );
};

export default Card;
