import { cn } from "@/utils/cn";
import { Heading } from "@/components/typography/Heading";
import { Subheading } from "@/components/typography/Subheading";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  index?: string;
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

export function SectionHeader({
  index,
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      {(index || label) && (
        <p className="font-mono text-xs text-muted mb-4">
          {index && <span className="mr-3">{index}</span>}
          {label && <span className="font-medium">{label}</span>}
        </p>
      )}
      <Heading as="h2" className="mb-4">
        {title}
      </Heading>
      {description && <Subheading>{description}</Subheading>}
    </div>
  );
}
