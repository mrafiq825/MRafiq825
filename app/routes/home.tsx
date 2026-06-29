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
  { title: "Muhammad Rafiq | Full Stack Developer & Software Engineer" },
  {
    name: "description",
    content:
      "Explore Muhammad Rafiq's portfolio. Full Stack Developer specializing in high-performance web/mobile apps, AI/ML integrations, DevOps, and SDET.",
  },
  {
    name: "keywords",
    content:
      "Muhammad Rafiq, Rafiq Portfolio, Full-Stack Developer, Software Engineer, DevOps, SDET, React, Next.js, Node.js, Express, Python, FastAPI, Docker, Playwright, Vercel",
  },
  { name: "author", content: "Muhammad Rafiq" },
  { name: "robots", content: "index, follow" },
  { name: "theme-color", content: "#020617" },

  // Open Graph
  { property: "og:title", content: "Muhammad Rafiq | Full Stack Developer & Software Engineer" },
  {
    property: "og:description",
    content:
      "Explore Muhammad Rafiq's portfolio. Full Stack Developer specializing in high-performance web/mobile apps, AI/ML integrations, DevOps, and SDET.",
  },
  { property: "og:image", content: "https://mrafiq85.vercel.app/profile.png" },
  { property: "og:url", content: "https://mrafiq85.vercel.app/" },
  { property: "og:type", content: "website" },
  { property: "og:site_name", content: "Muhammad Rafiq Portfolio" },

  // Twitter
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Muhammad Rafiq | Full Stack Developer & Software Engineer" },
  {
    name: "twitter:description",
    content:
      "Explore Muhammad Rafiq's portfolio. Full Stack Developer specializing in high-performance web/mobile apps, AI/ML integrations, DevOps, and SDET.",
  },
  { name: "twitter:image", content: "https://mrafiq85.vercel.app/profile.png" },
  { name: "twitter:creator", content: "@mrafiq825" },
];

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: "https://mrafiq85.vercel.app/" },
];

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsLoading(false);
    }, HOME_LOADING_DURATION);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Rafiq",
    jobTitle: "Full Stack Developer & Software Engineer",
    url: "https://mrafiq85.vercel.app",
    email: "rafkhan9323@gmail.com",
    sameAs: [
      "https://github.com/mrafiq825",
      "https://www.linkedin.com/in/mrafiq825/",
      "https://x.com/mrafiq825",
      "https://www.instagram.com/dmrafiq825/",
      "https://www.facebook.com/profile.php?id=100069771234437&mibextid=wwXIfr&mibextid=wwXIfr"
    ],
    description:
      "Full Stack Developer specializing in high-performance web and mobile applications, DevOps, SDET, and AI/ML integrations.",
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "React Native",
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "Docker",
      "DevOps",
      "SDET",
      "AI/ML",
      "Web Automation",
      "Software Testing"
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Iqra National University",
      location: "Peshawar, Pakistan"
    }
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
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
};

export default Home;
