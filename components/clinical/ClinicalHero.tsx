import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface ClinicalHeroProps {
  title: string;
  tagline: string;
  shortTitle: string;
  heroImage?: string;
}

export function ClinicalHero({ title, tagline, shortTitle, heroImage }: ClinicalHeroProps) {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--color-brand) 0%, #4a9aaa 45%, var(--color-ink) 100%)' }}>
      {heroImage && (
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
          <img src={heroImage} alt="Biological context" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] right-[10%] w-44 h-44 rounded-full border border-white/10" />
        <div className="absolute bottom-[20%] right-[5%] w-56 h-56 rounded-full border border-white/8" />
        <div className="absolute top-[55%] left-[5%] w-20 h-20 rounded-full bg-white/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center gap-2 font-body text-sm text-white/60 mb-8 flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link href="/clinical-applications" className="hover:text-white transition-colors">Clinical Applications</Link>
          <ChevronRight size={14} />
          <span className="text-white/90 font-medium">{shortTitle}</span>
        </nav>
        
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-6 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-white" />
            Investigational Application
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>
          <p className="font-body text-xl text-white/90 font-light border-l-4 border-white/30 pl-4 py-1">
            {tagline}
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none z-0" aria-hidden="true">
        <span className="font-display font-bold text-white block text-center opacity-5 select-none" style={{ fontSize: 'clamp(4rem, 15vw, 15rem)', lineHeight: 0.8, letterSpacing: '-0.02em', transform: 'translateY(25%)' }}>
          CLINICAL
        </span>
      </div>
    </section>
  )
}
