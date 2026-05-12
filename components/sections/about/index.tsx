'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Heart, Eye, Film, Shield, Sun, Handshake,
  ArrowRight, Quote
} from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import {
  staggerContainer, fadeInUp, fadeInLeft, fadeInRight,
  viewport, scaleIn
} from '@/lib/animations'
import {
  UNSPLASH_IMAGES, CORE_VALUES, FOUNDATION_TIMELINE
} from '@/lib/constants'

// ─── Hero ─────────────────────────────────────────────

export function AboutHero() {
  return (
    <PageHero
      eyebrow="Our Story"
      title="We believe every community deserves to be seen."
      subtitle="The Asaphites Foundation was born from a simple conviction: the right story, told well, can change the world."
      image={UNSPLASH_IMAGES.about}
      imageAlt="Foundation team in the field"
      minHeight="min-h-[65vh]"
    />
  )
}

// ─── Mission / Vision ─────────────────────────────────

export function MissionVision() {
  return (
    <section className="section-py bg-white overflow-hidden" aria-labelledby="mission-heading">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-10"
          >
            {/* Mission */}
            <div className="flex flex-col gap-4">
              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl
                                bg-gold-400/10">
                  <Heart size={20} className="text-gold-400" aria-hidden="true" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest
                                 font-heading text-gold-400">
                  Our Mission
                </span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                id="mission-heading"
                className="font-heading font-bold text-navy-800 text-2xl sm:text-3xl leading-tight"
              >
                To transform vulnerable communities through storytelling, advocacy,
                and sustainable development.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-500 leading-relaxed">
                We show up where cameras rarely go. We listen to voices rarely heard.
                Then we bring those stories to the world — not as charity porn, but as
                dignified, powerful narratives of resilience and need.
              </motion.p>
            </div>

            {/* Divider */}
            <motion.div
              variants={fadeInUp}
              className="h-px bg-gradient-to-r from-gold-400/40 to-transparent"
            />

            {/* Vision */}
            <div className="flex flex-col gap-4">
              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl
                                bg-hope-400/10">
                  <Eye size={20} className="text-hope-400" aria-hidden="true" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest
                                 font-heading text-hope-400">
                  Our Vision
                </span>
              </motion.div>
              <motion.h3
                variants={fadeInUp}
                className="font-heading font-bold text-navy-800 text-2xl sm:text-3xl leading-tight"
              >
                A world where every underserved community is seen, heard, and supported.
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-gray-500 leading-relaxed">
                We envision a future where geography, poverty, and invisibility no
                longer determine whether a community receives help — where stories
                bridge the gap between need and response, every time.
              </motion.p>
            </div>
          </motion.div>

          {/* Image stack */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-navy">
              <Image
                src={UNSPLASH_IMAGES.community1}
                alt="Community members during a project visit"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -left-8 bg-navy-800 rounded-2xl p-5
                         shadow-navy max-w-[200px]"
            >
              <Quote size={20} className="text-gold-400 mb-2" aria-hidden="true" />
              <p className="text-white/80 text-xs leading-relaxed italic">
                "Storytelling is not just what we do — it is why we exist."
              </p>
            </motion.div>
            {/* Gold accent */}
            <div
              className="absolute -top-6 -right-6 w-40 h-40 rounded-2xl -z-10
                         bg-gold-400/15"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Core Values ──────────────────────────────────────

const VALUE_ICONS: Record<string, React.ReactNode> = {
  Compassion:    <Heart     size={24} />,
  Integrity:     <Shield    size={24} />,
  Storytelling:  <Film      size={24} />,
  Service:       <Handshake size={24} />,
  Hope:          <Sun       size={24} />,
}

export function CoreValues() {
  return (
    <section className="section-py bg-background" aria-labelledby="values-heading">
      <div className="container-site">
        <div className="flex flex-col items-center gap-12">
          <SectionTitle
            eyebrow="What We Stand For"
            title="Our core values"
            subtitle="These five principles guide every story we tell, every project we fund, and every partnership we build."
            id="values-heading"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full"
          >
            {CORE_VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                variants={scaleIn}
                custom={i}
                className="group flex flex-col items-center text-center gap-4 p-6
                           rounded-2xl bg-white border border-gray-100
                           hover:shadow-card-hover hover:-translate-y-1
                           transition-all duration-400"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl
                                bg-gold-400/10 text-gold-400
                                group-hover:bg-gold-400 group-hover:text-navy-800
                                transition-all duration-300">
                  {VALUE_ICONS[value.title]}
                </div>
                <h3 className="font-heading font-semibold text-navy-800 text-base">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
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
    <section
      className="section-py bg-navy-800 relative overflow-hidden"
      aria-labelledby="timeline-heading"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-15" aria-hidden="true" />

      <div className="container-site relative">
        <div className="flex flex-col items-center gap-12">
          <SectionTitle
            eyebrow="Our Journey"
            title="From a vision to a movement"
            subtitle="Seven years of stories, projects, and communities transformed."
            light
            id="timeline-heading"
          />

          <div className="relative w-full max-w-3xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px
                         bg-gradient-to-b from-gold-400/60 via-gold-400/30 to-transparent
                         -translate-x-1/2"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-0">
              {FOUNDATION_TIMELINE.map((item, i) => {
                const isEven = i % 2 === 0
                return (
                  <motion.div
                    key={item.year}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    className={`relative flex items-start gap-6 pb-10 pl-12 sm:pl-0
                                ${isEven
                                  ? 'sm:flex-row sm:pr-[calc(50%+2rem)]'
                                  : 'sm:flex-row-reverse sm:pl-[calc(50%+2rem)]'
                                }`}
                  >
                    {/* Dot */}
                    <div
                      className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full
                                 bg-gold-400 border-2 border-navy-800
                                 -translate-x-1/2 mt-1.5 shrink-0
                                 shadow-[0_0_12px_rgba(212,160,23,0.5)]"
                      aria-hidden="true"
                    />

                    {/* Card */}
                    <div className={`flex flex-col gap-2 bg-white/6 border border-white/10
                                    rounded-xl p-5 backdrop-blur-sm w-full
                                    ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                      <span className="font-heading font-bold text-gold-400 text-sm">
                        {item.year}
                      </span>
                      <h3 className="font-heading font-semibold text-white text-base">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {item.description}
                      </p>
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
  {
    name: 'Daniel Asaph',
    role: 'Founder & Executive Director',
    bio: 'Veteran documentary filmmaker with 15 years across East Africa and Southeast Asia.',
    image: UNSPLASH_IMAGES.team1,
  },
  {
    name: 'Grace Mwangi',
    role: 'Director of Programs',
    bio: 'Former UNICEF field officer turned humanitarian storyteller and community advocate.',
    image: UNSPLASH_IMAGES.team2,
  },
  {
    name: 'James Okonkwo',
    role: 'Head of Church Partnerships',
    bio: 'Church mobilization specialist who has built networks across 14 African nations.',
    image: UNSPLASH_IMAGES.team3,
  },
  {
    name: 'Amara Diallo',
    role: 'Creative Director',
    bio: 'Award-winning cinematographer whose lens has told stories on six continents.',
    image: UNSPLASH_IMAGES.team4,
  },
]

export function LeadershipSection() {
  return (
    <section className="section-py bg-white" aria-labelledby="team-heading">
      <div className="container-site">
        <div className="flex flex-col items-center gap-12">
          <SectionTitle
            eyebrow="The Team"
            title="The people behind the stories"
            subtitle="Our leadership team brings together filmmakers, field officers, and community builders united by one mission."
            id="team-heading"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
          >
            {TEAM.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="group flex flex-col items-center text-center gap-4"
              >
                {/* Photo */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden
                                ring-4 ring-gray-100 group-hover:ring-gold-400/40
                                transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0
                               transition-all duration-500"
                    sizes="128px"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading font-semibold text-navy-800 text-base">
                    {member.name}
                  </h3>
                  <p className="text-gold-400 text-xs font-semibold font-heading uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mt-1">
                    {member.bio}
                  </p>
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
