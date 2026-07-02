"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "@/components/feedback/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

const HOME_LOADING_DURATION = 2400;

export default function HomeClient() {
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
        message="Opening Portfolio"
        title="Muhammad Rafiq"
        subtitle="A polished portfolio built to showcase product thinking, engineering depth, and visual clarity."
      />
    );
  }

  return (
    <>
      <Navbar />
      <main className="page-shell bg-transparent text-text-primary">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
