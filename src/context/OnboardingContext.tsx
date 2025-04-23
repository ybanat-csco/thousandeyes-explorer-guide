
import { createContext } from "react";
import { OnboardingContextType, defaultUserProgress } from "./types";

export const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);
