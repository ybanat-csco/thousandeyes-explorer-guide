
import { Task, Badge, UserProgress } from "../types";
import { toast } from "@/hooks/use-toast";
import { initialBadges } from "../data/badges";

export const updateBadgesAndProgress = (
  taskId: string,
  task: Task,
  currentProgress: UserProgress,
  badges: Badge[],
  setBadges: React.Dispatch<React.SetStateAction<Badge[]>>
): UserProgress => {
  const newPoints = currentProgress.points + task.reward.points;
  const newEarnedBadges = [...currentProgress.earnedBadges];

  if (task.reward.badges) {
    task.reward.badges.forEach(badgeId => {
      if (!newEarnedBadges.includes(badgeId)) {
        newEarnedBadges.push(badgeId);
        
        setBadges((prevBadges: Badge[]) => 
          prevBadges.map(badge => 
            badge.id === badgeId ? { ...badge, earned: true } : badge
          )
        );
        
        const earnedBadge = initialBadges.find(b => b.id === badgeId);
        if (earnedBadge) {
          toast({
            title: "Badge Unlocked!",
            description: `You've earned the ${earnedBadge.name} badge!`,
          });
        }
      }
    });
  }

  return {
    points: newPoints,
    completedTasks: [...currentProgress.completedTasks, taskId],
    earnedBadges: newEarnedBadges
  };
};

export const checkForExplorerBadge = (
  tasks: Task[],
  userProgress: UserProgress,
  badges: Badge[],
  setBadges: React.Dispatch<React.SetStateAction<Badge[]>>,
  setUserProgress: React.Dispatch<React.SetStateAction<UserProgress>>
) => {
  const allTasksCompleted = tasks.length > 0 && tasks.every(task => task.completed);
  
  if (allTasksCompleted && !userProgress.earnedBadges.includes("thousandeyes-explorer")) {
    const updatedBadges = badges.map(badge => 
      badge.id === "thousandeyes-explorer" ? { ...badge, earned: true } : badge
    );
    
    setBadges(updatedBadges);
    
    setUserProgress((prev: UserProgress) => ({
      ...prev,
      earnedBadges: [...prev.earnedBadges, "thousandeyes-explorer"]
    }));
    
    toast({
      title: "Achievement Unlocked!",
      description: "You've earned the ThousandEyes Explorer badge by completing all tasks!",
    });
  }
};
