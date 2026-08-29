'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

const targetPaths = new Set([
  '/gcmaf-for-sale/what-is-gcmaf',
  '/gcmaf-for-sale/gcmaf-supplement',
  '/gcmaf-for-sale/gcmaf-buy',
  '/gcmaf-for-sale/gcmaf-treatment',
  '/gcmaf-for-sale/gcmaf-therapy',
  '/gcmaf-for-sale/gcmaf-injections',
  '/gcmaf-for-sale/gcmaf-storage',
])

export function GcmafSectionProductCTA() {
  const pathname = usePathname()
  const normalizedPath = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname

  if (!targetPaths.has(normalizedPath)) return null

  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <div className="rounded-3xl border border-brand/20 bg-brand/5 p-7 text-center md:p-10">
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
            Need GcMAF product information?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-7 text-ink-muted md:text-lg">
            Contact us for product availability, formulation details, storage and shipping information,
            documentation, and professional procurement questions.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-body text-sm font-semibold text-white no-underline transition hover:bg-brand"
          >
            Request Product Information
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
