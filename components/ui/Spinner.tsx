"use client";

import { cn } from "@/utils/cn";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

const sizeMap = {
  sm: "h-4 w-4 border-[1.5px]",
  md: "h-6 w-6 border-[2px]",
  lg: "h-8 w-8 border-[2px]",
};

export function Spinner({ size = "md", className, label = "Loading" }: SpinnerProps) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-[#E5E7EB] border-t-[#111111]",
        sizeMap[size],
        className,
      )}
      role="status"
      aria-label={label}
    >
      <span className="sr-only">{label}</span>
    </div>
  );
}
