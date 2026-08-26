import type { Metadata } from 'next'
import { Montserrat, Roboto } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const fontDisplay = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const fontBody = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'GcMAF | Activating Your Body\'s First Line of Defense',
    template: '%s | GcMAF',
  },
  description: 'GcMAF is a naturally-occurring immune protein that activates macrophages. Clinical-grade GcMAF distributed to licensed physicians and medical institutions worldwide.',
  keywords: ['GcMAF', 'macrophage activating factor', 'immunotherapy', 'immune therapy', 'GcProtein'],
  openGraph: {
    siteName: 'GcMAF',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${fontDisplay.variable} ${fontBody.variable}`} suppressHydrationWarning>
      <body className="font-body bg-bg text-ink antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
