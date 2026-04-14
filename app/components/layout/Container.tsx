import type { ReactNode } from "react";

import { cn } from "~/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
