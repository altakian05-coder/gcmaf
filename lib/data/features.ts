export interface Feature {
  icon: string
  title: string
  description: string
}

export const productFeatures: Feature[] = [
  {
    icon: 'Award',
    title: 'ISO/GMP Certified Manufacturing',
    description: 'Produced in ISO-certified, GMP-compliant facilities with full quality documentation.',
  },
  {
    icon: 'FlaskConical',
    title: 'Third-Party Sterility Tested',
    description: 'Each batch independently tested for sterility, endotoxins, and microbial contamination.',
  },
  {
    icon: 'Dna',
    title: 'Transcriptomic Activity Verified',
    description: 'Biological activity confirmed via transcriptomic assays on human macrophage cell lines.',
  },
  {
    icon: 'TrendingUp',
    title: 'Exceeds LPS Activation Standard',
    description: 'Macrophage activation potential exceeds the lipopolysaccharide (LPS) benchmark standard.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Prescription-Only Medical Grade',
    description: 'Distributed exclusively to licensed physicians and accredited medical institutions.',
  },
  {
    icon: 'Clock',
    title: '10+ Years Production Experience',
    description: 'Over a decade of uninterrupted clinical-grade GcMAF production and distribution.',
  },
]
