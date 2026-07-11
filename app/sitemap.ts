import { MetadataRoute } from 'next'

const BASE = 'https://theasaphitesfoundation.org'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/about`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/stories`,   lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/church`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`,      lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/contact`,   lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.6 },
  ]
}
