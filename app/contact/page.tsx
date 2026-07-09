import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import ContactHero from '@/components/sections/contact/ContactHero'
import ContactContent from '@/components/sections/contact/ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with The Asaphites Foundation in Tanzania. We read every message personally and reply within 24–48 hours.',
}

export default function ContactPage() {
  return (
    <SiteLayout>
      <ContactHero />
      <ContactContent />
    </SiteLayout>
  )
}
