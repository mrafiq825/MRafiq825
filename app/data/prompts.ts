export type PromptCategory =
  | "Image Generation"
  | "Video & Motion"
  | "Fixing Bugs & Code"
  | "Resume & Career"
  | "Writing & Content"
  | "Product & Strategy";

export interface PromptVariable {
  name: string;
  description: string;
  placeholder: string;
  type?: "text" | "textarea";
}

export interface Prompt {
  id: string;
  title: string;
  category: PromptCategory;
  platforms: string[];
  summary: string;
  promptText: string;
  variables?: PromptVariable[];
  tips?: string[];
}

export const prompts: Prompt[] = [
  {
    id: "react-perf-debug",
    title: "Advanced React Debugger & Performance Optimizer",
    category: "Fixing Bugs & Code",
    platforms: ["Claude", "ChatGPT", "Gemini"],
    summary: "Analyzes React components for memory leaks, unnecessary re-renders, and structural issues, suggesting clean refactoring options.",
    promptText: `You are an expert React and Frontend Performance Engineer. I will provide you with a React component. Your task is to:
1. Identify any potential performance bottlenecks (unnecessary re-renders, lack of memoization, suboptimal hook usage).
2. Check for common React anti-patterns or bugs (e.g., stale closures, improper key usage, memory leaks in useEffect).
3. Provide a refactored version of the component that optimizes performance and code readability.
4. Explain your changes step-by-step.

Here is the component code:
[Component Code]`,
    variables: [
      {
        name: "Component Code",
        description: "The React component code you want to optimize or debug",
        placeholder: "const MyComponent = () => { ... }",
        type: "textarea"
      }
    ],
    tips: [
      "Provide any custom hooks or context files associated with this component for better accuracy.",
      "For very large components, try dividing them into smaller subcomponents first."
    ]
  },
  {
    id: "glassmorphic-cinematic",
    title: "Cinematic Neo-Noir Glassmorphic Concept Art",
    category: "Image Generation",
    platforms: ["Midjourney", "Stable Diffusion", "DALL-E"],
    summary: "Generates high-fidelity prompts for atmospheric, neon-lit cinematic scenes with realistic glass refraction and materials.",
    promptText: `A cinematic shot of a futuristic neon-lit street in [City Name], rainy night, reflections of vibrant blue and hot pink neon lights on wet asphalt, in the foreground a delicate glass sculpture refracting the colorful city lights, steam rising from street vents, shot on 35mm lens, depth of field, hyperrealistic, octane render, 8k resolution, glassmorphism aesthetics, moody atmospheric lighting --ar 16:9 --style raw --v 6.0`,
    variables: [
      {
        name: "City Name",
        description: "The city or setting for the futuristic scene",
        placeholder: "Neo-Tokyo"
      }
    ],
    tips: [
      "Adjust the aspect ratio parameter '--ar' to fit your screen layout (e.g., --ar 9:16 for portrait, --ar 16:9 for landscape).",
      "You can swap 'glass sculpture' for other items like 'translucent sphere' or 'cyberpunk device' to alter focus."
    ]
  },
  {
    id: "fpv-drone-landscape",
    title: "Drone Tracking Shot of Ancient Coastal Landscapes",
    category: "Video & Motion",
    platforms: ["Sora", "Runway Gen-2", "Luma"],
    summary: "Creates epic drone camera paths over breathtaking natural or historic coastal landscapes with dramatic lighting.",
    promptText: `A continuous, sweeping FPV drone tracking shot gliding over the dramatic cliffs of [Coast Location], capturing ancient ruins clinging to the cliffside. The camera dips low near the crashing turquoise waves and then rises smoothly to reveal a [Lighting Type] sunset casting warm light. Cinema-grade color grading, ultra-detailed texture of stone and sea foam, slow and majestic motion, no camera shake.`,
    variables: [
      {
        name: "Coast Location",
        description: "The scenic coastal landscape or historic setting",
        placeholder: "Amalfi Coast, Italy"
      },
      {
        name: "Lighting Type",
        description: "The mood-setting time of day or light configuration",
        placeholder: "golden hour"
      }
    ],
    tips: [
      "Specifying camera paths like 'tracking shot', 'orbit', or 'crane shot' helps guide AI video engines.",
      "Mentioning details of scale (e.g., 'tiny seagulls', 'huge waves') establishes spatial depth."
    ]
  },
  {
    id: "resume-star-bullets",
    title: "Resume Accomplishment Bullet Tailoring",
    category: "Resume & Career",
    platforms: ["ChatGPT", "Gemini", "Claude"],
    summary: "Rewrites weak resume bullets into high-impact, metric-driven accomplishments using the STAR framework.",
    promptText: `You are an expert technical recruiter and resume writer. I am applying for the role of [Target Role]. Here is one of my current resume bullet points: "[Current Bullet Point]".

Please rewrite this bullet point to make it sound highly impactful, metric-driven, and focused on business value. Use the STAR (Situation, Task, Action, Result) methodology. Provide 3 different variations:
1. Action-Oriented (focusing on the technology stack and engineering actions).
2. Metric-driven (estimating realistic percentages or improvements in load times, delivery speed, or test coverage).
3. Leadership-focused (emphasizing collaboration, mentorship, or product ownership).

Target Role: [Target Role]
Current Bullet: [Current Bullet Point]`,
    variables: [
      {
        name: "Target Role",
        description: "The position you are applying for",
        placeholder: "Senior Frontend Engineer"
      },
      {
        name: "Current Bullet Point",
        description: "The raw, unoptimized resume bullet point you want to improve",
        placeholder: "Responsible for fixing bugs and maintaining the dashboard",
        type: "textarea"
      }
    ],
    tips: [
      "If you have real metrics (e.g., 'reduced load time by 300ms' or 'served 10k users'), specify them to make results highly realistic.",
      "Ensure you define the target role clearly to align the wording with current industry keyword requirements."
    ]
  },
  {
    id: "seo-tech-blog",
    title: "SEO-Optimized Technical Blog Post Architect",
    category: "Writing & Content",
    platforms: ["Claude", "Gemini", "ChatGPT"],
    summary: "Generates complete post architectures, heading structures, keyword strategies, and meta elements for technical blogs.",
    promptText: `You are an expert technical content writer and SEO strategist. I want to write a comprehensive, engaging blog post about [Topic].

Please provide a complete SEO strategy and detailed outline including:
1. A catchy, search-optimized Title.
2. A recommended Meta Description (under 160 characters).
3. A list of primary and secondary keywords to target.
4. A complete H2/H3 heading structure with a short description of what should be covered under each section.
5. Suggestions for code blocks, interactive elements, or visual diagrams that would enhance the post.

Topic: [Topic]
Target Audience: [Target Audience]`,
    variables: [
      {
        name: "Topic",
        description: "The core concept or technical stack you want to write about",
        placeholder: "Understanding React Server Components and Server Actions"
      },
      {
        name: "Target Audience",
        description: "The primary readers you want to engage",
        placeholder: "Intermediate React Developers"
      }
    ],
    tips: [
      "Specify your preferred article length (e.g., '1500-word deep dive') to customize heading granularity.",
      "Adding context like 'include practical examples using Vite' will generate much more tailored sections."
    ]
  },
  {
    id: "feature-spec-analyzer",
    title: "AI-Powered Feature Spec & Edge-Case Discovery",
    category: "Product & Strategy",
    platforms: ["Claude", "ChatGPT", "Gemini"],
    summary: "Thoroughly analyzes a new product feature idea, detailing specifications, API requirements, and UX/system edge cases.",
    promptText: `You are a Principal Product Manager and Staff Software Engineer. I am planning to build a new feature: "[Feature Description]".

Please write a detailed technical and product specification including:
1. High-level User Stories.
2. Recommended API design outline (endpoints, payloads, database updates).
3. Security, privacy, and permission considerations.
4. UX edge cases (e.g., offline mode, high latency, empty states, race conditions).
5. Crucial telemetry and product metrics to measure success after launch.

Feature Description: [Feature Description]`,
    variables: [
      {
        name: "Feature Description",
        description: "Describe the feature you want to design",
        placeholder: "A collaborative real-time comment section for blog posts with thread support",
        type: "textarea"
      }
    ],
    tips: [
      "Mention your project's technology stack (e.g., 'PostgreSQL and WebSockets') to get custom architecture advice.",
      "Specify if there are complex role-based access rules (e.g., 'only team admins can view threads') to detail security edge cases."
    ]
  }
];
