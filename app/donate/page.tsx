import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import DonateHero from '@/components/sections/donate/DonateHero'
import DonateForm from '@/components/sections/donate/DonateForm'
import DonateTrust from '@/components/sections/donate/DonateTrust'

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Fund clean water, education, healthcare, and community stories. Every donation directly supports a documented, verified community need.',
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
