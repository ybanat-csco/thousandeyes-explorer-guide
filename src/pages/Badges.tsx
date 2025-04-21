
import React from "react";
import { useOnboarding } from "@/context/OnboardingContext";
import BadgeCard from "@/components/BadgeCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Badges: React.FC = () => {
  const { badges, userProgress } = useOnboarding();

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Button variant="ghost" asChild className="mr-2">
            <Link to="/">
              <ArrowLeft size={16} className="mr-2" /> Back
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Achievement Badges</h1>
        </div>
        <div className="text-sm px-3 py-1 bg-slate-100 rounded-full">
          {userProgress.earnedBadges.length} / {badges.length} Badges Earned
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {badges.map((badge) => (
          <BadgeCard key={badge.id} badge={badge} />
        ))}
      </div>
    </div>
  );
};

export default Badges;
