import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js Minimal Project',
  description: 'A minimal Next.js project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
