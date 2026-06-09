import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface SubheadingProps {
  children: ReactNode;
  className?: string;
}

export function Subheading({ children, className }: SubheadingProps) {
  return (
    <p className={cn("text-lg text-[#6B7280] max-w-prose", className)}>
      {children}
    </p>
  );
}
