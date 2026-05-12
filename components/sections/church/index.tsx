'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Globe, Users, Film, Heart, CheckCircle2,
  Church, ArrowRight, Quote, Send, Loader2
} from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, scaleIn, viewport } from '@/lib/animations'
import { PARTNERSHIP_TIERS, UNSPLASH_IMAGES } from '@/lib/constants'
import { cn } from '@/lib/utils'

// ─── Why Partner ──────────────────────────────────────

const WHY_POINTS = [
  {
    icon: <Film size={22} />,
    title: 'Stories that move congregations',
    description: 'We provide documentary screening kits, sermon-ready media packs, and campaign visuals that connect your church to real human need.',
  },
  {
    icon: <Globe size={22} />,
    title: 'A global network of impact',
    description: 'Join 230+ partner churches across 14 countries. Share resources, co-fund projects, and connect your congregation to a worldwide mission.',
  },
  {
    icon: <Users size={22} />,
    title: 'Mobilize your people',
    description: 'We train your leaders, equip your volunteers, and give your congregation specific, tangible ways to respond to the stories they see.',
  },
  {
    icon: <Heart size={22} />,
    title: 'Transparent impact reporting',
    description: 'Every partner church receives a quarterly impact report showing exactly where their congregation\'s contributions went and what changed.',
  },
]

export function WhyPartner() {
  return (
    <section className="section-py bg-white overflow-hidden" aria-labelledby="why-partner-heading">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-8"
          >
            <SectionTitle
              eyebrow="Why Partner"
              title="Churches change communities. We help churches change the world."
              align="left"
              className="max-w-none"
              id="why-partner-heading"
            />

            <motion.div variants={staggerContainer} className="flex flex-col gap-6">
              {WHY_POINTS.map((point) => (
                <motion.div
                  key={point.title}
                  variants={fadeInUp}
                  className="flex gap-4"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl
                                  bg-gold-400/10 text-gold-400 shrink-0 mt-0.5">
                    {point.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading font-semibold text-navy-800 text-base">
                      {point.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button href="#partner-form" variant="primary" size="lg" iconRight={<ArrowRight size={16} />}>
                Become a Partner Church
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-navy">
              <Image
                src={UNSPLASH_IMAGES.community1}
                alt="Church community in action"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-800/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center">
                    <Church size={14} className="text-navy-800" />
                  </div>
                  <span className="text-white font-heading font-semibold text-sm">230+ Partner Churches</span>
                </div>
                <p className="text-white/70 text-xs leading-relaxed">
                  From Nairobi to Nashville, our church network spans 14 countries and every denomination.
                </p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-2xl bg-gold-400/15 -z-10" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Partnership Tiers ────────────────────────────────

export function PartnershipTiers() {
  return (
    <section className="section-py bg-background" aria-labelledby="tiers-heading">
      <div className="container-site">
        <div className="flex flex-col items-center gap-12">
          <SectionTitle
            eyebrow="Partnership Levels"
            title="Choose how you want to engage"
            subtitle="Every level of partnership creates real impact. Start wherever feels right for your congregation."
            id="tiers-heading"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
          >
            {PARTNERSHIP_TIERS.map((tier) => (
              <motion.div
                key={tier.name}
                variants={scaleIn}
                className={cn(
                  'relative flex flex-col gap-6 p-7 rounded-2xl border-2 transition-all duration-300',
                  tier.featured
                    ? 'border-gold-400 bg-navy-800 shadow-gold'
                    : 'border-gray-200 bg-white hover:border-gold-400/40 hover:shadow-card-hover'
                )}
              >
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gold-400 text-navy-800
                                     text-xs font-bold font-heading whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex flex-col gap-1">
                  <h3 className={cn(
                    'font-heading font-bold text-xl',
                    tier.featured ? 'text-white' : 'text-navy-800'
                  )}>
                    {tier.name}
                  </h3>
                  <p className={cn('text-sm', tier.featured ? 'text-white/60' : 'text-gray-500')}>
                    {tier.description}
                  </p>
                </div>

                <div className={cn(
                  'font-heading font-bold text-3xl',
                  tier.featured ? 'text-gold-400' : 'text-navy-800'
                )}>
                  {tier.price}
                </div>

                <ul className="flex flex-col gap-3 flex-1" role="list">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={16}
                        className={cn('mt-0.5 shrink-0', tier.featured ? 'text-gold-400' : 'text-hope-500')}
                        aria-hidden="true"
                      />
                      <span className={cn('text-sm leading-relaxed', tier.featured ? 'text-white/75' : 'text-gray-600')}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#partner-form"
                  variant={tier.featured ? 'primary' : 'outline-gold'}
                  size="md"
                  fullWidth
                >
                  {tier.cta}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Church Impact Stories ────────────────────────────

const CHURCH_STORIES = [
  {
    church: 'Redeemed Community Church',
    location: 'Lagos, Nigeria',
    quote: 'We showed "Thirsty Ground" on a Sunday morning. By Monday, our congregation had raised $14,000 for a borehole. The well was drilled six weeks later.',
    person: 'Pastor Samuel Adeyemi',
    role: 'Senior Pastor',
    impact: '$14,000 raised in 48 hours',
    image: UNSPLASH_IMAGES.community2,
  },
  {
    church: 'Harvest Fellowship',
    location: 'Atlanta, USA',
    quote: 'Partnership with Asaphites gave our church a global heartbeat. Our people now see themselves as part of something much bigger than our zip code.',
    person: 'Rev. Marcus Johnson',
    role: 'Lead Pastor',
    impact: '3 classrooms built in Uganda',
    image: UNSPLASH_IMAGES.community1,
  },
  {
    church: 'Grace International Church',
    location: 'Nairobi, Kenya',
    quote: 'Our church was struggling with its own roof. They helped us restore it — then equipped us to help 200 families around us. That is discipleship.',
    person: 'Pastor Grace Njoroge',
    role: 'Church Elder',
    impact: '200 families now served weekly',
    image: UNSPLASH_IMAGES.church1,
  },
]

export function ChurchImpactStories() {
  return (
    <section className="section-py bg-navy-800 relative overflow-hidden" aria-labelledby="church-stories-heading">
      <div className="absolute inset-0 bg-dot-pattern opacity-15" aria-hidden="true" />
      <div className="container-site relative">
        <div className="flex flex-col items-center gap-12">
          <SectionTitle
            eyebrow="Partner Stories"
            title="Churches that dared to engage"
            subtitle="These are the congregations that said yes — and what happened next."
            light
            id="church-stories-heading"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
          >
            {CHURCH_STORIES.map((story) => (
              <motion.div
                key={story.church}
                variants={fadeInUp}
                className="flex flex-col gap-5 p-6 rounded-2xl bg-white/6 border border-white/10
                           backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
              >
                <Quote size={24} className="text-gold-400" aria-hidden="true" />
                <p className="text-white/80 text-sm leading-relaxed italic flex-1">
                  "{story.quote}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image src={story.image} alt={story.person} fill className="object-cover" sizes="40px" />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-heading font-semibold text-white text-sm truncate">
                      {story.person}
                    </span>
                    <span className="text-white/50 text-xs truncate">{story.role} · {story.church}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gold-400 font-semibold font-heading">
                  <CheckCircle2 size={13} />
                  {story.impact}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Partner Form ─────────────────────────────────────

export function PartnerForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="partner-form" className="section-py bg-background" aria-labelledby="form-heading">
      <div className="container-site">
        <div className="max-w-2xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-8"
          >
            <SectionTitle
              eyebrow="Get Started"
              title="Register your church"
              subtitle="Fill in the form below and our partnerships team will reach out within 48 hours."
              id="form-heading"
            />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-16 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-hope-100 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-hope-500" />
                </div>
                <h3 className="font-heading font-bold text-navy-800 text-2xl">Application received!</h3>
                <p className="text-gray-500 max-w-sm">
                  Our partnerships team will contact you within 48 hours. Welcome to the network.
                </p>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeInUp}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                aria-label="Church partnership application"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { id: 'churchName',   label: 'Church name',        placeholder: 'Grace Community Church', type: 'text',  full: false },
                    { id: 'denomination', label: 'Denomination',       placeholder: 'Baptist / Non-denom / etc.', type: 'text',  full: false },
                    { id: 'contactName',  label: 'Your name',          placeholder: 'Pastor John Smith',      type: 'text',  full: false },
                    { id: 'role',         label: 'Your role',          placeholder: 'Senior Pastor',          type: 'text',  full: false },
                    { id: 'email',        label: 'Email address',      placeholder: 'pastor@church.org',      type: 'email', full: false },
                    { id: 'phone',        label: 'Phone / WhatsApp',   placeholder: '+1 555 000 0000',        type: 'tel',   full: false },
                    { id: 'location',     label: 'City & country',     placeholder: 'Atlanta, USA',           type: 'text',  full: true  },
                    { id: 'size',         label: 'Congregation size',  placeholder: '50–100 / 100–500 / 500+', type: 'text', full: true  },
                  ].map(field => (
                    <div key={field.id} className={cn('flex flex-col gap-1.5', field.full && 'sm:col-span-2')}>
                      <label htmlFor={field.id} className="text-xs font-semibold text-gray-600 font-heading uppercase tracking-wide">
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={['churchName','contactName','email'].includes(field.id)}
                        className="px-4 py-3 rounded-xl border-2 border-gray-200 text-navy-800 text-sm
                                   placeholder:text-gray-400 focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  ))}

                  <div className="sm:col-span-2 flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-gray-600 font-heading uppercase tracking-wide">
                      Tell us about your vision
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="How do you see your church engaging with our mission? Any specific projects or regions of interest?"
                      className="px-4 py-3 rounded-xl border-2 border-gray-200 text-navy-800 text-sm
                                 placeholder:text-gray-400 focus:outline-none focus:border-gold-400
                                 transition-colors resize-none"
                    />
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  loading={loading}
                  icon={!loading ? <Send size={16} /> : undefined}
                >
                  Submit Partnership Application
                </Button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyPartner
