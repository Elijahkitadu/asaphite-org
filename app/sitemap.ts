import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { getSitemapStories, getSitemapCampaigns, getSitemapBlog } from '@/lib/sanity'

export const revalidate = 3600 // regenerate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl,                   lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/about`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/stories`,      lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9 },
    { url: `${baseUrl}/campaigns`,    lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9 },
    { url: `${baseUrl}/church`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/impact`,       lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${baseUrl}/blog`,         lastModified: new Date(), changeFrequency: 'daily',   priority: 0.8 },
    { url: `${baseUrl}/donate`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/contact`,      lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.5 },
  ]

  // Dynamic pages — fall back gracefully if Sanity isn't configured yet
  let storyPages:    MetadataRoute.Sitemap = []
  let campaignPages: MetadataRoute.Sitemap = []
  let blogPages:     MetadataRoute.Sitemap = []

  try {
    const [stories, campaigns, posts] = await Promise.all([
      getSitemapStories(),
      getSitemapCampaigns(),
      getSitemapBlog(),
    ])

    storyPages = stories.map(s => ({
      url:          `${baseUrl}/stories/${s.slug}`,
      lastModified: new Date(s.publishedAt),
      changeFrequency: 'monthly' as const,
      priority:     0.7,
    }))

    campaignPages = campaigns.map(c => ({
      url:          `${baseUrl}/campaigns/${c.slug}`,
      lastModified: new Date(c._updatedAt),
      changeFrequency: 'weekly' as const,
      priority:     0.8,
    }))

    blogPages = posts.map(p => ({
      url:          `${baseUrl}/blog/${p.slug}`,
      lastModified: new Date(p.publishedAt),
      changeFrequency: 'monthly' as const,
      priority:     0.6,
    }))
  } catch {
    // Sanity not configured yet — skip dynamic pages
  }

  return [...staticPages, ...storyPages, ...campaignPages, ...blogPages]
}
