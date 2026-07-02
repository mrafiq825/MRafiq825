import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <article
      className={cn(
        "glass-panel glass-panel-hover rounded-[16px] p-6 sm:px-8 sm:py-6",
        className,
      )}
    >
      {children}
    </article>
  );
};

export default Card;
