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
  title: "Ian's Personal TreeHacks Site",
  description: "Ian's personal site for TreeHacks - spreading love for Interaction Company",
  openGraph: {
    title: "Ian's Personal TreeHacks Site",
    description: "Ian's personal site for TreeHacks - spreading love for Interaction Company",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${cormorant.variable}`}>
      <head>
        <meta name="author" content="Ian" />
        <meta name="keywords" content="TreeHacks, Ian, Interaction Company, personal website" />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-[#fdf6f8] text-[#2d1b2e] antialiased">
        {children}
      </body>
    </html>
  );
}
