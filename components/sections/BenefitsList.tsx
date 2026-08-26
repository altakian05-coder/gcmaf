'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { homepageBenefits } from '@/lib/data/benefits';

export function BenefitsList() {
  const half = Math.ceil(homepageBenefits.length / 2);
  const col1 = homepageBenefits.slice(0, half);
  const col2 = homepageBenefits.slice(half);

  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
            <span className="w-6 h-px bg-brand" />
            Potential Benefits
          </span>
          <h2 className="font-display text-section font-semibold text-ink mb-4 leading-tight">
            Potential Benefits
          </h2>
          <p className="font-body text-ink-muted leading-relaxed">
            Peer-reviewed research on GcMAF outlines diverse immune-related
            functions and beneficial effects. All claims are supported by
            published scientific literature.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 mb-12">
          {[col1, col2].map((col, ci) => (
            <div key={ci} className="space-y-3">
              {col.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: ci === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-brand shrink-0 mt-0.5"
                  />
                  <span className="font-body text-sm text-ink-muted leading-relaxed">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        <Button href="/product" arrow>
          Read More
        </Button>
      </div>
    </section>
  );
}
