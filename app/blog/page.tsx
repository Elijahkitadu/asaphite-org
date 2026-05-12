import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import PageHero from '@/components/shared/PageHero'
import BlogGrid from '@/components/sections/blog/BlogGrid'
import { UNSPLASH_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Field notes, advocacy updates, and stories of hope from The Asaphites Foundation team.',
}

export default function BlogPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Field Notes"
        title="Dispatches from the frontlines of hope."
        subtitle="Our team writes from the field, the editing room, and the communities we serve."
        image={UNSPLASH_IMAGES.blog1}
        imageAlt="Writer in the field"
        minHeight="min-h-[50vh]"
      />
      <BlogGrid />
    </SiteLayout>
  )
}
