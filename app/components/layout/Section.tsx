import type { ReactNode } from "react";

import Container from "~/components/layout/Container";
import { cn } from "~/lib/utils";

type SectionProps = {
  id?: string;
  title?: string | ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
};

const Section = ({
  id,
  title,
  description,
  children,
  className,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn("section-reveal relative py-16 md:py-24", className)}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-300/20 to-transparent" />
      <Container className="relative">
        {(title || description) && (
          <header className="mb-8 max-w-3xl md:mb-10">
            {title && (
              <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;
