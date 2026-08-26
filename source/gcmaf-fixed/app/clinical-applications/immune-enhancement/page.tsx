import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { MedicalDisclaimer } from '@/components/clinical'

export const metadata: Metadata = {
  title: 'Immune Enhancement',
  description: 'Unlocking the power of immunotherapy to enhance the immune system for optimal health and defense.',
}

export default function ImmuneEnhancementPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--color-brand) 0%, #4a9aaa 45%, var(--color-ink) 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-44 h-44 rounded-full border border-white/10" />
          <div className="absolute bottom-[20%] right-[5%] w-56 h-56 rounded-full border border-white/8" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-4">
              <span className="w-6 h-px bg-white/60" />
              Clinical Application
            </span>
            <h1 className="font-display text-hero font-bold text-white leading-tight mb-6">Immune Enhancement</h1>
            <p className="font-body text-lg text-white/80 leading-relaxed">
              Supporting physiological readiness and resilience through targeted macrophage activation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
          
          {/* Enhancing the Immune System */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6 leading-tight">Enhancing the Immune System for Optimal Health</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                The immune system is the body&apos;s defense mechanism against infections, diseases, and other threats. Enhancing the immune system means optimizing its function so it can respond swiftly and efficiently to these attacks.
              </p>
            </div>
            <div className="relative w-full">
              <img src="/images/immune-enhancement/enhancing-image.webp" alt="Enhancing immune system" className="w-full h-auto drop-shadow-2xl" />
            </div>
          </div>

          {/* Unlocking the Power of Immunotherapy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full order-last lg:order-first">
              <img src="/images/immune-enhancement/unlock-power-image.webp" alt="Power of Immunotherapy" className="w-full h-auto drop-shadow-2xl" />
            </div>
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6 leading-tight">Unlocking the Power of Immunotherapy</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                Immunotherapy refers to treatments that stimulate or modulate the immune system to enhance its response against various pathogens. GcMAF, with its key component VDBP-MAF, offers an innovative approach directly targeting macrophage activation.
              </p>
            </div>
          </div>

          {/* Safe and Naturally Produced */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6 leading-tight">Safe and Naturally Produced</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                GcMAF provides a safe way to enhance immune action. As an externally supplied equivalent of naturally occurring VDBP-MAF, it reinforces the body&apos;s natural immune mechanisms without the severe side effects associated with harsh pharmaceutical interventions.
              </p>
            </div>
            <div className="relative w-full">
              <img src="/images/immune-enhancement/safe-naturally-image.webp" alt="Safe and natural" className="w-full h-auto drop-shadow-2xl" />
            </div>
          </div>

          {/* Optimizing Immune Defense With GcMAF */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full order-last lg:order-first">
              <img src="/images/immune-enhancement/optimizing-defense-image.webp" alt="Optimizing Immune Defense" className="w-full h-auto drop-shadow-2xl" />
            </div>
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6 leading-tight">Optimizing Immune Defense With GcMAF</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                By maintaining VDBP-MAF levels, the immune system benefits from well-regulated and robust macrophage activity. This leads to a stronger baseline immune response and an enhanced ability to combat challenges from environmental or pathogenic stressors.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Grid of Key Concepts */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface border border-border p-10 rounded-3xl shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Immune Cells Must Be Activated in Order to Eliminate Pathogens</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                Macrophages function as both the scavengers and the commanders of the immune system. They not only engulf pathogens but also orchestrate the surrounding immune response. Without the activation step provided by molecules like VDBP-MAF, macrophages remain dormant.
              </p>
            </div>

            <div className="bg-surface border border-border p-10 rounded-3xl shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Prevention and Treatment of Infections</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                An optimized immune system provides critical defense for both prevention and recovery. Ensuring regular macrophage activation can contribute to resolving acute issues while supporting long-term physiological resilience.
              </p>
            </div>

            <div className="bg-surface border border-border p-10 rounded-3xl shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Support for Healthy Individuals</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                Even without active disease, everyday stressors continuously challenge our immune system. GcMAF provides broad-spectrum immune support to help maintain peak performance and protect general wellbeing.
              </p>
            </div>

            <div className="bg-brand/5 border border-brand/20 p-10 rounded-3xl shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">GcMAF for a Stronger, Healthier You</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                Integrating immunotherapy and immune-enhancing strategies like GcMAF can be a foundational step toward long-lasting health. It provides peace of mind that your innate defenses are prepared to handle biological challenges effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links & Get In Touch + Next Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-10 lg:p-12 rounded-3xl bg-brand/5 border border-brand/20 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                <span className="w-4 h-px bg-brand" />
                Quick Links & Get In Touch
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink mb-4">
                Procure for Your Practice
              </h2>
              <p className="font-body text-ink-muted max-w-xl text-lg leading-relaxed">
                Medical professionals are invited to contact our team to discuss integration protocols, safety data, and clinical inquiries.
              </p>
            </div>
            <div className="flex gap-4 shrink-0 flex-col sm:flex-row w-full md:w-auto relative z-10">
              <Button href="/contact" arrow>
                Contact Us
              </Button>
              <Link href="/clinical-applications" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border text-ink-muted hover:text-brand hover:border-brand transition-colors font-body text-sm font-medium bg-bg shadow-sm">
                <ArrowLeft size={16} />
                All Applications
              </Link>
            </div>
          </div>

          {/* Next Investigative Area */}
          <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
            <span className="font-body text-xs text-ink-muted uppercase tracking-widest hidden sm:inline-block">Next Investigative Area</span>
            <Link href="/clinical-applications/cancer" className="inline-flex items-center gap-2 font-display text-xl font-semibold text-ink hover:text-brand transition-colors group ml-auto">
              Adjunct Cancer Care
              <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <MedicalDisclaimer />
    </>
  )
}
