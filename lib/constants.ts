import type { NavItem, DonationTier, ImpactStat } from '@/types'

// ─── Brand ───────────────────────────────────────────

export const SITE_NAME = 'The Asaphites Foundation'
export const SITE_TAGLINE = 'Visualizing Needs. Delivering Hope.'
export const SITE_DESCRIPTION =
  'Through storytelling, film, and advocacy, we connect underserved communities with people who can create lasting change.'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://asaphitesfoundation.org'
export const SITE_EMAIL = 'info@asaphitesfoundation.org'
export const SITE_PHONE = '+1 (555) 000-0000'
export const SITE_WHATSAPP = '+15550000000'
export const SITE_LOCATION = 'Global Operations'

// ─── Navigation ──────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Stories',
    href: '/stories',
    children: [
      { label: 'All Stories', href: '/stories' },
      { label: 'Water', href: '/stories?category=water' },
      { label: 'Education', href: '/stories?category=education' },
      { label: 'Healthcare', href: '/stories?category=healthcare' },
    ],
  },
  {
    label: 'Campaigns',
    href: '/campaigns',
    children: [
      { label: 'All Campaigns', href: '/campaigns' },
      { label: 'Active', href: '/campaigns?status=active' },
      { label: 'Completed', href: '/campaigns?status=completed' },
    ],
  },
  { label: 'Church Partners', href: '/church' },
  { label: 'Impact', href: '/impact' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

// ─── Social Links ─────────────────────────────────────

export const SOCIAL_LINKS = {
  facebook:  'https://facebook.com/asaphitesfoundation',
  instagram: 'https://instagram.com/asaphitesfoundation',
  twitter:   'https://twitter.com/asaphitesfound',
  youtube:   'https://youtube.com/@asaphitesfoundation',
  linkedin:  'https://linkedin.com/company/asaphites-foundation',
  vimeo:     'https://vimeo.com/asaphitesfoundation',
}

// ─── Impact Stats ─────────────────────────────────────

export const IMPACT_STATS: Omit<ImpactStat, '_id'>[] = [
  {
    label: 'Communities Reached',
    value: 120,
    suffix: '+',
    description: 'Across 14 countries',
    icon: 'map-pin',
    order: 1,
  },
  {
    label: 'Documentary Projects',
    value: 47,
    suffix: '',
    description: 'Stories told globally',
    icon: 'film',
    order: 2,
  },
  {
    label: 'Lives Impacted',
    value: 85000,
    suffix: '+',
    description: 'Through our programs',
    icon: 'heart',
    order: 3,
  },
  {
    label: 'Partner Churches',
    value: 230,
    suffix: '+',
    description: 'Worldwide network',
    icon: 'building',
    order: 4,
  },
]

// ─── Donation Tiers ──────────────────────────────────

export const DONATION_TIERS: DonationTier[] = [
  {
    amount: 25,
    label: 'Seed of Hope',
    description: 'Plant the first seed',
    impact: 'Provides clean water for a family for one month',
  },
  {
    amount: 50,
    label: 'Story Keeper',
    description: 'Fund a documentary session',
    impact: 'Covers filming equipment for one community story',
  },
  {
    amount: 100,
    label: 'Community Builder',
    description: 'Transform a community',
    impact: 'Supports a child\'s education for a full school term',
    featured: true,
  },
  {
    amount: 250,
    label: 'Hope Carrier',
    description: 'Carry hope further',
    impact: 'Funds a medical outreach for 50 people',
  },
  {
    amount: 500,
    label: 'Vision Sponsor',
    description: 'Sponsor a full campaign',
    impact: 'Drills and installs a community water point',
  },
  {
    amount: 1000,
    label: 'Foundation Pillar',
    description: 'Become a foundation pillar',
    impact: 'Renovates a rural classroom for 40 students',
  },
]

// ─── Focus Areas ─────────────────────────────────────

export const FOCUS_AREAS = [
  {
    id: 'water',
    title: 'Clean Water Access',
    description:
      'We document communities lacking safe water and fund sustainable wells, boreholes, and purification systems that bring life where there was thirst.',
    icon: 'droplets',
    color: 'blue',
    href: '/campaigns?category=water',
    stat: '40+ water projects funded',
  },
  {
    id: 'education',
    title: 'Education',
    description:
      'Through film, we reveal crumbling classrooms and absent teachers — then mobilize partners to renovate schools and equip the next generation.',
    icon: 'book-open',
    color: 'gold',
    href: '/campaigns?category=education',
    stat: '15 schools renovated',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description:
      'Our health outreach stories drive medical missions to remote areas, providing screenings, medications, and life-saving interventions.',
    icon: 'heart-pulse',
    color: 'green',
    href: '/campaigns?category=healthcare',
    stat: '12,000+ patients reached',
  },
  {
    id: 'churches',
    title: 'Church Partnerships',
    description:
      'We unite local churches as mobilization hubs — restoring their buildings, amplifying their voices, and activating them as centers of hope.',
    icon: 'building-2',
    color: 'purple',
    href: '/church',
    stat: '230+ partner churches',
  },
]

// ─── Values ──────────────────────────────────────────

export const CORE_VALUES = [
  {
    title: 'Compassion',
    description:
      'Every story we tell is a person we see. Compassion drives us to look, listen, and respond with our whole hearts.',
    icon: 'heart',
  },
  {
    title: 'Integrity',
    description:
      'We hold ourselves to radical transparency — in how we spend, how we communicate, and how we represent communities.',
    icon: 'shield-check',
  },
  {
    title: 'Storytelling',
    description:
      'We believe the right story, told well, can change the world. Film and photography are our greatest tools for transformation.',
    icon: 'film',
  },
  {
    title: 'Service',
    description:
      'We show up where others overlook. Service means getting our hands dirty alongside the communities we serve.',
    icon: 'hands-helping',
  },
  {
    title: 'Hope',
    description:
      'We refuse to accept that suffering is permanent. Every project we undertake is an act of defiant, actionable hope.',
    icon: 'sun',
  },
]

// ─── Timeline ─────────────────────────────────────────

export const FOUNDATION_TIMELINE = [
  {
    year: '2018',
    title: 'The Vision is Born',
    description:
      'Founded by a group of filmmakers and social advocates who believed documentary storytelling could be the most powerful tool for humanitarian change.',
  },
  {
    year: '2019',
    title: 'First Documentary',
    description:
      'Released our debut documentary "Thirsty Ground" — a 22-minute film that raised $180,000 for clean water projects in three communities.',
  },
  {
    year: '2020',
    title: 'Church Network Launched',
    description:
      'Established our Church Partnership Program, connecting 45 local churches across East Africa as mobilization centers.',
  },
  {
    year: '2021',
    title: 'International Recognition',
    description:
      'Received the Global Impact Storytelling Award and expanded operations to Southeast Asia and Latin America.',
  },
  {
    year: '2022',
    title: 'Digital Platform Launch',
    description:
      'Launched our online streaming platform for documentary advocacy, reaching 2 million viewers across 60 countries.',
  },
  {
    year: '2023',
    title: '100,000 Lives Milestone',
    description:
      'Celebrated reaching 100,000 lives impacted through our combined water, education, and healthcare programs.',
  },
  {
    year: '2024',
    title: 'Foundation of Foundations',
    description:
      'Launched the Asaphites Fellowship — training the next generation of humanitarian storytellers from within communities.',
  },
]

// ─── Placeholder Images ──────────────────────────────

export const UNSPLASH_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80',
  heroAlt: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=80',
  whoWeAre: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
  featuredStory: 'https://images.unsplash.com/photo-1584036553516-bf83210aa16c?w=1200&q=80',
  water1: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285?w=800&q=80',
  water2: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=800&q=80',
  education1: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
  education2: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
  healthcare1: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  church1: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=800&q=80',
  community1: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
  community2: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
  team1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  team2: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  team3: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  team4: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
  donate: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&q=80',
  blog1: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
  blog2: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
  blog3: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
  about: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&q=80',
  impact: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80',
}

// ─── Partner Church Partnerships Tiers ───────────────

export const PARTNERSHIP_TIERS = [
  {
    name: 'Advocate Church',
    price: 'Free',
    description: 'Spread our stories and mobilize your congregation',
    features: [
      'Access to documentary screening kits',
      'Monthly impact newsletter',
      'Prayer partnership connection',
      'Social media resource pack',
    ],
    cta: 'Become an Advocate',
    featured: false,
  },
  {
    name: 'Mission Church',
    price: '$500/yr',
    description: 'Actively fund and participate in our projects',
    features: [
      'All Advocate benefits',
      'Co-branded campaign page',
      'Dedicated field updates',
      'Visit trip opportunities',
      'Logo on foundation website',
    ],
    cta: 'Become a Mission Church',
    featured: true,
  },
  {
    name: 'Founding Church',
    price: '$2,500/yr',
    description: 'Become a cornerstone of our global network',
    features: [
      'All Mission benefits',
      'Named project sponsorship',
      'Exclusive documentary premiere',
      'Board representation',
      'Custom impact report annually',
    ],
    cta: 'Contact Us',
    featured: false,
  },
]