'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { MapPin, Film, Heart, Building2, Users, Globe, Droplets } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fadeInUp } from '@/lib/animations'

const ICONS: Record<string, React.ReactNode> = {
  'map-pin': <MapPin size={28} />, 'film': <Film size={28} />, 'heart': <Heart size={28} />,
  'building': <Building2 size={28} />, 'users': <Users size={28} />, 'globe': <Globe size={28} />, 'droplets': <Droplets size={28} />,
}

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0)
  const started = useRef(false)
  useEffect(() => {
    if (!active || started.current) return
    started.current = true
    const startTime = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])
  return count
}

interface Props { value: number; label: string; suffix?: string; prefix?: string; description?: string; icon?: string; light?: boolean; duration?: number; className?: string }

export default function AnimatedCounter({ value, label, suffix = '', prefix = '', description, icon, light = false, duration = 2200, className }: Props) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const count = useCountUp(value, duration, inView)
  const display = count >= 1000 ? `${Math.floor(count / 1000)}K` : count.toLocaleString()

  return (
    <motion.div ref={ref} variants={fadeInUp} className={cn('flex flex-col items-center text-center gap-3 p-6', className)}>
      {icon && ICONS[icon] && (
        <div className={cn('flex items-center justify-center w-16 h-16 rounded-full mb-1 transition-transform duration-300 hover:scale-110', light ? 'bg-white/10 text-gold-400' : 'bg-gold-400/10 text-gold-400')}>
          {ICONS[icon]}
        </div>
      )}
      <div className={cn('font-heading font-bold leading-none tabular-nums text-4xl sm:text-5xl lg:text-6xl', light ? 'text-white' : 'text-navy-800')}>
        {prefix}{display}{suffix && <span className="text-gold-400">{suffix}</span>}
      </div>
      <p className={cn('font-heading font-semibold text-base sm:text-lg', light ? 'text-white/90' : 'text-navy-700')}>{label}</p>
      {description && <p className={cn('text-sm leading-relaxed', light ? 'text-white/55' : 'text-gray-400')}>{description}</p>}
    </motion.div>
  )
}
