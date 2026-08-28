import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

const title = "GcMAF Injections: Formulation, Handling & Clinical Context";
const description =
  "Learn about GcMAF injectable formulations, liquid and lyophilized formats, storage, reconstitution, handling, documentation, and professional administration considerations.";
const canonical = "https://gcmaf.net/gcmaf-for-sale/gcmaf-injections";

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

export default function GcmafInjectionsPage() {
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
            <span className="text-white">GcMAF Injections</span>
          </nav>

          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
            GcMAF Product Information
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl">
            GcMAF Injections
          </h1>
          <p className="mt-6 max-w-3xl font-body text-lg leading-8 text-white/85">
            An educational overview of injectable GcMAF formulations, handling,
            storage, reconstitution, documentation, and professional administration.
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
            <h2>What are GcMAF injections?</h2>
            <p>
              The phrase <strong>GcMAF injections</strong> generally refers to injectable
              formulations described as containing Gc protein-derived macrophage activating
              factor or related preparations. Injectable products should be evaluated by the
              exact formulation, manufacturer, concentration, packaging, intended use, and
              accompanying product documentation rather than by the GcMAF name alone.
            </p>
            <p>
              Different products can have different preparation and handling requirements.
              Some may be supplied as a liquid, while others may be supplied in a lyophilized
              or freeze-dried format that requires reconstitution before use. Instructions for
              one formulation should not automatically be applied to another.
            </p>
          </section>

          <section className="mb-10">
            <h2>Liquid and lyophilized formulations</h2>
            <p>
              A liquid formulation may be supplied in a ready-prepared format and can require
              specific refrigerated storage and temperature-controlled transportation. A
              lyophilized formulation is supplied in a freeze-dried state and may require a
              defined reconstitution procedure before administration.
            </p>
            <p>
              The practical differences between these formats can affect shipping, storage,
              inventory control, preparation time, and handling after receipt. The relevant
              manufacturer instructions should always be followed for temperature limits,
              shelf life, reconstitution, and use after preparation.
            </p>
          </section>

          <section className="mb-10">
            <h2>Storage and handling are product-specific</h2>
            <p>
              Injectable biological products can be sensitive to storage and transport
              conditions. Procurement teams should confirm the required temperature range,
              shipping method, packaging, receipt procedure, and any actions required if a
              shipment arrives outside the stated conditions.
            </p>
            <p>
              For a broader overview of temperature control and product integrity, see our
              <Link href="/gcmaf-for-sale/gcmaf-storage"> GcMAF storage and handling guide</Link>.
              Proper records can also help document batch identity, receipt date, expiry,
              storage location, and any preparation steps used before administration.
            </p>
          </section>

          <section className="mb-10">
            <h2>Professional preparation and administration</h2>
            <p>
              Injectable products require appropriate preparation, sterility practices,
              administration procedures, and professional judgment. Questions about dose,
              route, frequency, compatibility with other treatments, or suitability for an
              individual patient are clinical matters and should be handled by appropriately
              qualified healthcare professionals.
            </p>
            <p>
              Product information should also be separated from claims of effectiveness.
              The existence of an injectable formulation does not by itself establish that a
              product is proven to treat a particular disease. Readers interested in the
              scientific background can review our
              <Link href="/gcmaf-for-sale/what-is-gcmaf"> What is GcMAF?</Link> overview and
              <Link href="/research"> research section</Link> for additional context.
            </p>
          </section>

          <section className="mb-10">
            <h2>What information should be checked before procurement?</h2>
            <ul>
              <li>Manufacturer and product source</li>
              <li>Exact formulation and concentration</li>
              <li>Batch or lot identification</li>
              <li>Expiry or retest information</li>
              <li>Storage and shipping requirements</li>
              <li>Reconstitution instructions, when applicable</li>
              <li>Packaging and product-integrity requirements</li>
              <li>Documentation required by the receiving clinic or institution</li>
            </ul>
            <p>
              These checks help distinguish product-quality questions from broader medical
              claims and make it easier to compare suppliers on traceability, documentation,
              and handling rather than marketing language alone.
            </p>
          </section>

          <section className="rounded-2xl border border-border bg-bg p-6 md:p-8">
            <h2>Professional product inquiry</h2>
            <p>
              For formulation details, storage and shipping requirements, documentation,
              and professional procurement questions, use the gcmaf.net contact page.
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
