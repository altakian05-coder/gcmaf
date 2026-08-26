export interface ProductVariant {
  id: string
  name: string
  subtitle: string
  badge: string
  badgeColor: 'teal' | 'gold'
  description: string
  storage: string
  shelfLife: string
  coldChain: string
  usage: string
  benefits: string[]
  cta: string
  popular?: boolean
}

export const variants: ProductVariant[] = [
  {
    id: 'liquid',
    name: 'GcMAF Liquid',
    subtitle: 'Ready-to-Use Injectable Solution',
    badge: 'Cold-Chain',
    badgeColor: 'teal',
    description:
      'Our liquid formulation offers immediate bioavailability with no reconstitution required. Delivered as a ready-to-use injectable, it is optimised for clinical environments with consistent refrigeration infrastructure.',
    storage: '2–8°C (Refrigerated)',
    shelfLife: '2 years',
    coldChain: 'Required during shipping and storage',
    usage: 'Direct injection — no preparation needed',
    benefits: [
      'Immediate absorption and bioavailability',
      'Flexible clinical dosing protocols',
      'Ready to administer upon receipt',
      'Ideal for regular administration schedules',
    ],
    cta: 'Inquire About Liquid',
  },
  {
    id: 'lyophilized',
    name: 'GcMAF Lyophilized',
    subtitle: 'Freeze-Dried Powder Formulation',
    badge: 'Room Temperature Stable',
    badgeColor: 'gold',
    description:
      'Our lyophilized (freeze-dried) formulation maintains full potency without refrigeration, making it the preferred choice for international distribution, long-term stockpiling, and clinics in regions with limited cold-chain infrastructure.',
    storage: 'Room temperature (up to 25°C)',
    shelfLife: '12 months from production',
    coldChain: 'None required for storage or shipping',
    usage: 'Reconstitute with sterile water before injection',
    benefits: [
      'Simplified global shipping logistics',
      'Long-term stockpiling capability',
      'No special cold storage required',
      'Full potency preserved post-reconstitution',
    ],
    cta: 'Inquire About Lyophilized',
    popular: true,
  },
]
