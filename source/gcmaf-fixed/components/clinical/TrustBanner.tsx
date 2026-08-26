import { ShieldCheck, BookOpen, Clock } from 'lucide-react'

export function TrustBanner() {
  return (
    <div className="bg-brand text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/20">
          <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
            <Clock className="w-8 h-8 mb-3 text-white/80" />
            <h3 className="font-display font-semibold text-lg">Decades of Peer-Reviewed Safety Data</h3>
            <p className="text-white/70 text-sm mt-1">Foundational scientific inquiry and immunological study.</p>
          </div>
          <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
            <BookOpen className="w-8 h-8 mb-3 text-white/80" />
            <h3 className="font-display font-semibold text-lg">160+ Published Clinical Studies</h3>
            <p className="text-white/70 text-sm mt-1">Extensive peer-reviewed documentation globally.</p>
          </div>
          <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
            <ShieldCheck className="w-8 h-8 mb-3 text-white/80" />
            <h3 className="font-display font-semibold text-lg">Exceptional Safety Profile in Published Literature</h3>
            <p className="text-white/70 text-sm mt-1">Investigated across multiple clinical settings.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
