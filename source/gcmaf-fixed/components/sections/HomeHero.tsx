'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { MacrophageSVG } from '@/components/ui/MacrophageSVG'

export function HomeHero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, var(--color-brand) 0%, #4a9aaa 45%, var(--color-hero-end) 100%)' }}
    >
      {/* Cellular dot decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[12%] left-[8%] w-48 h-48 rounded-full border border-white/10" />
        <div className="absolute top-[20%] left-[12%] w-28 h-28 rounded-full bg-white/5" />
        <div className="absolute bottom-[20%] right-[5%] w-64 h-64 rounded-full border border-white/8" />
        <div className="absolute top-[55%] right-[20%] w-20 h-20 rounded-full bg-white/5" />
        <div className="absolute bottom-[40%] left-[5%] w-16 h-16 rounded-full border border-white/10" />
        <div className="absolute top-[35%] right-[8%] w-40 h-40 rounded-full border border-white/6" />
      </div>

      {/* Macrophage illustration — right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] max-w-3xl opacity-15 pointer-events-none animate-float-cell hidden lg:block">
        <MacrophageSVG className="w-full h-full text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-6">
              <span className="w-8 h-px bg-white/60" />
              Natural Immunotherapy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-hero font-bold text-white leading-[1.1] mb-6"
          >
            Activating your body&apos;s{' '}
            <span className="text-white drop-shadow-lg">first line</span>{' '}
            of defense.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-body text-lg text-white/80 leading-relaxed mb-10 max-w-xl"
          >
            GcMAF is a breakthrough immune protein that restores macrophage
            activity in immune-compromised patients — distributed exclusively
            to licensed physicians and medical institutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="/product" size="lg" className="bg-white text-panel-dark hover:bg-white/90 shadow-lg">
              Explore the Product
            </Button>
            <Button href="/research" variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10">
              View Research
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-6 border-t border-white/20 pt-8"
          >
            {[
              { value: '30+', label: 'Years of Research' },
              { value: '160+', label: 'Clinical Studies' },
              { value: '0', label: 'Adverse Events' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-white">{stat.value}</p>
                <p className="font-body text-xs text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Large watermark text */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-display font-bold text-white block text-center"
          style={{ fontSize: 'clamp(6rem, 20vw, 18rem)', opacity: 0.06, lineHeight: 1, letterSpacing: '-0.02em' }}
        >
          GcMAF
        </span>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs text-white/40 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
