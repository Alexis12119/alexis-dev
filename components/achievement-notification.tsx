"use client";

import { Achievement } from "@/lib/types/achievements";

interface AchievementNotificationProps {
  achievement: Achievement;
}

export function AchievementNotification({ achievement }: AchievementNotificationProps) {
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
