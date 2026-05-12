'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import {
  staggerContainer, fadeInLeft, fadeInRight,
  fadeInUp, viewport
} from '@/lib/animations'
import { UNSPLASH_IMAGES } from '@/lib/constants'

const PILLARS = [
  'Documentary storytelling that reveals hidden realities',
  'Direct partnerships with local communities',
  'Transparent impact reporting on every project',
  'Church-led mobilization for sustainable change',
]

export default function WhoWeAreSection() {
  return (
    <section className="section-py bg-white overflow-hidden" aria-labelledby="who-we-are-heading">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image column */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative"
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-navy">
              <Image
                src={UNSPLASH_IMAGES.whoWeAre}
                alt="Foundation team working with a local community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-800/40 to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={viewport}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -bottom-6 -right-4 sm:right-8
                         bg-white rounded-2xl shadow-card-hover p-5
                         flex items-center gap-4 max-w-[220px]"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl
                              bg-gold-400/10 shrink-0">
                <span className="text-2xl">🎬</span>
              </div>
              <div>
                <p className="font-heading font-bold text-navy-800 text-xl leading-none">47+</p>
                <p className="text-gray-500 text-xs mt-1">Documentaries produced</p>
              </div>
            </motion.div>

            {/* Gold accent block behind image */}
            <div
              className="absolute -top-4 -left-4 w-2/3 h-2/3 rounded-3xl -z-10
                         bg-gradient-to-br from-gold-400/20 to-gold-400/5"
              aria-hidden="true"
            />
          </motion.div>

          {/* Text column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-6"
          >
            <SectionTitle
              eyebrow="Who We Are"
              title="We tell the stories the world needs to hear."
              align="left"
              className="max-w-none"
            />

            <motion.p
              variants={fadeInUp}
              className="text-gray-500 text-lg leading-relaxed"
            >
              The Asaphites Foundation uses film, photography, and advocacy to
              reveal the hidden realities facing vulnerable communities. We believe
              storytelling can inspire compassion, mobilize support, and deliver
              sustainable hope.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-gray-500 leading-relaxed"
            >
              Every documentary we produce is a bridge — connecting people who
              have with people who need. We don't just document suffering; we
              document resilience, dignity, and the transformative power of
              community-centered solutions.
            </motion.p>

            {/* Pillars list */}
            <motion.ul
              variants={staggerContainer}
              className="flex flex-col gap-3 mt-2"
              role="list"
            >
              {PILLARS.map((pillar) => (
                <motion.li
                  key={pillar}
                  variants={fadeInUp}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <CheckCircle2
                    size={18}
                    className="text-gold-400 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  {pillar}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp} className="pt-2">
              <Button
                href="/about"
                variant="outline-gold"
                size="lg"
                iconRight={<ArrowRight size={16} />}
              >
                Our Full Story
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
