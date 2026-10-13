import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-xs font-medium bg-subtle text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
