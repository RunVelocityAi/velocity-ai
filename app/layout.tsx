import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://runvelocityai.com"; // Update to your domain when deployed

export const metadata: Metadata = {
  title: "VelocityAI | Ai Solutions for Modern Businesses to Grow",
  description: "Ai Solutions for Modern Businesses to Grow. Professional AI-powered websites and intelligent automation for Sacramento businesses. Custom sites, chatbots, workflows, and AI integrations that deliver measurable results.",
  keywords: [
    "AI services Sacramento",
    "AI website development Sacramento",
    "business automation Sacramento",
    "custom AI solutions California",
    "Sacramento AI consulting",
    "intelligent automation",
    "Next.js websites",
    "AI chatbots for business",
  ],
  authors: [{ name: "VelocityAI" }],
  creator: "VelocityAI",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "VelocityAI | Ai Solutions for Modern Businesses to Grow",
    description: "Ai Solutions for Modern Businesses to Grow. We build fast, modern websites and intelligent automations that help Sacramento businesses save time and grow. Local expertise, real ROI.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "VelocityAI - Ai Solutions for Modern Businesses to Grow",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VelocityAI | Ai Solutions for Modern Businesses to Grow",
    description: "Ai Solutions for Modern Businesses to Grow. Professional AI-powered websites and intelligent automation for Sacramento businesses.",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
};

// JSON-LD structured data for LocalBusiness + Services (great for SEO)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VelocityAI",
  description: "Ai Solutions for Modern Businesses to Grow. AI-powered website development and intelligent automation services for businesses in Sacramento, California.",
  url: siteUrl,
  telephone: "(916) 555-0192",
  email: "hello@runvelocityai.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sacramento",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: ["Sacramento", "Roseville", "Folsom", "Elk Grove", "Davis", "Central Valley"],
  serviceType: [
    "AI Website Development",
    "Intelligent Business Automation",
    "AI Chatbots and Agents",
    "Custom AI Integrations",
    "Digital Transformation Consulting",
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
        <Toaster position="top-center" richColors closeButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
