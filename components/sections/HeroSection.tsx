'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'
import { heroContainer, heroTitle, heroSubtitle, heroCTA, scaleInSlow } from '@/lib/animations'
import { UNSPLASH_IMAGES } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative isolate flex items-center min-h-screen overflow-hidden" aria-label="Hero">
      <motion.div variants={scaleInSlow} initial="hidden" animate="visible" className="absolute inset-0 -z-10">
        <Image src={UNSPLASH_IMAGES.hero} alt="Community in Tanzania" fill priority className="object-cover" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-800/65 via-navy-800/50 to-navy-800/85" />

      <div className="container-site w-full pt-24 pb-20">
        <motion.div variants={heroContainer} initial="hidden" animate="visible" className="max-w-3xl flex flex-col gap-6">

          <motion.div variants={heroSubtitle} className="flex items-center gap-2 text-gold-400">
            <MapPin size={14} aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] font-heading">
              Tanzania
            </span>
          </motion.div>

          <motion.h1 variants={heroTitle} className="font-heading font-bold text-white leading-tight tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            We tell the stories<br />
            <span style={{ background: 'linear-gradient(135deg,#D4A017 0%,#F0D060 50%,#D4A017 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Tanzania needs told.
            </span>
          </motion.h1>

          <motion.p variants={heroSubtitle} className="text-white/75 text-lg leading-relaxed max-w-xl">
            We are a small, passionate team using film and photography to reveal the real needs of Tanzanian communities — and connect them with people who want to help.
          </motion.p>

          <motion.div variants={heroCTA} className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="/stories" variant="primary" size="lg">Watch Our Stories</Button>
            <Button href="/contact" variant="outline" size="lg" iconRight={<ArrowRight size={16} />}>Get in Touch</Button>
            <Button href="/about" variant="outline" size="lg" iconRight={<ArrowRight size={16} />}>Who We Are</Button>
          </motion.div>

          <motion.p variants={heroSubtitle} className="text-white/40 text-sm pt-2">
            Founded in Tanzania · Starting small · Growing with purpose
          </motion.p>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  )
}
