"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Nagalase Suppression in Disease",
    body: "In cancer, viral infection, and neurological disease, nagalase — an enzyme secreted by pathogens and tumour cells — deglycosylates GcProtein, preventing the endogenous production of GcMAF. Macrophage activity is effectively disabled.",
  },
  {
    step: "02",
    title: "Exogenous GcMAF Administration",
    body: "Pharmaceutical-grade GcMAF is administered via injection, bypassing the nagalase blockade. The active GcMAF protein enters circulation and encounters macrophage surface receptors.",
  },
  {
    step: "03",
    title: "Receptor Binding & Activation",
    body: "GcMAF binds to specific receptors (including Gc-globulin receptors) on macrophage surfaces, triggering intracellular signalling cascades that activate the cell's phagocytic and cytotoxic functions.",
  },
  {
    step: "04",
    title: "Immune Cascade Initiation",
    body: "Activated macrophages release cytokines that communicate with T-lymphocytes, NK cells, and dendritic cells — orchestrating a broad, coordinated immune response against the identified threat.",
  },
];

export function MechanismSection() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
            <span className="w-6 h-px bg-brand" />
            Science
          </span>
          <h2 className="font-display text-section font-semibold text-ink mb-4 leading-tight">
            Mechanism of Action
          </h2>
          <p className="font-body text-ink-muted leading-relaxed">
            Understanding how GcMAF works at a cellular level helps explain its
            broad applicability across immune-compromised disease states.
          </p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 p-6 rounded-2xl border border-border hover:border-brand/30 transition-colors group"
            >
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                <span className="font-display text-xl font-bold text-brand">
                  {s.step}
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink mb-2">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-ink-muted leading-relaxed">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
