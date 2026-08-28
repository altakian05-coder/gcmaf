import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { publications, researchConditions } from "@/lib/data/research";
import { PublicationsList } from "@/components/sections/PublicationsList";

export const metadata: Metadata = {
  title: "GcMAF Research & Publications: Evidence Overview",
  description:
    "Explore GcMAF research, publications, macrophage biology, study limitations, and the difference between laboratory findings and clinical evidence.",
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
              <li>Laboratory findings can explain biology, but they do not prove treatment benefit.</li>
              <li>Case reports can suggest ideas, but they cannot establish broad effectiveness.</li>
              <li>Small clinical studies need careful interpretation.</li>
              <li>Retracted papers should not be used as reliable clinical evidence.</li>
              <li>Current medical decisions should follow qualified clinical and regulatory guidance.</li>
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
                Some studies ask whether a factor derived from vitamin D-binding protein can change macrophage activity. Other studies examine related pathways, biomarkers, or immune responses.
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
            <p className="font-body text-lg text-ink-muted leading-relaxed">These topics appear in GcMAF-related research. Their evidence strength is not equal.</p>
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
            <h2 className="font-display text-4xl font-semibold text-ink mb-5">Different Study Types Mean Different Things</h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed">A useful review starts by asking what kind of study produced the result.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="rounded-3xl border border-border bg-bg p-8">
              <h3 className="font-display text-2xl font-semibold text-ink mb-4">Laboratory studies</h3>
              <p className="font-body text-ink-muted leading-relaxed">These studies can show how cells or molecules behave under controlled conditions. They are useful for mechanism research. They do not prove that a treatment works in people.</p>
            </div>
            <div className="rounded-3xl border border-border bg-bg p-8">
              <h3 className="font-display text-2xl font-semibold text-ink mb-4">Animal studies</h3>
              <p className="font-body text-ink-muted leading-relaxed">Animal work can test biological ideas in a whole organism. Results can guide later research. Human outcomes may still be different.</p>
            </div>
            <div className="rounded-3xl border border-border bg-bg p-8">
              <h3 className="font-display text-2xl font-semibold text-ink mb-4">Case reports</h3>
              <p className="font-body text-ink-muted leading-relaxed">A case report describes one person or a small number of people. It can highlight an observation. It cannot prove cause and effect.</p>
            </div>
            <div className="rounded-3xl border border-border bg-bg p-8">
              <h3 className="font-display text-2xl font-semibold text-ink mb-4">Clinical trials</h3>
              <p className="font-body text-ink-muted leading-relaxed">Well-designed clinical trials provide stronger evidence. Randomization, control groups, clear outcomes, and adequate sample size all matter.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6">Why Retractions Matter</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">Some well-known GcMAF papers made strong cancer-treatment claims. Several were later retracted. A retraction means the paper should not be treated as reliable evidence.</p>
              <p className="font-body text-lg text-ink-muted leading-relaxed">This history does not make every research question invalid. It does mean readers should check the status of important papers before using them to support a claim.</p>
            </div>
            <div className="rounded-2xl border border-amber-500/25 bg-amber-500/5 p-7">
              <div className="flex items-center gap-2 mb-3"><AlertTriangle size={18} className="text-amber-500" /><span className="font-body text-xs font-semibold uppercase tracking-widest text-amber-500">Important</span></div>
              <p className="font-body text-sm text-ink-muted leading-relaxed">Strong disease-treatment claims require strong clinical evidence. Older or retracted studies should not be used as proof of effectiveness.</p>
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
            <h2 className="font-display text-4xl font-semibold text-ink mb-5">Research and Clinical Use Are Not the Same</h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">A mechanism can be scientifically interesting without being a proven therapy. This distinction is important for GcMAF.</p>
            <p className="font-body text-lg text-ink-muted leading-relaxed">People making medical decisions should use current evidence and qualified clinical advice. Investigational approaches should not replace standard diagnosis or proven treatment.</p>
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
            <p className="font-body text-lg text-ink-muted leading-relaxed">The list below provides source material for further review. Publication alone does not guarantee that a claim is correct or clinically proven.</p>
          </div>
          <PublicationsList publications={publications} />
        </div>
      </section>
    </>
  );
}
