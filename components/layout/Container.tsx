import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-8 md:px-12 lg:px-16", className)}>
      {children}
    </div>
  );
}
