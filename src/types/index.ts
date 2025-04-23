
export interface Task {
  id: string;
  title: string;
  description: string;
  steps: TaskStep[];
  reward: {
    points: number;
    badges?: string[];
  };
  completed: boolean;
  imageSrc?: string;
}

export interface TaskStep {
  id: string;
  description: string;
  completed: boolean;
  imageSrc?: string; // add optional image per step
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  earned: boolean;
}

export interface UserProgress {
  points: number;
  completedTasks: string[];
  earnedBadges: string[];
}

export interface TaskWithSteps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  badge?: string;
  badgeName?: string;
  steps: {
    title: string;
    description: string;
    image: string;
    resources: {
      title: string;
      link: string;
    }[];
  }[];
}
