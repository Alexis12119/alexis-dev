"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface CollapsibleContentProps {
  children: ReactNode;
  id?: string;
}

export function CollapsibleContent({ children, id }: CollapsibleContentProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <button
        onClick={() => setExpanded(!expanded)}
        className="md:hidden mx-auto flex flex-col items-center gap-1 text-xs font-medium text-muted hover:text-foreground transition-colors mb-1 pt-2"
        aria-expanded={expanded}
        aria-controls={id}
      >
        <span>{expanded ? "See less" : "See more"}</span>
        <span className={cn("inline-flex", !expanded && "animate-bounce-subtle")}>
          <ChevronDown
            size={14}
            className={cn("transition-transform duration-200", expanded && "rotate-180")}
          />
        </span>
      </button>

      <motion.div
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="md:hidden overflow-hidden"
      >
        <div className="pb-2 space-y-2">{children}</div>
      </motion.div>

      <div className="hidden md:block pb-3 space-y-3">{children}</div>
    </>
  );
}
