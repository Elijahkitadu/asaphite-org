'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, ArrowRight, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'
import CategoryBadge from '@/components/shared/CategoryBadge'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, viewport } from '@/lib/animations'
import { UNSPLASH_IMAGES } from '@/lib/constants'

export default function FeaturedStorySection() {
  return (
    <section
      className="section-py bg-navy-800 relative overflow-hidden"
      aria-labelledby="featured-story-heading"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-15" aria-hidden="true" />

      {/* Gold glow */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2
                   bg-gold-400/6 blur-[120px] rounded-full -z-0"
        aria-hidden="true"
      />

      <div className="container-site relative">
        {/* Section label */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col items-center gap-2 mb-12"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 text-xs font-semibold
                       uppercase tracking-[0.2em] font-heading text-gold-400"
          >
            <span className="block h-px w-6 bg-gold-400" />
            Featured Documentary
            <span className="block h-px w-6 bg-gold-400" />
          </motion.span>
        </motion.div>

        {/* Main card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden
                        shadow-[0_32px_80px_rgba(0,0,0,0.4)]">

          {/* Image / Video side */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative aspect-[4/3] lg:aspect-auto min-h-[360px]"
          >
            <Image
              src={UNSPLASH_IMAGES.featuredStory}
              alt="A community member at a water source — still from 'A Community Waiting for Clean Water'"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r
                            from-transparent via-navy-800/20 to-navy-800/60" />
            <div className="absolute inset-0 bg-gradient-to-t
                            from-navy-800/70 via-transparent to-transparent" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-20 h-20 rounded-full
                           bg-white/15 border-2 border-white/50 backdrop-blur-sm
                           text-white hover:bg-white/25 transition-all duration-300
                           shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                aria-label="Watch documentary"
              >
                <Play size={28} className="fill-white ml-1" />
              </motion.button>
            </div>

            {/* Duration badge */}
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1.5 rounded-full bg-navy-800/80 backdrop-blur-sm
                               text-white text-xs font-semibold font-heading border border-white/10">
                22 min documentary
              </span>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="bg-navy-800/80 backdrop-blur-sm border-l border-white/8
                       p-8 sm:p-10 lg:p-12 flex flex-col justify-center gap-6"
          >
            {/* Meta */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <CategoryBadge category="water" />
              <span className="flex items-center gap-1 text-white/45 text-xs">
                <MapPin size={11} aria-hidden="true" />
                Nakuru County, Kenya
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={fadeInUp}
              id="featured-story-heading"
              className="font-heading font-bold text-white text-3xl sm:text-4xl
                         leading-tight tracking-tight"
            >
              A Community Waiting for Clean Water
            </motion.h2>

            {/* Body */}
            <motion.p variants={fadeInUp} className="text-white/65 leading-relaxed">
              For three generations, the families of Nakuru's eastern valley have
              walked four hours daily to collect water from a river shared with
              livestock. This is their story — and the story of what happened when
              a documentary crew arrived with a camera and a question: what do you
              need most?
            </motion.p>

            <motion.p variants={fadeInUp} className="text-white/65 leading-relaxed">
              Within six months of release, this 22-minute film raised enough to
              drill two boreholes serving over 1,200 people. The well is running today.
            </motion.p>

            {/* Pull quote */}
            <motion.blockquote
              variants={fadeInUp}
              className="border-l-2 border-gold-400 pl-4 py-1"
            >
              <p className="text-white/80 text-sm italic leading-relaxed">
                "When they showed us the film, we cried. Not because we were sad —
                because for the first time, someone had truly seen us."
              </p>
              <footer className="text-gold-400 text-xs font-semibold mt-2 font-heading">
                — Community Elder, Nakuru Valley
              </footer>
            </motion.blockquote>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-2">
              <Button
                href="/stories/nakuru-clean-water"
                variant="primary"
                size="md"
                icon={<Play size={14} className="fill-navy-800" />}
              >
                Watch Documentary
              </Button>
              <Button
                href="/stories"
                variant="outline"
                size="md"
                iconRight={<ArrowRight size={14} />}
              >
                All Stories
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
