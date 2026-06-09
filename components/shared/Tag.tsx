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
        "inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-[#F3F4F6] text-[#4B5563] hover:bg-[#E5E7EB] transition-colors",
        className,
      )}
    >
      {children}
    </span>
  );
}
