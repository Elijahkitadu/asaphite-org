'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Clock, ArrowRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import ProgressBar from '@/components/shared/ProgressBar'
import CategoryBadge from '@/components/shared/CategoryBadge'
import Button from '@/components/ui/Button'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { formatCurrency, getDaysRemaining } from '@/lib/utils'
import { UNSPLASH_IMAGES } from '@/lib/constants'

const CAMPAIGNS = [
  {
    id: 'well-1',
    title: 'Drill a Community Well',
    category: 'water',
    location: 'Kajiado, Kenya',
    image: UNSPLASH_IMAGES.water1,
    raised: 18400,
    goal: 25000,
    endDate: '2025-03-15',
    excerpt: 'Bringing clean water to 800 families in Kajiado\'s most remote villages.',
  },
  {
    id: 'classroom-1',
    title: 'Renovate Rural Classrooms',
    category: 'education',
    location: 'Kampala, Uganda',
    image: UNSPLASH_IMAGES.education1,
    raised: 9200,
    goal: 15000,
    endDate: '2025-04-01',
    excerpt: 'Rebuilding four crumbling classrooms for 160 primary school students.',
  },
  {
    id: 'church-1',
    title: 'Restore a Local Church Roof',
    category: 'churches',
    location: 'Nairobi, Kenya',
    image: UNSPLASH_IMAGES.church1,
    raised: 6800,
    goal: 10000,
    endDate: '2025-02-28',
    excerpt: 'A 70-year-old church serves 400 families — but the roof is collapsing.',
  },
  {
    id: 'health-1',
    title: 'Community Health Outreach',
    category: 'healthcare',
    location: 'Accra, Ghana',
    image: UNSPLASH_IMAGES.healthcare1,
    raised: 12100,
    goal: 20000,
    endDate: '2025-05-01',
    excerpt: 'Mobile medical clinics reaching 2,000 unserved residents in peri-urban Ghana.',
  },
]

function CampaignCard({ campaign }: { campaign: typeof CAMPAIGNS[0] }) {
  const daysLeft = getDaysRemaining(campaign.endDate)
  const percent  = Math.min(Math.round((campaign.raised / campaign.goal) * 100), 100)

  return (
    <motion.article
      variants={fadeInUp}
      className="group flex flex-col rounded-2xl bg-white border border-gray-100
                 overflow-hidden shadow-card hover:shadow-card-hover
                 hover:-translate-y-1.5 transition-all duration-400"
    >
      {/* Image */}
      <Link href={`/campaigns/${campaign.id}`} className="relative aspect-[16/10] overflow-hidden block">
        <Image
          src={campaign.image}
          alt={campaign.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-600"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-card-overlay" />

        {/* Category + location */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <CategoryBadge category={campaign.category} />
          <span className="flex items-center gap-1 text-white/80 text-[10px]">
            <MapPin size={10} aria-hidden="true" />
            {campaign.location}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col gap-4 p-5 flex-1">
        <div className="flex flex-col gap-2 flex-1">
          <Link href={`/campaigns/${campaign.id}`}>
            <h3 className="font-heading font-semibold text-navy-800 text-base
                           leading-snug hover:text-gold-400 transition-colors">
              {campaign.title}
            </h3>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed">
            {campaign.excerpt}
          </p>
        </div>

        {/* Progress */}
        <ProgressBar
          raised={campaign.raised}
          goal={campaign.goal}
          showLabels
        />

        {/* Footer meta */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-xs font-semibold text-gold-400 font-heading">
            {percent}% funded
          </span>
          {daysLeft !== null && (
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Clock size={11} aria-hidden="true" />
              {daysLeft > 0 ? `${daysLeft} days left` : 'Ended'}
            </span>
          )}
        </div>

        <Link
          href={`/campaigns/${campaign.id}`}
          className="mt-auto flex items-center justify-center gap-2
                     py-2.5 rounded-xl border border-gray-200 text-sm font-semibold
                     text-navy-800 font-heading hover:border-gold-400 hover:text-gold-400
                     transition-colors duration-200"
        >
          Support This Campaign
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  )
}

export default function CampaignsSection() {
  return (
    <section className="section-py bg-background" aria-labelledby="campaigns-heading">
      <div className="container-site">
        <div className="flex flex-col gap-12">

          <div className="flex flex-col sm:flex-row items-start sm:items-end
                          justify-between gap-6">
            <SectionTitle
              eyebrow="Active Campaigns"
              title="Projects that need your support"
              subtitle="Every campaign is a real community, a real need — documented by our team."
              align="left"
              id="campaigns-heading"
              className="max-w-xl"
            />
            <Button
              href="/campaigns"
              variant="outline-gold"
              size="md"
              iconRight={<ArrowRight size={16} />}
              className="shrink-0"
            >
              All Campaigns
            </Button>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {CAMPAIGNS.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
