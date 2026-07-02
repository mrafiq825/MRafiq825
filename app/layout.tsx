import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import GlassDistortion from "~/components/GlassDistortion";
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
  title: "Muhammad Rafiq | Full-Stack Developer & Software Engineer",
  description: "Explore Muhammad Rafiq's portfolio. Full-Stack Developer specializing in high-performance web/mobile apps, AI/ML integrations, DevOps, and SDET.",
  keywords: "Muhammad Rafiq, Rafiq Portfolio, Full-Stack Developer, Software Engineer, DevOps, SDET, React, Next.js, Node.js, Express, Python, FastAPI, Docker, Playwright, Vercel",
  authors: [{ name: "Muhammad Rafiq" }],
  robots: "index, follow",
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
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg-page text-text-primary selection:bg-accent-600/30 selection:text-white">
        <GlassDistortion />
        {children}
      </body>
    </html>
  );
}
