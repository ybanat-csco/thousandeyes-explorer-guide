
import React, { useState } from "react";
import { TaskStep } from "@/types";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface StepCarouselProps {
  steps: TaskStep[];
  onStepCheck?: (stepId: string) => void;
  showCheckbox?: boolean;
  taskTitle?: string;
  resources?: { label: string; href: string }[];
}

const StepCarousel: React.FC<StepCarouselProps> = ({
  steps,
  onStepCheck,
  showCheckbox = false,
  taskTitle,
  resources = []
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = steps.length;
  const step = steps[currentStep];
  const progressValue = Math.round(((currentStep + 1) / totalSteps) * 100);

  const handlePrev = () => setCurrentStep((s) => Math.max(0, s - 1));
  const handleNext = () => setCurrentStep((s) => Math.min(steps.length - 1, s + 1));

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Main Step Card */}
      <div className="flex-1 rounded-2xl bg-white border shadow-md px-0 py-0 flex flex-col items-center">
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

        {/* Reference Image - Centered and Large */}
        <div className="flex w-full justify-center mt-2 mb-6">
          <img
            src={step.imageSrc || "/placeholder.svg"}
            alt={`Step ${currentStep + 1} reference`}
            className="rounded-xl border bg-gray-100 object-contain max-h-[380px] w-full"
            style={{ maxWidth: 520 }}
            loading="lazy"
          />
        </div>

        {/* Description and Controls */}
        <div className="flex flex-col w-full px-8 pb-8">
          {/* Multiline description (excluding first line) */}
          <div className="text-base text-gray-800 whitespace-pre-line mb-4 leading-relaxed min-h-[90px]">
            {step.description.split("\n").slice(1).join("\n")}
          </div>
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
            <Button variant="default" size="sm" onClick={handleNext} disabled={currentStep === totalSteps - 1}>
              Next Step <ChevronRight size={18} className="ml-1" />
            </Button>
          </div>
          <div className="text-xs text-gray-600 text-center mt-2">
            {progressValue}% Complete
          </div>
        </div>
      </div>

      {/* Side Panel: Resources and Progress (no reference image) */}
      <div className="min-w-[240px] max-w-xs shrink-0 flex flex-col gap-4">
        {/* Resources */}
        <div className="bg-white rounded-lg border shadow-sm px-5 py-4">
          <div className="font-semibold mb-2 text-[16px] text-dark-purple">Additional Resources</div>
          {resources.length > 0 ? (
            <ul>
              {resources.map((r) => (
                <li key={r.href} className="mb-2 last:mb-0">
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline hover:text-blue-900 text-[15px]"
                  >
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <span className="text-gray-600 text-[15px]">No resources</span>
          )}
        </div>
        {/* Progress */}
        <div className="bg-white rounded-lg border shadow-sm px-5 py-4">
          <div className="font-semibold mb-2 text-[16px] text-dark-purple">Your Progress</div>
          <Progress value={progressValue} className="mb-2 h-3 rounded-full" />
          <div className="text-xs text-gray-600">{progressValue}%</div>
        </div>
      </div>
    </div>
  );
};

export default StepCarousel;
