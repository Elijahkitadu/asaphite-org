import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import HeroSection from '@/components/sections/HeroSection'
import WhoWeAreSection from '@/components/sections/WhoWeAreSection'
import FocusAreasSection from '@/components/sections/FocusAreasSection'
import FeaturedStorySection from '@/components/sections/FeaturedStorySection'
import CampaignsSection from '@/components/sections/CampaignsSection'
import ImpactStatsSection from '@/components/sections/ImpactStatsSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'The Asaphites Foundation — Visualizing Needs. Delivering Hope.',
  description: 'A storytelling foundation based in Tanzania, using film and photography to reveal community needs and connect them with people who can help.',
}

export default function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <WhoWeAreSection />
      <FocusAreasSection />
      <FeaturedStorySection />
      <CampaignsSection />
      <ImpactStatsSection />
      <CTASection
        eyebrow="Get Involved"
        title="We are just getting started — and we need you."
        subtitle="Whether you give $10, share a film, or partner your church — every action helps us tell more stories."
        links={[
          { label: 'Support Our Work', href: '/donate', variant: 'primary' },
          { label: 'Partner With Us',  href: '/church', variant: 'outline' },
        ]}
      />
    </SiteLayout>
  )
}
