'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp, staggerContainer, viewport } from '@/lib/animations'

interface SectionTitleProps {
  eyebrow?:   string
  title:      string
  subtitle?:  string
  align?:     'left' | 'center' | 'right'
  light?:     boolean       // white text (for dark backgrounds)
  className?: string
  titleClassName?: string
  maxWidth?:  string
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align     = 'center',
  light     = false,
  className,
  titleClassName,
  maxWidth  = 'max-w-2xl',
}: SectionTitleProps) {
  const alignClass = {
    left:   'items-start text-left',
    center: 'items-center text-center',
    right:  'items-end text-right',
  }[align]

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={cn('flex flex-col gap-3', alignClass, maxWidth, className)}
    >
      {eyebrow && (
        <motion.span
          variants={fadeInUp}
          className={cn(
            'inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]',
            'font-heading',
            light ? 'text-gold-400' : 'text-gold-400'
          )}
        >
          {/* Gold accent dash */}
          <span className="block h-px w-6 bg-gold-400" />
          {eyebrow}
          <span className="block h-px w-6 bg-gold-400" />
        </motion.span>
      )}

      <motion.h2
        variants={fadeInUp}
        className={cn(
          'font-heading font-bold leading-tight tracking-tight',
          'text-3xl sm:text-4xl lg:text-5xl',
          light ? 'text-white' : 'text-navy-800',
          titleClassName
        )}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={cn(
            'text-base sm:text-lg leading-relaxed',
            light ? 'text-white/75' : 'text-gray-500'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
