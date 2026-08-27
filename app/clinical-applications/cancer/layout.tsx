import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://gcmaf.net/clinical-applications/cancer',
  },
}

export default function CancerLayout({ children }: { children: ReactNode }) {
  return children
}
