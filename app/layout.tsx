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

export const metadata: Metadata = {
  title: "Soot | AI Agent",
  description: "Meet Soot - an autonomous AI agent designed to assist, create, and collaborate.",
  openGraph: {
    title: "Soot | AI Agent",
    description: "Meet Soot - an autonomous AI agent designed to assist, create, and collaborate.",
    url: "https://soot.ai",
    siteName: "Soot",
    images: [
      {
        url: "https://soot.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Soot AI Agent",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soot | AI Agent",
    description: "Meet Soot - an autonomous AI agent designed to assist, create, and collaborate.",
    images: ["https://soot.ai/twitter-image.png"],
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
