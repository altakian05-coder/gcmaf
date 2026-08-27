import Link from "next/link";

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
          {/* Article 1 */}
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
              <p className="text-sm text-brand font-semibold mb-2">
                GcMAF
              </p>

              <h2 className="text-2xl font-semibold text-ink mb-3">
                GcMAF for Sale
              </h2>

              <p className="text-ink-muted mb-5">
                Learn more about GcMAF products, availability, quality,
                research, storage, and important information before purchasing.
              </p>

              <span className="font-semibold text-brand">
                Read article →
              </span>
            </div>
          </Link>

          {/* Article 2 */}
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
              <p className="text-sm text-brand font-semibold mb-2">
                Clinical Access
              </p>

              <h2 className="text-2xl font-semibold text-ink mb-3">
                Where to Buy GcMAF Through Clinical Channels
              </h2>

              <p className="text-ink-muted mb-5">
                Learn how physicians, clinics, and research institutions can
                evaluate professional GcMAF access, formulation, product
                documentation, storage, and responsible procurement.
              </p>

              <span className="font-semibold text-brand">
                Read article →
              </span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}