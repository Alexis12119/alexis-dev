import { cn } from "@/utils/cn";

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <hr className={cn("border-t border-[#E5E7EB]", className)} />
  );
}
