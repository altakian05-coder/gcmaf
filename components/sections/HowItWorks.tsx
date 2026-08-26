'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'GcMAF binds to macrophage receptors',
    description:
      'GcMAF attaches to specific receptors on the surface of macrophages throughout the body, initiating the activation cascade.',
  },
  {
    number: '02',
    title: 'Macrophages activate and multiply',
    description:
      'Receptor binding triggers intracellular signalling pathways, causing macrophages to enlarge, increase in number, and heighten their phagocytic capacity.',
  },
  {
    number: '03',
    title: 'Coordinated immune response begins',
    description:
      'Activated macrophages communicate with T-cells, NK cells, and other immune components, orchestrating a broad and targeted immune response.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-bg">
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
            Mechanism
            <span className="w-6 h-px bg-brand" />
          </span>
          <h2 className="font-display text-section font-semibold text-ink mb-4 leading-tight">
            How Does GcMAF Work?
          </h2>
          <p className="font-body text-ink-muted leading-relaxed">
            GcMAF activates macrophages — the immune system&apos;s commanding officers — through
            a precise receptor-binding mechanism that restores natural immune surveillance.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Number circle */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-brand/10 border-2 border-brand/20" />
                <div className="absolute inset-3 rounded-full bg-brand/10" />
                <span className="font-display text-3xl font-bold text-brand relative z-10">{step.number}</span>
              </div>

              <h3 className="font-display text-xl font-semibold text-ink mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="font-body text-sm text-ink-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <p className="font-body text-ink-muted leading-relaxed">
            As the immune system&apos;s primary phagocytic cells, macrophages orchestrate both
            innate and adaptive immunity. When GcMAF restores their activity, it effectively
            re-engages the body&apos;s most powerful natural defence mechanism — one that has
            evolved over millions of years to identify and eliminate biological threats.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-2xl max-w-4xl mx-auto"
          >
            <source src="https://cdn.gcmaf.net/home-how-does-it-work.mov" type="video/quicktime" />
          </video>
        </motion.div>
      </div>
    </section>
  )
}
