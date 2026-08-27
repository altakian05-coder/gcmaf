import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://gcmaf.net/clinical-applications/autoimmune',
  },
}

export default function AutoimmuneLayout({ children }: { children: ReactNode }) {
  return children
}
