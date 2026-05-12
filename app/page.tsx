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
  description:
    'Through storytelling, film, and advocacy, we connect underserved communities with people who can create lasting change.',
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
        eyebrow="Take Action"
        title="Be the reason a community is seen."
        subtitle="Partner with us, fund a project, or simply share a story. Every action creates a ripple of hope."
        links={[
          { label: 'Partner With Us', href: '/church',  variant: 'primary'  },
          { label: 'Donate Today',    href: '/donate',  variant: 'outline'  },
        ]}
      />
    </SiteLayout>
  )
}
