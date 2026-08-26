export const SITE_NAME = 'GcMAF'
export const SITE_URL = 'https://gcmaf.net'
export const SITE_TAGLINE = 'Activating your body\'s first line of defense.'
export const SITE_EMAIL = 'info@ibio.asia'
export const SITE_PHONE = '+66 85149 7680 ( WhatsApp only)'
export const SITE_ADDRESS = 'DDD Mansion, 7th Floor, Room no. 708, Asoke-Din Daeng Road, Din Daeng, Bangkok-10400, Thailand'

export const NAV_LINKS = [
  { label: 'Home', href: `${SITE_URL}/` },
  { label: 'About', href: `${SITE_URL}/about` },
  { label: 'Product', href: `${SITE_URL}/product` },
  {
    label: 'Clinical Applications',
    href: `${SITE_URL}/clinical-applications`,
    children: [
      { label: 'Cancer Care', href: `${SITE_URL}/clinical-applications/cancer` },
      { label: 'Neurological Disorders', href: `${SITE_URL}/clinical-applications/neurological` },
      { label: 'Autoimmune', href: `${SITE_URL}/clinical-applications/autoimmune` },
      { label: 'Chronic Infections', href: `${SITE_URL}/clinical-applications/chronic-infections` },
      { label: 'Immune Enhancement', href: `${SITE_URL}/clinical-applications/immune-enhancement` },
    ],
  },
  { label: 'Research', href: `${SITE_URL}/research` },
  { label: 'Blog', href: `${SITE_URL}/gcmaf-for-sale/` },
]

export const MEDICAL_DISCLAIMER =
  'The content on this site is for informational purposes only and is not intended as medical advice. GcMAF is a prescription-only product distributed exclusively to licensed physicians and medical clinics.'
