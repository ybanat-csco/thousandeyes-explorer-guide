
import React, { useState, useEffect } from "react";
import { tasks as initialTasks } from "../data/tasks";
import { badges as initialBadges } from "../data/badges";
import { Task, Badge, UserProgress } from "../types";
import { toast } from "@/hooks/use-toast";
import { OnboardingContext } from "./OnboardingContext";
import { defaultUserProgress } from "./types";
import { updateBadgesAndProgress, checkForExplorerBadge } from "./onboarding-utils";

export const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [badges, setBadges] = useState<Badge[]>([]);
  const [userProgress, setUserProgress] = useState<UserProgress>(defaultUserProgress);

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
      setTasks(initialTasks);
      setBadges(initialBadges);
    }
  }, []);

  // Synchronize badges earned state with userProgress
  useEffect(() => {
    if (badges.length > 0 && userProgress.earnedBadges.length > 0) {
      const updatedBadges = badges.map(badge => ({
        ...badge,
        earned: userProgress.earnedBadges.includes(badge.id)
      }));
      
      setBadges(updatedBadges);
    }
  }, [userProgress.earnedBadges]);

  useEffect(() => {
    if (tasks.length > 0 && badges.length > 0) {
      localStorage.setItem(
        "thousandEyesProgress",
        JSON.stringify({ tasks, badges, userProgress })
      );
    }
  }, [tasks, badges, userProgress]);

  useEffect(() => {
    checkForExplorerBadge(tasks, userProgress, badges, setBadges, setUserProgress);
  }, [tasks, badges, userProgress]);

  const completeStep = (taskId: string, stepId: string) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        const updatedSteps = task.steps.map(step => 
          step.id === stepId ? { ...step, completed: true } : step
        );
        
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
    
    const completedTask = updatedTasks.find(
      t => t.id === taskId && t.completed && !userProgress.completedTasks.includes(t.id)
    );
    
    if (completedTask) {
      const newProgress = updateBadgesAndProgress(
        taskId,
        completedTask,
        userProgress,
        badges,
        setBadges
      );
      
      setUserProgress(newProgress);
      
      toast({
        title: "Task Completed!",
        description: `You've earned ${completedTask.reward.points} points!`,
      });
    }
  };

  const completeTask = (taskId: string) => {
    const taskToComplete = tasks.find(t => t.id === taskId);
    
    if (!taskToComplete || userProgress.completedTasks.includes(taskId)) return;
    
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          steps: task.steps.map(step => ({ ...step, completed: true })),
          completed: true
        };
      }
      return task;
    });
    
    setTasks(updatedTasks);
    
    const newProgress = updateBadgesAndProgress(
      taskId,
      taskToComplete,
      userProgress,
      badges,
      setBadges
    );
    
    setUserProgress(newProgress);
    
    toast({
      title: "Task Completed!",
      description: `You've earned ${taskToComplete.reward.points} points!`,
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
