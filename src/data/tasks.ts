
import { Task } from "../types";

// Demo images (feel free to change in the future)
const stepImages = [
  "/placeholder.svg",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
];

export const tasks: Task[] = [
  {
    id: "create-first-test",
    title: "Create Your First Test",
    description: "Set up a Page Load test to monitor website performance and availability. This will help you understand how your web applications perform from different locations.",
    steps: [
      {
        id: "step-1",
        description: "Navigate to the Tests section in ThousandEyes.",
        completed: false,
        imageSrc: stepImages[1],
      },
      {
        id: "step-2",
        description: "Click 'Create New Test' and select 'Page Load'.",
        completed: false,
        imageSrc: stepImages[2],
      },
      {
        id: "step-3",
        description: "Enter the URL you want to monitor and configure test settings.",
        completed: false,
        imageSrc: stepImages[3],
      },
      {
        id: "step-4",
        description: "Select test locations and frequency.",
        completed: false,
        imageSrc: stepImages[4],
      },
      {
        id: "step-5",
        description: "Save and run your test.",
        completed: false,
        imageSrc: stepImages[5],
      }
    ],
    reward: {
      points: 100
    },
    completed: false,
    imageSrc: "/placeholder.svg"
  },
  {
    id: "check-views",
    title: "Check Views Page",
    description: "Explore the Views page to understand how your website performs. Analyze waterfall diagrams, HTTP availability metrics, and path visualization to gain insights into user experience and potential bottlenecks.",
    steps: [
      {
        id: "step-1",
        description: "Navigate to the Views page in ThousandEyes.",
        completed: false,
        imageSrc: stepImages[1],
      },
      {
        id: "step-2",
        description: "Select your Page Load test from the dropdown.",
        completed: false,
        imageSrc: stepImages[2],
      },
      {
        id: "step-3",
        description: "Explore the Waterfall Diagram to understand load times of different page elements.",
        completed: false,
        imageSrc: stepImages[3],
      },
      {
        id: "step-4",
        description: "Check the HTTP Availability section to see uptime metrics.",
        completed: false,
        imageSrc: stepImages[4],
      },
      {
        id: "step-5",
        description: "Explore Path Visualization to understand network paths.",
        completed: false,
        imageSrc: stepImages[5],
      }
    ],
    reward: {
      points: 150,
      badges: ["investigator"]
    },
    completed: false,
    imageSrc: "/placeholder.svg"
  },
  {
    id: "deploy-template",
    title: "Deploy a Template",
    description: "Learn how to use templates to quickly deploy standardized tests across your organization. Templates help ensure consistency in monitoring practices and save time when setting up new tests.",
    steps: [
      {
        id: "step-1",
        description: "Go to the Templates section in ThousandEyes.",
        completed: false,
        imageSrc: stepImages[1],
      },
      {
        id: "step-2",
        description: "Select an existing template or create a new one based on your test.",
        completed: false,
        imageSrc: stepImages[2],
      },
      {
        id: "step-3",
        description: "Configure the template parameters and settings.",
        completed: false,
        imageSrc: stepImages[3],
      },
      {
        id: "step-4",
        description: "Deploy the template to create new tests.",
        completed: false,
        imageSrc: stepImages[4],
      }
    ],
    reward: {
      points: 200
    },
    completed: false,
    imageSrc: "/placeholder.svg"
  },
  {
    id: "create-dashboard",
    title: "Create Your First Dashboard",
    description: "Build a customized dashboard to visualize the metrics that matter most to your organization. Dashboards provide at-a-glance insights into your digital experience monitoring.",
    steps: [
      {
        id: "step-1",
        description: "Navigate to Dashboards section in ThousandEyes.",
        completed: false,
        imageSrc: stepImages[1],
      },
      {
        id: "step-2",
        description: "Click 'Create New Dashboard'.",
        completed: false,
        imageSrc: stepImages[2],
      },
      {
        id: "step-3",
        description: "Add widgets by selecting from available metrics.",
        completed: false,
        imageSrc: stepImages[3],
      },
      {
        id: "step-4",
        description: "Customize layout and visualization types.",
        completed: false,
        imageSrc: stepImages[4],
      },
      {
        id: "step-5",
        description: "Save and share your dashboard with team members.",
        completed: false,
        imageSrc: stepImages[5],
      }
    ],
    reward: {
      points: 250,
      badges: ["designer"]
    },
    completed: false,
    imageSrc: "/placeholder.svg"
  },
  {
    id: "create-alert",
    title: "Create the First Custom Alert",
    description: "Set up proactive alerts to be notified when issues arise. Custom alerts help you respond quickly to problems before they impact users.",
    steps: [
      {
        id: "step-1",
        description: "Go to Alerts section in ThousandEyes.",
        completed: false,
        imageSrc: stepImages[1],
      },
      {
        id: "step-2",
        description: "Click 'Create New Alert Rule'.",
        completed: false,
        imageSrc: stepImages[2],
      },
      {
        id: "step-3",
        description: "Select the test and metrics to monitor.",
        completed: false,
        imageSrc: stepImages[3],
      },
      {
        id: "step-4",
        description: "Set thresholds and conditions for triggering alerts.",
        completed: false,
        imageSrc: stepImages[4],
      },
      {
        id: "step-5",
        description: "Configure notification channels and save the alert rule.",
        completed: false,
        imageSrc: stepImages[5],
      }
    ],
    reward: {
      points: 200
    },
    completed: false,
    imageSrc: "/placeholder.svg"
  },
  {
    id: "endpoint-agents",
    title: "Introduction to Endpoint Agents",
    description: "Learn about Endpoint Agents and how they provide visibility into end-user experience. Deploy these agents to understand performance from your users' perspective.",
    steps: [
      {
        id: "step-1",
        description: "Navigate to Endpoint Agents section in ThousandEyes.",
        completed: false,
        imageSrc: stepImages[1],
      },
      {
        id: "step-2",
        description: "Review the Endpoint Agent documentation.",
        completed: false,
        imageSrc: stepImages[2],
      },
      {
        id: "step-3",
        description: "Download an Endpoint Agent for testing.",
        completed: false,
        imageSrc: stepImages[3],
      },
      {
        id: "step-4",
        description: "Deploy the agent on a test machine.",
        completed: false,
        imageSrc: stepImages[4],
      },
      {
        id: "step-5",
        description: "Verify the agent is reporting data correctly.",
        completed: false,
        imageSrc: stepImages[5],
      }
    ],
    reward: {
      points: 200
    },
    completed: false,
    imageSrc: "/placeholder.svg"
  },
  {
    id: "create-rbac",
    title: "Create the Role-Based Profile",
    description: "Set up Role-Based Access Control (RBAC) to manage user permissions and access to ThousandEyes resources. This ensures team members have appropriate access levels for their responsibilities.",
    steps: [
      {
        id: "step-1",
        description: "Go to Account Settings > Users & Roles in ThousandEyes.",
        completed: false,
        imageSrc: stepImages[1],
      },
      {
        id: "step-2",
        description: "Click 'Add New Role'.",
        completed: false,
        imageSrc: stepImages[2],
      },
      {
        id: "step-3",
        description: "Define permissions and access levels for the role.",
        completed: false,
        imageSrc: stepImages[3],
      },
      {
        id: "step-4",
        description: "Assign users to the newly created role.",
        completed: false,
        imageSrc: stepImages[4],
      },
      {
        id: "step-5",
        description: "Test the role permissions to ensure they work as expected.",
        completed: false,
        imageSrc: stepImages[5],
      }
    ],
    reward: {
      points: 250,
      badges: ["security-guru"]
    },
    completed: false,
    imageSrc: "/placeholder.svg"
  }
];

// NOTE: This file is getting quite long. Consider refactoring it into smaller files for maintainability!
