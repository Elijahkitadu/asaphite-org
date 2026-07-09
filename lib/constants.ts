import type { NavItem, DonationTier } from '@/types'

export const SITE_NAME        = 'The Asaphites Foundation'
export const SITE_TAGLINE     = 'Visualizing Needs. Delivering Hope.'
export const SITE_DESCRIPTION = 'A storytelling foundation based in Tanzania, using film and photography to reveal community needs and connect them with people who can help.'
export const SITE_URL         = process.env.NEXT_PUBLIC_SITE_URL || 'https://theasaphitesfoundation.org'
export const SITE_EMAIL       = 'info@theasaphitesfoundation.org'
export const SITE_PHONE       = '+255 767 069 313'
export const SITE_WHATSAPP    = '+255767069313'
export const SITE_LOCATION    = 'Arusha, Tanzania'

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
  facebook:  'https://facebook.com/theasaphitesfoundation',
  instagram: 'https://instagram.com/theasaphitesfoundation',
  twitter:   'https://twitter.com/theasaphitesfound',
  youtube:   'https://youtube.com/@theasaphitesfoundation',
  linkedin:  'https://linkedin.com/company/theasaphites-foundation',
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
  { id: 'water',     title: 'Clean Water',        description: 'Many Tanzanian communities still lack access to safe drinking water. We document their reality to help connect them with solutions.', icon: 'droplets',    color: 'blue',   href: '/stories', stat: 'Our first focus area' },
  { id: 'education', title: 'Education',          description: 'Overcrowded classrooms and absent teachers are common in rural Tanzania. Our films put a human face on the statistics.',              icon: 'book-open',   color: 'gold',   href: '/stories', stat: 'Documenting in 2025'  },
  { id: 'healthcare',title: 'Healthcare',         description: 'Remote communities face enormous barriers to basic healthcare. We help tell those stories to reach people who can respond.',           icon: 'heart-pulse', color: 'green',  href: '/stories', stat: 'Coming soon'          },
  { id: 'churches',  title: 'Church Communities', description: 'Local churches are often the backbone of Tanzanian communities. We partner with them as trusted mobilisation hubs.',                  icon: 'building-2',  color: 'purple', href: '/church',  stat: '3 partners so far'   },
]

export const CORE_VALUES = [
  { title: 'Honesty',      description: 'We show things as they are — not dramatised, not sanitised. Real people, real stories.',                icon: 'shield-check' },
  { title: 'Dignity',      description: 'Every community we film is treated with full respect. We tell stories with people, not about them.',    icon: 'heart'        },
  { title: 'Storytelling', description: 'We believe a well-told story can move hearts, shift perspectives, and open wallets.',                  icon: 'film'         },
  { title: 'Community',    description: 'We are Tanzanian. We live here, we work here, we are invested in the outcome.',                        icon: 'users'        },
  { title: 'Hope',         description: 'We document need but we always point toward possibility. Every film ends with a way forward.',         icon: 'sun'          },
]

export const FOUNDATION_TIMELINE = [
  { year: '2023', title: 'The Idea',       description: 'A small group of Tanzanian filmmakers and community workers began asking: what if storytelling could be the bridge between need and help?' },
  { year: '2024', title: 'First Stories',  description: 'We produced our first three short documentary films, visiting communities in Dar es Salaam and Dodoma. Small start, real impact.' },
  { year: '2024', title: 'First Partners', description: 'Three local churches joined us as community partners, helping us identify real needs and connect with families willing to share their stories.' },
  { year: '2025', title: 'Growing',        description: 'We are now building our donor base, expanding our church network, and preparing for our first fundraising campaign. This is the beginning.' },
]

export const PARTNERSHIP_TIERS = [
  {
    name: 'Community Partner', price: 'Free',
    description: 'Help us find and tell stories in your community',
    features: ['Connect us with community members', 'Screen our films at your church', 'Receive our monthly newsletter', 'Be listed on our website'],
    cta: 'Become a Partner', featured: false,
  },
  {
    name: 'Mission Partner', price: 'From $50/mo',
    description: 'Actively support and co-fund our projects',
    features: ['All Community Partner benefits', 'Co-branded story pages', 'Regular field updates', 'Early access to new films', 'Recognised in all our content'],
    cta: 'Become a Mission Partner', featured: true,
  },
  {
    name: 'Founding Partner', price: 'Contact us',
    description: 'Shape the direction of the foundation',
    features: ['All Mission Partner benefits', 'Named project sponsorship', 'Input into our story priorities', 'Annual impact report', 'Direct line to our team'],
    cta: 'Get in Touch', featured: false,
  },
]

export const UNSPLASH_IMAGES = {
  hero:          'https://6a4fb165ae4883bf378c6a69.imgix.net/WhatsApp%20Image%202026-07-07%20at%2019.09.30%20(4).jpeg',
  whoWeAre:      'https://6a4fb165ae4883bf378c6a69.imgix.net/WhatsApp%20Image%202026-07-07%20at%2019.09.45%20(10).jpeg',
  featuredStory: 'https://6a4fb165ae4883bf378c6a69.imgix.net/WhatsApp%20Image%202026-07-07%20at%2018.45.11%20(4).jpeg',
  water1:        'https://6a4fb165ae4883bf378c6a69.imgix.net/WhatsApp%20Image%202026-07-07%20at%2019.09.45%20(7).jpeg',
  water2:        'https://6a4fb165ae4883bf378c6a69.imgix.net/WhatsApp%20Image%202026-07-07%20at%2019.09.38.jpeg',
  education1:    'https://6a4fb165ae4883bf378c6a69.imgix.net/WhatsApp%20Image%202026-07-07%20at%2019.09.45%20(1).jpeg',
  education2:    'https://6a4fb165ae4883bf378c6a69.imgix.net/WhatsApp%20Image%202026-07-07%20at%2018.45.11%20(30).jpeg',
  healthcare1:   'https://6a4fb165ae4883bf378c6a69.imgix.net/WhatsApp%20Image%202026-07-07%20at%2019.09.25.jpeg',
  church1:       'https://6a4fb165ae4883bf378c6a69.imgix.net/WhatsApp%20Image%202026-07-07%20at%2019.09.45%20(11).jpeg',
  community1:    'https://6a4fb165ae4883bf378c6a69.imgix.net/WhatsApp%20Image%202026-07-07%20at%2019.09.45%20(13).jpeg',
  community2:    'https://6a4fb165ae4883bf378c6a69.imgix.net/WhatsApp%20Image%202026-07-07%20at%2019.09.45%20(14).jpeg',
  team1:         'https://6a4fb165ae4883bf378c6a69.imgix.net/WhatsApp%20Image%202026-07-07%20at%2019.09.45%20(15).jpeg',
  team2:         'https://6a4fb165ae4883bf378c6a69.imgix.net/WhatsApp%20Image%202026-07-07%20at%2019.09.45%20(16).jpeg',
  team3:         'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  team4:         'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
  donate:        'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&q=80',
  blog1:         'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
  blog2:         'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
  blog3:         'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
  about:         'https://6a4fb165ae4883bf378c6a69.imgix.net/WhatsApp%20Image%202026-07-07%20at%2018.21.36%20(23).jpeg',
  impact:        'https://6a4fb165ae4883bf378c6a69.imgix.net/WhatsApp%20Image%202026-07-07%20at%2018.45.10%20(3).jpeg',
}
