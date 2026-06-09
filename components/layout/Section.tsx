import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-24 md:py-32 scroll-mt-16", className)}
    >
      {children}
    </section>
  );
}
