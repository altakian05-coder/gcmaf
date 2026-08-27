import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Award, FlaskConical, Globe, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About GcMAF',
  description:
    'Learn about GcMAF — our mission, manufacturing standards, and commitment to advancing macrophage immunotherapy worldwide.',
  alternates: {
    canonical: 'https://gcmaf.net/about',
  },
};

const values = [
  {
    icon: FlaskConical,
    title: 'Scientific Integrity',
    description:
      'Every claim we make is grounded in peer-reviewed research. We do not overstate evidence or make therapeutic promises beyond what the science supports.',
  },
  {
    icon: Award,
    title: 'Manufacturing Excellence',
    description:
      'Our products are manufactured in ISO-certified, GMP-compliant facilities with independent third-party quality verification on every batch.',
  },
  {
    icon: Globe,
    title: 'Global Distribution',
    description:
      'We distribute clinical-grade GcMAF to licensed physicians and medical institutions across more than 40 countries worldwide.',
  },
  {
    icon: ShieldCheck,
    title: 'Physician-Only Supply',
    description:
      'We maintain strict prescription-only distribution protocols to ensure GcMAF reaches patients through qualified medical supervision.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--color-brand) 0%, #4a9aaa 45%, var(--color-hero-end) 100%)',
        }}
      >
        {/* Cellular dot decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[12%] w-44 h-44 rounded-full border border-white/10" />
          <div className="absolute bottom-[15%] right-[5%] w-60 h-60 rounded-full border border-white/8" />
          <div className="absolute top-[55%] left-[5%] w-20 h-20 rounded-full bg-white/5" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-4">
              <span className="w-6 h-px bg-white/60" />
              About Us
            </span>
            <h1 className="font-display text-hero font-bold text-white leading-tight mb-6">
              Advancing Macrophage Immunotherapy
            </h1>
            <p className="font-body text-lg text-white/80 leading-relaxed">
              GcMAF is dedicated to the production and global distribution of
              clinical-grade GcMAF — a naturally-occurring immune protein with a
              30-year research legacy, distributed exclusively to licensed
              medical professionals.
            </p>
          </div>
        </div>
        {/* Large watermark text */}
        <div
          className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="font-display font-bold text-white block text-center"
            style={{
              fontSize: 'clamp(5rem, 16vw, 14rem)',
              opacity: 0.06,
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            About
          </span>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                <span className="w-6 h-px bg-brand" />
                Our Mission
              </span>
              <h2 className="font-display text-section font-semibold text-ink mb-6 leading-tight">
                Making GcMAF Accessible to Licensed Clinicians Worldwide
              </h2>
              <div className="space-y-4 font-body text-ink-muted leading-relaxed">
                <p>
                  Our mission is to ensure that licensed physicians and
                  accredited medical institutions worldwide have reliable access
                  to pharmaceutical-grade GcMAF — manufactured to the highest
                  quality standards and supported by comprehensive clinical
                  documentation.
                </p>
                <p>
                  With over 10 years of continuous production experience, we
                  have established a reputation for consistency, transparency,
                  and scientific rigour. We work closely with the global
                  research community to support continued investigation into
                  GcMAF&apos;s therapeutic potential.
                </p>
                <p>
                  Our operations are headquartered in Bangkok, Thailand, with
                  global distribution infrastructure supporting delivery to more
                  than 40 countries across Europe, Asia, the Americas, and
                  Oceania.
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/about-us/our-mission-image.webp"
                alt="Our mission"
                unoptimized
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: 'var(--color-surface)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
              <span className="w-6 h-px bg-brand" />
              Our Values
              <span className="w-6 h-px bg-brand" />
            </span>
            <h2 className="font-display text-section font-semibold text-ink leading-tight">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="flex gap-5 p-6 rounded-2xl border border-border hover:border-brand/30 transition-colors"
                >
                  <div className="p-2.5 h-fit rounded-xl bg-brand/10 shrink-0">
                    <Icon size={22} className="text-brand" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink mb-2">
                      {v.title}
                    </h3>
                    <p className="font-body text-sm text-ink-muted leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 lg:py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden order-last lg:order-first">
              <Image
                src="/images/about-us/our-vision-image.webp"
                alt="Our vision"
                unoptimized
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                <span className="w-6 h-px bg-brand" />
                Our Vision
              </span>
              <h2 className="font-display text-section font-bold text-ink mb-6 leading-tight">
                Our Vision
              </h2>
              <p className="font-body text-lg text-ink-muted leading-relaxed">
                Reshaping healthcare by making advanced macrophage immunotherapy
                accessible to licensed clinicians worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24"
        style={{ backgroundColor: 'var(--color-surface)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-section font-semibold text-ink mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="font-body text-ink-muted mb-8 max-w-xl mx-auto">
            Contact our medical distribution team to discuss procurement,
            clinical documentation, and distribution logistics.
          </p>
          <Button href="/contact" size="lg" arrow>
            Get In Touch
          </Button>
        </div>
      </section>
    </>
  );
}