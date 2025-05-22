import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title =
  "Unlock Your Potential - Developer Toolbox for Effortless Productivity";
const description =
  "Unlock your full potential with our developer toolbox—crafted to boost your productivity and streamline your development workflow like never before.";
const keywords = [
  "developer tools",
  "free API",
  "web development",
  "programming tools",
  "software as a service",
  "automation tools",
  "API integration",
  "cloud services",
  "developer resources",
  "productivity tools",
  "business tools",
  "software engineering",
  "tech stack",
];

export const metadata: Metadata = {
  title,
  description,
  keywords,
  metadataBase: new URL("https://rizentium.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
