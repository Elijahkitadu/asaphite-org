import type { Metadata } from 'next'
import Link from 'next/link'
import SiteLayout from '@/components/layout/SiteLayout'
import Button from '@/components/ui/Button'
import { ArrowLeft, FileText, Mail } from 'lucide-react'
import { SITE_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Post Coming Soon',
  description: 'This article is being prepared. Check back soon.',
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const title = params.slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

  return (
    <SiteLayout>
      <div className="min-h-screen bg-background flex items-center justify-center pt-24 pb-20">
        <div className="container-narrow text-center flex flex-col items-center gap-8">

          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gold-400/10">
            <FileText size={36} className="text-gold-400" />
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest font-heading text-gold-400">
              Article in Progress
            </p>
            <h1 className="font-heading font-bold text-navy-800 text-3xl sm:text-4xl leading-tight">
              {title}
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              This article is being written. We publish when it is ready — not before. Check back soon.
            </p>
          </div>

          <div className="w-16 h-px bg-gold-400/40" />

          <div className="flex flex-col items-center gap-3 text-sm text-gray-500">
            <p>Want to be notified when this is published?</p>
            <a
              href={`mailto:${SITE_EMAIL}?subject=Notify me: ${title}`}
              className="flex items-center gap-2 text-gold-400 font-semibold hover:underline"
            >
              <Mail size={15} />
              {SITE_EMAIL}
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/blog" variant="outline-gold" size="md" icon={<ArrowLeft size={16} />}>
              Back to Blog
            </Button>
            <Button href="/contact" variant="primary" size="md">
              Get in Touch
            </Button>
          </div>

        </div>
      </div>
    </SiteLayout>
  )
}
