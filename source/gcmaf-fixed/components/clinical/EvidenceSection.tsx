import { Microscope, FileText, Activity } from 'lucide-react'

interface Evidence {
  preclinical: string[];
  clinical: string[];
  caseReports: string[];
}

export function EvidenceSection({ evidence }: { evidence: Evidence }) {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
            <span className="w-6 h-px bg-brand" />
            Clinical Data
            <span className="w-6 h-px bg-brand" />
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink leading-tight">
            Current Evidence Base
          </h2>
          <p className="font-body text-ink-muted mt-4">
            A summary of observations across varying stages of investigational application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Preclinical */}
          <div className="p-8 rounded-2xl bg-surface border border-border shadow-sm shadow-brand/5">
            <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-6 border border-brand/20">
              <Microscope className="w-6 h-6 text-brand" />
            </div>
            <h3 className="font-display text-xl font-semibold text-ink mb-4">Preclinical Models</h3>
            <ul className="space-y-3">
              {evidence.preclinical.map((item, idx) => (
                <li key={idx} className="font-body text-sm text-ink-muted leading-relaxed flex gap-2">
                  <span className="text-brand shrink-0 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinical */}
          <div className="p-8 rounded-2xl bg-surface border border-brand/20 shadow-md shadow-brand/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand" />
            <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center mb-6 shadow-md shadow-brand/30">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display text-xl font-semibold text-ink mb-4">Clinical Observations</h3>
            <ul className="space-y-3">
              {evidence.clinical.map((item, idx) => (
                <li key={idx} className="font-body text-sm text-ink-muted leading-relaxed flex gap-2">
                  <span className="text-brand shrink-0 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Reports */}
          <div className="p-8 rounded-2xl bg-surface border border-border shadow-sm shadow-brand/5">
            <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-6 border border-brand/20">
              <FileText className="w-6 h-6 text-brand" />
            </div>
            <h3 className="font-display text-xl font-semibold text-ink mb-4">Case Documentation</h3>
            <ul className="space-y-3">
              {evidence.caseReports.map((item, idx) => (
                <li key={idx} className="font-body text-sm text-ink-muted leading-relaxed flex gap-2">
                  <span className="text-brand shrink-0 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
