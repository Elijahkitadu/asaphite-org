'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import ProgressBar from '@/components/shared/ProgressBar'
import CategoryBadge from '@/components/shared/CategoryBadge'
import Button from '@/components/ui/Button'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { UNSPLASH_IMAGES } from '@/lib/constants'

const CAMPAIGNS = [
  {
    id: 'dodoma-water',
    title: 'Document the Singida Water Crisis',
    category: 'water',
    location: 'Singida, Tanzania',
    image: UNSPLASH_IMAGES.water1,
    raised: 420, goal: 800,
    excerpt: 'Fund a three-day filming trip to document water access issues in four villages outside Dodoma.',
  },
  {
    id: 'dar-classrooms',
    title: 'Dar es Salaam School Stories',
    category: 'education',
    location: 'Dar es Salaam, Tanzania',
    image: UNSPLASH_IMAGES.education1,
    raised: 150, goal: 600,
    excerpt: 'A short documentary series on the state of public primary schools in three Dar es Salaam neighbourhoods.',
  },
  {
    id: 'church-voices',
    title: 'Church Voices of Tanzania',
    category: 'churches',
    location: 'Nationwide, Tanzania',
    image: UNSPLASH_IMAGES.church1,
    raised: 80, goal: 500,
    excerpt: 'Film three partner churches sharing how they serve their communities — to grow our church partner network.',
  },
]

function CampaignCard({ campaign }: { campaign: typeof CAMPAIGNS[0] }) {
  const percent = Math.min(Math.round((campaign.raised / campaign.goal) * 100), 100)
  return (
    <motion.article variants={fadeInUp}
      className="group flex flex-col rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-400">
      <Link href={`/campaigns/${campaign.id}`} className="relative aspect-video overflow-hidden block">
        <Image src={campaign.image} alt={campaign.title} fill
          className="object-cover group-hover:scale-105 transition-transform duration-600"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
        <div className="absolute inset-0 bg-card-overlay" />
        <div className="absolute top-3 left-3"><CategoryBadge category={campaign.category} /></div>
        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white/80 text-[10px]">
          <MapPin size={10} />{campaign.location}
        </div>
      </Link>
      <div className="flex flex-col gap-4 p-5 flex-1">
        <Link href={`/campaigns/${campaign.id}`}>
          <h3 className="font-heading font-semibold text-navy-800 text-base leading-snug hover:text-gold-400 transition-colors">
            {campaign.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{campaign.excerpt}</p>
        <ProgressBar raised={campaign.raised} goal={campaign.goal} showLabels showPercent />
        <Link href={`/campaigns/${campaign.id}`}
          className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold font-heading text-navy-800 hover:border-gold-400 hover:text-gold-400 transition-colors">
          Support This <ArrowRight size={14} />
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
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <SectionTitle
              eyebrow="Our Campaigns"
              title="Help us film these stories"
              subtitle="These are our current projects. Small budgets, real impact."
              align="left"
              id="campaigns-heading"
              className="max-w-xl"
            />
            <Button href="/campaigns" variant="outline-gold" size="md" iconRight={<ArrowRight size={16} />} className="shrink-0">
              All Campaigns
            </Button>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAMPAIGNS.map(c => <CampaignCard key={c.id} campaign={c} />)}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
