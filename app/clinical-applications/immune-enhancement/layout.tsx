import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://gcmaf.net/clinical-applications/immune-enhancement',
  },
}

export default function ImmuneEnhancementLayout({ children }: { children: ReactNode }) {
  return children
}
