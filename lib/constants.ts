export const SITE_NAME = 'GcMAF'
export const SITE_URL = 'https://gcmaf.net'
export const SITE_TAGLINE = 'Activating your body\'s first line of defense.'
export const SITE_EMAIL = 'info@ibio.asia'
export const SITE_PHONE = '+66 85149 7680 ( WhatsApp only)'
export const SITE_ADDRESS = 'DDD Mansion, 7th Floor, Room no. 708, Asoke-Din Daeng Road, Din Daeng, Bangkok-10400, Thailand'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Product', href: '/product' },
  {
    label: 'Clinical Applications',
    href: '/clinical-applications',
    children: [
      { label: 'Cancer Care', href: '/clinical-applications/cancer' },
      { label: 'Neurological Disorders', href: '/clinical-applications/neurological' },
      { label: 'Autoimmune', href: '/clinical-applications/autoimmune' },
      { label: 'Chronic Infections', href: '/clinical-applications/chronic-infections' },
      { label: 'Immune Enhancement', href: '/clinical-applications/immune-enhancement' },
    ],
  },
  { label: 'Research', href: '/research' },
  { label: 'Blog', href: '/gcmaf-for-sale' },
]

export const MEDICAL_DISCLAIMER =
  'The content on this site is for informational purposes only and is not intended as medical advice. GcMAF is a prescription-only product distributed exclusively to licensed physicians and medical clinics.'
