import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://gcmaf.net/clinical-applications/neurological',
  },
}

export default function NeurologicalLayout({ children }: { children: ReactNode }) {
  return children
}
