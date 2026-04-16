import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import LoadingScreen from "~/components/feedback/LoadingScreen";
import Navbar from "~/components/layout/Navbar";
import AboutSection from "~/components/sections/AboutSection";
import ContactSection from "~/components/sections/ContactSection";
import ExperienceSection from "~/components/sections/ExperienceSection";
import HeroSection from "~/components/sections/HeroSection";
import ProjectsSection from "~/components/sections/ProjectsSection";

const HOME_LOADING_DURATION = 2400;

export const meta: Route.MetaFunction = () => [
  { title: "Muhammad Rafiq | Full-Stack Developer" },
  {
    name: "description",
    content:
      "Explore Muhammad Rafiq's portfolio showcasing full-stack web projects, engineering experience, and contact details.",
  },
];

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsLoading(false);
    }, HOME_LOADING_DURATION);

    return () => window.clearTimeout(timeoutId);
  }, []);

  if (isLoading) {
    return (
      <LoadingScreen
        message="Opening portfolio"
        title="Muhammad Rafiq"
        subtitle="A polished portfolio built to showcase product thinking, engineering depth, and visual clarity."
      />
    );
  }

  return (
    <>
      <Navbar />
      <main className="page-shell bg-slate-950">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
