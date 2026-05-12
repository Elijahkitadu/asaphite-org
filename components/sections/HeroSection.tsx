'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Button from '@/components/ui/Button'
import { heroContainer, heroTitle, heroSubtitle, heroCTA, scaleInSlow } from '@/lib/animations'
import { UNSPLASH_IMAGES } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section
      className="relative isolate flex items-center min-h-screen overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image — slow Ken Burns zoom */}
      <motion.div
        variants={scaleInSlow}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 -z-10"
      >
        <Image
          src={UNSPLASH_IMAGES.hero}
          alt="Community members gathering around a water source"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
      </motion.div>

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b
                      from-navy-800/70 via-navy-800/45 to-navy-800/88" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r
                      from-navy-800/60 via-transparent to-transparent" />

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 -z-10 bg-dot-pattern opacity-20" aria-hidden="true" />

      {/* Gold glow at bottom */}
      <div
        className="absolute bottom-0 left-1/4 w-[600px] h-[200px] -z-10
                   bg-gold-400/10 blur-[100px] rounded-full"
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="container-site w-full pt-24 pb-20 sm:pt-28 sm:pb-24">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col gap-6"
        >
          {/* Eyebrow */}
          <motion.div variants={heroSubtitle} className="flex items-center gap-3">
            <span className="block h-px w-8 bg-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] font-heading text-gold-400">
              The Asaphites Foundation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={heroTitle}
            className="font-heading font-bold text-white leading-[1.05] tracking-tight
                       text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Visualizing Needs.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #D4A017 0%, #F0D060 45%, #D4A017 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Delivering Hope.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={heroSubtitle}
            className="text-white/75 text-lg sm:text-xl leading-relaxed max-w-2xl"
          >
            Through storytelling, film, and advocacy, we connect underserved
            communities with people who can create lasting change.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroCTA}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Button
              href="/stories"
              variant="primary"
              size="lg"
              icon={<Play size={16} className="fill-navy-800" />}
            >
              Watch Stories
            </Button>
            <Button
              href="/donate"
              variant="outline"
              size="lg"
              iconRight={<ArrowRight size={16} />}
            >
              Donate Now
            </Button>
          </motion.div>

          {/* Trust micro-stats */}
          <motion.div
            variants={heroSubtitle}
            className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/15 mt-2"
          >
            {[
              { value: '120+', label: 'Communities' },
              { value: '85K+', label: 'Lives Impacted' },
              { value: '47',   label: 'Documentaries' },
              { value: '14',   label: 'Countries' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span className="font-heading font-bold text-white text-xl">{s.value}</span>
                <span className="text-white/50 text-xs uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-heading">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
