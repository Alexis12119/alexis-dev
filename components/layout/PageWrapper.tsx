import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <div className={cn("bg-[#FAF9F6] text-[#111111]", className)}>
      {children}
    </div>
  );
}
