import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { MedicalDisclaimer } from '@/components/clinical'

export const metadata: Metadata = {
  title: 'Adjunct Cancer Care',
  description: 'GcMAF provides support for the immune system against cancer by targeting nagalase suppression and restoring macrophage activity.',
}

export default function CancerPage() {
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
            <h1 className="font-display text-hero font-bold text-white leading-tight mb-6">Adjunct Cancer Care</h1>
            <p className="font-body text-lg text-white/80 leading-relaxed">
              Restoring macrophage-mediated immune function in patients dealing with immune suppression caused by tumour-secreted nagalase.
            </p>
          </div>
        </div>
      </section>

      {/* Intro with The Global Burden of Cancer & Standard Cancer Care */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6 leading-tight">The Global Burden of Cancer</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                Cancer is one of the leading causes of death worldwide. It accounts for nearly one in six of all deaths. The disease involves uncontrolled cell growth with the ability to spread and invade other tissues and organs around the body.
              </p>
            </div>
            <div className="relative w-full">
              <img src="/images/cancer/global-burden-image.webp" alt="Global Burden of Cancer" className="w-full h-auto drop-shadow-2xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full order-last lg:order-first">
              <img src="/images/cancer/standard-care-image.webp" alt="Standard Cancer Care" className="w-full h-auto drop-shadow-2xl" />
            </div>
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6 leading-tight">Standard Cancer Care Destroys Immune Health</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                Aggressive conventional cancer treatments are known to suppress and weaken the immune system. GcMAF is a natural substance that helps to restore innate immune defense systems and improve outcomes for immune-compromised cancer patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cancer Disables the Immune System & Nagalase Suppression */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6 leading-tight">Cancer Disables the Immune System</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">
                Cancer cells have clever mechanisms to evade the immune system. They are able to disable the immune response by inhibiting the natural production of VDBP-MAF – an immune-modulating protein that activates macrophages.
              </p>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                Activated macrophages play a crucial role in identifying and destroying abnormal cells, including cancer cells, through multiple mechanisms such as phagocytosis and the release of immune signaling molecules to recruit other cancer-killing immune cells.
              </p>
            </div>
            <div className="relative w-full">
              <img src="/images/cancer/cancer-disables-image.webp" alt="Cancer Disables the Immune System" className="w-full h-auto drop-shadow-2xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full order-last lg:order-first">
              <img src="/images/cancer/nagalase-suppress-image.webp" alt="Nagalase Suppresses Immune Function" className="w-full h-auto drop-shadow-2xl" />
            </div>
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6 leading-tight">Nagalase Suppresses Immune Function in Cancer Patients</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">
                Cancerous cells and tumors suppress innate VDBP-MAF production by secreting an enzyme called nagalase (α-N-acetylgalactosaminidase). Nagalase removes sugar molecules from Vitamin D Binding Protein (VDBP), which produces a dysfunctional precursor protein and prevents its conversion into the activated messenger protein Vitamin D Binding Protein Macrophage Activating Factor (VDBP-MAF).
              </p>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                Elevated nagalase has been detected in many cancer patients, but not in healthy individuals. Studies have shown that elevated nagalase levels are associated with insufficient VDBP-MAF levels and immunosuppression. Without adequate levels of VDBP-MAF the immune system is unable to activate macrophages and mount a coordinated immune response. Tumors grow unchecked and disease progresses rapidly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Effective Immune Recovery with GcMAF (Background Section) */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <Image src="/images/cancer/effective-recovery-bg.webp" alt="Effective Recovery Banner" fill className="object-cover absolute inset-0 brightness-50" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">Effective Immune Recovery with GcMAF</h2>
          <p className="font-body text-lg text-white/80 leading-relaxed mb-10 max-w-3xl mx-auto">
            iMAP therapy with GcMAF supplements VDBP-MAF, which has been proven to activate macrophages, enabling them to identify and kill cancer cells. Research has demonstrated the potential therapeutic efficacy of supplemental VDBP-MAF in various types of cancer, including:
          </p>
          <ul className="flex flex-wrap justify-center gap-6 font-display text-xl font-medium">
            <li className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">Prostate</li>
            <li className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">Breast</li>
            <li className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">Colon</li>
            <li className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">Bladder</li>
            <li className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">Ovarian</li>
            <li className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">Lung</li>
            <li className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">Liver</li>
            <li className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">Thyroid</li>
            <li className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">Oral</li>
            <li className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">Pancreatic</li>
          </ul>
        </div>
      </section>

      {/* Integrated Response & Outcomes */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-4xl space-y-24">
          <div>
            <h2 className="font-display text-4xl font-semibold text-ink mb-6 text-center">An Integrated Immune Response Against Cancer</h2>
            <div className="space-y-6">
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                When macrophages are activated by VDBP-MAF it produces a cascade effect in the immune system and signals other immune cells. Activated macrophages can kill cancer cells directly and indirectly by recruiting cytotoxic T-cells, B-cells, natural killer (NK) cells and dendritic cells (DCs).
              </p>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                Macrophages also play a key role in regulating the tumor microenvironment, tumor growth, vascularization, metastatic spread and tumor response to various therapies. GcMAF can be combined with other therapies as part of an integrative cancer care program and has been shown to work synergistically.
              </p>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                iMAP therapy with GcMAF inhibits angiogenesis (blood vessel formation), proliferation and metastasis, which can help to slow or prevent disease progression. It can even reverse certain cancer cell processes and turn cancer cells back into healthy cells.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-brand/5 border border-brand/20 p-10 rounded-3xl">
              <h2 className="font-display text-3xl font-semibold text-ink mb-6">Improved Patient Outcomes</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed mb-6">
                Incorporating GcMAF into an integrative cancer treatment program can help to improve patient outcomes. The early and complementary application of immunotherapy has been shown to help:
              </p>
              <ul className="space-y-3 font-body text-lg text-ink-muted">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand shrink-0" />
                  <span>Support disease control</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand shrink-0" />
                  <span>Prevent disease recurrence</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand shrink-0" />
                  <span>Reduce incidence of secondary cancers</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand shrink-0" />
                  <span>Improve overall well-being</span>
                </li>
              </ul>
            </div>

            <div className="bg-surface p-10 rounded-3xl border border-border shadow-sm">
              <h2 className="font-display text-3xl font-semibold text-ink mb-6">Increased Quality of Life</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed mb-6">
                A significant improvement in patient quality of life has been reported after GcMAF treatment. Research indicates that VDBP-MAF not only enhances immune function and targets cancer cells, but may also reduce treatment related side-effects such as chemotherapy-induced:
              </p>
              <ul className="space-y-3 font-body text-lg text-ink-muted mb-6">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand shrink-0" />
                  <span>Peripheral neuropathy</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand shrink-0" />
                  <span>Chronic fatigue</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand shrink-0" />
                  <span>Immunosuppression</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand shrink-0" />
                  <span>Secondary infections</span>
                </li>
              </ul>
              <p className="font-body text-lg text-ink-muted leading-relaxed text-sm">
                Many cancer patients succumb to infections due to a weakened immune system. iMAP therapy is proven to boost the immune system. It may help to mitigate toxic side-effects, prevent the occurrence of infections, and enhance patient quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links & Get In Touch + Next Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
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
            <Link href="/clinical-applications/neurological" className="inline-flex items-center gap-2 font-display text-xl font-semibold text-ink hover:text-brand transition-colors group ml-auto">
              Neurological Disorders
              <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <MedicalDisclaimer />
    </>
  )
}
