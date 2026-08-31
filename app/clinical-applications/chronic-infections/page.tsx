import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { MedicalDisclaimer } from '@/components/clinical'

export const metadata: Metadata = {
  title: 'GcMAF Chronic Infection Research & Evidence',
  description: 'Review GcMAF research related to macrophage biology, chronic infections, immune signaling, and clinical evidence.',
}

export default function ChronicInfectionsPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--color-brand) 0%, #4a9aaa 45%, var(--color-ink) 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-44 h-44 rounded-full border border-white/10" />
          <div className="absolute bottom-[20%] right-[5%] w-56 h-56 rounded-full border border-white/8" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-4"><span className="w-6 h-px bg-white/60" />Clinical Application</span>
            <h1 className="font-display text-hero font-bold text-white leading-tight mb-6">Chronic Infections</h1>
            <p className="font-body text-lg text-white/80 leading-relaxed">A clear review of macrophage biology, infection research, and the current GcMAF evidence base.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl border border-brand/20 bg-brand/5 p-8 lg:p-10">
            <h2 className="font-display text-3xl font-semibold text-ink mb-5">Key points</h2>
            <ul className="space-y-3 font-body text-lg text-ink-muted leading-relaxed list-disc pl-6">
              <li>Macrophages are important cells in the innate immune system.</li>
              <li>They help detect, engulf, and process microbes and damaged cells.</li>
              <li>GcMAF has been studied for effects on macrophage activity and immune signaling.</li>
              <li>Research includes different conditions, formulations, and study designs.</li>
              <li>GcMAF-related research can be considered alongside established anti-infective care under qualified clinical oversight.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6 leading-tight">Why Macrophages Matter</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">Macrophages are part of the body&apos;s early immune defense. They can recognize microbes, remove damaged material, and send signals to other immune cells.</p>
              <p className="font-body text-lg text-ink-muted leading-relaxed">Their activity changes with the local environment. Infection, inflammation, nutrients, and cell signals can all affect how macrophages behave.</p>
            </div>
            <div className="relative w-full">
              <img src="/images/chronic-infections/how-it-works-image.webp" alt="Macrophage and chronic infection research" className="w-full h-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="font-display text-4xl font-semibold text-ink mb-6">Areas Discussed in Research</h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed">GcMAF-related literature has discussed several infectious and immune-related topics, with evidence coming from laboratory work, case observations, and clinical research.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
            {['HIV/AIDS', 'COVID-19', 'Hepatitis B & C', 'Herpes viruses', 'HPV', 'Epstein-Barr', 'Lyme disease', 'Tuberculosis', 'Pneumonia', 'Cancer-related infection'].map((item) => (
              <div key={item} className="bg-surface border border-border rounded-xl p-4 text-center shadow-sm"><span className="font-display font-medium text-ink block">{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full order-last lg:order-first">
              <img src="/images/chronic-infections/hiv-image.webp" alt="HIV research" className="w-full h-auto drop-shadow-2xl" />
            </div>
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6">HIV/AIDS Research Context</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">HIV targets key immune cells and can weaken immune defense. Antiretroviral therapy has an established role in HIV care.</p>
              <p className="font-body text-lg text-ink-muted leading-relaxed">GcMAF-related studies have explored macrophage activation and immune signaling in this setting. These findings can be reviewed alongside established HIV care, with clinical decisions coordinated by qualified professionals.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6">COVID-19 and Long COVID</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">COVID-19 can affect the lungs, blood vessels, and immune system. Long COVID can involve symptoms that last for months after infection.</p>
              <p className="font-body text-lg text-ink-muted leading-relaxed">GcMAF has been discussed in research related to immune regulation and macrophage activity. Further controlled human studies can add clarity about clinical outcomes, dosing, formulation, and the patient groups most relevant to this research.</p>
            </div>
            <div className="relative w-full">
              <img src="/images/chronic-infections/covid19-image.webp" alt="COVID-19 research" className="w-full h-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <Image src="/images/chronic-infections/hepatitis-bg.webp" alt="Hepatitis B and C" unoptimized fill className="object-cover absolute inset-0 brightness-50" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">Hepatitis B and C</h2>
          <p className="font-body text-lg text-white/90 leading-relaxed">Hepatitis B and C can cause long-term liver disease. Modern antiviral treatment addresses viral infection, while GcMAF-related immune research examines macrophage and immune-regulation pathways that may be relevant to the broader biological picture.</p>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface border border-border p-8 rounded-3xl">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Herpes Viruses</h2>
              <p className="font-body text-ink-muted leading-relaxed">Herpes viruses can remain in the body after infection. Research has explored immune responses to HSV and Epstein-Barr virus, while GcMAF-related work examines macrophage activation and immune regulation in these settings.</p>
            </div>
            <div className="bg-surface border border-border p-8 rounded-3xl">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">HPV</h2>
              <p className="font-body text-ink-muted leading-relaxed">HPV can cause warts and several cancers. Vaccination, screening, and medical care have established roles, while GcMAF research represents a separate immune-biology area examining macrophage-related mechanisms.</p>
            </div>
            <div className="bg-surface border border-border p-8 rounded-3xl">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Lyme Disease</h2>
              <p className="font-body text-ink-muted leading-relaxed">Lyme disease is caused by Borrelia bacteria. Antibiotics address the bacterial infection, while GcMAF-related research can be evaluated separately for questions involving macrophages, immune signaling, and patient-specific clinical context.</p>
            </div>
            <div className="bg-surface border border-border p-8 rounded-3xl">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Tuberculosis and Pneumonia</h2>
              <p className="font-body text-ink-muted leading-relaxed">These infections can become serious or life-threatening. Antimicrobial care addresses the infection itself, while immune-support research explores additional biological questions involving macrophage function and host response.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-surface border border-border p-9 rounded-3xl">
            <h2 className="font-display text-3xl font-semibold text-ink mb-5">How to Read the Evidence</h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed mb-5">A useful research review asks simple questions. Was the study done in cells, animals, or people? How many people were included? Was there a control group? Was the result repeated by other teams?</p>
            <ul className="space-y-3 font-body text-lg text-ink-muted leading-relaxed list-disc pl-6">
              <li>Laboratory findings describe mechanisms and cellular responses.</li>
              <li>Case reports and small studies provide clinical observations that can guide later research.</li>
              <li>Different GcMAF preparations should be identified when comparing results.</li>
              <li>Clinical decisions about established care and GcMAF-related approaches should be coordinated with qualified medical professionals.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-10 lg:p-12 rounded-3xl bg-brand/5 border border-brand/20">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink mb-4">Review the Broader Evidence</h2>
              <p className="font-body text-ink-muted max-w-xl text-lg leading-relaxed">Explore the research section for more background, publications, and evidence context.</p>
            </div>
            <div className="flex gap-4 flex-col sm:flex-row w-full md:w-auto">
              <Button href="/research" arrow>Research</Button>
              <Link href="/clinical-applications" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border text-ink-muted hover:text-brand hover:border-brand transition-colors font-body text-sm font-medium bg-bg"><ArrowLeft size={16} />All Applications</Link>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
            <span className="font-body text-xs text-ink-muted uppercase tracking-widest hidden sm:inline-block">Next Investigative Area</span>
            <Link href="/clinical-applications/immune-enhancement" className="inline-flex items-center gap-2 font-display text-xl font-semibold text-ink hover:text-brand transition-colors group ml-auto">Immune Enhancement<ChevronRight size={20} className="transition-transform group-hover:translate-x-1" /></Link>
          </div>
        </div>
      </section>

      <MedicalDisclaimer />
    </>
  )
}
