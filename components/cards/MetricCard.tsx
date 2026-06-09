import { cn } from "@/utils/cn";
import { Heading } from "@/components/typography/Heading";
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
        "border border-[#E5E7EB] bg-white p-5 h-full",
        className,
      )}
    >
      <div className="flex items-center gap-2.5 mb-1.5">
        {icon && <div className="shrink-0 text-[#111111]">{icon}</div>}
        <Heading as="h3" className="text-lg">{title}</Heading>
      </div>
      <p className="text-sm leading-relaxed text-[#4B5563]">{description}</p>
    </div>
  );
}
