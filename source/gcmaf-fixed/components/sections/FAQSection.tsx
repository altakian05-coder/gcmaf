'use client'

import { motion } from 'framer-motion'
import { Accordion } from '@/components/ui/Accordion'
import { faqs } from '@/lib/data/faqs'

export function FAQSection() {
  return (
    <section className="py-24 lg:py-32 bg-bg">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
            <span className="w-6 h-px bg-brand" />
            FAQ
            <span className="w-6 h-px bg-brand" />
          </span>
          <h2 className="font-display text-section font-semibold text-ink mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-ink-muted leading-relaxed">
            Common questions from physicians and clinic administrators about GcMAF therapy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion items={faqs} />
        </motion.div>
      </div>
    </section>
  )
}
