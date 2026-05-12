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
  description:
    'Partner with The Asaphites Foundation. Churches are the most powerful mobilization hubs in any community — join our global network and activate your congregation for lasting change.',
}

export default function ChurchPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Church Partnerships"
        title="Your church is already a force for change."
        subtitle="We give you the stories, tools, and network to activate it."
        image={UNSPLASH_IMAGES.church1}
        imageAlt="Church community gathering"
        minHeight="min-h-[60vh]"
      />
      <WhyPartner />
      <PartnershipTiers />
      <ChurchImpactStories />
      <PartnerForm />
    </SiteLayout>
  )
}
