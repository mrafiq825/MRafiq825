import type { Metadata } from "next";
import HomeClient from "@/components/layout/HomeClient";
import { site } from "@/data/site";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Muhammad Rafiq | Full Stack Developer & Software Engineer",
  description:
    "Explore Muhammad Rafiq's professional portfolio. Offering custom Next.js/React full-stack web engineering, AI integrations & agentic systems, mobile apps, and DevOps/SDET testing worldwide.",
  keywords:
    "Muhammad Rafiq, Rafiq Portfolio, Full-Stack Developer, Software Engineer, DevOps, SDET, React, Next.js, Node.js, Express, Python, FastAPI, Docker, Playwright, Vercel, AI Agent Development, Hire NextJS Developer, React Native Contractor, Playwright QA Automation Services",
  alternates: {
    canonical: `${site.url}/`,
  },
  openGraph: {
    title: "Muhammad Rafiq | Full Stack Developer & Software Engineer",
    description:
      "Explore Muhammad Rafiq's professional portfolio. Offering custom Next.js/React full-stack web engineering, AI integrations & agentic systems, mobile apps, and DevOps/SDET testing worldwide.",
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
      "Explore Muhammad Rafiq's professional portfolio. Offering custom Next.js/React full-stack web engineering, AI integrations & agentic systems, mobile apps, and DevOps/SDET testing worldwide.",
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

// Generate Service Schemas for each offered service
const servicesJsonLd = services.map((service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.title,
  "serviceType": "Software Engineering & Consulting",
  "description": service.description,
  "provider": {
    "@type": "Person",
    "name": "Muhammad Rafiq",
    "url": site.url
  },
  "areaServed": "Worldwide",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock"
  }
}));

// Aggregate all FAQs across all services to build a comprehensive FAQPage schema
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": services.flatMap((service) =>
    service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  )
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
            ...servicesJsonLd,
            faqJsonLd,
          ]),
        }}
      />
      <HomeClient />
    </>
  );
}
