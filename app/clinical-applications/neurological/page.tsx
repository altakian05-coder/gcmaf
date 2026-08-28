import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { MedicalDisclaimer } from '@/components/clinical'

export const metadata: Metadata = {
  title: 'GcMAF Neurological Research: Microglia & Immunity',
  description: 'GcMAF modulates microglial activity and supports brain and nervous system health in various neurological conditions.',
}

export default function NeurologicalPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--color-brand) 0%, #4a9aaa 45%, var(--color-ink) 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-44 h-44 rounded-full border border-white/10" />
          <div className="absolute bottom-[20%] right-[5%] w-56 h-56 rounded-full border border-white/8" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-4">
              <span className="w-6 h-px bg-white/60" />
              Clinical Application
            </span>
            <h1 className="font-display text-hero font-bold text-white leading-tight mb-6">Neurological Disorders</h1>
            <p className="font-body text-lg text-white/80 leading-relaxed">
              Supporting the brain and nervous system through targeted immune modulation and microglial activation.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-semibold text-ink mb-6">GcMAF Supports Brain and Nervous System Health</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="#alzheimer" className="group rounded-3xl border border-border bg-surface overflow-hidden p-8 hover:border-brand/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center justify-center text-center">
              <div className="relative w-32 h-32 mb-6">
                <Image src="/images/neurological/card-alzheimers.png" alt="Alzheimer's disease" unoptimized fill className="object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-sm" />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink group-hover:text-brand transition-colors">Alzheimer&apos;s disease</h3>
            </Link>
            
            <Link href="#alzheimer" className="group rounded-3xl border border-border bg-surface overflow-hidden p-8 hover:border-brand/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center justify-center text-center">
              <div className="relative w-32 h-32 mb-6">
                <Image src="/images/neurological/card-parkinsons.png" alt="Parkinson's disease" unoptimized fill className="object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-sm" />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink group-hover:text-brand transition-colors">Parkinson&apos;s disease</h3>
            </Link>
            
            <Link href="#multiple-sclerosis" className="group rounded-3xl border border-border bg-surface overflow-hidden p-8 hover:border-brand/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center justify-center text-center">
              <div className="relative w-32 h-32 mb-6">
                <Image src="/images/neurological/card-multiple-sclerosis.png" alt="Multiple sclerosis" unoptimized fill className="object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-sm" />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink group-hover:text-brand transition-colors">Multiple sclerosis (MS)</h3>
            </Link>
            
            <Link href="#autism" className="group rounded-3xl border border-border bg-surface overflow-hidden p-8 hover:border-brand/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center justify-center text-center">
              <div className="relative w-32 h-32 mb-6">
                <Image src="/images/neurological/card-autism.png" alt="Autism spectrum disorders" unoptimized fill className="object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-sm" />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink group-hover:text-brand transition-colors">Autism (ASD)</h3>
            </Link>
            
            <Link href="#als" className="group rounded-3xl border border-border bg-surface overflow-hidden p-8 hover:border-brand/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center justify-center text-center">
              <div className="relative w-32 h-32 mb-6">
                <Image src="/images/neurological/card-als.png" alt="ALS" unoptimized fill className="object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-sm" />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink group-hover:text-brand transition-colors">Amyotrophic lateral sclerosis</h3>
            </Link>
            
            <Link href="#cfs" className="group rounded-3xl border border-border bg-surface overflow-hidden p-8 hover:border-brand/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center justify-center text-center">
              <div className="relative w-32 h-32 mb-6">
                <Image src="/images/neurological/card-chronic-fatigue.png" alt="Chronic fatigue syndrome" unoptimized fill className="object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-sm" />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink group-hover:text-brand transition-colors">Chronic fatigue syndrome</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* How Does It Work Section */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6 leading-tight">How Does It Work?</h2>
              <div className="space-y-4">
                <p className="font-body text-lg text-ink-muted leading-relaxed">
                  Studies suggest that the effects of GcMAF on neurological disorders may involve various mechanisms, including immune system modulation, direct effects on neurons and neurogenesis, and the interconnection between VDBP-MAF and Vitamin D Receptor (VDR) signaling pathways. VDBP-MAF has also been shown to modulate gene expression in the endocannabinoid system and help to regulate the immune system.
                </p>
                <p className="font-body text-lg text-ink-muted leading-relaxed">
                  Critical neural macrophages are called microglia. Microglia are the resident innate immune cells of the central nervous system. They support the immune system by defending against invasive threats and initiating repair mechanisms of the nervous system. Microglia are especially prevalent during the development and rewiring of the brain. Their function is considered an essential part of the rebuilding of the human brain and nervous system.
                </p>
                <p className="font-body text-lg text-ink-muted leading-relaxed">
                  As an immune-modulating Macrophage Activating Protein (iMAP), GcMAF helps to regulate microglial activity. It can also help to modulate certain inflammatory cytokines such as TNF-α, which have been linked to various neurological conditions. Furthermore, VDBP-MAF enables microglia to perform scavenging activity and clear cellular debris without inducing neurological inflammation.
                </p>
              </div>
            </div>
            <div className="relative w-full">
              <img src="/images/neurological/how-it-works-image.png" alt="How it works" className="w-full h-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Details */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          
          <div id="multiple-sclerosis" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full order-last lg:order-first">
              <img src="/images/neurological/multiple-sclerosis-image.webp" alt="Multiple Sclerosis" className="w-full h-auto drop-shadow-2xl" />
            </div>
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6 leading-tight">Multiple Sclerosis (MS)</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                Multiple sclerosis (MS) is an autoimmune neurological disease characterized by inflammatory and demyelinating degeneration of the central nervous system. TNF-α contributes to a variety of neurological pathologies including MS. GcMAF has shown promise in modulating the immune system, regulating TNF-α production, and restoring immune balance in patients with MS, leading to rehabilitation, improvements in mobility, and increased overall well-being as reported in certain case studies.
              </p>
            </div>
          </div>

          <div id="alzheimer" className="max-w-4xl mx-auto bg-brand/5 border border-brand/20 p-10 rounded-3xl">
            <h2 id="parkinson" className="font-display text-3xl font-semibold text-ink mb-6">Alzheimer&apos;s and Parkinson&apos;s Disease</h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed">
              In Alzheimer&apos;s and Parkinson&apos;s disease, VDBP-MAF therapy has demonstrated benefits by inhibiting the overproduction of the protein TNF-α, which promotes neuron death and disrupts synaptic communication. By modulating microglial activity and occupying TNF-α receptors, GcMAF may help to prevent neuronal death, alleviate symptoms of neurodegenerative diseases, and stimulate repair and regeneration processes. However, continuous treatment may be necessary to maintain the positive effects and prevent disease progression.
            </p>
          </div>

          <div id="cfs" className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-semibold text-ink mb-6">Chronic Fatigue Syndrome (CFS)</h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed">
              Chronic fatigue syndrome (CFS) is a complex neurological condition characterized by long-term fatigue and reduced ability to carry out daily activities. VDBP-MAF has shown potential in reactivating the immune system and improving the condition of CFS patients, leading to partial recovery and an improvement in symptoms. Immune system dysfunction and elevated nagalase levels have been associated with CFS. iMAP therapy with GcMAF has shown promise in improving symptoms by reducing nagalase activity and activating macrophages. VDBP-MAF supplementation may help to restore immune function and alleviate the debilitating fatigue experienced by individuals with CFS.
            </p>
          </div>

        </div>
      </section>

      {/* ALS Full Width Banner */}
      <section id="als" className="py-32 relative overflow-hidden flex items-center justify-center">
        <Image src="/images/neurological/als-bg.webp" alt="ALS Background Banner" unoptimized fill className="object-cover absolute inset-0 brightness-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">Amyotrophic Lateral Sclerosis (ALS)</h2>
            <p className="font-body text-lg text-white/90 leading-relaxed mb-6">
              Also known as Lou-Gehrig-Syndrom or Charcot-disease, ALS is considered to be an autoimmune disorder that results in the degeneration of motor neurons in the central nervous system (CNS), leading to muscle weakness, paralysis, and eventually respiratory failure.
            </p>
            <p className="font-body text-lg text-white/90 leading-relaxed">
              Vitamin D, Vitamin D Binding Protein (VDBP) and Vitamin D binding Protein Macrophage Activating Factor (VDBP-MAF) can act as potent immune modulators. Studies have shown that replacement therapy with a stabilized Vitamin D protein complex including Vitamin D3, VDBP and VDBP-MAF provided beneficial responses, especially improvement of motor dysfunction. Oxidative stress, Vitamin D, VDBP and VDBP-MAF have been highlighted by researchers as playing a key role in the onset and development of ALS.
            </p>
          </div>
        </div>
      </section>

      {/* Autism Spectrum Disorders */}
      <section id="autism" className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-surface p-10 rounded-3xl border border-border shadow-sm">
            <h2 className="font-display text-3xl font-semibold text-ink mb-6">Autism Spectrum Disorders (ASD)</h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed mb-6">
              Autism spectrum disorders are neurodevelopmental conditions associated with immune system dysregulation. VDBP-MAF replacement therapy has been investigated for ASD and has been shown to decrease the activity of cannabinoid receptor type 2 (CB2R) and reactivate macrophages. Promising results have been reported after treatment with VDBP-MAF, with significant improvements and even full recovery observed in some cases.
            </p>
            <p className="font-body text-lg text-ink-muted leading-relaxed">
              Other studies have examined nagalase activity in individuals with ASD and the effects of VDBP-MAF therapy. Elevated Nagalase levels were found in individuals with ASD indicating immune dysfunction. Nagalase activity significantly decreased after treatment indicating therapeutic benefits. Improvements in language, social skills, and cognition were observed, which highlights the significance of nagalase and the potential benefits of GcMAF for ASD.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links & Get In Touch + Next Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-10 lg:p-12 rounded-3xl bg-brand/5 border border-brand/20 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                <span className="w-4 h-px bg-brand" />
                Quick Links & Get In Touch
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink mb-4">
                Procure for Your Practice
              </h2>
              <p className="font-body text-ink-muted max-w-xl text-lg leading-relaxed">
                Medical professionals are invited to contact our team to discuss integration protocols, safety data, and clinical inquiries.
              </p>
            </div>
            <div className="flex gap-4 shrink-0 flex-col sm:flex-row w-full md:w-auto relative z-10">
              <Button href="/contact" arrow>
                Contact Us
              </Button>
              <Link href="/clinical-applications" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border text-ink-muted hover:text-brand hover:border-brand transition-colors font-body text-sm font-medium bg-bg shadow-sm">
                <ArrowLeft size={16} />
                All Applications
              </Link>
            </div>
          </div>

          {/* Next Investigative Area */}
          <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
            <span className="font-body text-xs text-ink-muted uppercase tracking-widest hidden sm:inline-block">Next Investigative Area</span>
            <Link href="/clinical-applications/autoimmune" className="inline-flex items-center gap-2 font-display text-xl font-semibold text-ink hover:text-brand transition-colors group ml-auto">
              Autoimmune Conditions
              <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <MedicalDisclaimer />
    </>
  )
}
