import type { ReactNode } from "react";

import Container from "~/components/layout/Container";
import { cn } from "~/lib/utils";

type SectionProps = {
  id?: string;
  title?: string;
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
    <section id={id} className={cn("section-reveal py-16 md:py-24", className)}>
      <Container>
        {(title || description) && (
          <header className="mb-8 max-w-2xl md:mb-10">
            {title && (
              <h2 className="text-2xl font-bold text-slate-100 md:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-slate-300">{description}</p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;
