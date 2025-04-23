
import { Badge } from "../types";

// Export the badges as both a default and named export for backward compatibility
export const badges: Badge[] = [
  {
    id: "investigator",
    name: "Investigator",
    description: "Awarded to users who master the art of analyzing performance data through ThousandEyes Views.",
    imageSrc: "/placeholder.svg",
    earned: false
  },
  {
    id: "designer",
    name: "Designer",
    description: "Awarded to users who create their first custom dashboard to visualize monitoring data effectively.",
    imageSrc: "/placeholder.svg",
    earned: false
  },
  {
    id: "security-guru",
    name: "Security Guru",
    description: "Awarded to users who implement role-based access control for enhanced security practices.",
    imageSrc: "/placeholder.svg",
    earned: false
  },
  {
    id: "thousandeyes-explorer",
    name: "ThousandEyes Explorer",
    description: "The ultimate achievement! Awarded to users who complete all onboarding tasks.",
    imageSrc: "/placeholder.svg",
    earned: false
  }
];

// Add initialBadges as the same as badges for backward compatibility
export const initialBadges = badges;
