'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Heart, Shield, RefreshCw, Globe, CheckCircle2,
  CreditCard, Lock, ArrowRight, Sparkles
} from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, viewport } from '@/lib/animations'
import { DONATION_TIERS, UNSPLASH_IMAGES } from '@/lib/constants'
import { cn } from '@/lib/utils'

// ─── Hero ─────────────────────────────────────────────

export function DonateHero() {
  return (
    <PageHero
      eyebrow="Make a Difference"
      title="Your gift tells a story of hope."
      subtitle="Every dollar you give funds a documentary, drills a well, restores a classroom, or sends a mobile clinic to the places that need it most."
      image={UNSPLASH_IMAGES.donate}
      imageAlt="Community receiving aid"
      minHeight="min-h-[55vh]"
    />
  )
}

// ─── Donation Form ────────────────────────────────────

type Frequency = 'one-time' | 'monthly'

export function DonateForm() {
  const [frequency,     setFrequency]     = useState<Frequency>('one-time')
  const [selectedTier,  setSelectedTier]  = useState(2) // Community Builder default
  const [customAmount,  setCustomAmount]  = useState('')
  const [step,          setStep]          = useState<'amount' | 'details'>('amount')

  const displayAmount = customAmount
    ? parseInt(customAmount, 10) || 0
    : DONATION_TIERS[selectedTier]?.amount ?? 0

  return (
    <section className="section-py bg-background" aria-labelledby="donate-form-heading">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — Form */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-8"
          >
            <SectionTitle
              eyebrow="Give Today"
              title="Choose your impact"
              subtitle="One-time or monthly — every gift is transparently reported."
              align="left"
              className="max-w-none"
              id="donate-form-heading"
            />

            {/* Frequency toggle */}
            <motion.div variants={fadeInUp}>
              <div
                className="inline-flex rounded-full p-1 bg-gray-100 border border-gray-200"
                role="group"
                aria-label="Donation frequency"
              >
                {(['one-time', 'monthly'] as Frequency[]).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFrequency(f)}
                    aria-pressed={frequency === f}
                    className={cn(
                      'px-5 py-2 rounded-full text-sm font-semibold font-heading',
                      'transition-all duration-200',
                      frequency === f
                        ? 'bg-navy-800 text-white shadow-sm'
                        : 'text-gray-500 hover:text-navy-800'
                    )}
                  >
                    {f === 'one-time' ? 'One-Time' : (
                      <span className="flex items-center gap-1.5">
                        <RefreshCw size={12} /> Monthly
                      </span>
                    )}
                  </button>
                ))}
              </div>
              {frequency === 'monthly' && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-hope-600 font-semibold mt-2 flex items-center gap-1"
                >
                  <Sparkles size={12} />
                  Monthly donors create 3× more impact over a year
                </motion.p>
              )}
            </motion.div>

            {/* Tier grid */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-navy-800 font-heading">Select amount</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {DONATION_TIERS.map((tier, i) => (
                  <button
                    key={tier.amount}
                    onClick={() => { setSelectedTier(i); setCustomAmount('') }}
                    aria-pressed={selectedTier === i && !customAmount}
                    className={cn(
                      'relative flex flex-col items-center gap-1 p-4 rounded-xl border-2',
                      'text-center transition-all duration-200',
                      selectedTier === i && !customAmount
                        ? 'border-gold-400 bg-gold-400/8'
                        : 'border-gray-200 bg-white hover:border-gold-400/50',
                      tier.featured && 'ring-2 ring-gold-400/30'
                    )}
                  >
                    {tier.featured && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2
                                       px-2 py-0.5 rounded-full bg-gold-400 text-navy-800
                                       text-[10px] font-bold font-heading whitespace-nowrap">
                        Most Popular
                      </span>
                    )}
                    <span className="font-heading font-bold text-navy-800 text-xl">
                      ${tier.amount}
                    </span>
                    <span className="text-xs text-gray-500 leading-tight">{tier.label}</span>
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400
                                 font-semibold text-sm">
                  $
                </span>
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => { setCustomAmount(e.target.value); setSelectedTier(-1) }}
                  min="1"
                  className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-gray-200
                             text-navy-800 font-semibold text-sm placeholder:text-gray-400
                             focus:outline-none focus:border-gold-400 transition-colors"
                  aria-label="Custom donation amount"
                />
              </div>

              {/* Impact line */}
              {displayAmount > 0 && (
                <motion.div
                  key={displayAmount}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2 p-3 rounded-xl bg-gold-400/8
                             border border-gold-400/20 text-sm text-navy-800"
                >
                  <CheckCircle2 size={16} className="text-gold-400 mt-0.5 shrink-0" />
                  <span>
                    <strong>${displayAmount}</strong>{' '}
                    {frequency === 'monthly' ? 'monthly ' : ''}
                    {customAmount
                      ? '— funds where it\'s needed most'
                      : `— ${DONATION_TIERS[selectedTier]?.impact ?? ''}`}
                  </span>
                </motion.div>
              )}
            </motion.div>

            {/* Donor details */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-navy-800 font-heading">Your details</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'firstName', label: 'First name',    placeholder: 'Grace',         type: 'text' },
                  { id: 'lastName',  label: 'Last name',     placeholder: 'Mwangi',        type: 'text' },
                  { id: 'email',     label: 'Email address', placeholder: 'grace@email.com', type: 'email', full: true },
                ].map((field) => (
                  <div key={field.id} className={cn('flex flex-col gap-1.5', field.full && 'sm:col-span-2')}>
                    <label
                      htmlFor={field.id}
                      className="text-xs font-semibold text-gray-600 font-heading uppercase tracking-wide"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="px-4 py-3 rounded-xl border-2 border-gray-200
                                 text-navy-800 text-sm placeholder:text-gray-400
                                 focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Submit */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <Button
                variant="primary"
                size="xl"
                fullWidth
                iconRight={<ArrowRight size={18} />}
                onClick={() => {}}
                aria-label={`Donate $${displayAmount} ${frequency}`}
              >
                {frequency === 'monthly'
                  ? `Give $${displayAmount}/month`
                  : `Donate $${displayAmount}`}
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                <Lock size={12} aria-hidden="true" />
                Secured by Stripe · SSL encrypted · Cancel anytime
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Why give */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-8 lg:pt-8"
          >
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-navy">
              <Image
                src={UNSPLASH_IMAGES.community1}
                alt="Community members benefiting from your donations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-800/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-heading font-bold text-lg leading-snug">
                  "I used to walk 4 hours for water.<br />Now I walk 4 minutes."
                </p>
                <p className="text-white/60 text-xs mt-1">— Beneficiary, Nakuru Project</p>
              </div>
            </div>

            {/* Sponsor a project */}
            <div className="p-6 rounded-2xl bg-navy-800 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold-400/20">
                  <Globe size={20} className="text-gold-400" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-white">Sponsor a Project</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Want to name a well, sponsor a classroom, or fund an entire documentary?
                Project sponsorships start at $2,500 and include a dedicated impact report
                and your name on the project.
              </p>
              <Button href="/contact?type=sponsor" variant="outline" size="md">
                Enquire About Sponsorship
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Trust Section ────────────────────────────────────

const TRUST_POINTS = [
  {
    icon: <Shield    size={24} />,
    title: '100% Transparent',
    description: 'Every project is documented before, during, and after. We publish full financial reports annually.',
  },
  {
    icon: <Globe     size={24} />,
    title: 'Verified Communities',
    description: 'Our team visits every community before launching a campaign. No campaign is unverified.',
  },
  {
    icon: <Heart     size={24} />,
    title: 'Low Overhead',
    description: 'Over 85% of every donation goes directly to the field. Our team is lean by design.',
  },
  {
    icon: <CreditCard size={24} />,
    title: 'Secure Payments',
    description: 'All transactions are processed by Stripe — the world\'s most trusted payment platform.',
  },
]

export function DonateTrust() {
  return (
    <section className="section-py bg-white border-t border-gray-100" aria-label="Trust signals">
      <div className="container-site">
        <div className="flex flex-col items-center gap-10">
          <SectionTitle
            eyebrow="Why Give With Us"
            title="Your trust is our most important asset"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          >
            {TRUST_POINTS.map((point) => (
              <motion.div
                key={point.title}
                variants={fadeInUp}
                className="flex flex-col items-center text-center gap-4 p-6
                           rounded-2xl bg-gray-50 border border-gray-100"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl
                                bg-gold-400/10 text-gold-400">
                  {point.icon}
                </div>
                <h3 className="font-heading font-semibold text-navy-800 text-base">
                  {point.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DonateHero
