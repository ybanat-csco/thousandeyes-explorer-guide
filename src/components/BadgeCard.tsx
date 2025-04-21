
import React from "react";
import { Badge } from "@/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, LockKeyhole } from "lucide-react";

interface BadgeCardProps {
  badge: Badge;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ badge }) => {
  return (
    <Card className={`transition-all duration-300 ${badge.earned ? "border-yellow-400 shadow-md" : "opacity-80"}`}>
      <CardHeader className="text-center pb-0">
        <CardTitle className="flex items-center justify-center gap-2">
          {badge.earned ? (
            <Trophy className="text-yellow-500" />
          ) : (
            <LockKeyhole className="text-gray-400" />
          )}
          {badge.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 flex flex-col items-center justify-center text-center">
        <div className={`w-24 h-24 rounded-full mb-4 flex items-center justify-center ${badge.earned ? "bg-yellow-100" : "bg-gray-100"}`}>
          {badge.earned ? (
            <Trophy size={48} className="text-yellow-500 pulse-badge" />
          ) : (
            <LockKeyhole size={48} className="text-gray-400" />
          )}
        </div>
        <p className="text-sm text-gray-600">{badge.description}</p>
      </CardContent>
      <CardFooter className="pt-2 justify-center">
        <span className={`text-xs font-medium px-3 py-1 rounded-full ${badge.earned ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}`}>
          {badge.earned ? "EARNED" : "LOCKED"}
        </span>
      </CardFooter>
    </Card>
  );
};

export default BadgeCard;
