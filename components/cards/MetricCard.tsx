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
        "border border-[#E5E7EB] bg-white p-6 md:p-8",
        className,
      )}
    >
      {icon && <div className="mb-4 text-[#111111]">{icon}</div>}
      <Heading as="h3" className="text-lg mb-2">{title}</Heading>
      <p className="text-sm leading-relaxed text-[#4B5563]">{description}</p>
    </div>
  );
}
