
import React, { createContext, useContext, useState, useEffect } from "react";
import { tasks as initialTasks } from "../data/tasks";
import { badges as initialBadges } from "../data/badges";
import { Task, Badge, UserProgress } from "../types";
import { toast } from "@/hooks/use-toast";

interface OnboardingContextType {
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

const defaultUserProgress: UserProgress = {
  points: 0,
  completedTasks: [],
  earnedBadges: [],
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [badges, setBadges] = useState<Badge[]>([]);
  const [userProgress, setUserProgress] = useState<UserProgress>(defaultUserProgress);

  // Initialize from localStorage or use default data
  useEffect(() => {
    const savedProgress = localStorage.getItem("thousandEyesProgress");
    if (savedProgress) {
      const parsedProgress = JSON.parse(savedProgress) as {
        tasks: Task[];
        badges: Badge[];
        userProgress: UserProgress;
      };
      
      setTasks(parsedProgress.tasks);
      setBadges(parsedProgress.badges);
      setUserProgress(parsedProgress.userProgress);
    } else {
      // Use initial data
      setTasks(initialTasks);
      setBadges(initialBadges);
    }
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (tasks.length > 0 && badges.length > 0) {
      localStorage.setItem(
        "thousandEyesProgress",
        JSON.stringify({ tasks, badges, userProgress })
      );
    }
  }, [tasks, badges, userProgress]);

  // Check if all tasks are completed to award final badge
  useEffect(() => {
    const allTasksCompleted = tasks.length > 0 && tasks.every(task => task.completed);
    
    if (allTasksCompleted && !userProgress.earnedBadges.includes("thousandeyes-explorer")) {
      const updatedBadges = badges.map(badge => 
        badge.id === "thousandeyes-explorer" ? { ...badge, earned: true } : badge
      );
      
      setBadges(updatedBadges);
      
      setUserProgress(prev => ({
        ...prev,
        earnedBadges: [...prev.earnedBadges, "thousandeyes-explorer"]
      }));
      
      toast({
        title: "Achievement Unlocked!",
        description: "You've earned the ThousandEyes Explorer badge by completing all tasks!",
      });
    }
  }, [tasks, badges, userProgress]);

  const completeStep = (taskId: string, stepId: string) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        const updatedSteps = task.steps.map(step => 
          step.id === stepId ? { ...step, completed: true } : step
        );
        
        // Check if all steps are completed
        const allStepsCompleted = updatedSteps.every(step => step.completed);
        
        return {
          ...task,
          steps: updatedSteps,
          completed: allStepsCompleted
        };
      }
      return task;
    });
    
    setTasks(updatedTasks);
    
    // If a task was completed by this step, award points and badges
    const completedTask = updatedTasks.find(
      t => t.id === taskId && t.completed && !userProgress.completedTasks.includes(t.id)
    );
    
    if (completedTask) {
      // Award points
      const newPoints = userProgress.points + completedTask.reward.points;
      
      // Award badges if any
      const newEarnedBadges = [...userProgress.earnedBadges];
      
      if (completedTask.reward.badges) {
        completedTask.reward.badges.forEach(badgeId => {
          if (!newEarnedBadges.includes(badgeId)) {
            newEarnedBadges.push(badgeId);
            
            // Update badge earned status
            setBadges(prevBadges => 
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
      
      // Update user progress
      setUserProgress({
        points: newPoints,
        completedTasks: [...userProgress.completedTasks, taskId],
        earnedBadges: newEarnedBadges
      });
      
      toast({
        title: "Task Completed!",
        description: `You've earned ${completedTask.reward.points} points!`,
      });
    }
  };

  const completeTask = (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;
    
    // Mark all steps as completed
    task.steps.forEach(step => {
      completeStep(taskId, step.id);
    });
  };

  const resetProgress = () => {
    setTasks(initialTasks);
    setBadges(initialBadges);
    setUserProgress(defaultUserProgress);
    localStorage.removeItem("thousandEyesProgress");
    toast({
      title: "Progress Reset",
      description: "All your progress has been reset.",
    });
  };

  const completedTaskCount = userProgress.completedTasks.length;
  const totalTaskCount = tasks.length;
  const progressPercentage = totalTaskCount > 0 
    ? Math.round((completedTaskCount / totalTaskCount) * 100) 
    : 0;

  const value = {
    tasks,
    badges,
    userProgress,
    completedTaskCount,
    totalTaskCount,
    progressPercentage,
    completeTask,
    completeStep,
    resetProgress
  };

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
};
