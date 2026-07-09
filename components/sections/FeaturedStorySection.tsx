'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, ArrowRight, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'
import CategoryBadge from '@/components/shared/CategoryBadge'
import { staggerContainer, fadeInUp, fadeInLeft, viewport } from '@/lib/animations'
import { UNSPLASH_IMAGES } from '@/lib/constants'

export default function FeaturedStorySection() {
  return (
    <section className="section-py bg-navy-800 relative overflow-hidden" aria-labelledby="featured-story-heading">
      <div className="absolute inset-0 bg-dot-pattern opacity-15" aria-hidden="true" />
      <div className="container-site relative">

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          className="flex flex-col items-center gap-2 mb-12">
          <motion.span variants={fadeInUp}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] font-heading text-gold-400">
            <span className="block h-px w-6 bg-gold-400" />
            Our First Story
            <span className="block h-px w-6 bg-gold-400" />
          </motion.span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-navy">
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewport}
            className="relative aspect-[4/3] lg:aspect-auto min-h-[300px]">
            <Image src={UNSPLASH_IMAGES.featuredStory} alt="A community in Tanzania" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-800/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="flex items-center justify-center w-16 h-16 rounded-full bg-white/15 border-2 border-white/50 text-white hover:bg-white/25 transition-all" aria-label="Watch story">
                <Play size={22} className="fill-white ml-1" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4">
              <CategoryBadge category="water" />
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
            className="bg-navy-800/80 border-l border-white/8 p-8 sm:p-10 flex flex-col justify-center gap-5">
            <motion.div variants={fadeInUp} className="flex items-center gap-2 text-white/50 text-xs">
              <MapPin size={11} /> Dodoma, Tanzania
            </motion.div>
            <motion.h2 variants={fadeInUp} id="featured-story-heading"
              className="font-heading font-bold text-white text-2xl sm:text-3xl leading-tight">
              The Village That Walks for Water
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/65 leading-relaxed text-sm">
              In a village outside Dodoma, families walk two hours every morning for water that is not clean. This is one of the first stories we told — and it is why we exist.
            </motion.p>
            <motion.blockquote variants={fadeInUp} className="border-l-2 border-gold-400 pl-4">
              <p className="text-white/75 text-sm italic">"Nobody had ever come to film us before. We did not think anyone cared."</p>
              <footer className="text-gold-400 text-xs font-semibold mt-1 font-heading">— Village elder, Dodoma</footer>
            </motion.blockquote>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <Button href="/stories" variant="primary" size="md" icon={<Play size={14} className="fill-navy-800" />}>Watch Story</Button>
              <Button href="/stories" variant="outline" size="md" iconRight={<ArrowRight size={14} />}>All Stories</Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
