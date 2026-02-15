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
  description: "Ian's personal site for TreeHacks - featuring the Interaction Company love",
  keywords: ["TreeHacks", "Ian", "Interaction Company", "Personal Site"],
  authors: [{ name: "Ian" }],
  openGraph: {
    title: "Ian's Personal TreeHacks Site",
    description: "Ian's personal site for TreeHacks - featuring the Interaction Company love",
    type: "website",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-[#fdf6f8] text-[#2d1b2e] antialiased">
        {children}
      </body>
    </html>
  );
}
