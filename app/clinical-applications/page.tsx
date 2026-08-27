import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, Brain, Activity, Zap, TrendingUp, ArrowRight } from 'lucide-react'
import { conditions } from '@/lib/data/conditions'

export const metadata: Metadata = {
  title: 'Clinical Applications',
  description: 'GcMAF research spans cancer, neurological disorders, autoimmune diseases, chronic infections, and immune enhancement.',
  alternates: {
    canonical: 'https://gcmaf.net/clinical-applications',
  },
}

const iconMap: Record<string, React.ElementType> = {
  Shield, Brain, Activity, Zap, TrendingUp,
}

export default function ClinicalApplicationsPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--color-brand) 0%, #4a9aaa 45%, var(--color-ink) 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-44 h-44 rounded-full border border-white/10" />
          <div className="absolute bottom-[20%] right-[5%] w-56 h-56 rounded-full border border-white/8" />
          <div className="absolute top-[55%] left-[5%] w-20 h-20 rounded-full bg-white/5" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-4">
              <span className="w-6 h-px bg-white/60" />
              Clinical Evidence
            </span>
            <h1 className="font-display text-hero font-bold text-white leading-tight mb-6">Clinical Applications</h1>
            <p className="font-body text-lg text-white/80 leading-relaxed">
              Peer-reviewed research has explored GcMAF across a broad spectrum of immune-related conditions. Select a category below to review the evidence, mechanism, and clinical considerations.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
          <span className="font-display font-bold text-white block text-center" style={{ fontSize: 'clamp(3rem, 12vw, 10rem)', opacity: 0.06, lineHeight: 1, letterSpacing: '-0.02em' }}>Clinical</span>
        </div>
      </section>

      <section className="py-16 bg-bg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Nagalase Connection</h2>
            <p className="font-body text-ink-muted leading-relaxed">
              A common thread across the conditions explored below is the role of nagalase — an enzyme secreted by viruses, bacteria, and tumour cells that deglycosylates GcProtein, preventing the endogenous production of GcMAF and effectively disabling macrophage-mediated immunity. By measuring serum nagalase levels, clinicians can assess the degree of immune suppression and monitor the efficacy of GcMAF intervention over time.
            </p>
          </div>
        </div>
      </section>

      {/* Nagalase Shuts Down the Immune System */}
      <section className="py-24 lg:py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                <span className="w-6 h-px bg-brand" />
                Immune Suppression
              </span>
              <h2 className="font-display text-section font-semibold text-ink mb-6 leading-tight">
                Nagalase Shuts Down the Immune System
              </h2>
              <p className="font-body text-ink-muted leading-relaxed">
                Nagalase is a glycoside hydrolase enzyme produced and secreted by tumours, viruses, and bacteria. Once in the bloodstream, it systematically cleaves the sugar molecules attached to GcProtein — preventing its conversion into GcMAF. The result is a measurable, progressive shutdown of macrophage-mediated immune activity. Without active GcMAF, macrophages cannot receive the activation signal needed to identify and eliminate biological threats, leaving the immune system functionally disabled at its most critical checkpoint.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/clinical-applications/nagalase-image.webp"
                alt="Nagalase immune suppression"
                unoptimized
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GcMAF Restores Immune Function */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden order-last lg:order-first">
              <Image
                src="/images/clinical-applications/restores-immune-image.webp"
                alt="GcMAF restores immune function"
                unoptimized
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                <span className="w-6 h-px bg-brand" />
                Immune Restoration
              </span>
              <h2 className="font-display text-section font-semibold text-ink mb-6 leading-tight">
                GcMAF Restores Immune Function
              </h2>
              <p className="font-body text-ink-muted leading-relaxed">
                Pharmaceutical-grade GcMAF bypasses the nagalase blockade entirely. By delivering the active GcMAF protein directly — without reliance on the compromised GcProtein pathway — it re-engages macrophage receptors and restores the activation cascade. Serum nagalase levels, measurable via standard blood tests, provide clinicians with a quantifiable biomarker to track immune suppression and monitor the therapeutic response to GcMAF intervention over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {conditions.map((condition) => {
              const Icon = iconMap[condition.icon] || Shield
              return (
                <Link
                  key={condition.slug}
                  href={`/clinical-applications/${condition.slug}`}
                  className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] group block bg-bg border border-border rounded-2xl p-6 hover:border-brand transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  style={{ borderTop: '4px solid var(--color-brand)' }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2.5 bg-brand/10 rounded-xl group-hover:bg-brand/20 transition-colors">
                      <Icon size={22} className="text-brand" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-semibold text-ink group-hover:text-brand transition-colors">{condition.shortTitle}</h2>
                      <p className="font-body text-xs text-ink-muted mt-0.5 italic">{condition.tagline}</p>
                    </div>
                  </div>
                  <p className="font-body text-sm text-ink-muted leading-relaxed mb-4">{condition.summary}</p>
                  <div className="flex items-center gap-1 text-brand text-sm font-body font-medium">
                    Explore the Research
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
