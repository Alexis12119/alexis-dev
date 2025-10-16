"use client";

import { createContext } from "react";
import { AchievementsContextType } from "@/lib/types/achievements";

export const AchievementsContext = createContext<AchievementsContextType | undefined>(
  undefined,
);
