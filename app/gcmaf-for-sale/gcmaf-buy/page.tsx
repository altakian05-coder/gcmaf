import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

const title = "Buying GcMAF: Product Sourcing & Professional Considerations";
const description =
  "A practical guide to GcMAF product sourcing, supplier evaluation, documentation, formulation, storage, shipping, and professional procurement considerations.";
const canonical = "https://gcmaf.net/gcmaf-for-sale/gcmaf-buy";

export const metadata: Metadata = {
  title: `${title} | GcMAF`,
  description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "GcMAF",
    type: "article",
  },
};

export default function GcmafBuyPage() {
  return (
    <main className="min-h-screen bg-bg">
      <section className="pt-32 pb-16 hero-gradient text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <nav
            className="mb-8 flex flex-wrap items-center gap-2 font-body text-sm text-white/70"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition hover:text-white">Home</Link>
            <ChevronRight size={14} />
            <Link href="/gcmaf-for-sale" className="transition hover:text-white">
              GcMAF for Sale
            </Link>
            <ChevronRight size={14} />
            <span className="text-white">Buy GcMAF</span>
          </nav>

          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
            GcMAF Product Information
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl">
            Buying GcMAF: Professional Considerations
          </h1>
          <p className="mt-6 max-w-3xl font-body text-lg leading-8 text-white/85">
            A practical overview of product sourcing, supplier evaluation,
            documentation, formulation, storage, shipping, and procurement considerations.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16 lg:px-8">
        <Link
          href="/gcmaf-for-sale"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 font-body text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
        >
          <ArrowLeft size={16} />
          Back to GcMAF for Sale
        </Link>

        <div className="blog-article rounded-2xl border border-border bg-surface p-7 md:p-10 lg:p-12 shadow-[0_20px_60px_rgba(37,49,94,0.08)]">
          <section className="mb-10">
            <h2>Start with the product and intended use</h2>
            <p>
              People searching for where to buy GcMAF should first identify exactly what
              product they are evaluating. Products described as GcMAF can differ in
              formulation, concentration, manufacturing controls, packaging, storage
              requirements, and intended use. The product name alone is therefore not
              enough to judge whether two offerings are equivalent.
            </p>
            <p>
              Before procurement, review the product specification and determine whether
              the formulation is intended for professional clinical, research, or another
              permitted use in the relevant jurisdiction. Availability and regulatory
              requirements can vary by country, so procurement decisions should be based
              on the actual product and applicable local requirements rather than general
              online claims.
            </p>
          </section>

          <section className="mb-10">
            <h2>How to evaluate a GcMAF supplier</h2>
            <p>
              Supplier evaluation should focus on traceability, documentation, handling,
              and clear communication. A professional buyer should be able to understand
              who manufactured the product, how the batch can be identified, what storage
              conditions apply, and what documentation accompanies the shipment.
            </p>
            <ul>
              <li>Confirm the manufacturer and product source.</li>
              <li>Ask whether lot- or batch-level documentation is available.</li>
              <li>Review formulation, concentration, packaging, and expiry information.</li>
              <li>Confirm storage and transportation requirements before ordering.</li>
              <li>Establish how product integrity is protected during international transit.</li>
              <li>Check any import, institutional, or local regulatory requirements that apply.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2>Formulation, shipping, and storage matter</h2>
            <p>
              GcMAF products may be presented in different formats, including liquid and
              lyophilized preparations. Those formats can have different handling and
              storage requirements. A buyer should not assume that instructions for one
              formulation apply to another.
            </p>
            <p>
              Temperature control, shipping duration, packaging, receipt procedures, and
              post-delivery storage can all affect product handling. Review the dedicated
              <Link href="/gcmaf-for-sale/gcmaf-storage"> GcMAF storage and handling guide</Link>
              {" "}before arranging shipment. For information specifically about injectable
              formulations, see our <Link href="/gcmaf-for-sale/gcmaf-injections">GcMAF injections overview</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2>Separate product quality from treatment claims</h2>
            <p>
              Product sourcing and scientific evidence are different questions. Good
              documentation, controlled shipping, or professional manufacturing do not by
              themselves prove that a product is effective for a particular disease. Claims
              about biological or clinical effects should be evaluated separately against
              the quality of the underlying research.
            </p>
            <p>
              Readers who want scientific background can review our
              <Link href="/gcmaf-for-sale/what-is-gcmaf"> What is GcMAF?</Link> overview and
              the <Link href="/research">GcMAF research section</Link>. These resources are
              intended to provide context around macrophage biology, published literature,
              and evidence quality without treating marketing claims as established facts.
            </p>
          </section>

          <section className="mb-10">
            <h2>Questions to ask before ordering</h2>
            <p>
              A short procurement checklist can prevent avoidable problems. Before an order
              is placed, confirm the exact formulation, quantity, packaging, batch
              information, shipping method, storage requirements, destination requirements,
              documentation, and the process to follow if a shipment arrives outside the
              expected condition.
            </p>
            <p>
              It is also useful to clarify who will receive the shipment, how it will be
              logged on arrival, and where it will be stored. These practical details are
              especially important when a product requires controlled handling or when the
              shipment crosses international borders.
            </p>
          </section>

          <section className="rounded-2xl border border-border bg-bg p-6 md:p-8">
            <h2>Professional product inquiry</h2>
            <p>
              For product availability, formulation details, storage and shipping
              requirements, documentation, and professional procurement questions, use the
              gcmaf.net contact page.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-body text-sm font-medium text-white no-underline transition hover:bg-brand"
            >
              Contact gcmaf.net
              <ArrowRight size={16} />
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}
