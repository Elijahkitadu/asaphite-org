import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import AboutHero from '@/components/sections/about/AboutHero'
import MissionVision from '@/components/sections/about/MissionVision'
import CoreValues from '@/components/sections/about/CoreValues'
import FoundationTimeline from '@/components/sections/about/FoundationTimeline'
import LeadershipSection from '@/components/sections/about/LeadershipSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about The Asaphites Foundation — our mission, vision, values, and the story of how we began using film and advocacy to transform vulnerable communities.',
}

export default function AboutPage() {
  return (
    <SiteLayout>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <FoundationTimeline />
      <LeadershipSection />
      <CTASection
        eyebrow="Join the Mission"
        title="Every great story needs people willing to tell it."
        subtitle="Whether you give, partner, or simply share — you become part of ours."
        links={[
          { label: 'Partner With Us', href: '/church', variant: 'primary' },
          { label: 'Donate Today',    href: '/donate', variant: 'outline' },
        ]}
      />
    </SiteLayout>
  )
}
