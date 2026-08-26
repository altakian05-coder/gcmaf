import Link from 'next/link'
import { ArrowRight, ShieldCheck, Activity, Heart } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Immune Activation',
    body: 'GcMAF directly activates macrophages — the sentinels of your immune system — restoring their ability to identify and eliminate threats.',
  },
  {
    icon: Activity,
    title: 'Macrophage Support',
    body: 'By correcting nagalase-mediated suppression, GcMAF allows the immune system to return to its natural state of vigilance and response.', // cspell:ignore nagalase
  },
  {
    icon: Heart,
    title: 'Clinically Documented',
    body: "More than 30 years of peer-reviewed research documents GcMAF's safety and biological activity across multiple patient populations.", // cspell:ignore GcMAF's
  },
]

export function ImmuneWellnessSection() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <div>
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
              <span className="w-6 h-px bg-brand" />
              Immune Support
            </span>
            <h2 className="font-display text-section font-bold text-ink mb-6 leading-tight">
              Immune Support for Optimal Wellness
            </h2>
            <p className="font-body text-ink-muted leading-relaxed mb-6">
              GcMAF — Gc protein-derived Macrophage Activating Factor — is a naturally
              occurring immune protein produced in healthy human serum. It plays a central
              role in activating macrophages, the immune system&apos;s primary defense against
              cancer cells, viruses, and pathogens.
            </p>
            <p className="font-body text-ink-muted leading-relaxed mb-8">
              When administered under licensed medical supervision, GcMAF supports the
              body&apos;s innate immune response — making it a compelling adjunct therapy for
              clinicians managing complex immune-related conditions.
            </p>
            <Link
              href="/product"
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-body font-medium text-sm hover:bg-brand transition-all duration-300 group"
            >
              More Info
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Visual column */}
          <div className="space-y-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="flex gap-5 p-6 rounded-2xl bg-surface border border-border hover:border-brand/40 transition-colors"
                >
                  <div className="p-2.5 h-fit rounded-xl bg-brand/10 shrink-0">
                    <Icon size={22} className="text-brand" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink mb-1">{pillar.title}</h3>
                    <p className="font-body text-sm text-ink-muted leading-relaxed">{pillar.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
