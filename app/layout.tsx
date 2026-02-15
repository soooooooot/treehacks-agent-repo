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
      <body className="min-h-screen overflow-x-hidden bg-[#FFC0CB] text-[#8B1464] antialiased" style={{
        background: 'linear-gradient(135deg, #FFC0CB 0%, #FFB6C1 50%, #FF69B4 100%)',
        backgroundAttachment: 'fixed'
      }}>
        {children}
      </body>
    </html>
  );
}
