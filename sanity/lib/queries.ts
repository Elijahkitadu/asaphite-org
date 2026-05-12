// ─── Image fragment ────────────────────────────────────────

export const imageFragment = /* groq */`
  asset->{ _id, url, metadata { dimensions, lqip } },
  alt,
  caption,
  hotspot,
  crop
`

// ─── Author fragment ──────────────────────────────────────

export const authorFragment = /* groq */`
  name,
  role,
  "photo": photo { ${imageFragment} }
`

// ─── Stories ──────────────────────────────────────────────

export const storiesQuery = /* groq */`
  *[_type == "story"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    featured,
    excerpt,
    location,
    country,
    publishedAt,
    readTime,
    videoUrl,
    tags,
    "coverImage": coverImage { ${imageFragment} },
    "author": author-> { ${authorFragment} }
  }
`

export const featuredStoriesQuery = /* groq */`
  *[_type == "story" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    location,
    country,
    publishedAt,
    readTime,
    videoUrl,
    "coverImage": coverImage { ${imageFragment} }
  }
`

export const storiesByCategoryQuery = /* groq */`
  *[_type == "story" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    location,
    country,
    publishedAt,
    readTime,
    "coverImage": coverImage { ${imageFragment} }
  }
`

export const storyBySlugQuery = /* groq */`
  *[_type == "story" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    featured,
    excerpt,
    content,
    location,
    country,
    publishedAt,
    readTime,
    videoUrl,
    tags,
    "coverImage": coverImage { ${imageFragment} },
    "author": author-> { ${authorFragment} }
  }
`

// ─── Campaigns ────────────────────────────────────────────

export const campaignsQuery = /* groq */`
  *[_type == "campaign"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    status,
    category,
    featured,
    excerpt,
    goalAmount,
    raisedAmount,
    location,
    country,
    startDate,
    endDate,
    donorCount,
    impactStatement,
    "coverImage": coverImage { ${imageFragment} }
  }
`

export const activeCampaignsQuery = /* groq */`
  *[_type == "campaign" && status == "active"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    goalAmount,
    raisedAmount,
    location,
    country,
    endDate,
    donorCount,
    impactStatement,
    "coverImage": coverImage { ${imageFragment} }
  }
`

export const featuredCampaignsQuery = /* groq */`
  *[_type == "campaign" && status == "active"] | order(_createdAt desc)[0...4] {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    goalAmount,
    raisedAmount,
    location,
    country,
    endDate,
    donorCount,
    "coverImage": coverImage { ${imageFragment} }
  }
`

export const campaignBySlugQuery = /* groq */`
  *[_type == "campaign" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    status,
    category,
    featured,
    excerpt,
    description,
    goalAmount,
    raisedAmount,
    location,
    country,
    startDate,
    endDate,
    donorCount,
    impactStatement,
    videoUrl,
    updates,
    stripeProductId,
    "coverImage": coverImage { ${imageFragment} }
  }
`

// ─── Blog Posts ───────────────────────────────────────────

export const blogPostsQuery = /* groq */`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    featured,
    excerpt,
    publishedAt,
    readTime,
    tags,
    "coverImage": coverImage { ${imageFragment} },
    "author": author-> { ${authorFragment} }
  }
`

export const featuredBlogPostQuery = /* groq */`
  *[_type == "blogPost" && featured == true] | order(publishedAt desc)[0] {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    publishedAt,
    readTime,
    "coverImage": coverImage { ${imageFragment} },
    "author": author-> { ${authorFragment} }
  }
`

export const blogPostBySlugQuery = /* groq */`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    featured,
    excerpt,
    content,
    publishedAt,
    readTime,
    tags,
    seo,
    "coverImage": coverImage { ${imageFragment} },
    "author": author-> { ${authorFragment} }
  }
`

// ─── Impact Stats ─────────────────────────────────────────

export const impactStatsQuery = /* groq */`
  *[_type == "impactStat"] | order(order asc) {
    _id,
    label,
    value,
    suffix,
    prefix,
    description,
    icon,
    order
  }
`

// ─── Team Members ─────────────────────────────────────────

export const teamMembersQuery = /* groq */`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    department,
    type,
    bio,
    email,
    linkedin,
    twitter,
    order,
    "photo": photo { ${imageFragment} }
  }
`

export const leadershipQuery = /* groq */`
  *[_type == "teamMember" && type == "leadership"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    "photo": photo { ${imageFragment} }
  }
`

// ─── Church Partners ──────────────────────────────────────

export const churchPartnersQuery = /* groq */`
  *[_type == "churchPartner" && featured == true] | order(partnerSince desc) {
    _id,
    name,
    denomination,
    location,
    country,
    tier,
    partnerSince,
    contactName,
    website,
    impactSummary,
    "logo": logo { ${imageFragment} }
  }
`

// ─── Sitemap ──────────────────────────────────────────────

export const sitemapStoriesQuery = /* groq */`
  *[_type == "story"] { "slug": slug.current, publishedAt }
`

export const sitemapCampaignsQuery = /* groq */`
  *[_type == "campaign"] { "slug": slug.current, _updatedAt }
`

export const sitemapBlogQuery = /* groq */`
  *[_type == "blogPost"] { "slug": slug.current, publishedAt }
`
