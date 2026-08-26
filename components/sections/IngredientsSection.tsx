'use client'

import { motion } from 'framer-motion'

const ingredients = [
  {
    name: 'GcMAF',
    amount: '400ng',
    role: 'Active Ingredient',
    description: 'The primary macrophage activating factor. Binds directly to macrophage receptors to initiate immune activation cascade.',
    color: 'brand',
  },
  {
    name: 'GcProtein',
    amount: '2000ng',
    role: 'Precursor',
    description: 'Vitamin D Binding Protein — the natural precursor from which GcMAF is enzymatically derived. Required for biosynthesis and co-administration.',
    color: 'accent',
  },
]

export function IngredientsSection() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--color-surface)' }}>
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
            Composition
          </span>
          <h2 className="font-display text-section font-semibold text-ink mb-4 leading-tight">
            Ingredients
          </h2>
          <p className="font-body text-ink-muted leading-relaxed">
            GcMAF formulations contain two key protein components at precisely
            controlled concentrations, verified by third-party analytical testing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ingredients.map((ing, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 rounded-2xl border border-border bg-bg"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink">{ing.name}</h3>
                  <p className="font-body text-xs text-ink-muted uppercase tracking-wide mt-1">{ing.role}</p>
                </div>
                <div
                  className="text-right"
                  style={{ color: ing.color === 'brand' ? 'var(--color-brand)' : 'var(--color-accent-light)' }}
                >
                  <p className="font-display text-3xl font-bold">{ing.amount}</p>
                  <p className="font-body text-xs opacity-60">per dose</p>
                </div>
              </div>
              <p className="font-body text-sm text-ink-muted leading-relaxed">{ing.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
