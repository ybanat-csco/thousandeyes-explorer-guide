
import React from "react";
import ResourceCard from "@/components/ResourceCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Video, FileText, MessagesSquare, GraduationCap } from "lucide-react";

const Resources: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex items-center mb-8">
        <Button variant="ghost" asChild className="mr-2">
          <Link to="/">
            <ArrowLeft size={16} className="mr-2" /> Back
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Additional Resources</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ResourceCard 
          title="Documentation" 
          description="Explore the full ThousandEyes documentation to get detailed information about all features."
          link="https://docs.thousandeyes.com/"
          icon={<BookOpen size={20} className="text-primary" />}
        />
        
        <ResourceCard 
          title="Video Tutorials" 
          description="Watch step-by-step video guides to learn how to use ThousandEyes effectively."
          link="https://www.thousandeyes.com/learning/telex/how-to"
          icon={<Video size={20} className="text-primary" />}
        />
        
        <ResourceCard 
          title="Best Practices" 
          description="Learn recommended strategies and configurations for optimal monitoring."
          link="https://www.thousandeyes.com/learning/telex/best-practices"
          icon={<FileText size={20} className="text-primary" />}
        />
        
        <ResourceCard 
          title="Community Forum" 
          description="Connect with other ThousandEyes users to share knowledge and get help."
          link="https://success.thousandeyes.com/PublicMain/Home"
          icon={<MessagesSquare size={20} className="text-primary" />}
        />
        
        <ResourceCard 
          title="Learning Center" 
          description="Access training materials and courses to become a ThousandEyes expert."
          link="https://www.thousandeyes.com/learning/"
          icon={<GraduationCap size={20} className="text-primary" />}
        />
      </div>
    </div>
  );
};

export default Resources;
