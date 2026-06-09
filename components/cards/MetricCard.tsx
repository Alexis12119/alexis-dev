import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export function MetricCard({
  title,
  description,
  icon,
  className,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "border border-[#E5E7EB] bg-white p-6 md:p-8",
        className,
      )}
    >
      {icon && <div className="mb-4 text-[#111111]">{icon}</div>}
      <h3 className="text-lg font-semibold tracking-tight mb-2">{title}</h3>
      <p className="text-sm leading-relaxed text-[#4B5563]">{description}</p>
    </div>
  );
}
