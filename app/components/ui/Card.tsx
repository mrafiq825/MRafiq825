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
        "bg-bg-surface border border-border-default rounded-[16px] p-6 sm:px-8 sm:py-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:border-border-hover",
        className,
      )}
    >
      {children}
    </article>
  );
};

export default Card;
