import { CheckCircle2 } from 'lucide-react'

interface MechanismSectionProps {
  nagalaseRole: string;
  mechanismOfAction: string;
  videoSrc?: string;
}

export function MechanismSection({ nagalaseRole, mechanismOfAction, videoSrc }: MechanismSectionProps) {
  const videoMime = videoSrc?.endsWith('.mp4') ? 'video/mp4' : 'video/quicktime'

  return (
    <section className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
              <span className="w-6 h-px bg-brand" />
              Biological Pathway
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-8 leading-tight">
              Investigational Mechanism of Action
            </h2>
            
            <div className="space-y-8">
              <div className="relative pl-8 before:absolute before:left-[11px] before:top-8 before:bottom-[-2rem] before:w-[2px] before:bg-brand/10">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center border border-brand/30">
                  <span className="w-2 h-2 rounded-full bg-brand" />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink mb-3">The Nagalase Blockade</h3>
                <p className="font-body text-ink-muted leading-relaxed">{nagalaseRole}</p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-brand flex items-center justify-center shadow-md shadow-brand/20">
                  <CheckCircle2 size={14} className="text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink mb-3">Exogenous Bypass</h3>
                <p className="font-body text-ink-muted leading-relaxed">{mechanismOfAction}</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            {videoSrc ? (
              <div className="rounded-2xl border border-border/50 bg-bg p-2 shadow-xl shadow-brand/5">
                <div className="relative rounded-xl overflow-hidden bg-surface aspect-video flex items-center justify-center">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={videoSrc} type={videoMime} />
                  </video>
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    <span className="font-body text-xs font-medium text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Explainer Video
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-border/60 bg-brand/5 aspect-video flex items-center justify-center">
                <p className="font-body text-sm text-ink-muted">Scientific Illustration Placeholder</p>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </section>
  )
}
