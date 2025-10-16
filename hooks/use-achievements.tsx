"use client";

import { useContext } from "react";
import { AchievementsContext } from "@/lib/contexts/achievements-context";

export function useAchievements() {
  const context = useContext(AchievementsContext);
  if (context === undefined) {
    throw new Error(
      "useAchievements must be used within an AchievementsProvider",
    );
  }
  return context;
}
