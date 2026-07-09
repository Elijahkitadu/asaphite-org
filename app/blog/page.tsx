import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import PageHero from '@/components/shared/PageHero'
import BlogGrid from '@/components/sections/blog/BlogGrid'
import { UNSPLASH_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Field notes, updates, and reflections from The Asaphites Foundation team in Tanzania.',
}

export default function BlogPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Field Notes"
        title="Dispatches from Tanzania."
        subtitle="Our team writes from the field, the editing room, and the communities we serve."
        image={UNSPLASH_IMAGES.blog1}
        imageAlt="Our team in the field"
        minHeight="min-h-[45vh]"
      />
      <BlogGrid />
    </SiteLayout>
  )
}
