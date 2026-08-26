"use client";

import { motion } from "framer-motion";
import { Droplets, Snowflake, Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { variants } from "@/lib/data/variants";

export function ProductVariants() {
  return (
    <section className="py-24 lg:py-32 bg-bg">
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
            Formulations
          </span>
          <h2 className="font-display text-section font-semibold text-ink mb-4 leading-tight">
            Choose Your Formulation
          </h2>
          <p className="font-body text-ink-muted leading-relaxed">
            Both formulations contain identical active content — the choice
            depends on your clinic&apos;s storage infrastructure and
            distribution requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10">
          {variants.map((v, i) => {
            const isGold = v.badgeColor === "gold";
            const accentColor = isGold
              ? "var(--color-brand)"
              : "var(--color-accent-light)";

            return (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative rounded-2xl border border-border bg-surface overflow-hidden group card-hover-lift"
              >
                {/* Top stripe */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: accentColor }}
                />

                <div className="p-8 md:p-10 flex flex-col h-full">
                  {/* Icon + title + badge */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="p-3.5 rounded-2xl shrink-0"
                      style={{ backgroundColor: `${accentColor}15` }}
                    >
                      {v.id === "liquid" ? (
                        <Droplets size={30} style={{ color: accentColor }} />
                      ) : (
                        <Snowflake size={30} style={{ color: accentColor }} />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-2xl font-semibold text-ink">
                        {v.name}
                      </h3>
                      <p className="font-body text-sm text-ink-muted mt-0.5">
                        {v.subtitle}
                      </p>
                    </div>
                    {v.popular && <Badge variant="gold">Most Popular</Badge>}
                  </div>

                  <div
                    className="relative w-full h-64 md:h-72 mb-8 flex items-center justify-center overflow-hidden"
                    style={{
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <Image
                      src={
                        v.id === "liquid"
                          ? "/images/product/product-02-liquid-vial.jpg"
                          : "/images/product/product-04-lyophilized-vial.png"
                      }
                      alt={`${v.name} formulation bottle`}
                      fill
                      className="object-contain p-14 md:p-16"
                      sizes="(max-width: 1024px) 100vw, 75vw"
                    />
                  </div>

                  <p className="font-body text-sm text-ink-muted leading-relaxed mb-6">
                    {v.description}
                  </p>

                  {/* Specs table */}
                  <div className="space-y-2 mb-6 border border-border rounded-xl overflow-hidden">
                    {[
                      { label: "Storage", value: v.storage },
                      { label: "Shelf Life", value: v.shelfLife },
                      { label: "Cold Chain", value: v.coldChain },
                      { label: "Usage", value: v.usage },
                    ].map((spec, si) => (
                      <div
                        key={spec.label}
                        className={`flex justify-between items-start px-4 py-2.5 ${si % 2 === 0 ? "bg-bg" : "bg-surface"}`}
                      >
                        <span className="font-body text-xs font-semibold text-ink-muted uppercase tracking-wide">
                          {spec.label}
                        </span>
                        <span className="font-body text-sm text-ink text-right max-w-[55%]">
                          {spec.value}
                        </span>
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
                          style={{ color: accentColor }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={`/contact?inquiry=${v.id}`}
                    className="mt-auto w-full justify-center bg-accent hover:bg-accent/90 shadow-none"
                  >
                    {v.cta}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
