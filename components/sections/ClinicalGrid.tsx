'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, Brain, Activity, Zap, TrendingUp, ArrowRight } from 'lucide-react'
import { conditions } from '@/lib/data/conditions'

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Brain,
  Activity,
  Zap,
  TrendingUp,
}

export function ClinicalGrid() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
            <span className="w-6 h-px bg-brand" />
            Applications
            <span className="w-6 h-px bg-brand" />
          </span>
          <h2 className="font-display text-section font-semibold text-ink mb-4 leading-tight">
            Clinical Applications
          </h2>
          <p className="font-body text-ink-muted leading-relaxed">
            Nagalase — an enzyme elevated in many chronic diseases — suppresses endogenous GcMAF
            production, disabling macrophage function. Research explores GcMAF restoration across
            a broad spectrum of immune-related conditions.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {conditions.map((condition, i) => {
            const Icon = iconMap[condition.icon] || Shield
            return (
              <motion.div
                key={condition.slug}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/clinical-applications/${condition.slug}`}
                  className="group flex flex-col bg-surface border border-border rounded-2xl p-6 card-hover-lift hover:border-brand transition-all duration-300 h-full"
                  style={{ borderTop: '4px solid var(--color-brand)' }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2.5 bg-brand/10 rounded-xl group-hover:bg-brand/20 transition-colors">
                      <Icon size={22} className="text-brand" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink group-hover:text-brand transition-colors">
                        {condition.shortTitle}
                      </h3>
                      <p className="font-body text-xs text-ink-muted mt-0.5">{condition.tagline}</p>
                    </div>
                  </div>
                  <p className="font-body text-sm text-ink-muted leading-relaxed mb-4">
                    {condition.summary}
                  </p>
                  <div className="mt-auto flex items-center gap-1 text-brand text-sm font-body font-medium group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
