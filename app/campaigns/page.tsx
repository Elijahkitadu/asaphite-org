import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import PageHero from '@/components/shared/PageHero'
import CampaignsGrid from '@/components/sections/campaigns/CampaignsGrid'
import CTASection from '@/components/sections/CTASection'
import { UNSPLASH_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Campaigns',
  description: 'Active fundraising campaigns to fund documentary projects across Tanzania. Every campaign is a real community, a real story waiting to be told.',
}

export default function CampaignsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Active Campaigns"
        title="Help us film these stories."
        subtitle="Every campaign begins with a community visit. We verify every need before we ask for a single dollar."
        image={UNSPLASH_IMAGES.water2}
        imageAlt="Community in Tanzania"
      />
      <CampaignsGrid />
      <CTASection
        eyebrow="Not Sure?"
        title="Give where it is needed most."
        subtitle="Donate to our general fund and we will direct it to the most urgent active project."
        links={[
          { label: 'General Donation', href: '/donate', variant: 'primary' },
          { label: 'Learn More',       href: '/about',  variant: 'outline' },
        ]}
      />
    </SiteLayout>
  )
}
