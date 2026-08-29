import type { ReactNode } from 'react'
import { GcmafSectionProductCTA } from '@/components/sections/GcmafSectionProductCTA'

export default function GcmafForSaleLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <GcmafSectionProductCTA />
    </>
  )
}
