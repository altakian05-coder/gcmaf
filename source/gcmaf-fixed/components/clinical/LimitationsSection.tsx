import { AlertCircle } from 'lucide-react'

export function LimitationsSection({ limitations }: { limitations: string[] }) {
  return (
    <section className="py-16 bg-bg flex justify-center">
      <div className="max-w-4xl w-full px-6 lg:px-8">
        <div className="bg-surface border border-border p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
            <AlertCircle className="w-64 h-64" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                <AlertCircle className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-ink">Clinical Limitations & Variability</h2>
            </div>
            
            <ul className="space-y-4">
              {limitations.map((limitation, idx) => (
                <li key={idx} className="flex gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="text-amber-500 shrink-0 mt-0.5">■</span>
                  <span>{limitation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
