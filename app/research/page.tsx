import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { publications, researchConditions } from "@/lib/data/research";
import { PublicationsList } from "@/components/sections/PublicationsList";

export const metadata: Metadata = {
  title: "GcMAF Research & Publications: Evidence Overview",
  description:
    "Explore GcMAF research, publications, macrophage biology, clinical studies, study design, and the scientific evidence across different research settings.",
};

export default function ResearchPage() {
  return (
    <>
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--color-brand) 0%, #4a9aaa 45%, var(--color-ink) 100%)" }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-4">
              <span className="w-6 h-px bg-white/60" />Scientific Evidence
            </span>
            <h1 className="font-display text-hero font-bold text-white leading-tight mb-6">Research &amp; Publications</h1>
            <p className="font-body text-lg text-white/80 leading-relaxed">
              A clear guide to GcMAF research, study types, evidence quality, and published papers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl border border-brand/20 bg-brand/5 p-8 lg:p-10">
            <h2 className="font-display text-3xl font-semibold text-ink mb-5">How to read this research</h2>
            <ul className="space-y-3 font-body text-lg text-ink-muted leading-relaxed list-disc pl-6">
              <li>Laboratory findings help explain biological mechanisms and cellular responses.</li>
              <li>Case reports and observational studies can provide useful clinical observations and generate research questions.</li>
              <li>Clinical studies evaluate outcomes in people and are interpreted according to design, sample size, controls, and endpoints.</li>
              <li>Publication status, corrections, and retractions are part of a complete evidence review.</li>
              <li>Medical decisions should use current evidence together with qualified clinical and regulatory guidance.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4"><span className="w-6 h-px bg-brand" />Evidence Base</span>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6">What GcMAF Research Studies</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">
                GcMAF research focuses on macrophage biology and vitamin D-binding protein. Macrophages are immune cells that remove debris, respond to microbes, and help coordinate immune signals.
              </p>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                Some studies ask whether a factor derived from vitamin D-binding protein can change macrophage activity. Other studies examine related pathways, biomarkers, immune responses, and selected clinical outcomes.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden">
              <Image src="/images/research/supported-by-science-image.webp" alt="Scientific research and laboratory evidence" unoptimized width={700} height={600} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">Scope of Research</p>
            <h2 className="font-display text-4xl font-semibold text-ink mb-5">Topics Found in the Literature</h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed">These topics appear in GcMAF-related research, with evidence coming from different study designs and research settings.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {researchConditions.map((condition) => (
              <span key={condition} className="px-4 py-2 rounded-full border border-brand/50 bg-brand/10 font-body text-sm font-medium text-ink">{condition}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-4xl font-semibold text-ink mb-5">Different Study Types Answer Different Questions</h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed">A useful review starts by asking what kind of study produced the result and what question that design was built to answer.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="rounded-3xl border border-border bg-bg p-8">
              <h3 className="font-display text-2xl font-semibold text-ink mb-4">Laboratory studies</h3>
              <p className="font-body text-ink-muted leading-relaxed">These studies show how cells or molecules behave under controlled conditions and are especially useful for understanding mechanisms, signaling, and macrophage responses.</p>
            </div>
            <div className="rounded-3xl border border-border bg-bg p-8">
              <h3 className="font-display text-2xl font-semibold text-ink mb-4">Animal studies</h3>
              <p className="font-body text-ink-muted leading-relaxed">Animal work can test biological ideas in a whole organism and help researchers design later studies that examine human biology and clinical outcomes.</p>
            </div>
            <div className="rounded-3xl border border-border bg-bg p-8">
              <h3 className="font-display text-2xl font-semibold text-ink mb-4">Case reports</h3>
              <p className="font-body text-ink-muted leading-relaxed">A case report describes one person or a small number of people and can highlight clinical observations, treatment experiences, biomarkers, and questions for further study.</p>
            </div>
            <div className="rounded-3xl border border-border bg-bg p-8">
              <h3 className="font-display text-2xl font-semibold text-ink mb-4">Clinical trials</h3>
              <p className="font-body text-ink-muted leading-relaxed">Clinical trials evaluate outcomes in people. Randomization, control groups, clear outcomes, follow-up, and adequate sample size help determine how confidently results can be interpreted.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6">Why Publication Status Matters</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">GcMAF has a varied publication history. Some well-known papers, including papers that discussed cancer-related outcomes, were later retracted.</p>
              <p className="font-body text-lg text-ink-muted leading-relaxed">A complete review considers the original findings together with replication, later publications, corrections, retractions, and the exact formulation and methods used in each study.</p>
            </div>
            <div className="rounded-2xl border border-amber-500/25 bg-amber-500/5 p-7">
              <div className="flex items-center gap-2 mb-3"><AlertTriangle size={18} className="text-amber-500" /><span className="font-body text-xs font-semibold uppercase tracking-widest text-amber-500">Evidence context</span></div>
              <p className="font-body text-sm text-ink-muted leading-relaxed">Disease-treatment claims are best evaluated with clinical studies designed to measure relevant outcomes, alongside mechanistic research and the broader publication record.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-4xl font-semibold text-ink mb-6">What Makes Evidence More Reliable?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              "A clear research question",
              "Enough participants",
              "A suitable control group",
              "Predefined outcomes",
              "Transparent methods",
              "Independent replication",
              "Peer review",
              "Accurate reporting of limitations",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-bg p-5">
                <CheckCircle2 size={18} className="text-brand shrink-0 mt-1" />
                <span className="font-body text-base text-ink-muted leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-display text-4xl font-semibold text-ink mb-5">Connecting Mechanism Research With Clinical Evidence</h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">GcMAF research includes biological mechanisms, macrophage responses, biomarkers, case observations, and clinical studies. Together, these layers help researchers understand where findings agree and where additional study can add clarity.</p>
            <p className="font-body text-lg text-ink-muted leading-relaxed">People making medical decisions should use current evidence and qualified clinical advice so that research findings, individual circumstances, and established care can be considered together.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-3 font-body text-sm font-semibold text-ink hover:border-brand hover:text-brand transition-colors">About GcMAF</Link>
            <Link href="/clinical-applications" className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-3 font-body text-sm font-semibold text-ink hover:border-brand hover:text-brand transition-colors">Clinical Research Topics</Link>
            <Link href="/gcmaf-for-sale/what-is-gcmaf" className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-3 font-body text-sm font-semibold text-ink hover:border-brand hover:text-brand transition-colors">What Is GcMAF?</Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">Selected Publications</p>
            <h2 className="font-display text-4xl font-semibold text-ink mb-5">Published Papers</h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed">The list below provides source material for further review. Each paper is best interpreted in the context of its methods, sample size, formulation, endpoints, publication status, and later research.</p>
          </div>
          <PublicationsList publications={publications} />
        </div>
      </section>
    </>
  );
}
