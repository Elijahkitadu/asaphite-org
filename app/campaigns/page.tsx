import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import PageHero from '@/components/shared/PageHero'
import CampaignsGrid from '@/components/sections/campaigns/CampaignsGrid'
import CTASection from '@/components/sections/CTASection'
import { UNSPLASH_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Campaigns',
  description:
    'Active fundraising campaigns for clean water, education, healthcare, and church restoration. Every campaign is a documented, verified community need.',
}

export default function CampaignsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Active Campaigns"
        title="Real needs. Real communities. Real impact."
        subtitle="Every campaign begins with a documentary visit. We verify every need before we ask for a single dollar."
        image={UNSPLASH_IMAGES.water2}
        imageAlt="Community water project in progress"
      />
      <CampaignsGrid />
      <CTASection
        eyebrow="Can't Choose?"
        title="Give where it's needed most."
        subtitle="Donate to our general fund and our team will direct it to the most urgent active project."
        links={[
          { label: 'General Donation', href: '/donate', variant: 'primary' },
          { label: 'View Impact',      href: '/impact', variant: 'outline' },
        ]}
      />
    </SiteLayout>
  )
}
