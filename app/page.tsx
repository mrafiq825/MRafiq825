import type { Metadata } from "next";
import HomeClient from "@/components/layout/HomeClient";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Muhammad Rafiq | Full Stack Developer & Software Engineer",
  description:
    "Explore Muhammad Rafiq's portfolio. Full Stack Developer specializing in high-performance web/mobile apps, AI/ML integrations, DevOps, and SDET.",
  keywords:
    "Muhammad Rafiq, Rafiq Portfolio, Full-Stack Developer, Software Engineer, DevOps, SDET, React, Next.js, Node.js, Express, Python, FastAPI, Docker, Playwright, Vercel",
  alternates: {
    canonical: `${site.url}/`,
  },
  openGraph: {
    title: "Muhammad Rafiq | Full Stack Developer & Software Engineer",
    description:
      "Explore Muhammad Rafiq's portfolio. Full Stack Developer specializing in high-performance web/mobile apps, AI/ML integrations, DevOps, and SDET.",
    images: [
      {
        url: `${site.url}${site.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Muhammad Rafiq portrait",
      },
    ],
    url: `${site.url}/`,
    type: "website",
    siteName: "Muhammad Rafiq Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rafiq | Full Stack Developer & Software Engineer",
    description:
      "Explore Muhammad Rafiq's portfolio. Full Stack Developer specializing in high-performance web/mobile apps, AI/ML integrations, DevOps, and SDET.",
    images: [`${site.url}${site.ogImage}`],
    creator: "@mrafiq825",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Rafiq",
  jobTitle: "Full Stack Developer & Software Engineer",
  url: site.url,
  email: "rafkhan9323@gmail.com",
  sameAs: [
    "https://github.com/mrafiq825",
    "https://www.linkedin.com/in/mrafiq825/",
    "https://x.com/mrafiq825",
    "https://www.instagram.com/dmrafiq825/",
    "https://www.facebook.com/profile.php?id=100069771234437&mibextid=wwXIfr&mibextid=wwXIfr",
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
    "Software Testing",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Iqra National University",
    location: "Peshawar, Pakistan",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Muhammad Rafiq Portfolio",
  url: site.url,
  logo: `${site.url}/favicon.ico`,
  sameAs: [
    "https://github.com/mrafiq825",
    "https://www.linkedin.com/in/mrafiq825/",
    "https://x.com/mrafiq825",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Muhammad Rafiq Portfolio",
  url: site.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${site.url}/blog?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            personJsonLd,
            organizationJsonLd,
            websiteJsonLd,
          ]),
        }}
      />
      <HomeClient />
    </>
  );
}
