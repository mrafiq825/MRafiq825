import type { Metadata } from "next";
import ServicesClient from "@/components/services/ServicesClient";
import { site } from "@/data/site";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Professional Services | Muhammad Rafiq | Full Stack & AI Engineer",
  description:
    "Hire Muhammad Rafiq for industry-grade software engineering services worldwide. Specializing in Next.js/React development, Gemini & OpenAI LLM integrations, cross-platform mobile apps, and automated testing.",
  keywords:
    "Next.js Developer, React Development Services, AI Agent Development, Hire AI Engineer, React Native Contractor, Playwright QA Automation, SDET Contractor, DevOps Pipeline Automation",
  alternates: {
    canonical: `${site.url}/services`,
  },
  openGraph: {
    title: "Professional Services | Muhammad Rafiq | Full Stack & AI Engineer",
    description:
      "Hire Muhammad Rafiq for industry-grade software engineering services worldwide. Specializing in Next.js/React development, Gemini & OpenAI LLM integrations, cross-platform mobile apps, and automated testing.",
    url: `${site.url}/services`,
    type: "website",
    siteName: "Muhammad Rafiq Portfolio",
    images: [
      {
        url: `${site.url}${site.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Muhammad Rafiq Portfolio Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Services | Muhammad Rafiq | Full Stack & AI Engineer",
    description:
      "Hire Muhammad Rafiq for industry-grade software engineering services worldwide. Specializing in Next.js/React development, Gemini & OpenAI LLM integrations, cross-platform mobile apps, and automated testing.",
    images: [`${site.url}${site.ogImage}`],
    creator: "@mrafiq825",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: "Muhammad Rafiq",
  jobTitle: "Full Stack Developer & Software Engineer",
  url: site.url,
  sameAs: [
    "https://github.com/mrafiq825",
    "https://www.linkedin.com/in/mrafiq825/",
    "https://x.com/mrafiq825",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": site.url,
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": `${site.url}/services`,
    },
  ],
};

const servicesJsonLd = services.map((service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.title,
  "serviceType": "Software Engineering & Consulting",
  "description": service.description,
  "provider": personJsonLd,
  "areaServed": "Worldwide",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
  },
}));

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": services.flatMap((service) =>
    service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    }))
  ),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            personJsonLd,
            breadcrumbJsonLd,
            ...servicesJsonLd,
            faqJsonLd,
          ]),
        }}
      />
      <ServicesClient />
    </>
  );
}
