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
  description:
    'Transparent impact reporting from The Asaphites Foundation. Real numbers, real communities, real change — documented from field to finish.',
}

export default function ImpactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Impact"
        title="Every number has a name behind it."
        subtitle="We believe radical transparency is the foundation of lasting trust. Here is what your support has built."
        image={UNSPLASH_IMAGES.impact}
        imageAlt="Community members at a completed water project"
      />
      <ImpactNumbers />
      <ImpactProjects />
      <ImpactTransparency />
      <CTASection
        eyebrow="Add to the Story"
        title="The next number is waiting to be written."
        subtitle="Every donation adds to a story of real, documented, lasting change."
        links={[
          { label: 'Donate Now',        href: '/donate',    variant: 'primary' },
          { label: 'View Campaigns',    href: '/campaigns', variant: 'outline' },
        ]}
      />
    </SiteLayout>
  )
}
