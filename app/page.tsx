import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import HeroSection from '@/components/sections/HeroSection'
import WhoWeAreSection from '@/components/sections/WhoWeAreSection'
import FocusAreasSection from '@/components/sections/FocusAreasSection'
import FeaturedStorySection from '@/components/sections/FeaturedStorySection'
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
      <ImpactStatsSection />
      <CTASection
        eyebrow="Get Involved"
        title="Want to support our work?"
        subtitle="We are currently in the registration process. If you would like to support our activities, partner with us, or simply learn more — we would love to hear from you."
        links={[
          { label: 'Get in Touch',    href: '/contact', variant: 'primary' },
          { label: 'Partner With Us', href: '/church',  variant: 'outline' },
        ]}
      />
    </SiteLayout>
  )
}
