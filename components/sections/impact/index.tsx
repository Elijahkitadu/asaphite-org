'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2, TrendingUp, Droplets, BookOpen, HeartPulse, Building2 } from 'lucide-react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import SectionTitle from '@/components/ui/SectionTitle'
import ProgressBar from '@/components/shared/ProgressBar'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { IMPACT_STATS, UNSPLASH_IMAGES } from '@/lib/constants'

// ─── Impact Numbers ───────────────────────────────────

const EXTENDED_STATS = [
  { value: 120,   suffix: '+', label: 'Communities Reached',    description: 'Across 14 countries',           icon: 'map-pin'  },
  { value: 47,    suffix: '',  label: 'Documentaries Produced', description: 'Screened in 60 countries',      icon: 'film'     },
  { value: 85000, suffix: '+', label: 'Lives Impacted',         description: 'Through all programs combined', icon: 'heart'    },
  { value: 230,   suffix: '+', label: 'Partner Churches',       description: 'Worldwide network',             icon: 'building' },
  { value: 40,    suffix: '+', label: 'Water Projects',         description: 'Wells, boreholes & filters',    icon: 'droplets' },
  { value: 15,    suffix: '',  label: 'Schools Renovated',      description: 'Across East & West Africa',     icon: 'users'    },
  { value: 12000, suffix: '+', label: 'Patients Served',        description: 'Through mobile clinics',        icon: 'users'    },
  { value: 14,    suffix: '',  label: 'Countries Active',       description: 'On 4 continents',               icon: 'globe'    },
]

export function ImpactNumbers() {
  return (
    <section className="section-py bg-white" aria-labelledby="impact-numbers-heading">
      <div className="container-site">
        <div className="flex flex-col items-center gap-12">
          <SectionTitle
            eyebrow="The Numbers"
            title="Transparent impact, verified in the field"
            subtitle="Every figure is independently documented. We publish full reports annually."
            id="impact-numbers-heading"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full"
          >
            {EXTENDED_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center p-5 rounded-2xl bg-background
                           border border-gray-100 hover:shadow-card transition-shadow duration-300"
              >
                <AnimatedCounter
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  description={stat.description}
                  icon={stat.icon}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Impact Projects ──────────────────────────────────

const COMPLETED = [
  {
    title: 'Turkana Water Initiative',
    category: 'water', icon: <Droplets size={18} />,
    location: 'Turkana, Kenya',
    raised: 30000, goal: 30000,
    beneficiaries: '1,200 people',
    image: UNSPLASH_IMAGES.water1,
    outcome: '3 solar-powered boreholes now operating 24/7.',
  },
  {
    title: 'Karamoja Classroom Project',
    category: 'education', icon: <BookOpen size={18} />,
    location: 'Karamoja, Uganda',
    raised: 18000, goal: 18000,
    beneficiaries: '240 students',
    image: UNSPLASH_IMAGES.education2,
    outcome: '6 classrooms built, all weather-proof and furnished.',
  },
  {
    title: 'South Sudan Mobile Clinic',
    category: 'healthcare', icon: <HeartPulse size={18} />,
    location: 'Nimule, South Sudan',
    raised: 22000, goal: 22000,
    beneficiaries: '3,400 patients',
    image: UNSPLASH_IMAGES.healthcare1,
    outcome: 'Quarterly clinic visits now permanent in the region.',
  },
  {
    title: 'Kigali Church Restoration',
    category: 'churches', icon: <Building2 size={18} />,
    location: 'Kigali, Rwanda',
    raised: 12000, goal: 12000,
    beneficiaries: '400 families',
    image: UNSPLASH_IMAGES.church1,
    outcome: 'Roof replaced, hall restored — now serves as a community centre.',
  },
]

export function ImpactProjects() {
  return (
    <section className="section-py bg-background" aria-labelledby="projects-heading">
      <div className="container-site">
        <div className="flex flex-col items-center gap-12">
          <SectionTitle
            eyebrow="Completed Projects"
            title="Funded. Built. Verified."
            subtitle="These projects are done. The communities are changed. Here is the proof."
            id="projects-heading"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          >
            {COMPLETED.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-0 rounded-2xl bg-white
                           border border-gray-100 overflow-hidden shadow-card
                           hover:shadow-card-hover transition-all duration-300"
              >
                {/* Image */}
                <div className="relative w-full sm:w-40 aspect-video sm:aspect-auto shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 160px"
                  />
                  <div className="absolute inset-0 bg-navy-800/20" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5
                                  px-2.5 py-1 rounded-full bg-white/90 text-navy-800
                                  text-[10px] font-bold font-heading">
                    <CheckCircle2 size={10} className="text-hope-500" />
                    Complete
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="text-gold-400">{project.icon}</span>
                    {project.location}
                  </div>
                  <h3 className="font-heading font-semibold text-navy-800 text-base leading-snug">
                    {project.title}
                  </h3>
                  <ProgressBar raised={project.raised} goal={project.goal} showLabels={false} />
                  <p className="text-sm text-hope-700 font-semibold font-heading">
                    ✓ {project.outcome}
                  </p>
                  <p className="text-xs text-gray-400">
                    <span className="font-semibold text-navy-800">{project.beneficiaries}</span> directly impacted
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

// ─── Transparency ─────────────────────────────────────

const BREAKDOWN = [
  { label: 'Direct Field Programs', percent: 85, color: 'bg-gold-400' },
  { label: 'Storytelling & Production', percent: 8, color: 'bg-hope-400' },
  { label: 'Administration', percent: 4, color: 'bg-blue-400' },
  { label: 'Fundraising', percent: 3, color: 'bg-gray-300' },
]

export function ImpactTransparency() {
  return (
    <section className="section-py bg-navy-800 relative overflow-hidden" aria-labelledby="transparency-heading">
      <div className="absolute inset-0 bg-dot-pattern opacity-15" aria-hidden="true" />
      <div className="container-site relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-8"
          >
            <SectionTitle
              eyebrow="Financial Transparency"
              title="Where your money goes"
              subtitle="We are radically transparent about every dollar. Here is how we spent funds last year."
              light
              align="left"
              className="max-w-none"
              id="transparency-heading"
            />

            <motion.div variants={staggerContainer} className="flex flex-col gap-5">
              {BREAKDOWN.map((item) => (
                <motion.div key={item.label} variants={fadeInUp} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/80 font-medium">{item.label}</span>
                    <span className="font-heading font-bold text-white">{item.percent}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percent}%` }}
                      viewport={viewport}
                      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                      className={`h-full rounded-full ${item.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-start gap-3 p-4 rounded-xl bg-white/6 border border-white/10">
              <TrendingUp size={20} className="text-gold-400 mt-0.5 shrink-0" />
              <p className="text-white/70 text-sm leading-relaxed">
                <span className="font-semibold text-white">85 cents of every dollar</span> goes directly
                to field programs. Our annual financial report is available on request.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative aspect-square rounded-3xl overflow-hidden shadow-navy hidden lg:block"
          >
            <Image
              src={UNSPLASH_IMAGES.community2}
              alt="Field team with community"
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-800/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-navy-800/80 backdrop-blur-sm border border-white/10">
              <p className="font-heading font-bold text-white text-lg">Annual Report 2024</p>
              <p className="text-white/60 text-sm mt-1">Full financial disclosure available on request</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ImpactNumbers
