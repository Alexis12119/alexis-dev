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
        "border border-border bg-white p-5 h-full hover:border-2 hover:border-foreground hover:scale-[1.02] transition-all duration-300",
        className,
      )}
    >
      <div className="flex items-center gap-2.5 mb-1.5">
        {icon && <div className="shrink-0 text-foreground">{icon}</div>}
        <Heading as="h3" className="text-lg">{title}</Heading>
      </div>
      <p className="text-sm leading-relaxed text-accent">{description}</p>
    </div>
  );
}
