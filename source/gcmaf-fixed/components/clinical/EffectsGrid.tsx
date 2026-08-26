interface PotentialEffect {
  title: string;
  description: string;
}

export function EffectsGrid({ effects }: { effects: PotentialEffect[] }) {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
            <span className="w-6 h-px bg-brand" />
            Therapeutic Vectors
          </span>
          <h2 className="font-display text-3xl font-semibold text-ink leading-tight">
            Potential Investigational Effects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {effects.map((effect, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-bg border border-border hover:border-brand/40 transition-colors h-full flex flex-col">
              <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center mb-4 border border-brand/20 shrink-0">
                <span className="font-display font-semibold text-brand text-xs">{idx + 1}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">{effect.title}</h3>
              <p className="font-body text-sm text-ink-muted leading-relaxed mt-auto">{effect.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
