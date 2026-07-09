import type { NavItem, DonationTier } from '@/types'

export const SITE_NAME = 'The Asaphites Foundation'
export const SITE_TAGLINE = 'Visualizing Needs. Delivering Hope.'
export const SITE_DESCRIPTION = 'A storytelling foundation based in Tanzania, using film and photography to reveal community needs and connect them with people who can help.'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://asaphitesfoundation.org'
export const SITE_EMAIL = 'info@asaphitesfoundation.org'
export const SITE_PHONE = '+255 000 000 000'
export const SITE_WHATSAPP = '+255000000000'
export const SITE_LOCATION = 'Dar es Salaam, Tanzania'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home',            href: '/'          },
  { label: 'About',           href: '/about'     },
  { label: 'Stories',         href: '/stories'   },
  { label: 'Campaigns',       href: '/campaigns' },
  { label: 'Church Partners', href: '/church'    },
  { label: 'Blog',            href: '/blog'      },
  { label: 'Contact',         href: '/contact'   },
]

export const SOCIAL_LINKS = {
  facebook:  'https://facebook.com/asaphitesfoundation',
  instagram: 'https://instagram.com/asaphitesfoundation',
  twitter:   'https://twitter.com/asaphitesfound',
  youtube:   'https://youtube.com/@asaphitesfoundation',
  linkedin:  'https://linkedin.com/company/asaphites-foundation',
  vimeo:     '',
}

export const IMPACT_STATS = [
  { label: 'Communities Visited', value: 4,   suffix: '',  description: 'Across Tanzania',        icon: 'map-pin',  order: 1 },
  { label: 'Stories Documented',  value: 6,   suffix: '',  description: 'And counting',            icon: 'film',     order: 2 },
  { label: 'Lives Reached',       value: 500, suffix: '+', description: 'Through our first films', icon: 'heart',    order: 3 },
  { label: 'Partner Churches',    value: 3,   suffix: '',  description: 'In our network',          icon: 'building', order: 4 },
]

export const DONATION_TIERS: DonationTier[] = [
  { amount: 10,  label: 'Supporter',   description: 'Help us tell one story', impact: 'Covers transport to a community visit',          featured: false },
  { amount: 25,  label: 'Contributor', description: 'Fund our fieldwork',     impact: 'Covers a day of filming in the field',           featured: false },
  { amount: 50,  label: 'Partner',     description: 'Make a real difference', impact: 'Funds editing and production of one short film', featured: true  },
  { amount: 100, label: 'Champion',    description: 'Go the extra mile',      impact: 'Sponsors a full community documentary visit',    featured: false },
]

export const FOCUS_AREAS = [
  { id: 'water',     title: 'Clean Water',      description: 'Many Tanzanian communities still lack access to safe drinking water. We document their reality to help connect them with solutions.',        icon: 'droplets',   color: 'blue',   href: '/stories', stat: 'Our first focus area' },
  { id: 'education', title: 'Education',        description: 'Overcrowded classrooms and absent teachers are common in rural Tanzania. Our films put a human face on the statistics.',                    icon: 'book-open',  color: 'gold',   href: '/stories', stat: 'Documenting in 2025'  },
  { id: 'healthcare',title: 'Healthcare',       description: 'Remote communities face enormous barriers to basic healthcare. We help tell those stories to reach people who can respond.',                 icon: 'heart-pulse',color: 'green',  href: '/stories', stat: 'Coming soon'          },
  { id: 'churches',  title: 'Church Communities',description: 'Local churches are often the backbone of Tanzanian communities. We partner with them as trusted mobilisation hubs.',                       icon: 'building-2', color: 'purple', href: '/church',  stat: '3 partners so far'   },
]

export const CORE_VALUES = [
  { title: 'Honesty',      description: 'We show things as they are — not dramatised, not sanitised. Real people, real stories.',                           icon: 'shield-check' },
  { title: 'Dignity',      description: 'Every community we film is treated with full respect. We tell stories with people, not about them.',               icon: 'heart'        },
  { title: 'Storytelling', description: 'We believe a well-told story can move hearts, shift perspectives, and open wallets.',                              icon: 'film'         },
  { title: 'Community',    description: 'We are Tanzanian. We live here, we work here, we are invested in the outcome.',                                   icon: 'users'        },
  { title: 'Hope',         description: 'We document need but we always point toward possibility. Every film ends with a way forward.',                     icon: 'sun'          },
]

export const FOUNDATION_TIMELINE = [
  { year: '2023', title: 'The Idea',       description: 'A small group of Tanzanian filmmakers and community workers began asking: what if storytelling could be the bridge between need and help?' },
  { year: '2024', title: 'First Stories',  description: 'We produced our first three short documentary films, visiting communities in Dar es Salaam and Dodoma. Small start, real impact.' },
  { year: '2024', title: 'First Partners', description: 'Three local churches joined us as community partners, helping us identify real needs and connect with families willing to share their stories.' },
  { year: '2025', title: 'Growing',        description: 'We are now building our donor base, expanding our church network, and preparing for our first fundraising campaign. This is the beginning.' },
]

export const PARTNERSHIP_TIERS = [
  {
    name: 'Community Partner', price: 'Free', description: 'Help us find and tell stories in your community',
    features: ['Connect us with community members', 'Screen our films at your church', 'Receive our monthly newsletter', 'Be listed on our website'],
    cta: 'Become a Partner', featured: false,
  },
  {
    name: 'Mission Partner', price: 'From $50/mo', description: 'Actively support and co-fund our projects',
    features: ['All Community Partner benefits', 'Co-branded story pages', 'Regular field updates', 'Early access to new films', 'Recognised in all our content'],
    cta: 'Become a Mission Partner', featured: true,
  },
  {
    name: 'Founding Partner', price: 'Contact us', description: 'Shape the direction of the foundation',
    features: ['All Mission Partner benefits', 'Named project sponsorship', 'Input into our story priorities', 'Annual impact report', 'Direct line to our team'],
    cta: 'Get in Touch', featured: false,
  },
]

export const UNSPLASH_IMAGES = {
  hero:          'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80',
  whoWeAre:      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
  featuredStory: 'https://images.unsplash.com/photo-1584036553516-bf83210aa16c?w=1200&q=80',
  water1:        'https://images.unsplash.com/photo-1538300342682-cf57afb97285?w=800&q=80',
  water2:        'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=800&q=80',
  education1:    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
  education2:    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
  healthcare1:   'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  church1:       'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=800&q=80',
  community1:    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
  community2:    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
  team1:         'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  team2:         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  team3:         'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  team4:         'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
  donate:        'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&q=80',
  blog1:         'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
  blog2:         'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
  blog3:         'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
  about:         'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&q=80',
  impact:        'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80',
}
