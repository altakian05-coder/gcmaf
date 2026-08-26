'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { benefits } from '@/lib/data/benefits'

export function ProductBenefits() {
  const half = Math.ceil(benefits.length / 2)
  const col1 = benefits.slice(0, half)
  const col2 = benefits.slice(half)

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
            Reported Benefits
          </span>
          <h2 className="font-display text-section font-semibold text-ink mb-4 leading-tight">
            Reported Beneficial Effects
          </h2>
          <p className="font-body text-ink-muted leading-relaxed">
            The following potential benefits have been described in peer-reviewed publications.
            All effects are reported as &ldquo;may help&rdquo; or &ldquo;has been shown to&rdquo; — individual
            results vary and are subject to clinical supervision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3">
          {[col1, col2].map((col, ci) => (
            <div key={ci} className="space-y-3">
              {col.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: ci === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand/5 transition-colors"
                >
                  <CheckCircle2 size={18} className="text-brand shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-ink-muted leading-relaxed">{benefit}</span>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
