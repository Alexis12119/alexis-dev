"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

interface AchievementsContextType {
  achievements: Achievement[];
  unlockAchievement: (
    id: string,
    title: string,
    description: string,
    icon?: string,
  ) => void;
  getUnlockedCount: () => number;
}

const AchievementsContext = createContext<AchievementsContextType | undefined>(
  undefined,
);

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
    id: "blog-reader",
    title: "Blog Reader",
    description: "Visited the blog",
    icon: "📖",
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
  // {
  //   id: "resume-viewer",
  //   title: "RPG Resume Viewer",
  //   description: "Checked the RPG resume",
  //   icon: "🎲",
  //   unlocked: false,
  // },
];

export function AchievementsProvider({ children }: { children: ReactNode }) {
  const [achievements, setAchievements] =
    useState<Achievement[]>(defaultAchievements);
  const [showNotification, setShowNotification] = useState<Achievement | null>(
    null,
  );

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

  return (
    <AchievementsContext.Provider
      value={{ achievements, unlockAchievement, getUnlockedCount }}
    >
      {children}
      {showNotification && (
        <AchievementNotification achievement={showNotification} />
      )}
    </AchievementsContext.Provider>
  );
}

function AchievementNotification({
  achievement,
}: {
  achievement: Achievement;
}) {
  return (
    <div className="fixed top-4 right-4 z-50 bg-card border rounded-lg p-4 shadow-lg animate-in slide-in-from-right-full">
      <div className="flex items-center space-x-3">
        <span className="text-2xl">{achievement.icon}</span>
        <div>
          <div className="font-semibold text-primary">
            Achievement Unlocked!
          </div>
          <div className="text-sm font-medium">{achievement.title}</div>
          <div className="text-xs text-muted-foreground">
            {achievement.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export function useAchievements() {
  const context = useContext(AchievementsContext);
  if (context === undefined) {
    throw new Error(
      "useAchievements must be used within an AchievementsProvider",
    );
  }
  return context;
}
