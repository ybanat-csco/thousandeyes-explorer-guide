
import React, { useState } from "react";
import { Task } from "@/types";
import { useOnboarding } from "@/context/useOnboarding";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import StepCarousel from "./StepCarousel";

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { completeStep } = useOnboarding();
  const [expandDetails, setExpandDetails] = useState(false);

  const toggleStepComplete = (stepId: string) => {
    completeStep(task.id, stepId);
  };

  return (
    <Card className={`mb-4 overflow-hidden transition-all duration-200 ${task.completed ? "border-green-400 shadow-md" : ""}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center gap-2">
              {task.completed && <CheckCircle size={18} className="text-green-500" />}
              {task.title}
            </CardTitle>
            <CardDescription className="mt-1">{task.description}</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-primary text-white">
              {task.reward.points} points
            </Badge>
            {task.reward.badges && task.reward.badges.map(badge => (
              <Badge key={badge} variant="outline" className="border-yellow-400 text-yellow-600">
                <Trophy size={14} className="mr-1" /> {badge}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-2">
        {expandDetails ? (
          <StepCarousel
            steps={task.steps}
            onStepCheck={toggleStepComplete}
            showCheckbox
          />
        ) : null}
      </CardContent>

      <CardFooter className="flex justify-between pt-2">
        <Button 
          variant="ghost" 
          onClick={() => setExpandDetails(!expandDetails)}
        >
          {expandDetails ? "Hide Details" : "Show Steps"}
        </Button>
        <Link to={`/task/${task.id}`}>
          <Button size="sm" className="flex items-center gap-1">
            View Task <ArrowRight size={16} />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
