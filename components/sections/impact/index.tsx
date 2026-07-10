'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2, TrendingUp, Droplets, BookOpen, HeartPulse, Building2 } from 'lucide-react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import SectionTitle from '@/components/ui/SectionTitle'
import ProgressBar from '@/components/shared/ProgressBar'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { UNSPLASH_IMAGES } from '@/lib/constants'

const EXTENDED_STATS = [
  { value: 4,   suffix: '',  label: 'Communities Visited',  description: 'Across Tanzania',        icon: 'map-pin'  },
  { value: 6,   suffix: '',  label: 'Stories Documented',   description: 'Short films produced',   icon: 'film'     },
  { value: 500, suffix: '+', label: 'People Reached',       description: 'Through our films',      icon: 'heart'    },
  { value: 3,   suffix: '',  label: 'Partner Churches',     description: 'In our network',         icon: 'building' },
  { value: 53,  suffix: '',  label: 'Total Donors',         description: 'People who believed in us first', icon: 'users'  },
  { value: 3,   suffix: '',  label: 'Regions Covered',      description: 'And growing',            icon: 'globe'    },
]

export function ImpactNumbers() {
  return (
    <section className="section-py bg-white" aria-labelledby="impact-numbers-heading">
      <div className="container-site">
        <div className="flex flex-col items-center gap-12">
          <SectionTitle
            eyebrow="Our Numbers"
            title="Honest numbers from a startup foundation"
            subtitle="We are not going to inflate our impact. These are the real numbers — and we are proud of every one."
            id="impact-numbers-heading"
          />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
            {EXTENDED_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center p-5 rounded-2xl bg-background border border-gray-100 hover:shadow-card transition-shadow duration-300">
                <AnimatedCounter value={stat.value} label={stat.label} suffix={stat.suffix} description={stat.description} icon={stat.icon} />
              </div>
            ))}
          </motion.div>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
            className="text-gray-400 text-sm text-center italic max-w-lg">
            "Every large organisation started somewhere. We started in Tanzania, in 2023, with a camera and a question. We are still here."
          </motion.p>
        </div>
      </div>
    </section>
  )
}

const COMPLETED = [
  {
    title: 'The Village That Walks for Water',
    category: 'water', icon: <Droplets size={18} />,
    location: 'Singida, Tanzania',
    raised: 450, goal: 450,
    beneficiaries: '1 village, ~200 people',
    image: UNSPLASH_IMAGES.water1,
    outcome: 'Film released. Community connected with a donor.',
  },
  {
    title: 'A Classroom Without Walls',
    category: 'education', icon: <BookOpen size={18} />,
    location: 'Singida Region, Tanzania',
    raised: 380, goal: 380,
    beneficiaries: '60 students documented',
    image: UNSPLASH_IMAGES.education2,
    outcome: 'Short film used in 3 church screenings.',
  },
  {
    title: 'The Church That Stays',
    category: 'churches', icon: <Building2 size={18} />,
    location: 'Arusha, Tanzania',
    raised: 200, goal: 200,
    beneficiaries: 'One church community profiled',
    image: UNSPLASH_IMAGES.church1,
    outcome: 'Now a founding church partner.',
  },
]

export function ImpactProjects() {
  return (
    <section className="section-py bg-background" aria-labelledby="projects-heading">
      <div className="container-site">
        <div className="flex flex-col items-center gap-12">
          <SectionTitle eyebrow="Completed Work" title="What we have done so far" subtitle="Three films. Three communities. All in Tanzania." id="projects-heading" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {COMPLETED.map((project) => (
              <motion.div key={project.title} variants={fadeInUp}
                className="flex flex-col rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="relative aspect-video">
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width:640px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-navy-800/20" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 text-navy-800 text-[10px] font-bold font-heading">
                    <CheckCircle2 size={10} className="text-hope-500" /> Complete
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="text-gold-400">{project.icon}</span>{project.location}
                  </div>
                  <h3 className="font-heading font-semibold text-navy-800 text-base leading-snug">{project.title}</h3>
                  <ProgressBar raised={project.raised} goal={project.goal} showLabels={false} />
                  <p className="text-sm text-hope-700 font-semibold font-heading">✓ {project.outcome}</p>
                  <p className="text-xs text-gray-400"><span className="font-semibold text-navy-800">{project.beneficiaries}</span></p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const BREAKDOWN = [
  { label: 'Filming & Production',  percent: 70, color: 'bg-gold-400'  },
  { label: 'Travel & Field Costs',  percent: 20, color: 'bg-hope-400'  },
  { label: 'Administration',        percent: 10, color: 'bg-gray-300'  },
]

export function ImpactTransparency() {
  return (
    <section className="section-py bg-navy-800 relative overflow-hidden" aria-labelledby="transparency-heading">
      <div className="absolute inset-0 bg-dot-pattern opacity-15" aria-hidden="true" />
      <div className="container-site relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-8">
            <SectionTitle eyebrow="Where Money Goes" title="No secrets. No spin." subtitle="We are a small team. Here is how we spend donations." light align="left" className="max-w-none" id="transparency-heading" />
            <motion.div variants={staggerContainer} className="flex flex-col gap-5">
              {BREAKDOWN.map((item) => (
                <motion.div key={item.label} variants={fadeInUp} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/80 font-medium">{item.label}</span>
                    <span className="font-heading font-bold text-white">{item.percent}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${item.percent}%` }} viewport={viewport}
                      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                      className={`h-full rounded-full ${item.color}`} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-start gap-3 p-4 rounded-xl bg-white/6 border border-white/10">
              <TrendingUp size={18} className="text-gold-400 mt-0.5 shrink-0" />
              <p className="text-white/70 text-sm leading-relaxed">
                We do not have a big office or large salaries. Every dollar we receive goes as directly as possible to making films and getting to communities. We will publish a full spending report at the end of each year.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-navy hidden lg:block">
            <Image src={UNSPLASH_IMAGES.community2} alt="Our team in the field" fill className="object-cover" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-800/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-navy-800/80 backdrop-blur-sm border border-white/10">
              <p className="font-heading font-bold text-white">First Annual Report</p>
              <p className="text-white/60 text-sm mt-1">Coming end of 2025 — full spending breakdown</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ImpactNumbers
