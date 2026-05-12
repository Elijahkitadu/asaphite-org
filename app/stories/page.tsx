import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import PageHero from '@/components/shared/PageHero'
import StoriesGrid from '@/components/sections/stories/StoriesGrid'
import CTASection from '@/components/sections/CTASection'
import { UNSPLASH_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Stories',
  description:
    'Documentary stories from communities across the world — water, education, healthcare, churches, and youth. Every story is a real person waiting to be seen.',
}

export default function StoriesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Stories"
        title="Every frame is a life. Every story is a door."
        subtitle="We go where cameras rarely go and tell the stories that need to be heard."
        image={UNSPLASH_IMAGES.community2}
        imageAlt="Documentary crew with community members"
      />
      <StoriesGrid />
      <CTASection
        eyebrow="Be the Change"
        title="A story without action is just a memory."
        subtitle="Fund a project, share a film, or partner with us to create the next story."
        links={[
          { label: 'Support a Campaign', href: '/campaigns', variant: 'primary' },
          { label: 'Partner With Us',    href: '/church',    variant: 'outline' },
        ]}
      />
    </SiteLayout>
  )
}
