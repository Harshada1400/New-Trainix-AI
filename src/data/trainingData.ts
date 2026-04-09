export interface TrainingTopic {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: "primary" | "secondary" | "accent";
  totalModules: number;
  weeks: WeekModule[];
}

export interface WeekModule {
  week: number;
  title: string;
  description: string;
  duration: string;
  status: "completed" | "in-progress" | "locked";
  lessons: string[];
  quiz?: { questions: number; passingScore: number };
}

export const trainingTopics: TrainingTopic[] = [
  {
    id: "fundamentals",
    title: "Company Fundamentals",
    description: "Learn about our mission, values, culture, and organizational structure.",
    icon: "Building2",
    color: "primary",
    totalModules: 4,
    weeks: [
      {
        week: 1,
        title: "Company Overview & Culture",
        description: "Understand our mission, vision, and core values that drive everything we do.",
        duration: "3 hours",
        status: "completed",
        lessons: ["Company History", "Mission & Vision", "Core Values", "Culture Guide"],
        quiz: { questions: 10, passingScore: 80 },
      },
      {
        week: 2,
        title: "Organizational Structure",
        description: "Navigate teams, departments, and key stakeholders.",
        duration: "2 hours",
        status: "in-progress",
        lessons: ["Org Chart Overview", "Department Functions", "Key Contacts"],
      },
      {
        week: 3,
        title: "Policies & Compliance",
        description: "Essential policies, code of conduct, and compliance requirements.",
        duration: "4 hours",
        status: "locked",
        lessons: ["Code of Conduct", "Data Privacy", "Security Policies", "HR Policies"],
        quiz: { questions: 15, passingScore: 90 },
      },
      {
        week: 4,
        title: "Tools & Systems",
        description: "Get hands-on with internal tools, communication platforms, and workflows.",
        duration: "3 hours",
        status: "locked",
        lessons: ["Communication Tools", "Project Management", "Internal Portals"],
      },
    ],
  },
  {
    id: "technical",
    title: "Technical Skills",
    description: "Build core technical competencies required for your role.",
    icon: "Code2",
    color: "secondary",
    totalModules: 6,
    weeks: [
      {
        week: 1,
        title: "Development Environment Setup",
        description: "Set up your local development environment and understand our tech stack.",
        duration: "4 hours",
        status: "completed",
        lessons: ["IDE Setup", "Git & Version Control", "Environment Config", "First Build"],
      },
      {
        week: 2,
        title: "Architecture & Patterns",
        description: "Learn our application architecture and design patterns.",
        duration: "5 hours",
        status: "in-progress",
        lessons: ["System Architecture", "Design Patterns", "API Standards", "Code Style Guide"],
        quiz: { questions: 12, passingScore: 75 },
      },
      {
        week: 3,
        title: "Testing & Quality",
        description: "Master testing strategies and quality assurance processes.",
        duration: "4 hours",
        status: "locked",
        lessons: ["Unit Testing", "Integration Testing", "Code Reviews", "CI/CD Pipeline"],
      },
      {
        week: 4,
        title: "Database & Data Layer",
        description: "Understand our data models, database systems, and data access patterns.",
        duration: "4 hours",
        status: "locked",
        lessons: ["Database Overview", "Data Models", "Query Optimization", "Data Security"],
      },
      {
        week: 5,
        title: "Cloud & Infrastructure",
        description: "Learn about our cloud infrastructure and deployment processes.",
        duration: "3 hours",
        status: "locked",
        lessons: ["Cloud Platforms", "Deployment", "Monitoring & Logging"],
      },
      {
        week: 6,
        title: "Capstone Project",
        description: "Apply everything you've learned in a guided project.",
        duration: "8 hours",
        status: "locked",
        lessons: ["Project Planning", "Implementation", "Review & Presentation"],
        quiz: { questions: 20, passingScore: 85 },
      },
    ],
  },
  {
    id: "soft-skills",
    title: "Professional Skills",
    description: "Develop communication, collaboration, and leadership capabilities.",
    icon: "Users",
    color: "accent",
    totalModules: 4,
    weeks: [
      {
        week: 1,
        title: "Effective Communication",
        description: "Master written and verbal communication in a professional setting.",
        duration: "2 hours",
        status: "completed",
        lessons: ["Email Etiquette", "Meeting Skills", "Presentation Tips"],
      },
      {
        week: 2,
        title: "Team Collaboration",
        description: "Learn agile methodologies and team collaboration best practices.",
        duration: "3 hours",
        status: "in-progress",
        lessons: ["Agile Basics", "Scrum Ceremonies", "Pair Programming", "Conflict Resolution"],
      },
      {
        week: 3,
        title: "Time Management",
        description: "Prioritize tasks, manage deadlines, and maintain work-life balance.",
        duration: "2 hours",
        status: "locked",
        lessons: ["Priority Frameworks", "Task Management", "Focus Techniques"],
      },
      {
        week: 4,
        title: "Growth Mindset",
        description: "Build habits for continuous learning and professional development.",
        duration: "2 hours",
        status: "locked",
        lessons: ["Feedback Culture", "Goal Setting", "Mentorship"],
        quiz: { questions: 8, passingScore: 70 },
      },
    ],
  },
];
