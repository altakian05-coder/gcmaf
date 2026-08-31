import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MedicalDisclaimer } from "@/components/clinical";

export const metadata: Metadata = {
  title: "Autoimmune Research: GcMAF & Immune Modulation",
  description:
    "Explore GcMAF research involving macrophage activity, vitamin D-binding protein, immune regulation, inflammatory signaling, and autoimmune conditions.",
};

export default function AutoimmunePage() {
  return (
    <>
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--color-brand) 0%, #4a9aaa 45%, var(--color-ink) 100%)",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-4">
              <span className="w-6 h-px bg-white/60" />
              Clinical Research
            </span>
            <h1 className="font-display text-hero font-bold text-white leading-tight mb-6">
              Autoimmune Conditions
            </h1>
            <p className="font-body text-lg text-white/80 leading-relaxed">
              Exploring macrophage biology, vitamin D pathways, inflammatory signaling,
              and immune regulation in autoimmune research involving GcMAF.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl font-semibold text-ink mb-6">
              GcMAF and Immune Modulation Research
            </h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed mb-6">
              Autoimmune conditions involve dysregulated immune activity directed toward
              the body&apos;s own tissues. Research in this field examines macrophages,
              cytokines, vitamin D signaling, immune tolerance, and the interaction between
              innate and adaptive immune responses.
            </p>
            <p className="font-body text-lg text-ink-muted leading-relaxed">
              GcMAF is studied as a macrophage-related factor derived from vitamin D-binding
              protein. Research questions include how GcMAF may influence macrophage
              behavior, inflammatory signaling, and broader immune-regulatory pathways.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-surface)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full order-last lg:order-first">
              <img
                src="/images/autoimmune/how-it-works-image.webp"
                alt="GcMAF and autoimmune immune regulation research"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6 leading-tight">
                Research Pathways of Interest
              </h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">
                Vitamin D, vitamin D-binding protein, vitamin D receptor signaling, and
                macrophage function are all studied in immune regulation. Researchers have
                also examined inflammatory cytokines and macrophage polarization in
                autoimmune biology.
              </p>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                GcMAF research adds another layer by examining macrophage activation and
                immune signaling. The exact findings depend on the preparation, study
                design, biological model, and patient population being investigated.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <Image
          src="/images/autoimmune/lupus-bg.jpg"
          alt="Autoimmune and lupus research"
          unoptimized
          fill
          className="object-cover absolute inset-0 brightness-50"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Autoimmune Conditions Discussed in Research
            </h2>
            <p className="font-body text-lg text-white/90 leading-relaxed">
              Autoimmune research covers conditions including systemic lupus erythematosus,
              rheumatoid arthritis, multiple sclerosis, autoimmune thyroid disorders,
              type 1 diabetes, and inflammatory bowel disease. GcMAF-related research is
              most useful when the exact condition, biological pathway, formulation, and
              measured outcomes are clearly identified.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["Rheumatoid Arthritis", "Research examines macrophage activation, inflammatory cytokines, joint inflammation, and immune-regulatory pathways relevant to rheumatoid arthritis."],
              ["Multiple Sclerosis", "Studies of multiple sclerosis examine immune signaling, inflammatory mediators, microglia, macrophages, and mechanisms involved in nervous-system inflammation."],
              ["Autoimmune Thyroid Disorders", "Vitamin D pathways, immune tolerance, inflammatory signaling, and thyroid autoimmunity are active areas of research."],
              ["Systemic Lupus Erythematosus", "Research in lupus includes macrophage biology, inflammatory mediators, vitamin D signaling, immune complexes, and systemic immune regulation."],
              ["Type 1 Diabetes", "Research examines immune-cell activity, inflammatory pathways, pancreatic beta-cell injury, and mechanisms involved in immune tolerance."],
              ["Inflammatory Bowel Disease", "IBD research includes macrophage behavior, mucosal immunity, inflammatory cytokines, microbiome interactions, and tissue repair."],
            ].map(([title, text]) => (
              <div key={title} className="bg-brand/5 border border-brand/20 p-8 rounded-3xl">
                <h2 className="font-display text-2xl font-semibold text-ink mb-4">{title}</h2>
                <p className="font-body text-ink-muted leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6 leading-tight">
                What GcMAF Research Measures
              </h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed mb-6">
                GcMAF-related autoimmune research can examine biological and clinical
                endpoints depending on the study design. Useful measures may include
                macrophage activity, cytokine patterns, inflammatory markers, immune-cell
                signaling, symptoms, function, and quality-of-life outcomes.
              </p>
              <ul className="space-y-4 font-body text-lg text-ink-muted mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand shrink-0 mt-0.5" />
                  <span><strong>Macrophage activity:</strong> cellular activation and immune signaling.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand shrink-0 mt-0.5" />
                  <span><strong>Inflammatory pathways:</strong> cytokines and related biomarkers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand shrink-0 mt-0.5" />
                  <span><strong>Clinical observations:</strong> symptoms, function, and patient-reported outcomes.</span>
                </li>
              </ul>
            </div>
            <div className="relative w-full">
              <img
                src="/images/autoimmune/hero-vial.png"
                alt="GcMAF autoimmune research vial"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-surface border border-border p-10 rounded-3xl text-center">
            <h2 className="font-display text-3xl font-semibold text-ink mb-4">
              An Active Area of Scientific Study
            </h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed">
              Research continues to examine GcMAF, macrophage regulation, vitamin D-binding
              protein, inflammatory signaling, and immune tolerance across different
              autoimmune conditions. Laboratory findings, case observations, and clinical
              studies each contribute information to this evolving evidence base.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-10 lg:p-12 rounded-3xl bg-brand/5 border border-brand/20 relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                <span className="w-4 h-px bg-brand" />
                Quick Links &amp; Get In Touch
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink mb-4">
                Procure for Your Practice
              </h2>
              <p className="font-body text-ink-muted max-w-xl text-lg leading-relaxed">
                Medical professionals are invited to contact our team to discuss product
                information, research, safety data, and clinical inquiries.
              </p>
            </div>
            <div className="flex gap-4 shrink-0 flex-col sm:flex-row w-full md:w-auto relative z-10">
              <Button href="/contact" arrow>Contact Us</Button>
              <Link
                href="/clinical-applications"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border text-ink-muted hover:text-brand hover:border-brand transition-colors font-body text-sm font-medium bg-bg shadow-sm"
              >
                <ArrowLeft size={16} />
                All Applications
              </Link>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
            <span className="font-body text-xs text-ink-muted uppercase tracking-widest hidden sm:inline-block">
              Next Investigative Area
            </span>
            <Link
              href="/clinical-applications/chronic-infections"
              className="inline-flex items-center gap-2 font-display text-xl font-semibold text-ink hover:text-brand transition-colors group ml-auto"
            >
              Chronic Infections
              <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <MedicalDisclaimer />
    </>
  );
}
