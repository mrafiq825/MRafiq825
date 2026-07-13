import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import GlassDistortion from "@/components/GlassDistortion";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Rafiq | Full-Stack Developer & Software Engineer",
    template: "%s | Muhammad Rafiq",
  },
  description:
    "Explore Muhammad Rafiq's portfolio. Full-Stack Developer specializing in high-performance web/mobile apps, AI/ML integrations, DevOps, and SDET.",
  keywords: [
    "Muhammad Rafiq",
    "Rafiq Portfolio",
    "Full-Stack Developer",
    "Software Engineer",
    "DevOps",
    "SDET",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Python",
    "FastAPI",
    "Docker",
    "Playwright",
    "Vercel",
    "AI agents",
    "LLM applications",
  ],
  authors: [{ name: "Muhammad Rafiq" }],
  metadataBase: new URL("https://rafiq.dev"),
  alternates: {
    canonical: "https://rafiq.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Muhammad Rafiq | Full-Stack Developer & Software Engineer",
    description:
      "Explore Muhammad Rafiq's portfolio. Full-Stack Developer specializing in high-performance web/mobile apps, AI/ML integrations, DevOps, and SDET.",
    url: "https://rafiq.dev",
    type: "website",
    siteName: "Muhammad Rafiq Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rafiq | Full-Stack Developer & Software Engineer",
    description:
      "Explore Muhammad Rafiq's portfolio. Full-Stack Developer specializing in high-performance web/mobile apps, AI/ML integrations, DevOps, and SDET.",
    creator: "@mrafiq825",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg-page text-text-primary selection:bg-accent-600/30 selection:text-white">
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>
        <GlassDistortion />
        {children}
      </body>
    </html>
  );
}
