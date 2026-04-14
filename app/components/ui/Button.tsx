import type { ReactNode } from "react";

import { cn } from "~/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary";
};

const Button = ({
  children,
  href,
  className,
  variant = "primary",
}: ButtonProps) => {
  const baseClass = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition",
    variant === "primary"
      ? "bg-sky-300 text-slate-950 hover:bg-sky-200"
      : "border border-slate-700 bg-slate-900/70 text-slate-100 hover:bg-slate-800",
    className,
  );

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {children}
      </a>
    );
  }

  return <button className={baseClass}>{children}</button>;
};

export default Button;
