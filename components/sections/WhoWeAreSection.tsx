'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { staggerContainer, fadeInLeft, fadeInUp, viewport } from '@/lib/animations'
import { UNSPLASH_IMAGES } from '@/lib/constants'

export default function WhoWeAreSection() {
  return (
    <section className="section-py bg-white overflow-hidden" aria-labelledby="who-we-are-heading">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewport} className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
              <Image src={UNSPLASH_IMAGES.whoWeAre} alt="Our team in the field" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
            <div className="absolute -top-4 -left-4 w-2/3 h-2/3 rounded-2xl -z-10 bg-gold-400/15" aria-hidden="true" />
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-6">
            <SectionTitle
              eyebrow="Who We Are"
              title="A small team with a big belief."
              align="left"
              className="max-w-none"
              id="who-we-are-heading"
            />
            <motion.p variants={fadeInUp} className="text-gray-500 text-lg leading-relaxed">
              The Asaphites Foundation is a startup NGO based in Dar es Salaam, Tanzania. We are filmmakers, photographers, and community workers who believe that a well-told story can change things.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-500 leading-relaxed">
              We are not a large organisation. We do not have decades of experience. What we have is a deep love for Tanzania, a camera, and a conviction that the communities around us deserve to be seen and heard by the world.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-500 leading-relaxed">
              We are just getting started — and we are inviting you to be part of it from the beginning.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button href="/about" variant="outline-gold" size="md" iconRight={<ArrowRight size={16} />}>
                Read Our Story
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
