'use client'

import { motion } from 'framer-motion'
import { Award, FlaskConical, Dna, TrendingUp, ShieldCheck, Clock } from 'lucide-react'
import { productFeatures } from '@/lib/data/features'

const iconMap: Record<string, React.ElementType> = {
  Award, FlaskConical, Dna, TrendingUp, ShieldCheck, Clock,
}

export function ProductFeatures() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
            <span className="w-6 h-px bg-brand" />
            Quality Assurance
            <span className="w-6 h-px bg-brand" />
          </span>
          <h2 className="font-display text-section font-semibold text-ink mb-4 leading-tight">
            Key Product Features
          </h2>
          <p className="font-body text-ink-muted leading-relaxed">
            Every batch of GcMAF products undergoes rigorous quality control to
            ensure consistent potency, safety, and clinical-grade standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Award
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 p-6 rounded-2xl border border-border hover:border-brand/30 hover:bg-brand/5 transition-all duration-300 group"
              >
                <div className="p-2.5 h-fit rounded-xl bg-brand/10 group-hover:bg-brand/20 transition-colors shrink-0">
                  <Icon size={22} className="text-brand" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink mb-1">{feature.title}</h3>
                  <p className="font-body text-sm text-ink-muted leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
