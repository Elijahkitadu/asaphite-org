import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import Button from '@/components/ui/Button'
import { ArrowLeft, Film, Mail } from 'lucide-react'
import { SITE_EMAIL } from '@/lib/constants'

export const metadata: Metadata = { title: 'Story Coming Soon' }

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const title = slug
    .split('-')
    .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

  return (
    <SiteLayout>
      <div className="min-h-screen bg-background flex items-center justify-center pt-24 pb-20">
        <div className="container-narrow text-center flex flex-col items-center gap-8">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gold-400/10">
            <Film size={36} className="text-gold-400" />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest font-heading text-gold-400">Story in Progress</p>
            <h1 className="font-heading font-bold text-navy-800 text-3xl sm:text-4xl leading-tight">{title}</h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">We are still working on bringing this story to you in full. Our team is in the field — editing, writing, and getting it right.</p>
          </div>
          <div className="w-16 h-px bg-gold-400/40" />
          <div className="flex flex-col items-center gap-3 text-sm text-gray-500">
            <p>Want to be notified when this story is published?</p>
            <a href={`mailto:${SITE_EMAIL}?subject=Notify me: ${title}`} className="flex items-center gap-2 text-gold-400 font-semibold hover:underline">
              <Mail size={15} />{SITE_EMAIL}
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/stories" variant="outline-gold" size="md" icon={<ArrowLeft size={16} />}>Back to Stories</Button>
            <Button href="/contact" variant="primary" size="md">Get in Touch</Button>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
