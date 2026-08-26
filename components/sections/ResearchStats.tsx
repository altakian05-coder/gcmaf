'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';
import { researchStats, researchHighlights } from '@/lib/data/research';

export function ResearchStats() {
  return (
    <section className="py-24 lg:py-32 bg-panel-dark">
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
            Evidence
            <span className="w-6 h-px bg-brand" />
          </span>
          <h2 className="font-display text-section font-semibold text-white mb-4 leading-tight">
            Built on Decades of Science
          </h2>
          <p className="font-body text-white/60 leading-relaxed">
            GcMAF&apos;s efficacy and safety profile are underpinned by a
            substantial body of peer-reviewed scientific literature spanning
            more than three decades.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {researchStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl border border-white/10 bg-white/5"
            >
              <p className="font-display text-4xl lg:text-5xl font-bold text-brand mb-2">
                {stat.value}
              </p>
              <p className="font-body text-sm font-semibold text-white mb-1">
                {stat.label}
              </p>
              <p className="font-body text-xs text-white/40">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {researchHighlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center gap-3"
            >
              <CheckCircle2 size={18} className="text-brand shrink-0" />
              <span className="font-body text-sm text-white/70">{h}</span>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button
            href="/research"
            variant="outline"
            className="border-brand text-brand hover:bg-brand hover:text-white"
          >
            Explore Research
          </Button>
        </div>
      </div>
    </section>
  );
}
