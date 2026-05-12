import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import ContactHero from '@/components/sections/contact/ContactHero'
import ContactContent from '@/components/sections/contact/ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with The Asaphites Foundation. Whether you want to give, partner, volunteer, or simply ask a question — we would love to hear from you.',
}

export default function ContactPage() {
  return (
    <SiteLayout>
      <ContactHero />
      <ContactContent />
    </SiteLayout>
  )
}
