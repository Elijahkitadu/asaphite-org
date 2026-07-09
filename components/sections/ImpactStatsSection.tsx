'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { IMPACT_STATS } from '@/lib/constants'

export default function ImpactStatsSection() {
  return (
    <section className="section-py bg-white border-t border-gray-100" aria-labelledby="impact-heading">
      <div className="container-site">
        <div className="flex flex-col items-center gap-12">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
            className="flex flex-col items-center gap-3 text-center max-w-xl">
            <motion.span variants={fadeInUp}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] font-heading text-gold-400">
              <span className="block h-px w-6 bg-gold-400" />
              So Far
              <span className="block h-px w-6 bg-gold-400" />
            </motion.span>
            <motion.h2 variants={fadeInUp} id="impact-heading"
              className="font-heading font-bold text-navy-800 text-3xl sm:text-4xl leading-tight">
              Small numbers. Real people.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 leading-relaxed">
              We are a startup. These numbers are honest — and we are proud of every one of them.
            </motion.p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {IMPACT_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center p-6 rounded-2xl bg-background border border-gray-100">
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

          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
            className="text-gray-400 text-sm text-center italic max-w-md">
            "Every large organisation once had numbers this small. We are building something that will last."
          </motion.p>
        </div>
      </div>
    </section>
  )
}
