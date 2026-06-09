import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-16 md:mb-20", className)}>
      {label && (
        <p className="text-sm font-medium text-[#6B7280] mb-4">{label}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-[#6B7280] max-w-prose">{description}</p>
      )}
    </div>
  );
}
