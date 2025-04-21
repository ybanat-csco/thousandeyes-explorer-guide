
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, link, icon }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-end">
        <Button asChild variant="outline" className="flex items-center gap-1">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Learn More <ArrowRight size={16} />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
