'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle2, AlertCircle } from 'lucide-react'

const safetyPoints = [
  {
    icon: Shield,
    title: 'Bioidentical Origin',
    body: 'GcMAF is a naturally-occurring protein found in healthy human serum and in mother\'s breast milk (colostrum). It is not a synthetic molecule — it is a bioidentical form of an endogenous immune factor.',
  },
  {
    icon: CheckCircle2,
    title: 'Zero Reported Adverse Events',
    body: 'Over 30 years of peer-reviewed clinical literature report no serious adverse events attributable to GcMAF at therapeutic doses. This safety record is among the most robust of any immunotherapy agent.',
  },
  {
    icon: AlertCircle,
    title: 'Minor Detox Symptoms Possible',
    body: 'At higher doses, some patients may experience mild, temporary flu-like symptoms (fatigue, low-grade fever, mild aching) consistent with heightened immune activation. These are self-limiting and typically resolve within 24–72 hours.',
  },
]

export function SafetySection() {
  return (
    <section className="py-24 lg:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
            <span className="w-6 h-px bg-brand" />
            Safety
          </span>
          <h2 className="font-display text-section font-semibold text-ink mb-4 leading-tight">
            Safety Information
          </h2>
          <p className="font-body text-ink-muted leading-relaxed">
            GcMAF products are manufactured to GMP standards and independently verified.
            The following safety profile is based on published scientific literature.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {safetyPoints.map((point, i) => {
            const Icon = point.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-surface border border-border"
              >
                <div className="p-2.5 w-fit rounded-xl bg-brand/10 mb-4">
                  <Icon size={22} className="text-brand" />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink mb-2">{point.title}</h3>
                <p className="font-body text-sm text-ink-muted leading-relaxed">{point.body}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-5 rounded-2xl border border-brand/20 bg-brand/5"
        >
          <p className="font-body text-sm text-ink-muted leading-relaxed">
            <strong className="text-ink font-semibold">GMP Compliance:</strong> All GcMAF products are manufactured in ISO-certified, GMP-compliant facilities with full quality documentation, third-party sterility testing, and transcriptomic activity verification on human macrophage cell lines.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
