import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface CaptionProps {
  children: ReactNode;
  className?: string;
}

export function Caption({ children, className }: CaptionProps) {
  return (
    <p className={cn("text-sm text-muted", className)}>
      {children}
    </p>
  );
}
