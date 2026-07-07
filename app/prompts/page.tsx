import type { Metadata } from "next";
import PromptsClient from "@/components/prompt/PromptsClient";

export const metadata: Metadata = {
  title: "AI Prompts Library | Muhammad Rafiq",
  description: "Explore a curated library of high-fidelity, interactive AI prompt templates for Gemini, ChatGPT, Claude, and Midjourney to optimize code, writing, and art.",
  keywords: "AI Prompts, Gemini Prompts, ChatGPT Prompts, Claude Prompts, Midjourney Prompts, Prompt Engineering, Code Debugging Prompts",
  robots: "index, follow",
};

export default function PromptsPage() {
  return <PromptsClient />;
}
