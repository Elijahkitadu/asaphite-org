'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Droplets, BookOpen, HeartPulse, Building2, ArrowRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { FOCUS_AREAS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const ICONS: Record<string, React.ReactNode> = {
  droplets: <Droplets size={28} />, 'book-open': <BookOpen size={28} />,
  'heart-pulse': <HeartPulse size={28} />, 'building-2': <Building2 size={28} />,
}
const COLOR_MAP: Record<string, { icon: string; border: string; hover: string }> = {
  blue:   { icon: 'bg-blue-100 text-blue-600',   border: 'border-blue-100',   hover: 'group-hover:bg-blue-600 group-hover:text-white'   },
  gold:   { icon: 'bg-yellow-100 text-yellow-600',border: 'border-yellow-100', hover: 'group-hover:bg-yellow-500 group-hover:text-white' },
  green:  { icon: 'bg-green-100 text-green-600',  border: 'border-green-100',  hover: 'group-hover:bg-green-600 group-hover:text-white'  },
  purple: { icon: 'bg-purple-100 text-purple-600',border: 'border-purple-100', hover: 'group-hover:bg-purple-600 group-hover:text-white' },
}

export default function FocusAreasSection() {
  return (
    <section className="section-py bg-background relative overflow-hidden" aria-labelledby="focus-areas-heading">
      <div className="absolute inset-0 bg-grid-pattern opacity-60" aria-hidden="true" />
      <div className="container-site relative">
        <div className="flex flex-col items-center gap-12">
          <SectionTitle eyebrow="What We Do" title="Four areas we focus on" subtitle="Everything we document falls within one of these — each chosen because storytelling can unlock real change." id="focus-areas-heading" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {FOCUS_AREAS.map((area, i) => {
              const colors = COLOR_MAP[area.color] ?? COLOR_MAP.blue
              return (
                <motion.div key={area.id} variants={fadeInUp} custom={i}>
                  <Link href={area.href} className={cn('group flex flex-col gap-5 p-6 rounded-2xl border h-full bg-white transition-all duration-400 hover:shadow-card-hover hover:-translate-y-1.5', colors.border)}>
                    <div className={cn('flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-300', colors.icon, colors.hover)} aria-hidden="true">{ICONS[area.icon]}</div>
                    <div className="flex flex-col gap-2 flex-1">
                      <h3 className="font-heading font-semibold text-navy-800 text-lg group-hover:text-gold-400 transition-colors duration-300">{area.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1">{area.description}</p>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-xs font-semibold text-gold-400 font-heading">{area.stat}</span>
                      <ArrowRight size={16} className="text-gray-300 group-hover:text-gold-400 group-hover:translate-x-1 transition-all duration-300" aria-hidden="true" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
