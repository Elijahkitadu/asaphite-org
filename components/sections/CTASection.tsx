'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { staggerContainer, fadeInUp, scaleInSlow, viewport } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface CTALink { label: string; href: string; variant?: 'primary' | 'outline'; external?: boolean }
interface CTASectionProps { eyebrow?: string; title: string; subtitle?: string; links: CTALink[]; backgroundImage?: string; className?: string }

export default function CTASection({ eyebrow, title, subtitle, links, backgroundImage = 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600&q=80', className }: CTASectionProps) {
  return (
    <section className={cn('relative isolate overflow-hidden py-24 sm:py-32', className)} aria-labelledby="cta-heading">
      <motion.div variants={scaleInSlow} initial="hidden" whileInView="visible" viewport={viewport} className="absolute inset-0 -z-10">
        <Image src={backgroundImage} alt="" fill className="object-cover" sizes="100vw" aria-hidden="true" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-800/95 via-navy-800/88 to-navy-800/80" />
      <div className="absolute inset-0 -z-10 bg-dot-pattern opacity-30" aria-hidden="true" />
      <div className="container-site relative">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="mx-auto max-w-3xl flex flex-col items-center text-center gap-6">
          {eyebrow && (
            <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] font-heading text-gold-400">
              <span className="block h-px w-6 bg-gold-400" />{eyebrow}<span className="block h-px w-6 bg-gold-400" />
            </motion.span>
          )}
          <motion.h2 variants={fadeInUp} id="cta-heading" className="font-heading font-bold text-white leading-tight tracking-tight text-3xl sm:text-4xl lg:text-5xl text-balance">{title}</motion.h2>
          {subtitle && <motion.p variants={fadeInUp} className="text-white/70 text-lg leading-relaxed max-w-xl">{subtitle}</motion.p>}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {links.map((link) => (
              <Button key={link.href} href={link.href} variant={link.variant ?? 'primary'} size="lg" external={link.external} iconRight={link.variant !== 'outline' ? <ArrowRight size={18} /> : undefined}>
                {link.label}
              </Button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
