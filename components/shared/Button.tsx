import { cn } from "@/utils/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
}

const variants = {
  primary:
    "bg-[#111111] text-white hover:bg-[#2a2a2a]",
  secondary:
    "border border-[#E5E7EB] text-[#111111] hover:bg-[#F3F4F6]",
  ghost:
    "text-[#111111] hover:text-[#6B7280]",
};

export function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
