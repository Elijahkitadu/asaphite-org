'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { heroContainer, heroTitle, heroSubtitle, scaleInSlow, viewport } from '@/lib/animations'

interface PageHeroProps {
  eyebrow?:    string
  title:       string
  subtitle?:   string
  image:       string
  imageAlt?:   string
  className?:  string
  children?:   React.ReactNode
  minHeight?:  string
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = '',
  className,
  children,
  minHeight = 'min-h-[50vh] sm:min-h-[60vh]',
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative isolate flex items-end overflow-hidden',
        'pt-24 pb-16 sm:pt-28 sm:pb-20',
        minHeight,
        className
      )}
      aria-label="Page hero"
    >
      {/* Background image */}
      <motion.div
        variants={scaleInSlow}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 -z-10"
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-800/90 via-navy-800/60 to-navy-800/40" />

      {/* Content */}
      <div className="container-site w-full">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col gap-4"
        >
          {eyebrow && (
            <motion.span
              variants={heroSubtitle}
              className="inline-flex items-center gap-2 text-xs font-semibold
                         uppercase tracking-[0.2em] font-heading text-gold-400"
            >
              <span className="block h-px w-6 bg-gold-400" />
              {eyebrow}
            </motion.span>
          )}

          <motion.h1
            variants={heroTitle}
            className="font-heading font-bold text-white leading-tight tracking-tight
                       text-4xl sm:text-5xl lg:text-6xl text-balance"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              variants={heroSubtitle}
              className="text-white/75 text-lg sm:text-xl leading-relaxed max-w-xl"
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div variants={heroSubtitle}>
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
