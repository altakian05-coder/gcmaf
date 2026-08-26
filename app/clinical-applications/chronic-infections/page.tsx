import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { MedicalDisclaimer } from '@/components/clinical'

export const metadata: Metadata = {
  title: 'Chronic Infections',
  description: 'GcMAF works to activate macrophages against persistent threats from viruses, bacteria, and chronic immune-compromising infections.',
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
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-4">
              <span className="w-6 h-px bg-white/60" />
              Clinical Application
            </span>
            <h1 className="font-display text-hero font-bold text-white leading-tight mb-6">Chronic Infections</h1>
            <p className="font-body text-lg text-white/80 leading-relaxed">
              Activating macrophages against persistent viral and bacterial threats by overcoming the nagalase immune blockade.
            </p>
          </div>
        </div>
      </section>

      {/* Intro and List */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl font-semibold text-ink mb-6">GcMAF Helps Fight Infections</h2>
            <p className="font-body text-lg text-ink-muted leading-relaxed">
              GcMAF is an immune-modulating Macrophage Activating Protein (iMAP). It exerts its therapeutic effects by activating innate immune cells known as macrophages, which are essential components of the immune system responsible for combating infections. iMAP therapy has emerged as a potential treatment approach for various chronic infections (both bacterial and viral), including conditions such as:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16 max-w-5xl mx-auto">
            {['HIV/AIDS', 'COVID-19 & Long COVID', 'Hepatitis B & C', 'Herpes Simplex', 'HPV', 'Epstein-Barr', 'Lyme disease', 'Tuberculosis', 'Pneumonia', 'Cancer-Related'].map((item) => (
              <div key={item} className="bg-surface border border-border rounded-xl p-4 text-center shadow-sm hover:border-brand transition-colors hover:shadow-md cursor-default">
                <span className="font-display font-medium text-ink block break-words">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Does It Work Section */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6 leading-tight">How Does It Work?</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">
                Patients with chronic infections may benefit from iMAP therapy with GcMAF. Infected cells have been shown to secrete an enzyme called nagalase, which impedes the natural production of Vitamin D Binding Protein Macrophage Activating Factor (VDBP-MAF). Nagalase is produced by cancer cells and viruses, especially those with an external envelope such as HIV, Hepatitis B, Hepatitis C, Influenza, Herpes simplex, Epstein-Barr virus, and others.
              </p>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                Elevated levels of nagalase reduce macrophage activity, which leads to immunosuppression and facilitates disease progression. Supplementation with VDBP-MAF can help to restore immune function and stimulate macrophage activity. iMAP therapy with GcMAF can provide therapeutic benefits by restoring VDBP-MAF levels, which in turn helps to eliminate persistent infections and alleviate disease symptoms.
              </p>
            </div>
            <div className="relative w-full">
              <img src="/images/chronic-infections/how-it-works-image.webp" alt="How it works" className="w-full h-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* HIV and COVID-19 Sections */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full order-last lg:order-first">
              <img src="/images/chronic-infections/hiv-image.webp" alt="HIV/AIDS research" className="w-full h-auto drop-shadow-2xl" />
            </div>
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6 leading-tight">HIV/AIDS</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                Human Immunodeficiency Virus (HIV) is a viral infection that attacks the immune system, specifically targeting CD4+ T cells. This leads to a weakened immune response, making individuals susceptible to various infections and diseases. VDBP-MAF has demonstrated the ability to activate macrophages and enhance immune responses in HIV-infected individuals. By bolstering immune function, GcMAF shows promise in reducing viral load and improving overall health outcomes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6 leading-tight">COVID-19 and Long COVID</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">
                COVID-19 is a respiratory illness caused by the severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). It can range from mild to severe symptoms and may result in complications such as pneumonia. Recent studies indicate that iMAP therapy with GcMAF may hold therapeutic potential in managing COVID-19.
              </p>
              <p className="font-body text-lg text-ink-muted leading-relaxed mb-4">
                Uncanny similarities between COVID-19 and HIV have been discovered by researchers. Their findings reveal that the SARS-CoV-2 spike protein is identical to the HIV-1 gp120 envelope protein. Nagalase is an intrinsic component of the gp120 envelope protein with known immunosuppressive and pathogenic effects. Furthermore, VDBP-MAF promotes the production of nitric oxide, which has therapeutic potential to mitigate the severity of COVID-19 infection.
              </p>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                By modulating the inflammatory response, reducing nagalase levels, increasing nitric oxide levels, and boosting overall immune function, GcMAF may help to manage symptoms, reduce the risk of severe complications, and support the long-term recovery of individuals infected with COVID-19.
              </p>
            </div>
            <div className="relative w-full">
              <img src="/images/chronic-infections/covid19-image.webp" alt="COVID-19" className="w-full h-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Hepatitis Banner */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <Image src="/images/chronic-infections/hepatitis-bg.webp" alt="Hepatitis B & C" unoptimized fill className="object-cover absolute inset-0 brightness-50" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">Hepatitis B and C</h2>
          <p className="font-body text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
            Hepatitis B and C are viral infections that primarily affect the liver. They can lead to chronic liver disease, liver cirrhosis, and an increased risk of liver cancer. Vitamin D and Vitamin D Binding Protein play a crucial role in chronic liver diseases. As an immune-modulating Macrophage Activating Protein, GcMAF stimulates macrophage activity, which is vital for clearing viral infections such as hepatitis B and C.
          </p>
        </div>
      </section>

      {/* Other conditions grid */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Herpes Simplex Virus (HSV)</h2>
              <p className="font-body text-ink-muted leading-relaxed">
                Herpes Simplex Virus (HSV) is a common viral infection that causes cold sores or genital herpes. Through the increased activation of macrophages and enhanced immune function as demonstrated in the research, GcMAF may bolster the immune response against HSV, potentially reducing the frequency and severity of outbreaks.
              </p>
            </div>
            <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Human Papillomavirus (HPV)</h2>
              <p className="font-body text-ink-muted leading-relaxed">
                Human papillomavirus (HPV) is a sexually transmitted infection that can cause various diseases, including genital warts and certain types of cancer, such as cervical, anal, and oropharyngeal cancer. GcMAF may enhance the immune system&apos;s ability to target and eliminate HPV infections, which in turn reduces the risk of developing associated cancers.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand/5 border border-brand/20 p-8 rounded-3xl">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Epstein Barr Virus (EBV)</h2>
              <p className="font-body text-sm text-ink-muted leading-relaxed">
                EBV is a common virus that causes infectious mononucleosis. In certain instances, EBV can lead to chronic infections associated with ongoing fatigue and other persistent symptoms. By promoting the elimination of EBV-infected cells, iMAP therapy may improve associated symptoms.
              </p>
            </div>
            <div className="bg-brand/5 border border-brand/20 p-8 rounded-3xl">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Lyme Disease</h2>
              <p className="font-body text-sm text-ink-muted leading-relaxed">
                Lyme disease is a tick-borne illness caused by Borrelia burgdorferi. VDBP-MAF provides immune support that may help to combat the multiple infections associated with Lyme disease and reduce reliance on antibiotics for disease management.
              </p>
            </div>
            <div className="bg-brand/5 border border-brand/20 p-8 rounded-3xl">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Pneumonia</h2>
              <p className="font-body text-sm text-ink-muted leading-relaxed">
                iMAP therapy with GcMAF can enhance the immune response against pneumonia infections by activating macrophages, which recognizing pathogens and mount a coordinated immune response, leading to effective clearance and symptom reduction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tuberculosis Banner */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <Image src="/images/chronic-infections/tuberculosis-bg.webp" alt="Tuberculosis Background" unoptimized fill className="object-cover absolute inset-0 brightness-50" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">Tuberculosis</h2>
          <p className="font-body text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
            Tuberculosis (TB) is an infectious disease caused by Mycobacterium tuberculosis. It primarily affects the lungs but can also impact other organs. Vitamin D deficiency is associated with an increased risk of TB infection and worse disease progression. Supporting the immune system with a stabilized vitamin D protein complex such as GcMAF may contribute to managing and clearing tuberculosis infections.
          </p>
        </div>
      </section>
      
      {/* Cancer infections and Disclaimer */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="bg-surface border-l-4 border-brand p-8 shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Cancer-Related Infections</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                Chronic infections can be a significant concern in individuals with cancer. Cancer-related infections caused by treatments or the disease itself are commonly seen in advanced cancer patients. GcMAF, in conjunction with other therapeutic strategies, may augment the immune response against serious infections and reduce antibiotic overprescription. This approach has the potential to alleviate symptoms, enhance overall well-being, and improve outcomes for cancer patients.
              </p>
            </div>

            <div className="bg-surface border border-border p-8 rounded-3xl">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">More Research Still Needed</h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                While research provides encouraging insights into the potential clinical benefits of GcMAF for chronic infections, it is important to be aware that further research and clinical trials are necessary to fully establish therapeutic efficacy. Consultation with a qualified healthcare professional is crucial before considering GcMAF treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links & Get In Touch + Next Section */}
      <section className="py-20 bg-[var(--color-surface)]">
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
            <Link href="/clinical-applications/immune-enhancement" className="inline-flex items-center gap-2 font-display text-xl font-semibold text-ink hover:text-brand transition-colors group ml-auto">
              Immune Enhancement
              <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <MedicalDisclaimer />
    </>
  )
}
