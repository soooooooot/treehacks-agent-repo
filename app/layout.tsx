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
        <div className="fixed top-0 left-0 right-0 z-[100] bg-[#00d66b] py-4 px-6 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide" style={{ 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            fontFamily: 'var(--font-body)'
          }}>
            We love TreeHacks
          </h2>
        </div>
        {/* Add padding to body content to account for fixed banner */}
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
