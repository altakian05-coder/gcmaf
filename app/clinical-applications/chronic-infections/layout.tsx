import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://gcmaf.net/clinical-applications/chronic-infections',
  },
}

export default function ChronicInfectionsLayout({ children }: { children: ReactNode }) {
  return children
}
