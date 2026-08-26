"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const showcaseImages = [
  {
    src: "/images/product/product-01-liquid-boxes.png",
    alt: "Two presentation boxes containing ten GcMAF liquid vials",
    label: "GcMAF Liquid — 10-Vial Presentation",
  },
  {
    src: "/images/product/product-02-liquid-vial.jpg",
    alt: "GcMAF liquid Vitamin D binding protein vial",
    label: "GcMAF Liquid Vial",
  },
  {
    src: "/images/product/product-03-lyophilized-boxes.png",
    alt: "Two presentation boxes containing ten GcMAF lyophilized vials",
    label: "GcMAF Lyophilized — 10-Vial Presentation",
  },
  {
    src: "/images/product/product-04-lyophilized-vial.png",
    alt: "GcMAF lyophilized vial",
    label: "GcMAF Lyophilized Vial",
  },
];

// Fixed card positions — never animate, only the images inside fade
const STACK = [
  {
    x: 32,
    y: 24,
    rotate: 3.5,
    zIndex: 10,
    shadow: "0 4px 12px rgba(37,49,94,0.06)",
  },
  {
    x: 16,
    y: 12,
    rotate: 1.75,
    zIndex: 20,
    shadow: "0 8px 24px rgba(37,49,94,0.10)",
  },
  {
    x: 0,
    y: 0,
    rotate: 0,
    zIndex: 30,
    shadow: "0 20px 60px rgba(37,49,94,0.16), 0 4px 16px rgba(37,49,94,0.08)",
  },
];

export function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const activeImage = showcaseImages[activeIndex];

  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % showcaseImages.length),
    [],
  );
  const prev = useCallback(
    () =>
      setActiveIndex(
        (i) => (i - 1 + showcaseImages.length) % showcaseImages.length,
      ),
    [],
  );

  // Auto-advance — pauses on hover
  useEffect(() => {
    if (hovered) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next, hovered]);

  return (
    <section className="py-24 lg:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
            <span className="w-6 h-px bg-brand" />
            Product Showcase
          </span>
          <h2 className="font-display text-section font-semibold text-ink leading-tight">
            Product Showcase
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="max-w-3xl mx-auto"
        >
          <div className="relative pb-7 pr-8">
            <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
              {STACK.map((pos, stackIdx) => {
                const isFront = stackIdx === STACK.length - 1;
                const imgOffset = STACK.length - 1 - stackIdx;
                const img =
                  showcaseImages[
                    (activeIndex + imgOffset) % showcaseImages.length
                  ];

                return (
                  <div
                    key={stackIdx}
                    className="absolute inset-0 rounded-2xl overflow-hidden border border-border bg-surface"
                    style={{
                      zIndex: pos.zIndex,
                      boxShadow: pos.shadow,
                      transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotate}deg)`,
                      cursor: isFront ? "default" : "pointer",
                    }}
                    onClick={() =>
                      !isFront &&
                      setActiveIndex(
                        (activeIndex + imgOffset) % showcaseImages.length,
                      )
                    }
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={img.src}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          unoptimized
                          fill
                          className={`object-contain p-3 ${!isFront ? "brightness-95" : ""}`}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority={isFront}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-2">
            <button
              onClick={prev}
              className="w-8 h-8 rounded-full border border-border bg-surface hover:bg-brand hover:border-brand hover:text-white text-ink-muted flex items-center justify-center transition-colors shrink-0"
              aria-label="Previous image"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M9 11L5 7l4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {showcaseImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to image ${i + 1}`}
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-6 h-2 bg-brand"
                        : "w-2 h-2 bg-border hover:bg-brand/40"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="w-8 h-8 rounded-full border border-border bg-surface hover:bg-brand hover:border-brand hover:text-white text-ink-muted flex items-center justify-center transition-colors shrink-0"
              aria-label="Next image"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M5 11l4-4-4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <p className="text-center font-body text-sm text-ink mt-4">
            {activeImage.label}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mt-20"
        >
          <h3 className="font-display text-2xl font-semibold text-ink mb-6">
            How does GcMAF work?
          </h3>
          <div className="space-y-4 font-body text-ink-muted leading-relaxed">
            <p>
              The active ingredient in GcMAF, VDBP-MAF, is a complex protein
              produced by the sequential deglycosylation of Vitamin D Binding
              Protein (VDBP). VDBP-MAF is a naturally-occurring messenger
              molecule that directs and coordinates immune cells.
            </p>
            <p>
              As a stabilized vitamin D protein complex containing both
              precursor (VDBP) and active (VDBP-MAF) ingredients, GcMAF exerts
              its actions through the vitamin D axis and pathways to modulate
              macrophage activity. It boosts innate immune function by
              increasing vitamin D half-life and activates macrophages, which
              coordinate an integrated immune response.
            </p>
            <p>
              Activated macrophages have diverse positive actions in the human
              body such as eliminating cancer cells, protecting against
              infections, and initiating repair and regeneration of the brain
              and central nervous system.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-5xl mx-auto"
        >
          <video autoPlay muted loop playsInline className="w-full rounded-2xl">
            <source
              src="https://cdn.gcmaf.net/product-how-does-it-work.mov"
              type="video/mp4"
            />
          </video>
        </motion.div>
      </div>
    </section>
  );
}
