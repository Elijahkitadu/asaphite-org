import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import PageHero from '@/components/shared/PageHero'
import WhyPartner from '@/components/sections/church/WhyPartner'
import PartnershipTiers from '@/components/sections/church/PartnershipTiers'
import ChurchImpactStories from '@/components/sections/church/ChurchImpactStories'
import PartnerForm from '@/components/sections/church/PartnerForm'
import { UNSPLASH_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Church Partnerships',
  description: 'Partner with The Asaphites Foundation. Tanzanian churches are the backbone of their communities — join our network and help us find and tell the stories that matter.',
}

export default function ChurchPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Church Partnerships"
        title="Your church already knows the stories."
        subtitle="We have the cameras. You have the community. Let us work together."
        image={UNSPLASH_IMAGES.church1}
        imageAlt="Church community in Tanzania"
        minHeight="min-h-[55vh]"
      />
      <WhyPartner />
      <PartnershipTiers />
      <ChurchImpactStories />
      <PartnerForm />
    </SiteLayout>
  )
}
