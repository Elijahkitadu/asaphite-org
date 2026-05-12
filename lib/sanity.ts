import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImage } from '@/types'
import type { Story, Campaign, BlogPost, ImpactStat, TeamMember, ChurchPartner } from '@/types'
import {
  storiesQuery, featuredStoriesQuery, storiesByCategoryQuery, storyBySlugQuery,
  campaignsQuery, activeCampaignsQuery, featuredCampaignsQuery, campaignBySlugQuery,
  blogPostsQuery, featuredBlogPostQuery, blogPostBySlugQuery,
  impactStatsQuery, teamMembersQuery, leadershipQuery, churchPartnersQuery,
  sitemapStoriesQuery, sitemapCampaignsQuery, sitemapBlogQuery,
} from '@/sanity/lib/queries'

export const sanityClient = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  useCdn:     process.env.NODE_ENV === 'production',
  token:      process.env.SANITY_API_READ_TOKEN,
  perspective: 'published',
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImage) {
  return builder.image(source)
}

export function urlForImage(source: SanityImage, width = 800): string {
  return builder.image(source).width(width).auto('format').quality(80).url()
}

export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query:       string
  params?:     Record<string, unknown>
  revalidate?: number | false
  tags?:       string[]
}): Promise<T> {
  return sanityClient.fetch<T>(query, params, {
    next: {
      revalidate: revalidate === false ? undefined : revalidate,
      tags,
    },
  })
}

export async function getAllStories()                        { return sanityFetch<Story[]>({ query: storiesQuery, tags: ['story'] }) }
export async function getFeaturedStories()                  { return sanityFetch<Story[]>({ query: featuredStoriesQuery, tags: ['story'] }) }
export async function getStoriesByCategory(category: string){ return sanityFetch<Story[]>({ query: storiesByCategoryQuery, params: { category }, tags: ['story'] }) }
export async function getStoryBySlug(slug: string)          { return sanityFetch<Story | null>({ query: storyBySlugQuery, params: { slug }, tags: [`story-${slug}`] }) }

export async function getAllCampaigns()                      { return sanityFetch<Campaign[]>({ query: campaignsQuery, revalidate: 30, tags: ['campaign'] }) }
export async function getActiveCampaigns()                  { return sanityFetch<Campaign[]>({ query: activeCampaignsQuery, revalidate: 30, tags: ['campaign'] }) }
export async function getFeaturedCampaigns()                { return sanityFetch<Campaign[]>({ query: featuredCampaignsQuery, revalidate: 30, tags: ['campaign'] }) }
export async function getCampaignBySlug(slug: string)       { return sanityFetch<Campaign | null>({ query: campaignBySlugQuery, params: { slug }, tags: [`campaign-${slug}`] }) }

export async function getAllBlogPosts()                      { return sanityFetch<BlogPost[]>({ query: blogPostsQuery, revalidate: 120, tags: ['blogPost'] }) }
export async function getFeaturedBlogPost()                 { return sanityFetch<BlogPost | null>({ query: featuredBlogPostQuery, revalidate: 120, tags: ['blogPost'] }) }
export async function getBlogPostBySlug(slug: string)       { return sanityFetch<BlogPost | null>({ query: blogPostBySlugQuery, params: { slug }, tags: [`blogPost-${slug}`] }) }

export async function getImpactStats()                      { return sanityFetch<ImpactStat[]>({ query: impactStatsQuery, revalidate: 3600, tags: ['impactStat'] }) }
export async function getLeadership()                       { return sanityFetch<TeamMember[]>({ query: leadershipQuery, revalidate: 3600, tags: ['teamMember'] }) }
export async function getAllTeamMembers()                    { return sanityFetch<TeamMember[]>({ query: teamMembersQuery, revalidate: 3600, tags: ['teamMember'] }) }
export async function getChurchPartners()                   { return sanityFetch<ChurchPartner[]>({ query: churchPartnersQuery, revalidate: 3600, tags: ['churchPartner'] }) }

export async function getSitemapStories()  { return sanityFetch<{slug:string;publishedAt:string}[]>({ query: sitemapStoriesQuery, revalidate: false }) }
export async function getSitemapCampaigns(){ return sanityFetch<{slug:string;_updatedAt:string}[]>({ query: sitemapCampaignsQuery, revalidate: false }) }
export async function getSitemapBlog()     { return sanityFetch<{slug:string;publishedAt:string}[]>({ query: sitemapBlogQuery, revalidate: false }) }
