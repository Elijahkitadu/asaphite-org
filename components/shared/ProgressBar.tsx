'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { cn, formatCurrency } from '@/lib/utils'

interface Props { raised: number; goal: number; currency?: string; showLabels?: boolean; showPercent?: boolean; className?: string }

export default function ProgressBar({ raised, goal, currency = 'USD', showLabels = true, showPercent = false, className }: Props) {
  const percent = Math.min(Math.round((raised / goal) * 100), 100)
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  return (
    <div ref={ref} className={cn('flex flex-col gap-2', className)}>
      {showLabels && (
        <div className="flex items-center justify-between text-sm">
          <span className="font-heading font-semibold text-navy-800">{formatCurrency(raised, currency)}<span className="text-gray-400 font-normal ml-1">raised</span></span>
          <span className="text-gray-400">Goal: {formatCurrency(goal, currency)}</span>
        </div>
      )}
      <div className="relative h-2 w-full rounded-full bg-gray-100 overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={inView ? { width: `${percent}%` } : { width: 0 }} transition={{ duration: 1.2, ease: [0.25,0.46,0.45,0.94], delay: 0.2 }} className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-gold-400 to-yellow-400" />
      </div>
      {showPercent && <p className="text-xs text-gray-400"><span className="font-semibold text-gold-400">{percent}%</span> funded</p>}
    </div>
  )
}
