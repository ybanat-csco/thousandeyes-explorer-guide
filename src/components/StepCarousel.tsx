
import React, { useState } from "react";
import { TaskStep } from "@/types";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, CheckCircle, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useOnboarding } from "@/context/useOnboarding";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface StepCarouselProps {
  steps: TaskStep[];
  onStepCheck?: (stepId: string) => void;
  showCheckbox?: boolean;
  taskTitle?: string;
  stepImageWidthClass?: string;
}

const StepCarousel: React.FC<StepCarouselProps> = ({
  steps,
  onStepCheck,
  showCheckbox = false,
  taskTitle,
  stepImageWidthClass = "w-full max-w-[520px]",
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { taskId } = useParams();
  const { completeTask } = useOnboarding();
  const navigate = useNavigate();

  const totalSteps = steps.length;
  const step = steps[currentStep];
  const progressValue = Math.round(((currentStep + 1) / totalSteps) * 100);
  const isLastStep = currentStep === steps.length - 1;

  const handlePrev = () => setCurrentStep((s) => Math.max(0, s - 1));
  const handleNext = () => setCurrentStep((s) => Math.min(steps.length - 1, s + 1));

  const handleFinishTask = () => {
    if (taskId) {
      try {
        completeTask(taskId);
        toast({
          title: "Task completed!",
          description: "You've successfully completed this task.",
        });

        // Redirect to tasks page after completion
        setTimeout(() => {
          navigate("/tasks");
        }, 1500);
      } catch (error) {
        console.error("Error completing task:", error);
        toast({
          title: "Error",
          description: "There was a problem completing the task. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  // Extract resources for this step from the step itself (from tasks.ts)
  const stepResources = step.resources || [];

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Progress + Title */}
      <div className="flex w-full items-center gap-4 mb-2 px-8 pt-6">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="px-3"
        >
          <Link to="/tasks" className="flex items-center">
            <ChevronLeft className="mr-1" size={18} />
            Back to Tasks
          </Link>
        </Button>
        {taskTitle && (
          <h2 className="text-2xl font-bold text-dark-purple ml-2">{taskTitle}</h2>
        )}
      </div>
      <div className="w-full px-8">
        <div className="text-sm mb-2 text-[#717387] font-medium">
          Step {currentStep + 1} of {totalSteps}: <span className="text-primary font-semibold">{step.description.split("\n")[0]}</span>
        </div>
      </div>

      {/* Reference Image - Centered, Large & Responsive */}
      <div className={`flex w-full justify-center mt-2 mb-6`}>
        <img
          src={step.imageSrc || "/placeholder.svg"}
          alt={`Step ${currentStep + 1} reference`}
          className={`rounded-xl border bg-gray-100 object-contain ${stepImageWidthClass} max-h-[400px]`}
          style={{}}
          loading="lazy"
        />
      </div>

      {/* Description and Controls */}
      <div className="flex flex-col w-full px-8 pb-8 max-w-3xl">
        {/* Multiline description */}
        <div className="text-base text-gray-800 whitespace-pre-line mb-4 leading-relaxed min-h-[90px] border-t pt-5">
          {step.description.split("\n").slice(1).join("\n")}
        </div>
        
        {/* Additional Resources PER STEP */}
        {stepResources && stepResources.length > 0 && (
          <div className="mb-4 mt-2 p-3 bg-blue-50 rounded-md border border-blue-100">
            <div className="font-semibold mb-2 text-[15px] text-blue-800 flex items-center">
              <LinkIcon size={16} className="mr-2" /> Additional Resources:
            </div>
            <ul className="space-y-1.5">
              {stepResources.map((resource) => (
                <li key={resource.link} className="mb-1 last:mb-0 pl-2">
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 text-[15px] flex items-center"
                  >
                    <span className="underline">{resource.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {showCheckbox && (
          <div className="mt-2 flex items-center gap-2">
            <input
              id={`step-check-${step.id}`}
              type="checkbox"
              checked={step.completed}
              onChange={() => onStepCheck && onStepCheck(step.id)}
              className="accent-blue-600 w-5 h-5"
            />
            <label htmlFor={`step-check-${step.id}`} className="text-sm text-gray-600 select-none cursor-pointer">
              Mark as Completed
            </label>
          </div>
        )}
        
        {/* Step Controls */}
        <div className="mt-6 flex justify-between items-center">
          <Button variant="outline" size="sm" onClick={handlePrev} disabled={currentStep === 0} className="mr-2">
            <ChevronLeft size={18} className="mr-1" /> Previous
          </Button>
          <Progress value={progressValue} className="flex-1 mx-4 h-3 rounded-full"/>
          {isLastStep ? (
            <Button 
              variant="default" 
              size="sm" 
              onClick={handleFinishTask}
              className="flex items-center"
            >
              Finish Task <CheckCircle size={18} className="ml-2" />
            </Button>
          ) : (
            <Button 
              variant="default" 
              size="sm" 
              onClick={handleNext} 
              disabled={currentStep === totalSteps - 1}
            >
              Next Step <ChevronRight size={18} className="ml-1" />
            </Button>
          )}
        </div>
        <div className="text-xs text-gray-600 text-center mt-2">
          {progressValue}% Complete
        </div>
      </div>
    </div>
  );
};

export default StepCarousel;
