import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

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
        {/* Green TreeHacks Banner */}
        <div className="fixed top-0 left-0 right-0 z-[9999] bg-gradient-to-r from-green-500 to-green-600 px-6 py-4 shadow-lg">
          <p className="text-center text-2xl font-bold text-white tracking-wide drop-shadow-md">
            We love TreeHacks
          </p>
        </div>
        {/* Add padding to prevent content from being hidden under the fixed banner */}
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
