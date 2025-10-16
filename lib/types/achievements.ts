export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

export interface AchievementsContextType {
  achievements: Achievement[];
  unlockAchievement: (
    id: string,
    title: string,
    description: string,
    icon?: string,
  ) => void;
  getUnlockedCount: () => number;
}
