
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

  // Progress percentage for step-based progress bar
  const progressValue = Math.round(((currentStep + 1) / totalSteps) * 100);

  const handlePrev = () => setCurrentStep((s) => Math.max(0, s - 1));
  const handleNext = () => setCurrentStep((s) => Math.min(steps.length - 1, s + 1));

  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-10">
      {/* Main Step Card */}
      <div className="flex-1">
        {/* Header: Back + Title + Progress */}
        <div className="flex items-center gap-4 mb-4">
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
          <h2 className="text-2xl font-bold text-dark-purple ml-2">{taskTitle}</h2>
        </div>
        <div className="text-sm mb-2 ml-1 text-[#717387] font-medium">
          Step {currentStep + 1} of {totalSteps}: <span className="text-primary">{step.description.split("\n")[0]}</span>
        </div>

        {/* Step Card */}
        <div className="bg-white rounded-xl shadow-md border px-6 py-6 flex flex-col md:flex-row gap-6">
          {/* Reference Image */}
          <div className="flex-shrink-0 flex items-center justify-center md:w-1/2 mb-4 md:mb-0">
            <img
              src={step.imageSrc || "/placeholder.svg"}
              alt={`Step ${currentStep + 1} reference`}
              className="rounded-lg border bg-gray-100 object-contain max-h-72 w-full"
              style={{ maxWidth: 400 }}
              loading="lazy"
            />
          </div>
          {/* Description */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-dark-purple">
                {step.description.split("\n")[0]}
              </h3>
              <div className="text-base text-gray-700 whitespace-pre-line">
                {step.description.split("\n").slice(1).join("\n")}
              </div>
            </div>
            {showCheckbox && (
              <div className="mt-6 flex items-center gap-2">
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
            {/* Step Control Buttons */}
            <div className="mt-8 flex items-center">
              <Button variant="outline" size="sm" onClick={handlePrev} disabled={currentStep === 0} className="mr-2">
                <ChevronLeft size={18} className="mr-1" /> Previous
              </Button>
              <Button variant="default" size="sm" onClick={handleNext} disabled={currentStep === totalSteps - 1}>
                Next Step <ChevronRight size={18} className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Side Panel: Resources + Progress */}
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
          <Progress value={progressValue} className="mb-2" />
          <div className="text-xs text-gray-600">{progressValue}%</div>
        </div>
      </div>
    </div>
  );
};

export default StepCarousel;
