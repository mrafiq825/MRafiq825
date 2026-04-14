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
        "rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-[0_10px_30px_rgba(2,6,23,0.45)]",
        className,
      )}
    >
      {children}
    </article>
  );
};

export default Card;
