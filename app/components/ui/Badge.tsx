import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="inline-flex items-center font-mono text-[13px] bg-accent-50 text-accent-700 px-2.5 py-1 rounded-[8px] border-none font-medium select-none">
      {children}
    </span>
  );
};

export default Badge;
