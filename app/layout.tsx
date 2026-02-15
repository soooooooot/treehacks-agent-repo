import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import ValentinesBanner from "./components/ValentinesBanner";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Random Valentines",
  description: "A whimsical popup of random valentine messages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${cormorant.variable}`}>
      <body className="min-h-screen overflow-x-hidden bg-[#fdf6f8] text-[#2d1b2e] antialiased">
        <ValentinesBanner />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
