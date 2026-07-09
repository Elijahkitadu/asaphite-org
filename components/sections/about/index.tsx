'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, Eye, Film, Shield, Sun, Users, Quote } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import { staggerContainer, fadeInUp, fadeInRight, viewport, scaleIn } from '@/lib/animations'
import { UNSPLASH_IMAGES, CORE_VALUES, FOUNDATION_TIMELINE } from '@/lib/constants'

// ─── Hero ─────────────────────────────────────────────

export function AboutHero() {
  return (
    <PageHero
      eyebrow="Our Story"
      title="We started with a camera and a question."
      subtitle="What if telling the truth, simply and honestly, could change things?"
      image={UNSPLASH_IMAGES.about}
      imageAlt="Our team in the field in Tanzania"
      minHeight="min-h-[55vh]"
    />
  )
}

// ─── Mission / Vision ─────────────────────────────────

export function MissionVision() {
  return (
    <section className="section-py bg-white" aria-labelledby="mission-heading">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold-400/10">
                  <Heart size={20} className="text-gold-400" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest font-heading text-gold-400">Our Mission</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} id="mission-heading" className="font-heading font-bold text-navy-800 text-2xl sm:text-3xl leading-tight">
                To use storytelling to connect Tanzanian communities with the people who can help them.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-500 leading-relaxed">
                We go to communities that are rarely filmed, listen to people who are rarely heard, and make short documentaries that tell the truth about what life is like — and what is needed.
              </motion.p>
            </div>

            <motion.div variants={fadeInUp} className="h-px bg-gradient-to-r from-gold-400/40 to-transparent" />

            <div className="flex flex-col gap-4">
              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-hope-400/10">
                  <Eye size={20} className="text-hope-400" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest font-heading text-hope-400">Our Vision</span>
              </motion.div>
              <motion.h3 variants={fadeInUp} className="font-heading font-bold text-navy-800 text-2xl sm:text-3xl leading-tight">
                A Tanzania where no community suffers in silence because nobody knew they needed help.
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-gray-500 leading-relaxed">
                We believe visibility is the first step to change. If the right people can see and hear what is happening in a community, they will respond. Our job is to make that connection.
              </motion.p>
            </div>
          </motion.div>

          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewport} className="relative hidden lg:block">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-navy">
              <Image src={UNSPLASH_IMAGES.community1} alt="Community members we work with" fill className="object-cover" sizes="50vw" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -left-8 bg-navy-800 rounded-2xl p-5 shadow-navy max-w-[200px]"
            >
              <Quote size={18} className="text-gold-400 mb-2" />
              <p className="text-white/80 text-xs leading-relaxed italic">"We are small. But the stories are big."</p>
            </motion.div>
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-2xl -z-10 bg-gold-400/15" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Core Values ──────────────────────────────────────

const VALUE_ICONS: Record<string, React.ReactNode> = {
  Honesty:      <Shield size={22} />,
  Dignity:      <Heart  size={22} />,
  Storytelling: <Film   size={22} />,
  Community:    <Users  size={22} />,
  Hope:         <Sun    size={22} />,
}

export function CoreValues() {
  return (
    <section className="section-py bg-background" aria-labelledby="values-heading">
      <div className="container-site">
        <div className="flex flex-col items-center gap-12">
          <SectionTitle
            eyebrow="What We Stand For"
            title="Our values"
            subtitle="Simple principles that guide everything we do."
            id="values-heading"
          />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 w-full">
            {CORE_VALUES.map((value, i) => (
              <motion.div key={value.title} variants={scaleIn} custom={i}
                className="group flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-400">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold-400/10 text-gold-400 group-hover:bg-gold-400 group-hover:text-navy-800 transition-all duration-300">
                  {VALUE_ICONS[value.title]}
                </div>
                <h3 className="font-heading font-semibold text-navy-800 text-base">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Timeline ─────────────────────────────────────────

export function FoundationTimeline() {
  return (
    <section className="section-py bg-navy-800 relative overflow-hidden" aria-labelledby="timeline-heading">
      <div className="absolute inset-0 bg-dot-pattern opacity-15" aria-hidden="true" />
      <div className="container-site relative">
        <div className="flex flex-col items-center gap-12">
          <SectionTitle
            eyebrow="Our Journey"
            title="How we got here"
            subtitle="A short story — we are still writing it."
            light
            id="timeline-heading"
          />
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400/60 via-gold-400/30 to-transparent -translate-x-1/2" aria-hidden="true" />
            <div className="flex flex-col gap-0">
              {FOUNDATION_TIMELINE.map((item, i) => {
                const isEven = i % 2 === 0
                return (
                  <motion.div key={`${item.year}-${i}`} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
                    className={`relative flex items-start gap-6 pb-10 pl-12 sm:pl-0 ${isEven ? 'sm:flex-row sm:pr-[calc(50%+2rem)]' : 'sm:flex-row-reverse sm:pl-[calc(50%+2rem)]'}`}>
                    <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-gold-400 border-2 border-navy-800 -translate-x-1/2 mt-1.5 shrink-0" aria-hidden="true" />
                    <div className={`flex flex-col gap-2 bg-white/6 border border-white/10 rounded-xl p-5 w-full ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                      <span className="font-heading font-bold text-gold-400 text-sm">{item.year}</span>
                      <h3 className="font-heading font-semibold text-white text-base">{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Leadership ───────────────────────────────────────

const TEAM = [
  { name: 'Add Your Name', role: 'Founder',    bio: 'Update this with your real team details.', image: UNSPLASH_IMAGES.team1 },
  { name: 'Add Your Name', role: 'Co-founder', bio: 'Update this with your real team details.', image: UNSPLASH_IMAGES.team2 },
  { name: 'Add Your Name', role: 'Filmmaker',  bio: 'Update this with your real team details.', image: UNSPLASH_IMAGES.team3 },
]

export function LeadershipSection() {
  return (
    <section className="section-py bg-white" aria-labelledby="team-heading">
      <div className="container-site">
        <div className="flex flex-col items-center gap-12">
          <SectionTitle
            eyebrow="The Team"
            title="The people behind the camera"
            subtitle="A small team with a shared passion for Tanzania and storytelling."
            id="team-heading"
          />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-2xl mx-auto">
            {TEAM.map((member, i) => (
              <motion.div key={i} variants={fadeInUp} className="group flex flex-col items-center text-center gap-4">
                <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-gold-400/40 transition-all duration-300">
                  <Image src={member.image} alt={member.name} fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="96px" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading font-semibold text-navy-800 text-base">{member.name}</h3>
                  <p className="text-gold-400 text-xs font-semibold font-heading uppercase tracking-wider">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mt-1">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
