
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useOnboarding } from "@/context/OnboardingContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Trophy } from "lucide-react";
import StepCarousel from "@/components/StepCarousel";

const TaskDetail: React.FC = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const navigate = useNavigate();
  const { tasks, completeStep, completeTask } = useOnboarding();

  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Task Not Found</h1>
        <p className="mb-6">The task you are looking for does not exist.</p>
        <Button asChild>
          <Link to="/tasks">Return to Tasks</Link>
        </Button>
      </div>
    );
  }

  const handleCompleteAll = () => {
    completeTask(task.id);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mr-4">
          <ArrowLeft size={16} className="mr-2" /> Back
        </Button>
        <h1 className="text-3xl font-bold">{task.title}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Task Description</CardTitle>
              <CardDescription className="text-base">{task.description}</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              {/* Removed "Step-by-Step Guide" heading */}
              <CardTitle className="flex items-center">
                {task.completed && (
                  <Badge className="ml-2 bg-green-500">Completed</Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <StepCarousel
                steps={task.steps}
                onStepCheck={(stepId) => completeStep(task.id, stepId)}
                showCheckbox
              />

              {!task.completed && (
                <div className="mt-8">
                  <Button onClick={handleCompleteAll} className="w-full">
                    Mark All Steps as Completed
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Rewards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium">Points:</span>
                <Badge variant="outline" className="text-base px-3 py-1">
                  {task.reward.points}
                </Badge>
              </div>

              {task.reward.badges && task.reward.badges.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Badges:</h4>
                  <div className="space-y-2">
                    {task.reward.badges.map((badgeId) => (
                      <div
                        key={badgeId}
                        className="flex items-center p-2 rounded-md bg-yellow-50 border border-yellow-200"
                      >
                        <Trophy size={18} className="text-yellow-500 mr-2" />
                        <span className="text-sm">{badgeId} Badge</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
