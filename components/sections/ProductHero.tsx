"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function ProductHero() {
  return (
    <section
      className="pt-32 pb-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--color-brand) 0%, #4a9aaa 45%, var(--color-hero-end) 100%)",
      }}
    >
      {/* Cellular dot decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-40 h-40 rounded-full border border-white/10" />
        <div className="absolute bottom-[20%] right-[5%] w-56 h-56 rounded-full border border-white/8" />
        <div className="absolute top-[50%] left-[5%] w-20 h-20 rounded-full bg-white/5" />
        <div className="absolute bottom-[10%] left-[20%] w-32 h-32 rounded-full border border-white/8" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 font-body text-sm text-white/50 mb-8"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-white/80">Product</span>
        </motion.nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-4">
                <span className="w-6 h-px bg-white/60" />
                Clinical-Grade Formulation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-display text-hero font-bold text-white leading-tight mb-6"
            >
              GcMAF Immune Therapy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-body text-lg text-white/80 leading-relaxed"
            >
              A precision-engineered macrophage activating protein available in
              two clinical-grade formulations — manufactured to GMP standards
              and independently verified for potency, sterility, and biological
              activity.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative flex items-center justify-center md:justify-end"
          >
            <Image
              src="/images/product/gcmaf-vials-transparent.png"
              alt="GcMAF liquid and lyophilized vials"
              unoptimized
              width={1536}
              height={1024}
              className="w-full max-w-[680px] h-auto object-contain drop-shadow-[0_28px_34px_rgba(8,38,70,0.25)]"
              priority
            />
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
          style={{
            fontSize: "clamp(5rem, 16vw, 14rem)",
            opacity: 0.06,
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          Product
        </span>
      </div>
    </section>
  );
}
