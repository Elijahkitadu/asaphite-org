'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Globe, Users, Film, Heart, CheckCircle2, Church, ArrowRight, Quote, Send } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { staggerContainer, fadeInUp, fadeInRight, scaleIn, viewport } from '@/lib/animations'
import { PARTNERSHIP_TIERS, UNSPLASH_IMAGES } from '@/lib/constants'
import { cn } from '@/lib/utils'

const WHY_POINTS = [
  { icon: <Film size={22} />,  title: 'Stories that move your congregation', description: 'We provide short films and discussion guides your church can use on Sunday mornings or in small groups to spark real conversations about community need.' },
  { icon: <Globe size={22} />, title: 'A growing network in Tanzania',        description: 'Connect with other Tanzanian churches who are already partnering with us. Share ideas, resources, and encouragement across the network.' },
  { icon: <Users size={22} />, title: 'Help us find the stories',             description: 'You know your community better than anyone. As a partner church, you help us identify real needs we might never find on our own.' },
  { icon: <Heart size={22} />, title: 'Honest updates from the field',        description: 'Every partner church receives regular updates — real ones, not press releases. You will know exactly what we are doing and what your support achieves.' },
]

export function WhyPartner() {
  return (
    <section className="section-py bg-white overflow-hidden" aria-labelledby="why-partner-heading">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-8">
            <SectionTitle eyebrow="Why Partner" title="Churches know their communities. We know how to tell the story." align="left" className="max-w-none" id="why-partner-heading" />
            <motion.div variants={staggerContainer} className="flex flex-col gap-6">
              {WHY_POINTS.map((point) => (
                <motion.div key={point.title} variants={fadeInUp} className="flex gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gold-400/10 text-gold-400 shrink-0 mt-0.5">{point.icon}</div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading font-semibold text-navy-800 text-base">{point.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button href="#partner-form" variant="primary" size="lg" iconRight={<ArrowRight size={16} />}>Register Your Church</Button>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewport} className="relative hidden lg:block">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-navy">
              <Image src={UNSPLASH_IMAGES.church1} alt="Partner church in Tanzania" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-800/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center">
                    <Church size={14} className="text-navy-800" />
                  </div>
                  <span className="text-white font-heading font-semibold text-sm">3 Partner Churches</span>
                </div>
                <p className="text-white/70 text-xs leading-relaxed">All in Tanzania. All at the beginning with us.</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-2xl bg-gold-400/15 -z-10" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function PartnershipTiers() {
  return (
    <section className="section-py bg-background" aria-labelledby="tiers-heading">
      <div className="container-site">
        <div className="flex flex-col items-center gap-12">
          <SectionTitle eyebrow="Partnership Levels" title="Choose how you want to be involved" subtitle="Start with whatever feels right. You can always grow into a deeper partnership." id="tiers-heading" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {PARTNERSHIP_TIERS.map((tier) => (
              <motion.div key={tier.name} variants={scaleIn}
                className={cn('relative flex flex-col gap-6 p-7 rounded-2xl border-2 transition-all duration-300',
                  tier.featured ? 'border-gold-400 bg-navy-800 shadow-gold' : 'border-gray-200 bg-white hover:border-gold-400/40 hover:shadow-card-hover')}>
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gold-400 text-navy-800 text-xs font-bold font-heading whitespace-nowrap">Recommended</span>
                  </div>
                )}
                <div className="flex flex-col gap-1">
                  <h3 className={cn('font-heading font-bold text-xl', tier.featured ? 'text-white' : 'text-navy-800')}>{tier.name}</h3>
                  <p className={cn('text-sm', tier.featured ? 'text-white/60' : 'text-gray-500')}>{tier.description}</p>
                </div>
                <div className={cn('font-heading font-bold text-3xl', tier.featured ? 'text-gold-400' : 'text-navy-800')}>{tier.price}</div>
                <ul className="flex flex-col gap-3 flex-1" role="list">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className={cn('mt-0.5 shrink-0', tier.featured ? 'text-gold-400' : 'text-hope-500')} aria-hidden="true" />
                      <span className={cn('text-sm leading-relaxed', tier.featured ? 'text-white/75' : 'text-gray-600')}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button href="#partner-form" variant={tier.featured ? 'primary' : 'outline-gold'} size="md" fullWidth>{tier.cta}</Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const CHURCH_STORIES = [
  {
    church: 'Kanisa la Imani',
    location: 'Dodoma, Tanzania',
    quote: 'When they showed our community\'s story at our Sunday service, people who had never spoken about these issues before started opening up. It changed something.',
    person: 'Pastor Elias',
    role: 'Senior Pastor',
    impact: 'Hosted our first community screening',
    image: UNSPLASH_IMAGES.community2,
  },
  {
    church: 'Kristo Mwokozi Church',
    location: 'Dar es Salaam, Tanzania',
    quote: 'We connected the foundation with three families in our neighbourhood who needed their story told. That is all they asked. We could do that.',
    person: 'Sister Grace',
    role: 'Community Coordinator',
    impact: 'Connected us with two story subjects',
    image: UNSPLASH_IMAGES.community1,
  },
  {
    church: 'Kanisa la Upendo',
    location: 'Mwanza, Tanzania',
    quote: 'We are a small church. We cannot give much money. But we can open our doors, share their films, and pray. That is what partnership looks like for us.',
    person: 'Pastor Thomas',
    role: 'Lead Pastor',
    impact: 'Monthly film screenings running',
    image: UNSPLASH_IMAGES.church1,
  },
]

export function ChurchImpactStories() {
  return (
    <section className="section-py bg-navy-800 relative overflow-hidden" aria-labelledby="church-stories-heading">
      <div className="absolute inset-0 bg-dot-pattern opacity-15" aria-hidden="true" />
      <div className="container-site relative">
        <div className="flex flex-col items-center gap-12">
          <SectionTitle eyebrow="Partner Stories" title="What our three partner churches say" subtitle="Small churches, real partnership." light id="church-stories-heading" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {CHURCH_STORIES.map((story) => (
              <motion.div key={story.church} variants={fadeInUp}
                className="flex flex-col gap-5 p-6 rounded-2xl bg-white/6 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <Quote size={22} className="text-gold-400" aria-hidden="true" />
                <p className="text-white/80 text-sm leading-relaxed italic flex-1">"{story.quote}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image src={story.image} alt={story.person} fill className="object-cover" sizes="40px" />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-heading font-semibold text-white text-sm truncate">{story.person}</span>
                    <span className="text-white/50 text-xs truncate">{story.role} · {story.church}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gold-400 font-semibold font-heading">
                  <CheckCircle2 size={13} />{story.impact}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function PartnerForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="partner-form" className="section-py bg-background" aria-labelledby="form-heading">
      <div className="container-site">
        <div className="max-w-xl mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-8">
            <SectionTitle eyebrow="Get Started" title="Register your church" subtitle="Fill this in and we will be in touch within a few days." id="form-heading" />

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-hope-100 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-hope-500" />
                </div>
                <h3 className="font-heading font-bold text-navy-800 text-2xl">We received your application!</h3>
                <p className="text-gray-500 max-w-sm">We are a small team but we will get back to you personally within a few days. Thank you for your interest.</p>
              </motion.div>
            ) : (
              <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="flex flex-col gap-5" aria-label="Church partnership form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { id: 'churchName',  label: 'Church name *',    placeholder: 'Kanisa la Imani',     type: 'text',  full: false },
                    { id: 'location',    label: 'Town / city *',    placeholder: 'Dodoma',              type: 'text',  full: false },
                    { id: 'contactName', label: 'Your name *',      placeholder: 'Pastor John',         type: 'text',  full: false },
                    { id: 'phone',       label: 'Phone / WhatsApp *',placeholder: '+255 000 000 000',   type: 'tel',   full: false },
                    { id: 'email',       label: 'Email',            placeholder: 'pastor@church.co.tz', type: 'email', full: true  },
                  ].map(field => (
                    <div key={field.id} className={cn('flex flex-col gap-1.5', field.full && 'sm:col-span-2')}>
                      <label htmlFor={field.id} className="text-xs font-semibold text-gray-600 font-heading uppercase tracking-wide">{field.label}</label>
                      <input id={field.id} type={field.type} placeholder={field.placeholder}
                        required={field.label.includes('*')}
                        className="px-4 py-3 rounded-xl border-2 border-gray-200 text-navy-800 text-sm placeholder:text-gray-400 focus:outline-none focus:border-gold-400 transition-colors" />
                    </div>
                  ))}
                  <div className="sm:col-span-2 flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-gray-600 font-heading uppercase tracking-wide">Tell us a little about your church</label>
                    <textarea id="message" rows={3} placeholder="How many people attend? What does your community look like? How do you see us working together?"
                      className="px-4 py-3 rounded-xl border-2 border-gray-200 text-navy-800 text-sm placeholder:text-gray-400 focus:outline-none focus:border-gold-400 transition-colors resize-none" />
                  </div>
                </div>
                <Button variant="primary" size="lg" fullWidth loading={loading} icon={!loading ? <Send size={16} /> : undefined}>
                  Submit
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
