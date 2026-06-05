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

const siteUrl = "https://velocity-ai-seven.vercel.app"; // Update this when you get a custom domain

export const metadata: Metadata = {
  title: "Velocity AI | AI That Accelerates Modern Business",
  description: "Practical AI solutions that deliver real results. We build high-performing websites, intelligent automation, and AI strategies for modern businesses in Sacramento and beyond.",
  keywords: [
    "AI services Sacramento",
    "AI website development Sacramento",
    "business automation Sacramento",
    "custom AI solutions California",
    "Sacramento AI consulting",
    "intelligent automation",
    "Next.js websites",
    "AI chatbots for business",
    "AI strategy",
  ],
  authors: [{ name: "VelocityAI" }],
  creator: "VelocityAI",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Velocity AI | AI That Accelerates Modern Business",
    description: "Practical AI websites, automation, and strategy that deliver real results — fast.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Velocity AI - AI That Accelerates Modern Business",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velocity AI | AI That Accelerates Modern Business",
    description: "Practical AI solutions that deliver real results for modern businesses.",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
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
      </body>
    </html>
  );
}