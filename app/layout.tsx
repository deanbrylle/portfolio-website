import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BackToTop } from '@/components/ui/BackToTop'
import { inter, jetbrainsMono, spaceGrotesk } from './fonts'
import { cn } from '@/lib/utils'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Dean Brylle Maguate | Web Developer & Frontend Engineer',
    template: '%s | Dean Brylle Maguate',
  },
  description:
    'Portfolio of Dean Brylle Maguate — I design and develop responsive websites and practical web applications for businesses that want to stand out, work smarter, and grow online.',
  metadataBase: new URL('https://portfolio-website.vercel.app'),
  openGraph: {
    type: 'website',
    title: 'Dean Brylle Maguate | Web Developer & Frontend Engineer',
    description:
      'Responsive websites and practical web applications for businesses that want to stand out, work smarter, and grow online.',
  },
  icons: { icon: '/favicon.svg' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.variable, spaceGrotesk.variable, jetbrainsMono.variable)}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
