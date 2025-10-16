"use client";

import { useState, useEffect, type ReactNode } from "react";
import { AchievementsContext } from "./achievements-context";
import { AchievementNotification } from "@/components/achievement-notification";
import { Achievement, AchievementsContextType } from "@/lib/types/achievements";

const defaultAchievements: Achievement[] = [
  {
    id: "welcome",
    title: "Welcome!",
    description: "Visited the portfolio",
    icon: "🎉",
    unlocked: false,
  },
  {
    id: "about-explorer",
    title: "About Explorer",
    description: "Read about Alexis",
    icon: "👤",
    unlocked: false,
  },
  {
    id: "skill-seeker",
    title: "Skill Seeker",
    description: "Checked out the skills",
    icon: "🛠️",
    unlocked: false,
  },
  {
    id: "project-viewer",
    title: "Project Viewer",
    description: "Explored the projects",
    icon: "💻",
    unlocked: false,
  },
  {
    id: "contact-initiator",
    title: "Contact Initiator",
    description: "Opened contact form",
    icon: "📧",
    unlocked: false,
  },
  {
    id: "navigator",
    title: "Terminal Navigator",
    description: "Used terminal navigation",
    icon: "⌨️",
    unlocked: false,
  },
  {
    id: "theme-switcher",
    title: "Theme Switcher",
    description: "Toggled dark/light mode",
    icon: "🌓",
    unlocked: false,
  },
  {
    id: "konami-master",
    title: "Konami Master",
    description: "Found the secret code",
    icon: "🎮",
    unlocked: false,
  },
  {
    id: "resume-viewer",
    title: "RPG Resume Viewer",
    description: "Checked the RPG resume",
    icon: "🎲",
    unlocked: true,
  },
];

export function AchievementsProvider({ children }: { children: ReactNode }) {
  const [achievements, setAchievements] = useState<Achievement[]>(defaultAchievements);
  const [showNotification, setShowNotification] = useState<Achievement | null>(null);

  useEffect(() => {
    // Load achievements from localStorage
    const saved = localStorage.getItem("portfolio-achievements");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setAchievements(parsed);
      } catch (error) {
        console.error("Error loading achievements:", error);
      }
    }
  }, []);

  const unlockAchievement = (
    id: string,
    title: string,
    description: string,
    icon = "🏆",
  ) => {
    setAchievements((prev) => {
      const existing = prev.find((a) => a.id === id);
      if (existing && existing.unlocked) return prev;

      const updated = prev.map((achievement) =>
        achievement.id === id
          ? {
              ...achievement,
              title,
              description,
              icon,
              unlocked: true,
              unlockedAt: new Date(),
            }
          : achievement,
      );

      // If achievement doesn't exist, add it
      if (!existing) {
        updated.push({
          id,
          title,
          description,
          icon,
          unlocked: true,
          unlockedAt: new Date(),
        });
      }

      // Save to localStorage
      localStorage.setItem("portfolio-achievements", JSON.stringify(updated));

      // Show notification
      const unlockedAchievement = updated.find((a) => a.id === id);
      if (unlockedAchievement) {
        setShowNotification(unlockedAchievement);
        setTimeout(() => setShowNotification(null), 3000);
      }

      return updated;
    });
  };

  const getUnlockedCount = () => achievements.filter((a) => a.unlocked).length;

  const contextValue: AchievementsContextType = {
    achievements,
    unlockAchievement,
    getUnlockedCount,
  };

  return (
    <AchievementsContext.Provider value={contextValue}>
      {children}
      {showNotification && (
        <AchievementNotification achievement={showNotification} />
      )}
    </AchievementsContext.Provider>
  );
}
