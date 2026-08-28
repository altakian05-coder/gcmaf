import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MedicalDisclaimer } from "@/components/clinical";

export const metadata: Metadata = {
  title: "Autoimmune Research: GcMAF & Immune Modulation",
  description:
    "Exploring the recalibration of immune tolerance mechanisms and VDR signaling with GcMAF.",
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
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-44 h-44 rounded-full border border-white/10" />
          <div className="absolute bottom-[20%] right-[5%] w-56 h-56 rounded-full border border-white/8" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-4">
              <span className="w-6 h-px bg-white/60" />
              Clinical Application
            </span>
            <h1 className="font-display text-hero font-bold text-white leading-tight mb-6">
              Autoimmune Conditions
            </h1>
            <p className="font-body text-lg text-white/80 leading-relaxed">
              Exploring the recalibration of immune tolerance mechanisms rather
              than enforcing overt immunosuppression.
            </p>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl font-semibold text-ink mb-6">
              {/* GcMAF Supports Immune Tolerance */}
              Immune Modulation in Autoimmune Conditions
            </h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed mb-6">
              GcMAF is an immune-modulating Macrophage Activating Protein
              (iMAP). The active ingredient Vitamin D Binding Protein Macrophage
              Activating Factor (VDBP-MAF) plays an important role in regulating
              the immune system and coordinating the action of innate immune
              cells. In autoimmune conditions the immune system mistakenly
              attacks healthy cells and tissues in the body.
              {/* Autoimmune diseases occur when the immune system mistakenly attacks healthy cells, tissues, and organs. It involves a breakdown in immune tolerance, resulting in persistent inflammation and tissue damage. Conventional therapies often rely on immunosuppressive drugs, which can have significant side-effects. */}
            </p>
            <p className="font-body text-lg text-ink-muted leading-relaxed">
              VDBP-MAF, the key mechanism in GcMAF, has shown potential in
              immune system regulation and tolerance. iMAP therapy may represent
              a novel approach to the management of autoimmune conditions.
            </p>
          </div>
        </div>
      </section>

      {/* How Does It Work Section */}
      <section className="py-24 bg-[var(--color-surface)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full order-last lg:order-first">
              <img
                src="/images/autoimmune/how-it-works-image.webp"
                alt="How it works - Autoimmune"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6 leading-tight">
                How Does It Work?
              </h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">
                Research has indicated a link between polymorphisms in the
                Vitamin D Receptor (VDR) gene and the susceptibility to
                autoimmune diseases. The immune-regulatory functions of Vitamin
                D, Vitamin D Binding Protein (VDBP) and Vitamin D Binding
                Protein Macrophage Activating Factor (VDBP-MAF) are well
                documented. High levels of nagalase have been detected in
                patients with autoimmune disorders indicating severe immune
                suppression. The presence of nagalase inhibits the formation of
                active VDBP-MAF.
              </p>
              <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">
                By restoring immune balance and modulating macrophage activity,
                iMAP therapy addresses underlying dysfunctions. GcMAF
                Lyophilized has been proposed to influence the balance of immune
                cells, reducing the production of pro-inflammatory cytokines and
                promoting an anti-inflammatory environment. The ability of
                macrophages to adapt to different environments is thought to be
                critical in combating inflammatory disease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lupus Full Width Banner */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <Image
          src="/images/autoimmune/lupus-bg.jpg"
          alt="Lupus Background"
          unoptimized
          fill
          className="object-cover absolute inset-0 brightness-50"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Systemic Lupus Erythematosus (SLE)
            </h2>
            <p className="font-body text-lg text-white/90 leading-relaxed">
              SLE is a chronic autoimmune disease identified by systemic
              inflammation that can affect various organs. Vitamin D, VDBP, and
              VDBP-MAF promote an anti-inflammatory immune environment. It may
              contribute to regulating disease activity and could help to manage
              symptoms such as joint pain, fatigue, and skin rashes. Studies
              have shown a strong negative correlation between nagalase activity
              and SLE indicating therapeutic efficiency for VDBP-MAF
              supplementation.
            </p>
          </div>
        </div>
      </section>

      {/* RA, MS, Thyroid, Lupus, Type 1 Diabetes, IBD */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-brand/5 border border-brand/20 p-8 rounded-3xl">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">
                Rheumatoid Arthritis (RA)
              </h2>
              <p className="font-body text-ink-muted leading-relaxed">
                RA is an autoimmune disorder that primarily affects the joints,
                causing pain, swelling, and stiffness. GcMAF has been found to
                suppress the production of pro-inflammatory cytokines, reducing
                inflammation and potentially slowing down joint destruction in
                RA patients.
              </p>
            </div>

            <div className="bg-brand/5 border border-brand/20 p-8 rounded-3xl">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">
                Multiple Sclerosis (MS)
              </h2>
              <p className="font-body text-ink-muted leading-relaxed">
                Multiple sclerosis is characterized by an autoimmune attack on
                the central nervous system. iMAP therapy may aid in repairing
                myelin sheaths, regulating the immune response, relieving
                systemic inflammation, and reducing the frequency and severity
                of disease relapses in MS patients.
              </p>
            </div>

            <div className="bg-brand/5 border border-brand/20 p-8 rounded-3xl">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">
                Thyroid Autoimmune Disorders
              </h2>
              <p className="font-body text-ink-muted leading-relaxed">
                Conditions like Hashimoto&apos;s thyroiditis and Graves&apos; disease
                involve autoimmune attacks on the thyroid gland. The
                immunomodulatory properties of GcMAF may help restore immune
                tolerance, potentially normalizing thyroid function and easing
                associated symptoms.
              </p>
            </div>

            <div className="bg-brand/5 border border-brand/20 p-8 rounded-3xl">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">
                Lupus (Systemic Lupus Erythematosus)
              </h2>
              <p className="font-body text-ink-muted leading-relaxed">
                SLE is characterized by systemic inflammation affecting various
                organs. GcMAF promotes an anti-inflammatory immune environment
                and may contribute to regulating disease activity, helping to
                manage symptoms such as joint pain, fatigue, and skin rashes.
              </p>
            </div>

            <div className="bg-brand/5 border border-brand/20 p-8 rounded-3xl">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">
                Type 1 Diabetes
              </h2>
              <p className="font-body text-ink-muted leading-relaxed">
                Type 1 diabetes occurs when the immune system mistakenly targets
                and destroys insulin-producing beta cells in the pancreas. Early
                intervention with iMAP therapy may help preserve remaining beta
                cells, potentially delaying disease progression.
              </p>
            </div>

            <div className="bg-brand/5 border border-brand/20 p-8 rounded-3xl">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">
                Inflammatory Bowel Disease (IBD)
              </h2>
              <p className="font-body text-ink-muted leading-relaxed">
                IBD, comprising Crohn&apos;s disease and ulcerative colitis, involves
                chronic inflammation of the digestive tract. GcMAF can modulate
                immune responses in the gut, reducing inflammation, promoting
                mucosal healing, and potentially achieving disease remission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Benefits & Dosage Reduction */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6 leading-tight">
                Clinical Benefits of GcMAF
              </h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed mb-6">
                Clinical observations and pilot studies have reported
                significant improvements in symptoms and quality of life among
                patients with autoimmune conditions receiving iMAP therapy with
                GcMAF.
              </p>
              <ul className="space-y-4 font-body text-lg text-ink-muted mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand shrink-0 mt-0.5" />
                  <span>
                    <strong>Reduction of Inflammation:</strong> Modulates immune
                    responses to decrease systemic and localized inflammation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand shrink-0 mt-0.5" />
                  <span>
                    <strong>Restoration of Immune Tolerance:</strong> Works to
                    address the underlying breakdown that causes the body to
                    attack itself.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand shrink-0 mt-0.5" />
                  <span>
                    <strong>Reduced Dosage of Immunosuppressants:</strong>{" "}
                    Integrating GcMAF may allow for a safer reduction in heavy
                    immunosuppressive drug regimens, lowering risks of severe
                    infections and cancer.
                  </span>
                </li>
              </ul>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                As GcMAF targets immune dysregulation directly, it may offer a
                safer and more targeted alternative, minimizing adverse effects
                and improving long-term patient outcomes.
              </p>
            </div>
            <div className="relative w-full">
              <img
                src="/images/autoimmune/hero-vial.png"
                alt="Clinical Benefits Vial"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* A Field of Ongoing Research */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-surface border border-border p-10 rounded-3xl text-center">
            <h2 className="font-display text-3xl font-semibold text-ink mb-4">
              A Field of Ongoing Research
            </h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed">
              While the potential benefits of GcMAF in autoimmune conditions are
              promising, it is important to note that further research,
              including clinical trials, is necessary to fully establish its
              efficacy. Currently, GcMAF stands as a compelling adjunctive
              therapy aimed at recalibrating immune tolerance pathways. Always
              consult with a qualified healthcare professional before beginning
              any new treatment protocol.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links & Get In Touch + Next Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-10 lg:p-12 rounded-3xl bg-brand/5 border border-brand/20 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                <span className="w-4 h-px bg-brand" />
                Quick Links & Get In Touch
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink mb-4">
                Procure for Your Practice
              </h2>
              <p className="font-body text-ink-muted max-w-xl text-lg leading-relaxed">
                Medical professionals are invited to contact our team to discuss
                integration protocols, safety data, and clinical inquiries.
              </p>
            </div>
            <div className="flex gap-4 shrink-0 flex-col sm:flex-row w-full md:w-auto relative z-10">
              <Button href="/contact" arrow>
                Contact Us
              </Button>
              <Link
                href="/clinical-applications"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border text-ink-muted hover:text-brand hover:border-brand transition-colors font-body text-sm font-medium bg-bg shadow-sm"
              >
                <ArrowLeft size={16} />
                All Applications
              </Link>
            </div>
          </div>

          {/* Next Investigative Area */}
          <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
            <span className="font-body text-xs text-ink-muted uppercase tracking-widest hidden sm:inline-block">
              Next Investigative Area
            </span>
            <Link
              href="/clinical-applications/chronic-infections"
              className="inline-flex items-center gap-2 font-display text-xl font-semibold text-ink hover:text-brand transition-colors group ml-auto"
            >
              Chronic Infections
              <ChevronRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      <MedicalDisclaimer />
    </>
  );
}
