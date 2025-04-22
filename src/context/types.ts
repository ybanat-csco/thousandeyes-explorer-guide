
import { Task, Badge, UserProgress } from "../types";

export interface OnboardingContextType {
  tasks: Task[];
  badges: Badge[];
  userProgress: UserProgress;
  completedTaskCount: number;
  totalTaskCount: number;
  progressPercentage: number;
  completeTask: (taskId: string) => void;
  completeStep: (taskId: string, stepId: string) => void;
  resetProgress: () => void;
}

export const defaultUserProgress: UserProgress = {
  points: 0,
  completedTasks: [],
  earnedBadges: [],
};
