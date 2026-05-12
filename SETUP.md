# The Asaphites Foundation — Setup Guide

## Phase 6: Sanity CMS Setup

### 1. Create a Sanity project

```bash
# Install Sanity CLI globally
npm install -g sanity@latest

# From inside your project folder
npx sanity@latest init --env

# Choose:
#   Project name: asaphites-foundation
#   Dataset:      production
#   Template:     Clean project with no predefined schemas
```

This will output your **Project ID** — copy it.

---

### 2. Configure environment variables

Edit your `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_READ_TOKEN=your_token_here
SANITY_REVALIDATE_SECRET=make_up_a_random_string
```

To get a read token:
- Go to https://sanity.io/manage
- Select your project → API → Tokens → Add API token
- Name: "Next.js Read Token", Permission: Viewer

---

### 3. Open Sanity Studio

```bash
pnpm dev
```

Visit **http://localhost:3000/studio**

You'll see the CMS with all 6 content types:
- Stories
- Campaigns
- Blog Posts
- Impact Statistics
- Team Members
- Church Partners

---

### 4. Add your first content

**Recommended order:**
1. Team Members (needed as authors for stories/posts)
2. Impact Statistics (4 stats shown on homepage)
3. Stories (at least 3, mark one as Featured)
4. Campaigns (at least 4 active, shown on homepage)
5. Blog Posts (at least 6, mark one as Featured)
6. Church Partners

---

### 5. Connect pages to live data (optional upgrade)

The pages currently use static placeholder data. To switch to live Sanity data, update each page's data source. Example for the homepage campaigns section:

**Before** (static data in component):
```tsx
const CAMPAIGNS = [ { id: 'well-1', title: '...', ... } ]
```

**After** (live from Sanity):
```tsx
// In app/page.tsx (Server Component)
import { getFeaturedCampaigns } from '@/lib/sanity'

export default async function HomePage() {
  const campaigns = await getFeaturedCampaigns()
  return (
    <SiteLayout>
      <CampaignsSection campaigns={campaigns} />
    </SiteLayout>
  )
}
```

Then update `CampaignsSection` to accept a `campaigns` prop instead of using the internal array.

---

### 6. Set up on-demand revalidation

In Sanity Studio:
- Settings → API → Webhooks → Add webhook
- URL: `https://yourdomain.com/api/revalidate?secret=YOUR_REVALIDATE_SECRET`
- Trigger on: Create, Update, Delete
- Dataset: production

Now when you publish content in Sanity, Next.js automatically regenerates only the affected pages.

---

## Phase 7: Vercel Deployment

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — The Asaphites Foundation"
git remote add origin https://github.com/yourusername/asaphites-foundation.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Framework: **Next.js** (auto-detected)
4. Add all environment variables from `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
NEXT_PUBLIC_SANITY_API_VERSION
SANITY_API_READ_TOKEN
SANITY_REVALIDATE_SECRET
NEXT_PUBLIC_SITE_URL        ← set to your actual domain
```

5. Click **Deploy**

### 3. Add your custom domain

- Vercel Dashboard → your project → Settings → Domains
- Add: `asaphitesfoundation.org`
- Update your DNS to point to Vercel's nameservers

### 4. Configure CORS in Sanity

- https://sanity.io/manage → your project → API → CORS origins
- Add: `https://asaphitesfoundation.org`
- Add: `https://yourdomain.vercel.app`

---

## Stripe Setup (Donations)

### 1. Create products in Stripe Dashboard

For each donation tier, create a Price in Stripe:
- https://dashboard.stripe.com/products
- Create product: "Community Builder — $100"
- Note the Price ID: `price_xxxxx`

### 2. Add to .env.local

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### 3. Create checkout API route

```bash
# Create app/api/checkout/route.ts
# Use Stripe's createPaymentIntent or createCheckoutSession
```

The DonateForm component is already structured to call this endpoint — just wire up the `onClick` handler on the submit button.

---

## Environment Variables Summary

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | sanity.io/manage |
| `SANITY_API_READ_TOKEN` | sanity.io/manage → API → Tokens |
| `SANITY_REVALIDATE_SECRET` | Make up any random string |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | dashboard.stripe.com |
| `STRIPE_SECRET_KEY` | dashboard.stripe.com |
| `RESEND_API_KEY` | resend.com (for contact form emails) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | analytics.google.com |

---

## Checklist Before Going Live

- [ ] Sanity project created and `.env.local` filled in
- [ ] At least 4 stories, 4 campaigns, 6 blog posts added
- [ ] 1 story and 1 blog post marked as Featured
- [ ] Impact stats added (4 minimum)
- [ ] Team members added with photos
- [ ] Stripe connected and donation form wired up
- [ ] Contact form connected to Resend or similar
- [ ] Custom domain added on Vercel
- [ ] CORS origins configured in Sanity
- [ ] Revalidation webhook set up in Sanity
- [ ] OG image added to `/public/og-image.jpg` (1200×630px)
- [ ] Favicon files added to `/public/`
