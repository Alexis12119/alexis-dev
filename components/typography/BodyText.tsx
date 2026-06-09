import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface BodyTextProps {
  children: ReactNode;
  className?: string;
}

export function BodyText({ children, className }: BodyTextProps) {
  return (
    <p className={cn("text-base leading-relaxed text-[#4B5563]", className)}>
      {children}
    </p>
  );
}
