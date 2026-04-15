import type { Route } from "./+types/home";

import Navbar from "~/components/layout/Navbar";
import AboutSection from "~/components/sections/AboutSection";
import ContactSection from "~/components/sections/ContactSection";
import ExperienceSection from "~/components/sections/ExperienceSection";
import HeroSection from "~/components/sections/HeroSection";
import ProjectsSection from "~/components/sections/ProjectsSection";

export const meta: Route.MetaFunction = () => [
  { title: "Muhammad Rafiq | Full-Stack Developer" },
  {
    name: "description",
    content:
      "Explore Muhammad Rafiq's portfolio showcasing full-stack web projects, engineering experience, and contact details.",
  },
];

const Home = () => {
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
