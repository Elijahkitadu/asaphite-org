'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { staggerContainer, fadeInUp, scaleInSlow, viewport } from '@/lib/animations'
import { IMPACT_STATS, UNSPLASH_IMAGES } from '@/lib/constants'

export default function ImpactStatsSection() {
  return (
    <section
      className="relative isolate section-py overflow-hidden"
      aria-labelledby="impact-heading"
    >
      {/* Background */}
      <motion.div
        variants={scaleInSlow}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={UNSPLASH_IMAGES.impact}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
      </motion.div>

      {/* Navy overlay */}
      <div className="absolute inset-0 -z-10 bg-navy-800/92" />

      {/* Gold horizontal line accents */}
      <div
        className="absolute top-0 inset-x-0 h-px
                   bg-gradient-to-r from-transparent via-gold-400/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 inset-x-0 h-px
                   bg-gradient-to-r from-transparent via-gold-400/40 to-transparent"
        aria-hidden="true"
      />

      <div className="container-site">
        <div className="flex flex-col items-center gap-14">

          {/* Heading */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col items-center gap-3 text-center max-w-2xl"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-xs font-semibold
                         uppercase tracking-[0.2em] font-heading text-gold-400"
            >
              <span className="block h-px w-6 bg-gold-400" />
              Our Impact
              <span className="block h-px w-6 bg-gold-400" />
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              id="impact-heading"
              className="font-heading font-bold text-white text-3xl sm:text-4xl
                         lg:text-5xl leading-tight tracking-tight"
            >
              Numbers that carry{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #D4A017 0%, #F0D060 50%, #D4A017 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                real names.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-white/60 text-lg leading-relaxed"
            >
              Behind every statistic is a family with clean water, a child in a
              renovated classroom, a patient who received care.
            </motion.p>
          </motion.div>

          {/* Counters grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full"
          >
            {IMPACT_STATS.map((stat) => (
              <div
                key={stat.label}
                className="relative flex flex-col items-center text-center
                           p-6 rounded-2xl border border-white/8 bg-white/4
                           backdrop-blur-sm"
              >
                <AnimatedCounter
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  description={stat.description}
                  icon={stat.icon}
                  light
                />
              </div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="max-w-2xl text-center"
          >
            <p className="text-white/70 text-xl italic leading-relaxed font-light">
              "We don't count numbers. We count the moments when a community's
              reality shifts — from invisible to seen, from hopeless to hopeful."
            </p>
            <footer className="mt-4 text-gold-400 text-sm font-semibold font-heading">
              — Founder, The Asaphites Foundation
            </footer>
          </motion.blockquote>

        </div>
      </div>
    </section>
  )
}
