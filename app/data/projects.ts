import type { Project } from "~/types/project";

export const projects: Project[] = [
  {
    id: "jobpsych",
    title: "JobPsych: AI-Powered Career Intelligence Platform",
    status: "Active",
    summary:
      "Enterprise-grade AI career intelligence platform revolutionizing job search and interview preparation.",
    tech: [
      "TypeScript",
      "React.js",
      "Next.js",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "Google Gemini AI",
    ],
    imageAlt: "JobPsych platform preview",
    liveUrl: "https://jobpsych.vercel.app/",
    featured: true,
  },
  {
    id: "readora",
    title: "Readora: AI Voice-Powered Smart Library",
    status: "Active",
    summary:
      "Modern AI-powered reading platform that transforms static PDF documents into interactive voice conversations.",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Clerk Auth",
      "MongoDB",
      "Vapi AI",
      "Docker",
    ],
    imageAlt: "Readora smart library preview",
    liveUrl: "https://readora-ai.vercel.app/",
    featured: true,
  },
  {
    id: "hiredesk",
    title: "HireDesk: AI-Powered Recruitment Platform",
    status: "Active",
    summary:
      "Next-generation recruitment platform leveraging AI to reduce hiring time by 50% and improve candidate quality.",
    tech: [
      "React",
      "TypeScript",
      "React Router",
      "TailwindCSS",
      "Vite",
      "Docker",
      "AI Backend API",
    ],
    imageAlt: "HireDesk platform preview",
    liveUrl: "https://hiredesk.vercel.app/",
    featured: true,
  },
  {
    id: "hisabkitab",
    title: "HisabKitab: Personal Budget Tracker",
    status: "Active",
    summary:
      "Cross-platform mobile budget tracking app helping users achieve financial goals with better spending insights.",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind",
      "Expo Router",
      "AsyncStorage",
      "Reanimated",
    ],
    imageAlt: "HisabKitab mobile app preview",
    liveUrl:
      "https://drive.google.com/file/d/1JPDjYXG1YxNe-q73HrIGLEmd8vppP8cQ/view?usp=drive_link",
    featured: true,
  },
];
