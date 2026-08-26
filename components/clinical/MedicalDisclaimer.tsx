import { AlertTriangle } from 'lucide-react'

export function MedicalDisclaimer() {
  return (
    <div className="bg-surface border-t border-border py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="flex items-start gap-4 p-6 rounded-2xl bg-bg border border-brand/20">
          <AlertTriangle className="w-6 h-6 text-brand shrink-0 mt-1" />
          <div>
            <h4 className="font-display font-semibold text-ink text-sm uppercase tracking-widest mb-2">Medical Disclaimer</h4>
            <p className="font-body text-ink-muted text-sm leading-relaxed">
              GcMAF is a prescription-only product distributed exclusively to licensed physicians and medical clinics. This information is provided strictly for educational purposes and to support professional scientific discourse. Outcomes mentioned are investigational and vary widely by individual clinical presentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
