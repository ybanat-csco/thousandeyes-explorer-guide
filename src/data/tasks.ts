
import { TaskWithSteps } from "@/types";

export const TASKS_DATA: TaskWithSteps[] = [
  {
    id: 1,
    title: "Create Your First Test",
    description: "Introduction to setting up a network test",
    completed: false,
    steps: [
      {
        title: "Introduction to ThosuandEyes Tests",
        description: `	•	Network Layer Tests: These include Agent-to-Server and Agent-to-Agent tests, which monitor connectivity and quality using TCP or UDP probing. They visualize network paths and characteristics like loss, latency, and jitter 
•	Web Layer Tests: These tests monitor service availability and performance, including HTTP Server tests for service metrics and Page Load tests for in-browser performance. Transaction tests emulate user interactions with websites 
•	DNS Layer Tests: DNS Server tests measure availability and resolution time, while DNS Trace tests verify DNS record delegation. DNS Security tests authenticate the validity of DNS records 
•	Voice Layer Tests: These include SIP and RTP tests to monitor VoIP quality and connectivity, simulating voice calls between agents

  `,
        image: "/images/test-layers.png",
        resources: [
          {
            title: "Getting Started with Cloud and Enterprise Tests",
            link: "https://docs.thousandeyes.com/product-documentation/getting-started/getting-started-with-cloud-and-enterprise-agent-tests"
          }
        ]
      },
      {
        title: "Navigate to Tests Section",
        description: "From the left pane menu, browse to Network&App Synthetics, then Select Test Settings:",
        image: "/images/task1-step1.png",
        resources: [
          {
            title: "Test Configuration Documentation",
            link: "https://docs.thousandeyes.com/product-documentation/tests"
          }
        ]
      },
      {
        title: "Create a Single Test",
        description: "In this section, we'll create a Web Page Load test to understand various the various components of testing. ",
        image: "/images/task1-step2.png",
        resources: [
          {
            title: "Understanding Test Types",
            link: "https://docs.thousandeyes.com/product-documentation/tests#supported-test-types"
          }
        ]
      },
      {
        title: "Configure Test Settings",
        description: "Select the type of test according to the needs and best practices. For example Page load and Transaction tests are more suited to web pages' performance. Network testing is used best for network segments performance. Hint - Test name should be indicative and include information like site name and use-case",
        image: "/images/task1-step3.png",
        resources: [
          {
            title: "Test Parameters Guide",
            link: "https://docs.thousandeyes.com/product-documentation/tests/working-with-test-settings#the-test-settings-page"
          }
        ]
      },
      {
        title: "Select Test Target",
        description: "Select the test target. It could be an IP Address or a hostname or a URL. Hint - Using Hostnames or URL's can help you detect DNS issues !",
        image: "/images/task1-step4.png",
        resources: [
          {
            title: "Test Parameters Guide",
            link: "https://docs.thousandeyes.com/product-documentation/tests/working-with-test-settings#the-test-settings-page"
          }
        ]
      },
      {
        title: "Set Test Frequency",
        description: "Determine how often the test should run. Low frequencies grant better visibility but will cost more units",
        image: "/images/task1-step5.png",
        resources: [
          {
            title: "Test Frequency and Unit Consumption",
            link: "https://docs.thousandeyes.com/product-documentation/user-management/usage-and-billing/calculating-units"
          }
        ]
      },
      {
        title: "Select Agents",
        description: "Agents are the vantage points from which tests are run. They represent users clusters. Internet users can be represented by Cloud Agents, whereas offices are represented by Enterprise Agents. For this practice, we will choose 3 Cloud Agents in 3 Geographical areas (Tokyo, Amsterdam, Austin)",
        image: "/images/task1-step6.png",
        resources: [
          {
            title: "Agents Selection",
            link: "https://docs.thousandeyes.com/product-documentation/global-vantage-points"
          }
        ]
      },
      {
        title: "Advanced Settings",
        description: "ThousandEyes offers granualirity and control offer specific test configuration. Most testing environments would work using the default settings",
        image: "/images/task1-step7.png",
        resources: [
          {
            title: "Advanced Test Parameters Configuration",
            link: "https://docs.thousandeyes.com/product-documentation/tests/web-layer-tests#web-layer-tests-advanced-settings"
          }
        ]
      },
      {
        title: "Create Test",
        description: "Create the test to run periodically, or click Run Once, in order to get one round of testing",
        image: "/images/task1-step8.png",
        resources: [
          {
            title: "Scheduled vs Instant Tests",
            link: "https://docs.thousandeyes.com/product-documentation/tests/scheduled-v-s-instant-tests"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Check Views Page",
    description: "Explore data visualization on the Views page",
    completed: false,
    badge: "Investigator",
    badgeName: "Investigator",
    steps: [
      {
        title: "Access the Views Page",
        description: "Navigate to the Views section from the main dashboard.",
        image: "/images/task2-step1.png",
        resources: [
          {
            title: "Views Overview",
            link: "https://docs.thousandeyes.com/product-documentation/internet-and-wan-monitoring/viewing-data"
          }
        ]
      },
      {
        title: "Select the Test",
        description: "Select the required test. You can filter for specific target and/or specific agents for a more detailed deep-dive",
        image: "/images/task2-step2.png",
        resources: [
          {
            title: "Views Overview",
            link: "https://docs.thousandeyes.com/product-documentation/internet-and-wan-monitoring/viewing-data"
          }
        ]
      },
      {
        title: "Multi-Layered Views",
        description: "ThousandEyes tests cover TCP/IP Layers. Higher level tests (Web layer tests) will automatically include lower level tests (Network layer). We can switch between various views to obtain a detailed performance view across all layers.",
        image: "/images/task2-step3.png",
        resources: [
          {
            title: "Multi Layered Tests and Views",
            link: "https://docs.thousandeyes.com/product-documentation/tests/multi-service-views"
          }
        ]
      },
      {
        title: "Multi-Layered Views",
        description: "After enabling Page Load time, HTTP Availability, Network Latency, Loss and BGP Path Changes, we can easily correlate any incident across layers. For example, loss in HTTP Availability may look like an application layer outage at first, but if it coincides with a spike in network loss, then it may indicate an underlying network issue.",
        image: "/images/task2-step4.png",
        resources: [
          {
            title: "What Does Your Test Result Mean?",
            link: "https://docs.thousandeyes.com/product-documentation/tests/thousandeyes-metrics-what-do-your-results-mean"
          }
        ]
      },
      {
        title: "Page Load View : Waterfall Diagram",
        description: "Page load View offers a waterfall diagram that will assist you to understand the domains and components involved in building your webpage and identify the time elapsed to load and fetch each component.",
        image: "/images/task2-step5.png",
        resources: [
          {
            title: "Understand Waterfall Charts",
            link: "https://docs.thousandeyes.com/product-documentation/browser-synthetics/navigating-waterfall-charts-for-page-load-and-transaction-tests"
          }
        ]
      },
      {
        title: "HTTP Layer View",
        description: "HTTP Layer View offers the status of each phase for connecting to the target server. This will simplify the identification of the troubleshooting process by pinpointing the problematic phase. It also provides the certificate chain, and the content of the HTTP Request and Response Headers",
        image: "/images/task2-step6.png",
        resources: [
          {
            title: "HTTP Layer",
            link: "https://docs.thousandeyes.com/product-documentation/tests/http-server-tests"
          }
        ]
      },
      {
        title: "Network Layer",
        description: "Network Layer provides an end-to-end path visualization which will unlock visibility on the performance on elements even outside of your organization. This will assist you in pinpointing and identifying any problematic node. Notice how target node is different according to each Geographical area. ",
        image: "/images/task2-step7.png",
        resources: [
          {
            title: "Path Visualization",
            link: "https://docs.thousandeyes.com/product-documentation/internet-and-wan-monitoring/path-visualization"
          }
        ]
      },
      {
        title: "Share Your Test Results",
        description: "You can also save the test snapshot to share it across teams or ISP's or 3rd-party vendors. You can visit your snapshot repository from Manage>Sharing>Private Snapshots",
        image: "/images/task2-step8.png",
        resources: [
          {
            title: "Snapshots",
            link: "https://docs.thousandeyes.com/product-documentation/tests/sharing-test-data"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Deploy a Template",
    description: "Learn how to deploy templates for test operations",
    completed: false,
    steps: [
      {
        title: "Access Template Library",
        description: "ThousandEyes offers a wide array of ready-to-use templates that monitors the most famous SaaS applications such as Microsoft Services, Slack, Google Services and many more.",
        image: "/images/task3-step1.png",
        resources: [
          {
            title: "Template Overview",
            link: "https://docs.thousandeyes.com/product-documentation/tests/templates"
          }
        ]
      },
      {
        title: "Selecting a Template",
        description: "To Deploy a template, click on Start Monitoring button on the top right corner and select your template",
        image: "/images/task3-step2.png",
        resources: [
          {
            title: "Template Categories Onboarding",
            link: "https://docs.thousandeyes.com/product-documentation/tests#onboarding"
          }
        ]
      },
      {
        title: "Configuring Your Template",
        description: "Configure Your Template. Select the Enterprise and Cloud Agents to run the test, DNS Servers to use, template name, and the frequency of testing. You can toggle the tests on/off. Remember : Enterprise Agents represent offices and Cloud Agents represent Internet Users. Hint :If you don't have Enterprise Agents yet, you can use Cloud Agents on both fields.",
        image: "/images/task3-step3.png",
        resources: [
          {
            title: "Template Categories Onboarding",
            link: "https://docs.thousandeyes.com/product-documentation/tests#onboarding"
          }
        ]
      },
      {
        title: "Review The Deployment",
        description: "Deployment Summary displays the assets to be deployed. Notice that not only tests are deployed but also Labels to categorize tests and Dashboards to display the results",
        image: "/images/task3-step4.png",
        resources: [
          {
            title: "Labels",
            link: "https://docs.thousandeyes.com/product-documentation/tests/working-with-labels-for-agent-and-test-groups"
          }
        ]
      },
      {
        title: "Review And Deploy",
        description: "Deploy the template",
        image: "/images/task3-step5.png",
        resources: [
          {
            title: "Deployment Targets Guide",
            link: "https://docs.example.com/deployment-targets"
          }
        ]
      },

    ]
  },
  {
    id: 4,
    title: "Create Your First Dashboard",
    description: "Customize and organize data into a personalized dashboard",
    completed: false,
    badge: "Designer",
    badgeName: "Designer",
    steps: [
      {
        title: "Dashboards Overview",
        description: "ThousandEyes dashboards are a way to see customized live views of your test data, or Internet Insights collective intelligence. Dashboards are composed of widgets including maps, tables, bar and pie charts, and various other types of visual charting.",
        image: "/images/task4-step1.png",
        resources: [
          {
            title: "Dashboard Overview",
            link: "https://docs.thousandeyes.com/product-documentation/dashboards"
          }
        ]
      },
      {
        title: "Creating a Dashboard",
        description: "You can create your dashboard by starting with a blank page, or utilize one of the ready-to-use templates, or use the dashboards that are deployed by Tests Templates",
        image: "/images/task4-step2.png",
        resources: [
          {
            title: "Dashboard Templates",
            link: "https://docs.thousandeyes.com/product-documentation/dashboards/dashboard-templates"
          }
        ]
      },
      {
        title: "Add Widgets",
        description: "A widget type refers to a category of widgets. You can select from a wide array of widgets such as timelines, cards, maps, and charts",
        image: "/images/task4-step3.png",
        resources: [
          {
            title: "Widget Guide",
            link: "https://docs.thousandeyes.com/product-documentation/dashboards/dashboard-widgets"
          }
        ]
      },
      {
        title: "Configure Data Sources",
        description: "Connect your widgets to appropriate data sources. The widget can source data from Agents, Tests, Devices, Endpoints and Alerts and many other sources",
        image: "/images/task4-step4.png",
        resources: [
          {
            title: "Widget Guide",
            link: "https://docs.thousandeyes.com/product-documentation/dashboards/dashboard-widgets"
          }
        ]
      },
      {
        title: "Select the Metric",
        description: "Widgets can display the selected Metric depending on the selected layer, for example Network Layer will display Loss, Latency, Jitter, and Bandwidth.",
        image: "/images/task4-step5.png",
        resources: [
          {
            title: "Widget Guide",
            link: "https://docs.thousandeyes.com/product-documentation/dashboards/dashboard-widgets"
          }
        ]
      },
      {
        title: "Arrange Widgets",
        description: "You can rearrange widgets to best suit your needs. You can also resize them to fit your dashboard layout.",
        image: "/images/task4-step6.png",
        resources: [
          {
            title: "Widget Guide",
            link: "https://docs.thousandeyes.com/product-documentation/dashboards/dashboard-widgets"
          }
        ]
      },
      {
        title: "Save and Share Dashboard",
        description: "Dashboards can be saved and shared in PDF or CSV formats. Widgets can also be embedded in status pages in an iFrame format",
        image: "/images/task4-step7.png",
        resources: [
          {
            title: "Dashboard Sharing Guide",
            link: "https://docs.thousandeyes.com/product-documentation/dashboards/dashboard-shares-snapshots"
          }
        ]
      },
      {
        title: "Dashboard Creation Best Practices",
        description: "This document provides the Art of Dashboard Creation.",
        image: "/images/task4-step8.png",
        resources: [
          {
            title: "Permission Settings Guide",
            link: "https://www.ciscolive.com/c/dam/r/ciscolive/emea/docs/2024/pdf/BRKOPS-2076.pdf"
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Create the First Custom Alert",
    description: "Set up alerts for proactive monitoring",
    completed: false,
    steps: [
      {
        title: "Navigate to Alert Section",
        description: "The ThousandEyes platform allows you to configure highly customizable alert rules and assign them to tests, in order to highlight or be notified of events of interest. To create alerts, navigate to Manage >> Alert Rules",
        image: "/images/task5-step1.png",
        resources: [
          {
            title: "Alerts Overview",
            link: "https://docs.thousandeyes.com/product-documentation/alerts"
          }
        ]
      },
      {
        title: "Select Alert Type",
        description: "Each feature has its own set of alerts. For this excercise, we will create an alert for Network and App Synthetics. You can also create alerts for Internet Insights, Endpoint Agents, and Network Devices.",
        image: "/images/task5-step2.png",
        resources: [
          {
            title: "Alert Types Guide",
            link: "https://docs.thousandeyes.com/product-documentation/alerts/creating-and-editing-alert-rules"
          }
        ]
      },
      {
        title: "Select Alert Type",
        description: "Every layer has its own alert rules. For example, Network Layer alerts are different from Web Layer alerts. On the right side, you can see the list of tests compatible with the selcted alert rule",
        image: "/images/task5-step3.png",
        resources: [
          {
            title: "Alert Types",
            link: "https://docs.thousandeyes.com/product-documentation/getting-started/getting-started-with-alerts"
          }
        ]
      },
      {
        title: "Configure Alert Settings",
        description: "Associate the alert rule with the necessary tests, and agents, and set the Severity Level.",
        image: "/images/task5-step4.png",
        resources: [
          {
            title: "Alert Rule Severity",
            link: "https://docs.thousandeyes.com/product-documentation/alerts/creating-and-editing-alert-rules/alert-severity"
          }
        ]
      },
      {
        title: "Alert Conditions - Global and Location Conditions",
        description: "Alert rules have global and location conditions; global alerts activate when all conditions are met, while location alerts qualify as part of a global event when some conditions are met, not based on physical location.",
        image: "/images/global-location.png",
        resources: [
          {
            title: "Adaptive Alerting",
            link: "https://docs.thousandeyes.com/product-documentation/alerts/creating-and-editing-alert-rules/adaptive-alerting"
          }
        ]
      },
      {
        title: "Global Alert Conditions - Adaptive",
        description: "Adaptive alert detection is a combination of probability theory, historic agent behavior, and your sensitivity setting applied to your alert rule’s global alert setting. Adaptive alerting is designed to deduce when a real alertable issue occurs based on your test's anomaly records, reducing the number of false positives you receive and increasing your confidence that the alerts you do receive are genuine issues.",
        image: "/images/task5-step6.png",
        resources: [
          {
            title: "Adaptive Alerting",
            link: "https://docs.thousandeyes.com/product-documentation/alerts/creating-and-editing-alert-rules/adaptive-alerting",
        
          },
          
          
        ]
      },
      {
        title: "Global Alert Conditions - Manual",
        description: "You can also set the global alert conditions manually",
        image: "/task5-step7.png",
        resources: [
          {
            title: "Manual Alerting Method",
            link: "https://docs.thousandeyes.com/product-documentation/alerts/creating-and-editing-alert-rules/adaptive-alerting#manual-alert-method"
            
          }
        ]
      },
      {
        title: "Location Alert Conditions",
        description: "Depending on the Alert Type, Location Alert Conditions can include HTTP Availability, Network Packet Loss, Page Load Time, Jitter, HTTP Response and many more conditions. The thresholds can be set manually, or to track a Dynamic baseline. You can use AND/OR statements between different conditions",
        image: "/images/task5-step8.png",
        resources: [
          {
            title: "Alerts Metrics Guide",
            link: "https://docs.thousandeyes.com/product-documentation/alerts/creating-and-editing-alert-rules/alert-metrics-reference"
          },
          {
            title: "Dynamic Baseline",
            link: "https://docs.thousandeyes.com/product-documentation/alerts/creating-and-editing-alert-rules/dynamic-baselines"
          }
        ]
      },
      {
        title: "Alerts Notification",
        description: "Users and Services can be notified when alerts are triggered via emails, webhooks and integrations.",
        image: "/images/task5-step9.png",
        resources: [
          {
            title: "Alert Notification",
            link: "https://docs.thousandeyes.com/product-documentation/alerts/alert-notifications"
          }
        ]
      },
      {
        title: "Viewing Alerts",
        description: "Alerts' History can be viewed from Alerts Tab. You can see Active Alerts, and Alerts History.",
        image: "/images/task5-step10.png",
        resources: [
          {
            title: "Viewing Alerts",
            link: "https://docs.thousandeyes.com/product-documentation/alerts/viewing-alerts#looking-up-alerts-from-the-alerts-screen"
          }
        ]
      }

    ]
  },
  {
    id: 6,
    title: "Endpoint Agent ",
    description: "Introduction to  Endpoint Agent",
    completed: false,
    steps: [
      {
        title: "Endpoint Agent Overview",
        description: "The ThousandEyes Endpoint Agent is an application that is installed on Windows or macOS machines to collect network- and application-layer performance data when users access specific websites from within monitored networks.",
        image: "/images/task6-step1.png",
        resources: [
          {
            title: "Endpoint Agents Overview",
            link: "https://docs.thousandeyes.com/product-documentation/global-vantage-points/endpoint-agents"
          },
          {
            title: "How Do Endpoint Agents Work",
            link: "https://docs.thousandeyes.com/product-documentation/global-vantage-points/endpoint-agents/how-does-the-endpoint-agent-work"
          }
        ]
      },
      {
        title: "Installing Endpoint Agent",
        description: "From Endpoint Experience tab, browse to Agent Settings and click on Add New Endpoint Agent button on the top right corner.",
        image: "/images/task6-step2.png",
        resources: [
          {
            title: "Endpoint Agent Installation",
            link: "https://docs.thousandeyes.com/product-documentation/global-vantage-points/endpoint-agents/installing"
          }
        ]
      },
      {
        title: "Following through the Installation Wizard",
        description: "The Installation Wizard is fairly straight forward and will guide you through the installation process. There are some add-ons during the installation that enables additional features like TCP Tests and Real-User tests. After the installation, the agent should pop up on the Dashboard ",
        image: "/images/task6-step1.png",
        resources: [
          {
            title: "Endpoint Agent Installation Wizard",
            link: "https://docs.thousandeyes.com/product-documentation/global-vantage-points/endpoint-agents/installing/install-the-endpoint-agent"
          }
        ]
      },
      {
        title: "Endpoint Agent Tests - Synthetic Tests",
        description: "A synthetic tests template combines scheduled and dynamic tests to monitor a specific application. All the major applications have a defined synthetic tests template, and you can also create a custom template for applications that do not have a predefined template.",
        image: "/images/task6-step4.png",
        resources: [
          {
            title: "Synthetic Tests",
            link: "https://docs.thousandeyes.com/product-documentation/end-user-monitoring/test-settings/synthetic-tests"
          }
        ]
      },
      {
        title: "Configuring Synthetic Templates",
        description: "Similar to Network&App Synthetics, Endpoint Agent tests offer ready-to-use templates that cover the most popular SaaS applications. The templates include Scheduled tests on HTTP and Network Layers, and Dynamic Tests that are activated when users access the application.",
        image: "/images/task6-step5.png",
        resources: [
          {
            title: "Synthetic Tests Guide",
            link: "https://docs.thousandeyes.com/product-documentation/end-user-monitoring/test-settings/synthetic-tests"
          }
        ]
      },
      {
        title: "Real User Tests",
        description: "Real user tests get automatically deployed when the user visits a website in the monitored domain set. A monitored domain set consists of domains that you want to gather end-user performance metrics about. The best practice is to use business-relevant domains for tools and sites that your end users access",
        image: "/images/task6-step6.png",
        resources: [
          {
            title: "Real User Tests",
            link: "https://docs.thousandeyes.com/product-documentation/end-user-monitoring/test-settings/real-user-tests"
          }
        ]
      },
      {
        title: "Endpoint Agent Views",
        description: "To View the results of Synthetic, Real-User, and local (DNS, Gateway, VPN, and Wireless metrics), navigate to Views",
        image: "/images/task6-step7.png",
        resources: [
          {
            title: "Agent Views",
            link: "https://docs.thousandeyes.com/product-documentation/end-user-monitoring/viewing-data"
          }
        ]
      },
      {
        title: "Singe Agent Views - Heatmap",
        description: "Single Agent Views provides a heatmap and a more focused approach on a single agent, which make it easier to troubleshoot issues across various layers. Navigate to Endpoint Experience >> Agent Views",
        image: "/images/task6-step9.png",
        resources: [
          {
            title: "Single Agent Views",
            link: "https://docs.thousandeyes.com/product-documentation/end-user-monitoring/viewing-data/agent-views"
          }
        ]
      },
      {
        title: "Singe Agent Views - Segment Visualization",
        description: "This view provides a comprehensive look at the entire network journey for the single round selected in the timeline, starting from the agent and ending at the destination/application. This allows for pinpointing the specific segment causing performance degradation, along with its metrics and values.",
        image: "/images/task6-step8.png",
        resources: [
          {
            title: "Segment Visualization",
            link: "https://docs.thousandeyes.com/product-documentation/end-user-monitoring/viewing-data/agent-views#segment-visualization"
          }
        ]
      }
    ]
  },

  {
    id: 7,
    title: "Role Based Access Control",
    description: "Create a Role-Based profile",
    completed: false,
    badge: "Security Guru",
    badgeName: "Security Guru",
    steps: [
      {
        title: "RBAC Overview",
        description: "Role-Based Access Control. It's a security mechanism that grants users access to resources based on their assigned roles within an organization. This means users are granted permissions to access information and perform actions based on their job function, rather than having individual access rights set for each user. Navigate to Manage >> Account Settings >> Users and Roles",
        image: "/images/task7-step1.png",
        resources: [
          {
            title: "RBAC Explained",
            link: "https://docs.thousandeyes.com/product-documentation/user-management/rbac/role-based-access-control-explained"
          }
        ]
      },
      {
        title: "Default Roles",
        description: "ThousandEyes offers 3 default roles : Organization Admin, Account Admin, and a Regular User",
        image: "/images/task7-step2.png",
        resources: [
          {
            title: "Built-in Roles and Permissions",
            link: "https://docs.thousandeyes.com/product-documentation/user-management/rbac/built-in-roles-and-permissions"
          }
        ]
      },
      {
        title: "Custom Roles",
        description: "You can also create your own custom roles profile, select the appropriate permissions to associate with the role, and then attach the role to the users. ",
        image: "/images/task7-step3.png",
        resources: [
  
          {
            title: "Built-in Roles and Permissions",
            link: "https://docs.thousandeyes.com/product-documentation/user-management/rbac/built-in-roles-and-permissions"
          }
        ]
      },
      {
        title: "Assigning Users to Custom Roles",
        description: "Navigate to the Users Tab, then assign the user to the appropriate roles",
        image: "/images/task7-step4.png",
        resources: [
          {
            title: "Assigning Roles to Users",
            link: "https://docs.thousandeyes.com/product-documentation/user-management/rbac/role-based-access-control-explained#editing-users"
          }
        ]
      }
    ]
  }
];

// Convert TaskWithSteps to Task format for the application
export const tasks = TASKS_DATA.map(task => {
  return {
    id: String(task.id),
    title: task.title,
    description: task.description,
    completed: task.completed,
    reward: {
      points: 100, // Default points
      badges: task.badge ? [task.badge] : undefined
    },
    steps: task.steps.map((step, index) => ({
      id: `${task.id}-step-${index + 1}`,
      description: step.title + ": " + step.description,
      completed: false,
      imageSrc: step.image,
      resources: step.resources ? step.resources : [],
    }))
  };
});

export const FINAL_BADGE = {
  name: "ThousandEyes Explorer",
  description: "You've completed all onboarding tasks and are ready to utilize the platform effectively!",
  image: "trophy"
};
