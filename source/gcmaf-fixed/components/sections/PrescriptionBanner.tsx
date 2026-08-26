'use client'

import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function PrescriptionBanner() {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border-2 border-brand/30 p-8 lg:p-10"
          style={{ backgroundColor: 'rgba(200,146,42,0.06)' }}
        >
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-brand/15 shrink-0">
              <AlertTriangle size={22} className="text-brand" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-ink mb-3">
                Prescription-Only Notice
              </h3>
              <p className="font-body text-ink-muted leading-relaxed mb-4">
                GcMAF is a prescription-only product. We distribute exclusively to licensed
                physicians and accredited medical clinics. For patient access, please consult
                a qualified healthcare professional. GcMAF does not supply directly
                to individual patients under any circumstances.
              </p>
              <p className="font-body text-sm text-ink-muted mb-6">
                If you are a physician or clinic administrator interested in procurement,
                please contact our medical distribution team.
              </p>
              <Button href="/contact" arrow>
                Contact Our Distribution Team
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
