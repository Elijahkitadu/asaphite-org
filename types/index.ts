export interface SanityImage {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  alt?: string
  caption?: string
  hotspot?: { x: number; y: number; height: number; width: number }
}

export interface SanitySlug { _type: 'slug'; current: string }

export type StoryCategory = 'water' | 'education' | 'healthcare' | 'churches' | 'youth' | 'community'

export interface Story {
  _id: string; _createdAt: string; title: string; slug: SanitySlug
  category: StoryCategory; excerpt: string; content: unknown[]
  coverImage: SanityImage; location: string; country: string
  publishedAt: string; featured: boolean; videoUrl?: string
  tags?: string[]; readTime?: number; author?: TeamMember
}

export type CampaignStatus = 'active' | 'completed' | 'upcoming' | 'paused'

export interface Campaign {
  _id: string; title: string; slug: SanitySlug; status: CampaignStatus
  category: StoryCategory; excerpt: string; description: unknown[]
  coverImage: SanityImage; goalAmount: number; raisedAmount: number
  currency: string; startDate: string; endDate?: string
  location: string; country: string; featured: boolean
  videoUrl?: string; updates?: CampaignUpdate[]; stripeProductId?: string
  donorCount?: number; impactStatement?: string
}

export interface CampaignUpdate { _key: string; date: string; title: string; content: string }

export interface BlogPost {
  _id: string; _createdAt: string; title: string; slug: SanitySlug
  category: string; excerpt: string; content: unknown[]
  coverImage: SanityImage; publishedAt: string; featured: boolean
  readTime?: number; author?: TeamMember; tags?: string[]
}

export interface ImpactStat {
  _id: string; label: string; value: number
  suffix?: string; prefix?: string; description?: string
  icon?: string; order: number
}

export interface TeamMember {
  _id: string; name: string; role: string; department?: string
  type: string; bio?: string; photo?: SanityImage
  email?: string; linkedin?: string; twitter?: string; order: number
}

export interface ChurchPartner {
  _id: string; name: string; denomination?: string
  location: string; country: string; logo?: SanityImage
  description?: string; tier?: string; partnerSince?: string
  contactName?: string; website?: string; featured: boolean
  impactSummary?: string
}

export type DonationFrequency = 'one-time' | 'monthly' | 'annual'

export interface DonationTier {
  amount: number; label: string; description: string
  impact: string; featured?: boolean
}

export interface NavItem {
  label: string; href: string
  children?: NavItem[]; external?: boolean
}
