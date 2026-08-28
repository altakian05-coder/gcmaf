import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const pageTitle = "GcMAF Blog & Q/A | GcMAF for Sale";
const pageDescription =
  "Explore GcMAF questions and answers, supplement information, research, therapy, injections, buying considerations, storage, and professional product availability.";
const canonicalUrl = "https://gcmaf.net/gcmaf-for-sale";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: "GcMAF",
    type: "website",
  },
};

const sectionLinks = [
  { label: "Q/A", href: "/gcmaf-for-sale/questions-and-answers" },
  { label: "What is GcMAF?", href: "/gcmaf-for-sale/what-is-gcmaf" },
  { label: "Supplement", href: "/gcmaf-for-sale/gcmaf-supplement" },
  { label: "Buy GcMAF", href: "/gcmaf-for-sale/gcmaf-buy" },
  { label: "Treatment", href: "/gcmaf-for-sale/gcmaf-treatment" },
  { label: "Therapy", href: "/gcmaf-for-sale/gcmaf-therapy" },
  { label: "Injections", href: "/gcmaf-for-sale/gcmaf-injections" },
  { label: "Storage", href: "/gcmaf-for-sale/gcmaf-storage" },
  { label: "Product Inquiry", href: "/gcmaf-for-sale/product-inquiry" },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: pageTitle,
  description: pageDescription,
  url: canonicalUrl,
  publisher: { "@type": "Organization", name: "gcmaf.net", url: "https://gcmaf.net/" },
};

export default function GcmafForSalePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <section className="pt-32 pb-20 relative overflow-hidden hero-gradient">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center gap-2 font-body text-sm text-white/60 mb-9" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white/90">GcMAF Information</span>
          </nav>
          <div className="max-w-5xl">
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-5"><span className="w-7 h-px bg-white/60" />GcMAF Blog · Articles · Questions &amp; Answers</span>
            <h1 className="font-display text-hero font-bold text-white leading-[1.08] mb-6">GcMAF Blog &amp; Q/A</h1>
            <p className="font-body text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl">Simple guides to GcMAF research, products, storage, injections, clinical access, and professional inquiries.</p>
          </div>
        </div>
      </section>

      <nav className="sticky top-16 z-30 border-y border-border bg-surface/95 backdrop-blur-lg" aria-label="GcMAF sections">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex gap-6 overflow-x-auto py-4 [scrollbar-width:none]">
          {sectionLinks.map((item) => (
            <Link key={item.href} href={item.href} className="font-body text-sm font-medium text-ink-muted hover:text-brand transition-colors whitespace-nowrap">{item.label}</Link>
          ))}
        </div>
      </nav>

      <section className="py-16 lg:py-24 bg-bg">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-lg">
            <img src="/images/blog/gcmaf-immune-feature.png" alt="GcMAF and macrophage immune research" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg border-t border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl border border-brand/20 bg-brand/5 p-8 lg:p-10">
            <h2 className="font-display text-3xl font-semibold text-ink mb-5">Start here</h2>
            <ul className="space-y-3 font-body text-lg text-ink-muted leading-relaxed list-disc pl-6">
              <li>Learn what GcMAF means and how it is studied.</li>
              <li>Review common product and storage questions.</li>
              <li>Understand the difference between research and proven treatment.</li>
              <li>Use professional channels for injectable product inquiries.</li>
              <li>Check local rules before procurement or clinical use.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">Core topics</p>
            <h2 className="font-display text-4xl font-semibold text-ink mb-5">Find the Right GcMAF Guide</h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed">Each page focuses on one clear question. This makes it easier to find practical information without searching through one long article.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectionLinks.map((item) => (
              <Link key={item.href} href={item.href} className="group rounded-2xl border border-border bg-bg p-7 hover:border-brand transition-colors">
                <h3 className="font-display text-xl font-semibold text-ink group-hover:text-brand transition-colors">{item.label}</h3>
                <div className="mt-5 flex items-center gap-2 text-brand font-body text-sm font-semibold">Read guide <ArrowRight size={15} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-5">What Is GcMAF?</h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">GcMAF is short for Gc protein-derived macrophage activating factor. Gc protein is also called vitamin D-binding protein. GcMAF has been studied for possible effects on macrophages.</p>
            <p className="font-body text-lg text-ink-muted leading-relaxed">Macrophages are immune cells. They remove debris, respond to microbes, and send signals to other immune cells. Research into GcMAF asks how these cells may respond to a factor derived from vitamin D-binding protein.</p>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-5">What Does the Research Show?</h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">The GcMAF literature includes laboratory studies, case reports, and small clinical studies. Evidence quality varies. Some older papers that made strong claims were later retracted.</p>
            <p className="font-body text-lg text-ink-muted leading-relaxed">That means broad treatment claims should be viewed carefully. A research finding is not the same as proof that a product treats or cures a disease. See the <Link href="/research" className="font-semibold text-brand underline underline-offset-4">research section</Link> for more context.</p>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-5">What Should Buyers Check?</h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">Professional procurement should be simple and traceable. A clinic should know what it is ordering, how it was handled, and how it should be stored.</p>
            <ul className="space-y-3 font-body text-lg text-ink-muted leading-relaxed list-disc pl-6">
              <li>Product identity and formulation</li>
              <li>Lot or batch details</li>
              <li>Expiry information</li>
              <li>Storage and shipping conditions</li>
              <li>Quality documentation</li>
              <li>Professional eligibility requirements</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-5">Liquid vs Lyophilized GcMAF</h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">Liquid and lyophilized products have different handling needs. A liquid product may require a reliable cold chain. A lyophilized product may be easier to ship but can require reconstitution before use.</p>
            <p className="font-body text-lg text-ink-muted leading-relaxed">The right option depends on the clinic&apos;s storage system, shipping route, and preparation process. Read the <Link href="/gcmaf-for-sale/gcmaf-storage" className="font-semibold text-brand underline underline-offset-4">storage guide</Link> for more detail.</p>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-5">Professional Use and Clinical Oversight</h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">Injectable or clinically handled products need professional oversight. Patients should not rely on unknown online sellers. A licensed clinician can review the medical context and local rules.</p>
            <p className="font-body text-lg text-ink-muted leading-relaxed">For professional questions, use the <Link href="/contact" className="font-semibold text-brand underline underline-offset-4">contact page</Link> or the <Link href="/gcmaf-for-sale/product-inquiry" className="font-semibold text-brand underline underline-offset-4">product inquiry guide</Link>.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-surface)] border-t border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div><h3 className="font-display text-2xl font-semibold text-ink mb-3">Is GcMAF a normal dietary supplement?</h3><p className="font-body text-lg text-ink-muted leading-relaxed">Not necessarily. Products sold under the GcMAF name can differ in formulation, intended use, and regulatory status.</p></div>
            <div><h3 className="font-display text-2xl font-semibold text-ink mb-3">Can GcMAF be bought online?</h3><p className="font-body text-lg text-ink-muted leading-relaxed">Availability varies. Professional products should be sourced through qualified medical or research channels where required.</p></div>
            <div><h3 className="font-display text-2xl font-semibold text-ink mb-3">Does research prove GcMAF treats disease?</h3><p className="font-body text-lg text-ink-muted leading-relaxed">No broad claim can be made from the current evidence. Study quality varies, and some historical claims were later withdrawn.</p></div>
            <div><h3 className="font-display text-2xl font-semibold text-ink mb-3">Where should I start?</h3><p className="font-body text-lg text-ink-muted leading-relaxed">Start with <Link href="/gcmaf-for-sale/what-is-gcmaf" className="font-semibold text-brand underline underline-offset-4">What Is GcMAF?</Link> and then review the research, storage, and product pages that match your question.</p></div>
          </div>
        </div>
      </section>
    </>
  )
}
