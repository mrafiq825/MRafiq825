import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="inline-flex items-center font-mono text-[13px] glass-badge px-2.5 py-1 rounded-[8px] font-medium select-none">
      {children}
    </span>
  );
};

export default Badge;
