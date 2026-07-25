import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface BodyTextProps {
  children: ReactNode;
  className?: string;
}

export function BodyText({ children, className }: BodyTextProps) {
  return (
    <p className={cn("text-base leading-relaxed text-accent", className)}>
      {children}
    </p>
  );
}
