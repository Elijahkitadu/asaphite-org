'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Clock, Target, Users, ArrowRight, CheckCircle2 } from 'lucide-react'
import CategoryBadge from '@/components/shared/CategoryBadge'
import ProgressBar from '@/components/shared/ProgressBar'
import Button from '@/components/ui/Button'
import SectionTitle from '@/components/ui/SectionTitle'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { formatCurrency, getDaysRemaining } from '@/lib/utils'
import { UNSPLASH_IMAGES } from '@/lib/constants'
import { cn } from '@/lib/utils'

const STATUS_FILTERS = [
  { id: 'all',       label: 'All Projects' },
  { id: 'active',    label: 'Active' },
  { id: 'completed', label: 'Completed' },
]

const CAT_FILTERS = [
  { id: 'all',        label: 'All Categories' },
  { id: 'water',      label: 'Water' },
  { id: 'education',  label: 'Education' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'churches',   label: 'Churches' },
]

const ALL_CAMPAIGNS = [
  {
    id: 'well-kajiado',
    title: 'Drill a Community Well',
    category: 'water',
    status: 'active',
    location: 'Kajiado, Kenya',
    image: UNSPLASH_IMAGES.water1,
    raised: 18400, goal: 25000, currency: 'USD',
    endDate: '2025-03-15',
    donors: 142,
    excerpt: 'Bringing clean water to 800 families in Kajiado\'s most remote villages through a solar-powered borehole.',
    impact: '800 families served',
  },
  {
    id: 'classrooms-gulu',
    title: 'Renovate Rural Classrooms',
    category: 'education',
    status: 'active',
    location: 'Gulu, Uganda',
    image: UNSPLASH_IMAGES.education1,
    raised: 9200, goal: 15000, currency: 'USD',
    endDate: '2025-04-01',
    donors: 78,
    excerpt: 'Rebuilding four crumbling classrooms for 160 primary school students who currently study in dangerous conditions.',
    impact: '160 students impacted',
  },
  {
    id: 'church-nairobi',
    title: 'Restore a Local Church Roof',
    category: 'churches',
    status: 'active',
    location: 'Nairobi, Kenya',
    image: UNSPLASH_IMAGES.church1,
    raised: 6800, goal: 10000, currency: 'USD',
    endDate: '2025-02-28',
    donors: 54,
    excerpt: 'A 70-year-old church serves 400 families as a community center — but the collapsing roof threatens everything.',
    impact: '400 families served',
  },
  {
    id: 'health-accra',
    title: 'Community Health Outreach',
    category: 'healthcare',
    status: 'active',
    location: 'Accra, Ghana',
    image: UNSPLASH_IMAGES.healthcare1,
    raised: 12100, goal: 20000, currency: 'USD',
    endDate: '2025-05-01',
    donors: 98,
    excerpt: 'Mobile medical clinics reaching 2,000 unserved residents in peri-urban Ghana with screenings and medications.',
    impact: '2,000 patients reached',
  },
  {
    id: 'water-turkana',
    title: 'Turkana Water Initiative',
    category: 'water',
    status: 'completed',
    location: 'Turkana, Kenya',
    image: UNSPLASH_IMAGES.water2,
    raised: 30000, goal: 30000, currency: 'USD',
    endDate: '2024-12-01',
    donors: 231,
    excerpt: 'Completed: Three solar-powered water points now serve 1,200 people in one of Kenya\'s most arid regions.',
    impact: '1,200 people with clean water',
  },
  {
    id: 'school-karamoja',
    title: 'Karamoja Classroom Project',
    category: 'education',
    status: 'completed',
    location: 'Karamoja, Uganda',
    image: UNSPLASH_IMAGES.education2,
    raised: 18000, goal: 18000, currency: 'USD',
    endDate: '2024-11-15',
    donors: 167,
    excerpt: 'Completed: Six new classrooms built, 240 students now learning in safe, permanent structures.',
    impact: '240 students in new classrooms',
  },
]

function CampaignCard({ campaign }: { campaign: typeof ALL_CAMPAIGNS[0] }) {
  const daysLeft  = getDaysRemaining(campaign.endDate)
  const completed = campaign.status === 'completed'

  return (
    <motion.article
      variants={fadeInUp}
      className="group flex flex-col rounded-2xl bg-white border border-gray-100
                 overflow-hidden shadow-card hover:shadow-card-hover
                 hover:-translate-y-1.5 transition-all duration-400"
    >
      {/* Image */}
      <Link href={`/campaigns/${campaign.id}`} className="relative aspect-[16/9] overflow-hidden block">
        <Image
          src={campaign.image}
          alt={campaign.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-600"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-card-overlay" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <CategoryBadge category={campaign.category} />
          {completed && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full
                             bg-green-100 text-green-700 text-[10px] font-bold font-heading">
              <CheckCircle2 size={9} /> Funded
            </span>
          )}
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="flex items-center gap-1 text-white/80 text-[10px]">
            <MapPin size={10} /> {campaign.location}
          </span>
          <span className="flex items-center gap-1 text-white/80 text-[10px]">
            <Users size={10} /> {campaign.donors} donors
          </span>
        </div>
      </Link>

      {/* Body */}
      <div className="flex flex-col gap-4 p-5 flex-1">
        <Link href={`/campaigns/${campaign.id}`}>
          <h3 className="font-heading font-semibold text-navy-800 text-base leading-snug
                         hover:text-gold-400 transition-colors">
            {campaign.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{campaign.excerpt}</p>

        {/* Impact badge */}
        <div className="flex items-center gap-2 text-xs text-hope-600 font-semibold font-heading">
          <Target size={12} className="text-hope-500" aria-hidden="true" />
          {campaign.impact}
        </div>

        {/* Progress */}
        <ProgressBar raised={campaign.raised} goal={campaign.goal} showLabels showPercent />

        {/* Footer */}
        <div className="flex items-center justify-between pt-1">
          {!completed && daysLeft !== null && (
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Clock size={11} /> {daysLeft > 0 ? `${daysLeft} days left` : 'Ending soon'}
            </span>
          )}
          {completed && (
            <span className="text-xs text-green-600 font-semibold">
              ✓ Goal reached
            </span>
          )}
          <Link
            href={`/campaigns/${campaign.id}`}
            className={cn(
              'flex items-center gap-1.5 text-xs font-semibold font-heading',
              'hover:gap-2.5 transition-all duration-200',
              completed ? 'text-gray-400' : 'text-gold-400'
            )}
          >
            {completed ? 'View Results' : 'Donate'}
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export default function CampaignsGrid() {
  const [status,   setStatus]   = useState('all')
  const [category, setCategory] = useState('all')

  const filtered = ALL_CAMPAIGNS
    .filter(c => status   === 'all' || c.status   === status)
    .filter(c => category === 'all' || c.category === category)

  const activeCount    = ALL_CAMPAIGNS.filter(c => c.status === 'active').length
  const completedCount = ALL_CAMPAIGNS.filter(c => c.status === 'completed').length

  return (
    <section className="section-py bg-background" aria-label="Campaigns listing">
      <div className="container-site">
        <div className="flex flex-col gap-10">

          {/* Stats bar */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-3 gap-4 p-6 rounded-2xl bg-white
                       border border-gray-100 shadow-card"
          >
            {[
              { label: 'Active Campaigns',    value: activeCount },
              { label: 'Completed Projects',  value: completedCount },
              { label: 'Total Campaigns',     value: ALL_CAMPAIGNS.length },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                <p className="font-heading font-bold text-navy-800 text-2xl sm:text-3xl">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by status">
              {STATUS_FILTERS.map(f => (
                <button
                  key={f.id}
                  onClick={() => setStatus(f.id)}
                  aria-pressed={status === f.id}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-semibold font-heading border transition-all',
                    status === f.id
                      ? 'bg-navy-800 text-white border-navy-800'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-navy-800 hover:text-navy-800'
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              {CAT_FILTERS.map(f => (
                <button
                  key={f.id}
                  onClick={() => setCategory(f.id)}
                  aria-pressed={category === f.id}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-semibold font-heading border transition-all',
                    category === f.id
                      ? 'bg-gold-400 text-navy-800 border-gold-400'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-gold-400 hover:text-gold-400'
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            aria-live="polite"
          >
            {filtered.map(c => <CampaignCard key={c.id} campaign={c} />)}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="font-heading text-lg">No campaigns match this filter.</p>
              <button
                onClick={() => { setStatus('all'); setCategory('all') }}
                className="mt-4 text-gold-400 text-sm font-semibold underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
