import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import DonateHero from '@/components/sections/donate/DonateHero'
import DonateForm from '@/components/sections/donate/DonateForm'
import DonateTrust from '@/components/sections/donate/DonateTrust'

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support The Asaphites Foundation. Every dollar goes directly to filming, travel, and production of documentary stories in Tanzania.',
}

export default function DonatePage() {
  return (
    <SiteLayout>
      <DonateHero />
      <DonateForm />
      <DonateTrust />
    </SiteLayout>
  )
}
