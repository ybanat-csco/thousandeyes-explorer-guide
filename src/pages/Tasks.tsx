
import React from "react";
import { useOnboarding } from "@/context/OnboardingContext";
import TaskCard from "@/components/TaskCard";
import ProgressBar from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";

const Tasks: React.FC = () => {
  const { tasks, resetProgress } = useOnboarding();

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Task List</h1>
        <Button variant="destructive" onClick={resetProgress}>Reset Progress</Button>
      </div>
      
      <ProgressBar />
      
      <div className="space-y-6">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
