
import React from "react";
import { useOnboarding } from "@/context/useOnboarding";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trophy, ArrowRight } from "lucide-react";

const Home: React.FC = () => {
  const { progressPercentage, userProgress, completedTaskCount, totalTaskCount } = useOnboarding();
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Orange gradient hero section + white text */}
      <div
        className="rounded-xl shadow-lg overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, #F97316 0%, #FEC6A1 100%)",
          color: "#fff",
        }}
      >
        <div className="flex flex-col md:flex-row">
          <div className="p-8 md:p-12 md:w-3/5">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to ThousandEyes Explorer
            </h1>
            <p className="text-lg mb-6 opacity-90">
              Your interactive guide to mastering ThousandEyes platform. Complete tasks, earn badges, and become a monitoring expert.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/tasks">
                <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-100">
                  Start Exploring <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/badges">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/20"
                >
                  View Badges <Trophy className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-orange-900/30 p-8 md:p-12 md:w-2/5">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Your Progress</h3>
              <div className="h-3 bg-white/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div className="mt-2 flex justify-between">
                <span className="text-sm">{completedTaskCount}/{totalTaskCount} Tasks</span>
                <span className="text-sm">{progressPercentage}% Complete</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Achievements</h3>
              <div className="flex items-center gap-2 mb-2">
                <Trophy size={18} />
                <span>{userProgress.earnedBadges.length} Badges Earned</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-white/80 flex items-center justify-center text-orange-700 font-bold">
                  P
                </div>
                <span>{userProgress.points} Points Collected</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Complete Tasks</h3>
            <p className="text-gray-600">
              Work through the guided tasks to learn essential ThousandEyes features. Each task has step-by-step instructions.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-full bg-orange-200 text-orange-700 flex items-center justify-center mb-4">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Earn Points</h3>
            <p className="text-gray-600">
              As you complete tasks, you'll earn points to track your progress through the onboarding journey.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-full bg-orange-300 text-orange-800 flex items-center justify-center mb-4">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Unlock Badges</h3>
            <p className="text-gray-600">
              Achieve mastery in specific areas to earn badges. Collect all badges to become a ThousandEyes Explorer!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link to="/tasks">
          <Button size="lg" className="bg-primary text-white">
            View All Tasks <ArrowRight className="ml-2" size={18} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

