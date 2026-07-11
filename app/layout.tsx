import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300','400','500','600','700','800','900'],
  display: 'swap',
})
const poppins = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = { themeColor: '#0F172A' }

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://asaphitesfoundation.org'),
  title: { default: 'The Asaphites Foundation — Visualizing Needs. Delivering Hope.', template: '%s | The Asaphites Foundation' },
  description: 'A storytelling foundation based in Tanzania, using film and photography to reveal community needs and connect them with people who can help.',
  openGraph: {
    type: 'website',
    siteName: 'The Asaphites Foundation',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  manifest: '/site.webmanifest',
    verification: {
    google: '7KEMfQew8rdD1-Yxy7zIhndTpmYiPjn_OGdfoCMiey8', // paste your code here
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground font-body">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
