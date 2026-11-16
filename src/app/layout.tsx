import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Mascot from "@/components/Mascot";
import MusicPlayer from "@/components/MusicPlayer";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://yashmakkar.dev"),
  title: "Yash Makkar | AI/ML Engineer & Full-Stack Developer",
  description:
    "Personal portfolio of Yash Makkar — AI/ML Engineer and Full-Stack Developer specializing in Agentic AI, Multi-Agent Systems, and Distributed Applications. Undergraduate at CUIET, Chitkara University.",
  keywords: [
    "Yash Makkar",
    "AI/ML Engineer",
    "Full-Stack Developer",
    "Agentic AI",
    "Multi-Agent Systems",
    "Azure AI Foundry",
    "Next.js",
    "TypeScript",
    "Placey MACOS",
    "GymFlow",
    "Chitkara University",
    "CUIET"
  ],
  authors: [{ name: "Yash Makkar", url: "https://github.com/yashmakkar5" }],
  creator: "Yash Makkar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashmakkar.dev",
    title: "Yash Makkar | AI/ML Engineer & Full-Stack Developer",
    description:
      "Building intelligent systems, useful products, and ideas that move beyond the screen. Specializing in Multi-Agent AI and full-stack software.",
    siteName: "Yash Makkar Portfolio",
    images: [
      {
        url: "/images/yash-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Yash Makkar — AI/ML Engineer & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Makkar | AI/ML Engineer & Full-Stack Developer",
    description:
      "Building intelligent systems, useful products, and ideas that move beyond the screen.",
    images: ["/images/yash-portrait.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#070709",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-obsidian-950 text-zinc-100 min-h-screen flex flex-col antialiased selection:bg-crimson-600 selection:text-white relative bg-grain">
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Mascot />
        <MusicPlayer />
      </body>
    </html>
  );
}
