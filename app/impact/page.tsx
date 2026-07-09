import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import PageHero from '@/components/shared/PageHero'
import ImpactNumbers from '@/components/sections/impact/ImpactNumbers'
import ImpactProjects from '@/components/sections/impact/ImpactProjects'
import ImpactTransparency from '@/components/sections/impact/ImpactTransparency'
import CTASection from '@/components/sections/CTASection'
import { UNSPLASH_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Our Impact',
  description: 'Honest impact reporting from The Asaphites Foundation. Real numbers, real communities, real stories — documented from field to finish.',
}

export default function ImpactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Impact"
        title="Small numbers. Real people."
        subtitle="We are a startup. We are proud of every community we have visited and every story we have told."
        image={UNSPLASH_IMAGES.impact}
        imageAlt="Community in Tanzania"
      />
      <ImpactNumbers />
      <ImpactProjects />
      <ImpactTransparency />
      <CTASection
        eyebrow="Be Part of It"
        title="Add to the story."
        subtitle="Every donation helps us visit one more community and tell one more story."
        links={[
          { label: 'Donate Now',     href: '/donate',    variant: 'primary' },
          { label: 'View Campaigns', href: '/campaigns', variant: 'outline' },
        ]}
      />
    </SiteLayout>
  )
}
