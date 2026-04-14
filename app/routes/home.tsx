import Navbar from "~/components/layout/Navbar";
import AboutSection from "~/components/sections/AboutSection";
import ContactSection from "~/components/sections/ContactSection";
import ExperienceSection from "~/components/sections/ExperienceSection";
import HeroSection from "~/components/sections/HeroSection";
import ProjectsSection from "~/components/sections/ProjectsSection";

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
