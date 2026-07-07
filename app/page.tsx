import type { Metadata } from "next";
import HomeClient from "@/components/layout/HomeClient";

export const metadata: Metadata = {
  title: "Muhammad Rafiq | Full Stack Developer & Software Engineer",
  description: "Explore Muhammad Rafiq's portfolio. Full Stack Developer specializing in high-performance web/mobile apps, AI/ML integrations, DevOps, and SDET.",
  keywords: "Muhammad Rafiq, Rafiq Portfolio, Full-Stack Developer, Software Engineer, DevOps, SDET, React, Next.js, Node.js, Express, Python, FastAPI, Docker, Playwright, Vercel",
  alternates: {
    canonical: "https://mrafiq85.vercel.app/",
  },
  openGraph: {
    title: "Muhammad Rafiq | Full Stack Developer & Software Engineer",
    description: "Explore Muhammad Rafiq's portfolio. Full Stack Developer specializing in high-performance web/mobile apps, AI/ML integrations, DevOps, and SDET.",
    images: ["https://mrafiq85.vercel.app/profile.png"],
    url: "https://mrafiq85.vercel.app/",
    type: "website",
    siteName: "Muhammad Rafiq Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rafiq | Full Stack Developer & Software Engineer",
    description: "Explore Muhammad Rafiq's portfolio. Full Stack Developer specializing in high-performance web/mobile apps, AI/ML integrations, DevOps, and SDET.",
    images: ["https://mrafiq85.vercel.app/profile.png"],
    creator: "@mrafiq825",
  },
};

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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
