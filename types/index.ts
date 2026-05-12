// ─── Core Types ───────────────────────────────────────

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface SanitySlug {
  _type: 'slug'
  current: string
}

// ─── Story ────────────────────────────────────────────

export type StoryCategory =
  | 'water'
  | 'education'
  | 'healthcare'
  | 'churches'
  | 'youth'
  | 'community'

export interface Story {
  _id: string
  _createdAt: string
  title: string
  slug: SanitySlug
  category: StoryCategory
  excerpt: string
  content: unknown[] // Portable Text
  coverImage: SanityImage
  location: string
  country: string
  publishedAt: string
  featured: boolean
  videoUrl?: string
  tags?: string[]
  author?: TeamMember
}

// ─── Campaign ─────────────────────────────────────────

export type CampaignStatus = 'active' | 'completed' | 'upcoming' | 'paused'

export interface Campaign {
  _id: string
  title: string
  slug: SanitySlug
  status: CampaignStatus
  category: StoryCategory
  excerpt: string
  description: unknown[] // Portable Text
  coverImage: SanityImage
  goalAmount: number
  raisedAmount: number
  currency: string
  startDate: string
  endDate?: string
  location: string
  country: string
  featured: boolean
  videoUrl?: string
  updates?: CampaignUpdate[]
  stripeProductId?: string
}

export interface CampaignUpdate {
  _key: string
  date: string
  title: string
  content: string
}

// ─── Blog Post ────────────────────────────────────────

export type BlogCategory =
  | 'stories'
  | 'news'
  | 'impact'
  | 'partnerships'
  | 'advocacy'
  | 'culture'

export interface BlogPost {
  _id: string
  _createdAt: string
  title: string
  slug: SanitySlug
  category: BlogCategory
  excerpt: string
  content: unknown[] // Portable Text
  coverImage: SanityImage
  publishedAt: string
  featured: boolean
  readTime?: number
  author?: TeamMember
  tags?: string[]
}

// ─── Impact Stat ──────────────────────────────────────

export interface ImpactStat {
  _id: string
  label: string
  value: number
  suffix?: string
  prefix?: string
  description?: string
  icon?: string
  order: number
}

// ─── Team Member ─────────────────────────────────────

export type TeamRole = 'leadership' | 'board' | 'staff' | 'volunteer'

export interface TeamMember {
  _id: string
  name: string
  role: string
  department?: string
  type: TeamRole
  bio?: string
  photo?: SanityImage
  email?: string
  linkedin?: string
  twitter?: string
  order: number
}

// ─── Church Partner ───────────────────────────────────

export interface ChurchPartner {
  _id: string
  name: string
  denomination?: string
  location: string
  country: string
  logo?: SanityImage
  description?: string
  partnerSince?: string
  contactName?: string
  website?: string
  featured: boolean
}

// ─── Donation ─────────────────────────────────────────

export type DonationFrequency = 'one-time' | 'monthly' | 'annual'

export interface DonationTier {
  amount: number
  label: string
  description: string
  impact: string
  featured?: boolean
}

export interface DonationFormData {
  amount: number
  customAmount?: number
  frequency: DonationFrequency
  firstName: string
  lastName: string
  email: string
  phone?: string
  campaign?: string
  anonymous?: boolean
  message?: string
}

// ─── Contact ──────────────────────────────────────────

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  type: 'general' | 'partnership' | 'media' | 'volunteer' | 'donation'
}

// ─── Navigation ──────────────────────────────────────

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
  external?: boolean
}

// ─── SEO ─────────────────────────────────────────────

export interface SEOMeta {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedAt?: string
  author?: string
}
