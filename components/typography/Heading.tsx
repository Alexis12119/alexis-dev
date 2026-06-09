import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps {
  as?: HeadingLevel;
  children: ReactNode;
  className?: string;
}

const styles: Record<HeadingLevel, string> = {
  h1: "text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight",
  h2: "text-3xl md:text-4xl font-semibold tracking-tight",
  h3: "text-2xl md:text-3xl font-semibold tracking-tight",
  h4: "text-xl font-semibold tracking-tight",
};

export function Heading({ as: Tag = "h2", children, className }: HeadingProps) {
  return <Tag className={cn(styles[Tag], className)}>{children}</Tag>;
}
