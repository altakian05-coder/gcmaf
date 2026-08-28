import type { Metadata } from "next";
import Image from "next/image";
import {
  CheckCircle2,
  AlertTriangle,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";
import {
  researchStats,
  researchHighlights,
  publications,
  researchConditions,
  physiologicalEffects,
} from "@/lib/data/research";
import { PublicationsList } from "@/components/sections/PublicationsList";

export const metadata: Metadata = {
  title: "GcMAF Research & Publications: Evidence Overview",
  description:
    "Explore 30+ years of peer-reviewed GcMAF research across oncology, neurology, immunology, and infectious disease.",
};

export default function ResearchPage() {
  return (
    <>
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--color-brand) 0%, #4a9aaa 45%, var(--color-ink) 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-44 h-44 rounded-full border border-white/10" />
          <div className="absolute bottom-[20%] right-[5%] w-56 h-56 rounded-full border border-white/8" />
          <div className="absolute top-[55%] left-[5%] w-20 h-20 rounded-full bg-white/5" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-4">
              <span className="w-6 h-px bg-white/60" />
              Scientific Evidence
            </span>
            <h1 className="font-display text-hero font-bold text-white leading-tight mb-6">
              Research &amp; Publications
            </h1>
            <p className="font-body text-lg text-white/80 leading-relaxed">
              GcMAF&apos;s therapeutic potential is supported by more than 30
              years of peer-reviewed research published in indexed medical
              journals worldwide.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="font-display font-bold text-white block text-center"
            style={{
              fontSize: "clamp(4rem, 14vw, 12rem)",
              opacity: 0.06,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Research
          </span>
        </div>
      </section>

      <section className="py-16 bg-bg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {researchStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-5xl font-bold text-brand mb-1">
                  {stat.value}
                </p>
                <p className="font-body text-sm font-semibold text-ink mb-1">
                  {stat.label}
                </p>
                <p className="font-body text-xs text-ink-muted">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Indications List */}
      <section
        className="py-24 lg:py-32 relative"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "url(/images/research/physiological-effects-bg.webp)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
              <span className="w-6 h-px bg-brand" />
              Scope of Research
              <span className="w-6 h-px bg-brand" />
            </span>
            <h2 className="font-display text-section font-semibold text-ink mb-4 leading-tight">
              Conditions Explored in Published Research
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {researchConditions.map((condition) => (
              <span
                key={condition}
                className="px-4 py-2 rounded-full border border-brand/50 bg-brand/10 font-body text-sm font-medium text-ink"
              >
                {condition}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                <span className="w-6 h-px bg-brand" />
                Evidence Base
              </span>
              <h2 className="font-display text-section font-semibold text-ink mb-6 leading-tight">
                Decades of Peer-Reviewed Science
              </h2>
              <div className="space-y-4 font-body text-ink-muted leading-relaxed">
                <p>
                  Research into GcMAF and its precursor GcProtein (Vitamin D
                  Binding Protein) began in earnest in the early 1990s,
                  pioneered by researchers investigating the molecular
                  mechanisms of macrophage activation in cancer and viral
                  disease.
                </p>
                <p>
                  The foundational research of Nobuto Yamamoto and colleagues
                  established the nagalase-GcMAF axis — demonstrating that
                  cancer cells and viruses suppress endogenous GcMAF production
                  via nagalase-mediated deglycosylation of GcProtein.
                </p>
                <p>
                  Subsequent research has explored GcMAF across oncology,
                  neurology, autoimmune disease, infectious disease, and general
                  immunology — building a comprehensive evidence base that
                  supports its clinical utility as a macrophage immunotherapy.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {researchHighlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border hover:border-brand/30 transition-colors"
                >
                  <CheckCircle2
                    size={18}
                    className="text-brand shrink-0 mt-0.5"
                  />
                  <span className="font-body text-sm text-ink-muted leading-relaxed">
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scientifically-Validated Physiological Effects */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                <span className="w-6 h-px bg-brand" />
                Physiological Effects
              </span>
              <h2 className="font-display text-section font-semibold text-ink mb-8 leading-tight">
                Scientifically-Validated Physiological Effects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {physiologicalEffects.map((effect) => (
                  <div key={effect} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-brand shrink-0 mt-0.5"
                    />
                    <span className="font-body text-sm text-ink-muted leading-relaxed">
                      {effect}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/research/supported-by-science-image.webp"
                alt="Supported by science"
                unoptimized
                width={700}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Supportive Cancer Therapy */}
      <section className="py-24 lg:py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                <span className="w-6 h-px bg-brand" />
                Cancer Research
              </span>
              <h2 className="font-display text-section font-semibold text-ink mb-6 leading-tight">
                A Supportive Therapy for Integrative Cancer Care
              </h2>
              <div className="space-y-4 font-body text-ink-muted leading-relaxed">
                <p>
                  Research on VDBP-MAF has shown promising results, particularly
                  in the modulation of the immune system with clinical benefits
                  reported for cancer patients. Studies have indicated that
                  VDBP-MAF may help in preventing disease recurrence after
                  standard of care cancer treatments.
                </p>
                <p>
                  VDBP-MAF has also been shown to have anti-angiogenic effects,
                  inhibiting the formation of blood vessels in tumours — a key
                  mechanism in limiting tumour growth and metastasis.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-amber-500/25 bg-amber-500/5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle size={16} className="text-amber-500 shrink-0" />
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-amber-500">
                  Important Notice
                </span>
              </div>
              <p className="font-body text-sm text-ink-muted leading-relaxed">
                Any claims of VDBP-MAF as a wonder molecule or standalone
                treatment for cancer are not substantiated by current scientific
                evidence. GcMAF should be considered a supportive, integrative
                therapy used alongside — not in place of — standard of care
                treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Diverse Potential Applications */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
              <span className="w-6 h-px bg-brand" />
              Clinical Applicability
            </span>
            <h2 className="font-display text-section font-semibold text-ink mb-4 leading-tight">
              An Immune Therapy with Diverse Potential Applications
            </h2>
            <p className="font-body text-ink-muted leading-relaxed">
              Patient selection is crucial in VDBP-MAF therapy. Its
              effectiveness varies depending on the type and stage of disease,
              and clinical guidance should always be sought before use.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Patient selection criteria */}
            <div className="p-8 rounded-2xl border border-border bg-bg">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-brand/10">
                  <FlaskConical size={18} className="text-brand" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  Patient Selection Criteria
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "More effective for undifferentiated tumour cells than differentiated cells",
                  "Less effective for blood cancers such as leukaemia",
                  "Generally indicated for non-anaemic patients only",
                  "Effectiveness varies with cancer type and stage",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={15}
                      className="text-brand shrink-0 mt-0.5"
                    />
                    <span className="font-body text-sm text-ink-muted leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Scope */}
            <div className="p-8 rounded-2xl border border-border bg-bg">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-brand/10">
                  <CheckCircle2 size={18} className="text-brand" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  Studied Cancer Types
                </h3>
              </div>
              <p className="font-body text-sm text-ink-muted leading-relaxed mb-4">
                VDBP-MAF has demonstrated potential efficacy for patients with
                prostate, breast, colon, liver, stomach, lung (including
                mesothelioma), kidney, bladder, uterus, ovarian, head/neck, and
                brain cancers, as well as fibrosarcomas and melanomas.
              </p>
              <p className="font-body text-sm text-ink-muted leading-relaxed">
                VDBP-MAF has also been explored for neurological disorders,
                autoimmune conditions, and serious infections, with highly
                promising peer-reviewed research and case reports published
                across these fields.
              </p>
            </div>
          </div>
          {/* Trials caveat */}
          <div className="mt-8 p-5 rounded-xl border border-border bg-bg/50">
            <p className="font-body text-sm text-ink-muted leading-relaxed text-center max-w-3xl mx-auto">
              Despite promising preclinical studies and patient reports, more
              extensive double-blind randomised clinical trials with larger
              sample sizes are still needed to fully establish therapeutic
              efficacy across all potential indications of VDBP-MAF.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Safety Profile */}
      <section className="py-24 lg:py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                <span className="w-6 h-px bg-brand" />
                Safety Profile
              </span>
              <h2 className="font-display text-section font-semibold text-ink mb-6 leading-tight">
                A Safe and Natural Treatment with Clinical Benefits
              </h2>
              <div className="space-y-4 font-body text-ink-muted leading-relaxed">
                <p>
                  GcMAF holds great potential as a natural and supportive
                  immunotherapy without side-effects. Early evidence supports
                  its potential application in cancer treatment and many other
                  immune-related disorders.
                </p>
                <p>
                  Clinical data from physicians and researchers around the world
                  has demonstrated that VDBP-MAF is extremely safe with
                  considerable benefits for immune-compromised patients. No
                  adverse events have been reported in over 30 years of
                  scientific literature.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-12">
              {[
                {
                  value: "0",
                  label: "adverse Events Reported",
                  sub: "In 30+ years of published literature",
                },
                {
                  value: "30+",
                  label: "years of Safety Data",
                  sub: "Across hundreds of patients globally",
                },
                {
                  value: "160+",
                  label: "clinical Studies",
                  sub: "Indexed in major medical databases",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-6 p-6 rounded-2xl border border-border bg-surface"
                >
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center">
                    <ShieldCheck size={24} className="text-brand" />
                  </div>
                  <div>
                    <div className="flex flex-row gap-2">
                      <p className="font-display text-2xl font-bold text-brand leading-none mb-1">
                        {s.value}
                      </p>
                      <p className="font-body text-base font-semibold text-ink mb-0.5">
                        {s.label}
                      </p>
                    </div>
                    <p className="font-body text-sm text-ink-muted">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
              <span className="w-6 h-px bg-brand" />
              Selected Publications
            </span>
            <h2 className="font-display text-section font-semibold text-ink mb-4 leading-tight">
              Key Published Papers
            </h2>
            <p className="font-body text-ink-muted leading-relaxed">
              A selection of peer-reviewed publications indexed in major medical
              databases. This list is illustrative, not exhaustive.
            </p>
          </div>
          <PublicationsList publications={publications} />
        </div>
      </section>
    </>
  );
}
