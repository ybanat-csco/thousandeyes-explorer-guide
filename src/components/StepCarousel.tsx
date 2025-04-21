
import React from "react";
import { TaskStep } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";

interface StepCarouselProps {
  steps: TaskStep[];
  onStepCheck?: (stepId: string) => void;
  showCheckbox?: boolean;
}

const StepCarousel: React.FC<StepCarouselProps> = ({
  steps,
  onStepCheck,
  showCheckbox = false
}) => {
  return (
    <Carousel className="relative w-full max-w-xl mx-auto animate-fade-in">
      <CarouselContent>
        {steps.map((step, idx) => (
          <CarouselItem key={step.id}>
            <div className="flex flex-col items-center gap-4 text-center pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-bold text-primary">Step {idx + 1}</span>
                {showCheckbox && (
                  <Checkbox
                    checked={step.completed}
                    onCheckedChange={() => onStepCheck && onStepCheck(step.id)}
                    className="data-[state=checked]:bg-green-500"
                  />
                )}
              </div>
              <img
                src={step.imageSrc || "/placeholder.svg"}
                alt={`Step ${idx + 1} reference`}
                className="w-full max-w-[320px] max-h-48 object-cover rounded-lg bg-gray-100 border"
                loading="lazy"
              />
              <div className="whitespace-pre-line text-base text-gray-700 mt-2">
                {step.description}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-between mt-2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default StepCarousel;
