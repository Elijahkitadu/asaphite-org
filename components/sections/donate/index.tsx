'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, Shield, RefreshCw, ArrowRight, CheckCircle2, Lock, Sparkles } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { staggerContainer, fadeInUp, fadeInRight, viewport } from '@/lib/animations'
import { DONATION_TIERS, UNSPLASH_IMAGES } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function DonateHero() {
  return (
    <PageHero
      eyebrow="Support Our Work"
      title="Every dollar helps us tell one more story."
      subtitle="We are a small foundation with small budgets. Your support goes directly to filming, travel, and production."
      image={UNSPLASH_IMAGES.donate}
      imageAlt="Community in Tanzania"
      minHeight="min-h-[50vh]"
    />
  )
}

type Frequency = 'one-time' | 'monthly'

export function DonateForm() {
  const [frequency, setFrequency] = useState<Frequency>('one-time')
  const [selectedTier, setSelectedTier] = useState(2)
  const [customAmount, setCustomAmount] = useState('')

  const displayAmount = customAmount
    ? parseInt(customAmount, 10) || 0
    : DONATION_TIERS[selectedTier]?.amount ?? 0

  return (
    <section className="section-py bg-background" aria-labelledby="donate-form-heading">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-8">
            <SectionTitle eyebrow="Give Today" title="Choose how you want to help" align="left" className="max-w-none" id="donate-form-heading" />

            <motion.div variants={fadeInUp}>
              <div className="inline-flex rounded-full p-1 bg-gray-100 border border-gray-200" role="group" aria-label="Donation frequency">
                {(['one-time', 'monthly'] as Frequency[]).map((f) => (
                  <button key={f} onClick={() => setFrequency(f)} aria-pressed={frequency === f}
                    className={cn('px-5 py-2 rounded-full text-sm font-semibold font-heading transition-all duration-200',
                      frequency === f ? 'bg-navy-800 text-white shadow-sm' : 'text-gray-500 hover:text-navy-800')}>
                    {f === 'one-time' ? 'One-Time' : <span className="flex items-center gap-1.5"><RefreshCw size={12} /> Monthly</span>}
                  </button>
                ))}
              </div>
              {frequency === 'monthly' && (
                <motion.p initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-hope-600 font-semibold mt-2 flex items-center gap-1">
                  <Sparkles size={12} /> Monthly giving helps us plan ahead — thank you
                </motion.p>
              )}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-navy-800 font-heading">Select amount</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {DONATION_TIERS.map((tier, i) => (
                  <button key={tier.amount} onClick={() => { setSelectedTier(i); setCustomAmount('') }} aria-pressed={selectedTier === i && !customAmount}
                    className={cn('relative flex flex-col items-center gap-1 p-4 rounded-xl border-2 text-center transition-all duration-200',
                      selectedTier === i && !customAmount ? 'border-gold-400 bg-gold-400/8' : 'border-gray-200 bg-white hover:border-gold-400/50',
                      tier.featured && 'ring-2 ring-gold-400/30')}>
                    {tier.featured && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-gold-400 text-navy-800 text-[10px] font-bold font-heading whitespace-nowrap">
                        Most Popular
                      </span>
                    )}
                    <span className="font-heading font-bold text-navy-800 text-xl">${tier.amount}</span>
                    <span className="text-xs text-gray-500">{tier.label}</span>
                  </button>
                ))}
              </div>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                <input type="number" placeholder="Custom amount" value={customAmount}
                  onChange={(e) => { setCustomAmount(e.target.value); setSelectedTier(-1) }} min="1"
                  className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-gray-200 text-navy-800 font-semibold text-sm placeholder:text-gray-400 focus:outline-none focus:border-gold-400 transition-colors"
                  aria-label="Custom donation amount" />
              </div>

              {displayAmount > 0 && (
                <motion.div key={displayAmount} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2 p-3 rounded-xl bg-gold-400/8 border border-gold-400/20 text-sm text-navy-800">
                  <CheckCircle2 size={16} className="text-gold-400 mt-0.5 shrink-0" />
                  <span>
                    <strong>${displayAmount}</strong>{frequency === 'monthly' ? '/month' : ''}{' '}
                    — {customAmount ? 'goes directly to filming and production' : DONATION_TIERS[selectedTier]?.impact ?? ''}
                  </span>
                </motion.div>
              )}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'firstName', label: 'First name *', placeholder: 'Your name', type: 'text' },
                  { id: 'email', label: 'Email *', placeholder: 'your@email.com', type: 'email', full: true },
                ].map(field => (
                  <div key={field.id} className={cn('flex flex-col gap-1.5', (field as any).full && 'sm:col-span-2')}>
                    <label htmlFor={field.id} className="text-xs font-semibold text-gray-600 font-heading uppercase tracking-wide">{field.label}</label>
                    <input id={field.id} type={field.type} placeholder={field.placeholder}
                      className="px-4 py-3 rounded-xl border-2 border-gray-200 text-navy-800 text-sm placeholder:text-gray-400 focus:outline-none focus:border-gold-400 transition-colors" />
                  </div>
                ))}
              </div>
              <Button variant="primary" size="xl" fullWidth iconRight={<ArrowRight size={18} />} onClick={() => {}}>
                {frequency === 'monthly' ? `Give $${displayAmount}/month` : `Donate $${displayAmount}`}
              </Button>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                <Lock size={12} /> Secured by Stripe · Cancel anytime
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-6 lg:pt-8">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-card">
              <Image src={UNSPLASH_IMAGES.community1} alt="Community we serve" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-800/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-heading font-bold text-base leading-snug">"Nobody had ever come to film us before."</p>
                <p className="text-white/60 text-xs mt-1">— Village elder, Dodoma, Tanzania</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-navy-800">
                <Shield size={18} className="text-gold-400" />
                <h3 className="font-heading font-semibold text-sm">Where your money goes</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                We are a small team with low overhead. Your donation goes to camera equipment, transport to communities, film production, and keeping the team going. We publish a simple annual report so you can see exactly what was spent.
              </p>
              <p className="text-xs text-gray-400 font-semibold">No flashy offices. No large salaries. Just stories.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function DonateTrust() {
  return (
    <section className="section-py bg-white border-t border-gray-100">
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-4">
          <h2 className="font-heading font-bold text-navy-800 text-2xl">Any amount helps.</h2>
          <p className="text-gray-500 leading-relaxed">
            We know there are hundreds of causes competing for your support. We are grateful that you are considering ours. Whether you give $10 or $1,000, you are helping us do something that matters — and we will not take that for granted.
          </p>
          <p className="text-gray-400 text-sm">
            Questions? Email us at{' '}
            <a href="mailto:info@asaphitesfoundation.org" className="text-gold-400 hover:underline">
              info@asaphitesfoundation.org
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default DonateHero
