
import React from "react";
import { useOnboarding } from "@/context/OnboardingContext";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const Header: React.FC = () => {
  const { userProgress, progressPercentage } = useOnboarding();

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">ThousandEyes Explorer</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Badge variant="secondary" className="px-3 py-1">
            <span className="text-sm font-semibold">{userProgress.points} Points</span>
          </Badge>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">{progressPercentage}%</span>
            <div className="w-24 h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-primary rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          <Link to="/badges">
            <Badge variant="outline" className="px-3 py-1 cursor-pointer hover:bg-accent">
              <span className="text-sm font-medium">Badges</span>
            </Badge>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
