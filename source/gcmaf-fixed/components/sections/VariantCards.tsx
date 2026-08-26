"use client";

import { motion } from "framer-motion";
import { Droplets, Snowflake, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { variants } from "@/lib/data/variants";

export function VariantCards() {
  return (
    <section className="py-24 lg:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
            <span className="w-6 h-px bg-brand" />
            Formulations
            <span className="w-6 h-px bg-brand" />
          </span>
          <h2 className="font-display text-section font-semibold text-ink mb-4 leading-tight">
            Two Formulations.{" "}
            <span className="italic">One Powerful Therapy.</span>
          </h2>
          <p className="font-body text-ink-muted leading-relaxed">
            GcMAF offers two clinical-grade formulations, each engineered for
            specific distribution and administration requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {variants.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group rounded-2xl overflow-hidden card-hover-lift bg-surface border border-border"
            >
              {/* Top stripe */}
              <div
                className="h-1.5 w-full transition-all duration-300 group-hover:h-2"
                style={{
                  backgroundColor:
                    v.badgeColor === "teal"
                      ? "var(--color-accent-light)"
                      : "var(--color-brand)",
                }}
              />

              <div className="p-8">
                {/* Icon + name + badge */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="p-3 rounded-xl shrink-0"
                    style={{
                      backgroundColor: "rgba(46,134,171,0.2)",
                    }}
                  >
                    {v.id === "liquid" ? (
                      <Droplets
                        size={28}
                        style={{
                          color:
                            v.badgeColor === "teal"
                              ? "var(--color-accent-light)"
                              : "var(--color-brand)",
                        }}
                      />
                    ) : (
                      <Snowflake
                        size={28}
                        style={{
                          color:
                            v.badgeColor === "teal"
                              ? "var(--color-accent-light)"
                              : "var(--color-brand)",
                        }}
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      {v.name}
                    </h3>
                    <p className="font-body text-sm text-ink-muted">
                      {v.subtitle}
                    </p>
                  </div>
                  {v.popular && (
                    <span className="shrink-0 bg-brand text-white text-xs font-body font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                      Most Popular
                    </span>
                  )}
                </div>

                <p className="font-body text-sm text-ink-muted leading-relaxed mb-6">
                  {v.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "Storage", value: v.storage },
                    { label: "Shelf Life", value: v.shelfLife },
                    { label: "Cold Chain", value: v.coldChain },
                    { label: "Usage", value: v.usage },
                  ].map((spec) => (
                    <div
                      key={spec.label}
                      className="bg-bg rounded-xl p-3 border border-border"
                    >
                      <p className="font-body text-xs text-ink-muted uppercase tracking-wide mb-1">
                        {spec.label}
                      </p>
                      <p className="font-body text-sm text-ink">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <ul className="space-y-2 mb-8">
                  {v.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 font-body text-sm text-ink-muted"
                    >
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0"
                        style={{
                          color:
                            v.badgeColor === "teal"
                              ? "var(--color-accent-light)"
                              : "var(--color-brand)",
                        }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  className="w-full justify-center bg-accent hover:bg-accent/90 shadow-none"
                >
                  {v.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
