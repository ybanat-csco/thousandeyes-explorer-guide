
import React from "react";
import { useOnboarding } from "@/context/useOnboarding";

const ProgressBar: React.FC = () => {
  const { completedTaskCount, totalTaskCount, progressPercentage } = useOnboarding();

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">Progress</span>
        <span className="text-sm font-medium">{completedTaskCount}/{totalTaskCount} Tasks</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="mt-1 text-right text-sm font-semibold">{progressPercentage}% Complete</div>
    </div>
  );
};

export default ProgressBar;
