'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import CategoryBadge from '@/components/shared/CategoryBadge'
import ProgressBar from '@/components/shared/ProgressBar'
import SectionTitle from '@/components/ui/SectionTitle'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { getDaysRemaining } from '@/lib/utils'
import { UNSPLASH_IMAGES } from '@/lib/constants'
import { cn } from '@/lib/utils'

const STATUS_FILTERS = [
  { id: 'all',       label: 'All Projects'  },
  { id: 'active',    label: 'Active'        },
  { id: 'completed', label: 'Completed'     },
]

const CAT_FILTERS = [
  { id: 'all',        label: 'All Categories' },
  { id: 'water',      label: 'Water'          },
  { id: 'education',  label: 'Education'      },
  { id: 'healthcare', label: 'Healthcare'     },
  { id: 'churches',   label: 'Churches'       },
  { id: 'community',  label: 'Community'      },
]

const ALL_CAMPAIGNS = [
  {
    id: 'dodoma-water',
    title: 'Document the Singida Water Crisis',
    category: 'water', status: 'active',
    location: 'Singida, Tanzania',
    image: UNSPLASH_IMAGES.water1,
    raised: 420, goal: 800, currency: 'USD',
    endDate: '2025-08-01',
    donors: 14,
    excerpt: 'Fund a three-day filming trip to document water access issues in four villages outside Singida.',
    impact: 'Four communities documented',
  },
  {
    id: 'dar-schools',
    title: 'Singida School Stories',
    category: 'education', status: 'active',
    location: 'Singida, Tanzania',
    image: UNSPLASH_IMAGES.education1,
    raised: 150, goal: 600, currency: 'USD',
    endDate: '2025-09-01',
    donors: 7,
    excerpt: 'A short documentary series on the state of public primary schools in three Singida neighbourhoods.',
    impact: 'Three schools documented',
  },
  {
    id: 'church-voices',
    title: 'Church Voices of Tanzania',
    category: 'churches', status: 'active',
    location: 'Nationwide, Tanzania',
    image: UNSPLASH_IMAGES.church1,
    raised: 80, goal: 500, currency: 'USD',
    endDate: '2025-09-15',
    donors: 5,
    excerpt: 'Film three partner churches sharing how they serve their communities — to grow our church partner network.',
    impact: 'Three churches profiled',
  },
  {
    id: 'singida-women',
    title: 'Women of the Well — Singida',
    category: 'water', status: 'active',
    location: 'Singida, Tanzania',
    image: UNSPLASH_IMAGES.water2,
    raised: 200, goal: 700, currency: 'USD',
    endDate: '2025-10-01',
    donors: 9,
    excerpt: 'A documentary following three women through the daily reality of water collection in Singida Region.',
    impact: 'One documentary film',
  },
]

function CampaignCard({ campaign }: { campaign: typeof ALL_CAMPAIGNS[0] }) {
  const daysLeft = getDaysRemaining(campaign.endDate)
  const completed = campaign.status === 'completed'

  return (
    <motion.article variants={fadeInUp}
      className="group flex flex-col rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-400">
      <Link href={`/campaigns/${campaign.id}`} className="relative aspect-video overflow-hidden block">
        <Image src={campaign.image} alt={campaign.title} fill
          className="object-cover group-hover:scale-105 transition-transform duration-600"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
        <div className="absolute inset-0 bg-card-overlay" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <CategoryBadge category={campaign.category} />
          {completed && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold font-heading">
              <CheckCircle2 size={9} /> Funded
            </span>
          )}
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="flex items-center gap-1 text-white/80 text-[10px]"><MapPin size={10} />{campaign.location}</span>
          <span className="text-white/70 text-[10px]">{campaign.donors} donors</span>
        </div>
      </Link>

      <div className="flex flex-col gap-4 p-5 flex-1">
        <Link href={`/campaigns/${campaign.id}`}>
          <h3 className="font-heading font-semibold text-navy-800 text-base leading-snug hover:text-gold-400 transition-colors">{campaign.title}</h3>
        </Link>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{campaign.excerpt}</p>
        <p className="text-xs text-hope-700 font-semibold font-heading">✓ {campaign.impact}</p>
        <ProgressBar raised={campaign.raised} goal={campaign.goal} showLabels showPercent />
        <div className="flex items-center justify-between pt-1">
          {!completed && daysLeft !== null && (
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Clock size={11} />{daysLeft > 0 ? `${daysLeft} days left` : 'Ending soon'}
            </span>
          )}
          {completed && <span className="text-xs text-green-600 font-semibold">✓ Goal reached</span>}
          <Link href={`/campaigns/${campaign.id}`}
            className={cn('flex items-center gap-1.5 text-xs font-semibold font-heading hover:gap-2.5 transition-all duration-200',
              completed ? 'text-gray-400' : 'text-gold-400')}>
            {completed ? 'View Film' : 'Support'} <ArrowRight size={12} />
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

  return (
    <section className="section-py bg-background" aria-label="Campaigns listing">
      <div className="container-site">
        <div className="flex flex-col gap-10">

          {/* Honest stats bar */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
            className="grid grid-cols-3 gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-card">
            {[
              { label: 'Active Campaigns',   value: ALL_CAMPAIGNS.filter(c => c.status === 'active').length },
              { label: 'Completed',          value: ALL_CAMPAIGNS.filter(c => c.status === 'completed').length },
              { label: 'Total Donors So Far',value: ALL_CAMPAIGNS.reduce((a, c) => a + c.donors, 0) },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                <p className="font-heading font-bold text-navy-800 text-2xl sm:text-3xl">{stat.value}</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by status">
              {STATUS_FILTERS.map(f => (
                <button key={f.id} onClick={() => setStatus(f.id)} aria-pressed={status === f.id}
                  className={cn('px-4 py-2 rounded-full text-sm font-semibold font-heading border transition-all',
                    status === f.id ? 'bg-navy-800 text-white border-navy-800' : 'bg-white text-gray-500 border-gray-200 hover:border-navy-800 hover:text-navy-800')}>
                  {f.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              {CAT_FILTERS.map(f => (
                <button key={f.id} onClick={() => setCategory(f.id)} aria-pressed={category === f.id}
                  className={cn('px-4 py-2 rounded-full text-sm font-semibold font-heading border transition-all',
                    category === f.id ? 'bg-gold-400 text-navy-800 border-gold-400' : 'bg-white text-gray-500 border-gray-200 hover:border-gold-400 hover:text-gold-400')}>
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-live="polite">
            {filtered.map(c => <CampaignCard key={c.id} campaign={c} />)}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="font-heading text-lg">No campaigns match this filter.</p>
              <button onClick={() => { setStatus('all'); setCategory('all') }} className="mt-4 text-gold-400 text-sm font-semibold underline">Clear filters</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
