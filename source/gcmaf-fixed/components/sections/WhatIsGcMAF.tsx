"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function WhatIsGcMAF() {
  return (
    <section className="py-24 lg:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
              <span className="w-6 h-px bg-brand" />
              The Science
            </span>
            <h2 className="font-display text-section font-semibold text-ink mb-6 leading-tight">
              What Is GcMAF?
            </h2>
            <div className="space-y-4 font-body text-ink-muted leading-relaxed">
              <p>
                GcMAF — Gc Protein-derived Macrophage Activating Factor — is a
                naturally-occurring glycoprotein found in healthy human serum.
                It is produced through the deglycosylation of Vitamin D Binding
                Protein (GcProtein, or DBP), a process catalysed by enzymes on
                the surface of B and T lymphocytes.
              </p>
              <p>
                Macrophages are the commanding officers of the immune system —
                large, versatile cells responsible for detecting, engulfing, and
                destroying pathogens, cancer cells, and cellular debris. In a
                healthy immune system, GcMAF ensures macrophages remain
                activated and responsive to immune threats.
              </p>
              <p>
                In many chronic disease states — including cancer, viral
                infections, and neurological conditions — elevated levels of
                nagalase (an enzyme secreted by pathogens and tumour cells)
                deglycosylate and inactivate GcProtein, suppressing endogenous
                GcMAF production and disabling macrophage function. Exogenous
                GcMAF restores this critical immune pathway.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/product" arrow>
                Learn More About the Product
              </Button>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-6">
              <img
                src="/images/home/what-is-gcmaf.png"
                alt="What is GcMAF diagram"
                className="w-full rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
