import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "GcMAF Blog | Research, Products & Clinical Insights" },
  description:
    "Explore GcMAF articles covering research, product information, clinical access, macrophage biology, storage, and educational topics.",
  alternates: {
    canonical: "https://gcmaf.net/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "GcMAF Blog | Research, Products & Clinical Insights",
    description:
      "Explore GcMAF articles covering research, product information, clinical access, macrophage biology, storage, and educational topics.",
    url: "https://gcmaf.net/blog",
    siteName: "GcMAF",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-bg">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
            GcMAF Blog
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold text-ink mb-5">
            Latest Articles
          </h1>

          <p className="text-lg text-ink-muted">
            Explore GcMAF news, research, product information, clinical
            insights, and educational articles.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/gcmaf-for-sale"
            className="group border border-border rounded-2xl overflow-hidden bg-surface hover:shadow-lg transition-all"
          >
            <div className="w-full h-52 overflow-hidden">
              <img
                src="/images/blog/gcmaf-immune-feature.png"
                alt="GcMAF macrophage activating factor and immune cells"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <p className="text-sm text-brand font-semibold mb-2">GcMAF</p>
              <h2 className="text-2xl font-semibold text-ink mb-3">GcMAF for Sale</h2>
              <p className="text-ink-muted mb-5">
                Learn more about GcMAF products, availability, quality,
                research, storage, and important information before purchasing.
              </p>
              <span className="font-semibold text-brand">Read article →</span>
            </div>
          </Link>

          <Link
            href="/blog/where-to-buy-gcmaf-clinical-channels"
            className="group border border-border rounded-2xl overflow-hidden bg-surface hover:shadow-lg transition-all"
          >
            <div className="w-full h-52 overflow-hidden">
              <img
                src="/images/blog/where-to-buy-gcmaf-clinical-channels.webp"
                alt="Medical professionals discussing GcMAF clinical access"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <p className="text-sm text-brand font-semibold mb-2">Clinical Access</p>
              <h2 className="text-2xl font-semibold text-ink mb-3">
                Where to Buy GcMAF Through Clinical Channels
              </h2>
              <p className="text-ink-muted mb-5">
                Learn how physicians, clinics, and research institutions can
                evaluate professional GcMAF access, formulation, product
                documentation, storage, and responsible procurement.
              </p>
              <span className="font-semibold text-brand">Read article →</span>
            </div>
          </Link>

          <Link
            href="/blog/g3p-and-gcmaf-similarities"
            className="group border border-border rounded-2xl overflow-hidden bg-surface hover:shadow-lg transition-all"
          >
            <div className="w-full h-52 overflow-hidden">
              <img
                src="/images/blog/g3p-and-gcmaf-similarities.webp"
                alt="g3p cellular metabolism and GcMAF macrophage biology"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <p className="text-sm text-brand font-semibold mb-2">Cellular Biology</p>
              <h2 className="text-2xl font-semibold text-ink mb-3">g3p and GcMAF Similarities</h2>
              <p className="text-ink-muted mb-5">
                Compare g3p (Glycerol-3-phosphate) and GcMAF, their roles in
                metabolism, macrophage biology, immune signaling, and the key
                differences between them.
              </p>
              <span className="font-semibold text-brand">Read article →</span>
            </div>
          </Link>
        </div>

        <section className="mt-16 max-w-4xl rounded-2xl border border-border bg-surface p-8 md:p-10">
          <h2 className="text-3xl font-semibold text-ink mb-5">What you will find in the GcMAF blog</h2>
          <div className="space-y-5 text-ink-muted leading-8">
            <p>
              The GcMAF blog brings together educational material on macrophage biology,
              vitamin D-binding protein, product terminology, storage and handling, research
              interpretation, and professional procurement. Articles are written to help readers
              separate established biological concepts from broader claims that may appear in
              marketing or online discussion.
            </p>
            <p>
              Product-related articles focus on practical questions such as formulation,
              documentation, shipping conditions, traceability, and storage requirements. These
              details matter because products described with the same general name can differ in
              composition, handling instructions, manufacturing controls, and intended use.
            </p>
            <p>
              Research articles provide context for understanding published studies rather than
              treating every finding as equally strong evidence. Study design, sample size,
              replication, formulation, endpoints, retractions, and regulatory context can all
              affect how a result should be interpreted. Readers can also visit the
              <Link href="/research" className="font-semibold text-brand hover:underline"> research section</Link>
              {" "}for additional scientific background.
            </p>
            <p>
              If you are new to the subject, start with our
              <Link href="/gcmaf-for-sale/what-is-gcmaf" className="font-semibold text-brand hover:underline"> What Is GcMAF?</Link>
              {" "}overview. For sourcing and handling questions, explore the
              <Link href="/gcmaf-for-sale" className="font-semibold text-brand hover:underline"> GcMAF information hub</Link>.
              New articles will continue to expand these topics with an emphasis on clear
              terminology, practical product information, and evidence-aware discussion.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
