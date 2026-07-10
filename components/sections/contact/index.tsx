'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Facebook, Instagram, Twitter, Youtube, Send, CheckCircle2, ArrowRight } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { staggerContainer, fadeInUp, fadeInRight, viewport } from '@/lib/animations'
import { SITE_EMAIL, SITE_PHONE, SITE_WHATSAPP, SITE_LOCATION, SOCIAL_LINKS, UNSPLASH_IMAGES } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function ContactHero() {
  return (
    <PageHero
      eyebrow="Contact Us"
      title="We would love to hear from you."
      subtitle="We are a small team in Tanzania. We read every message and we will reply personally."
      image={UNSPLASH_IMAGES.wamasai}
      imageAlt="Our team in Tanzania"
      minHeight="min-h-[45vh]"
    />
  )
}

const INQUIRY_TYPES = [
  { id: 'general',     label: 'General'         },
  { id: 'partnership', label: 'Church Partner'  },
  { id: 'donation',    label: 'Giving'          },
  { id: 'media',       label: 'Media / Press'   },
  { id: 'volunteer',   label: 'Volunteering'    },
]

const SOCIAL_LIST = [
  { href: SOCIAL_LINKS.facebook,  icon: <Facebook  size={18} />, label: 'Facebook',  handle: '@asaphitesfoundation' },
  { href: SOCIAL_LINKS.instagram, icon: <Instagram size={18} />, label: 'Instagram', handle: '@asaphitesfoundation' },
  { href: SOCIAL_LINKS.twitter,   icon: <Twitter   size={18} />, label: 'Twitter',   handle: '@asaphitesfound'      },
  { href: SOCIAL_LINKS.youtube,   icon: <Youtube   size={18} />, label: 'YouTube',   handle: 'Asaphites Foundation' },
]

export function ContactContent() {
  const [submitted,    setSubmitted]    = useState(false)
  const [loading,      setLoading]      = useState(false)
  const [inquiryType,  setInquiryType]  = useState('general')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="section-py bg-background" aria-label="Contact">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left — info */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="lg:col-span-2 flex flex-col gap-8">
            <SectionTitle eyebrow="Reach Us" title="Get in touch." align="left" className="max-w-none" />

            <motion.div variants={staggerContainer} className="flex flex-col gap-5">
              {[
                { icon: <Mail size={20} />,          label: 'Email',     value: SITE_EMAIL,              href: `mailto:${SITE_EMAIL}`, note: 'We reply within 24–48 hours'       },
                { icon: <Phone size={20} />,         label: 'Phone',     value: SITE_PHONE,              href: `tel:${SITE_PHONE}`,    note: 'Mon–Fri, 9am–5pm EAT'             },
                { icon: <MessageCircle size={20} />, label: 'WhatsApp',  value: SITE_PHONE,              href: `https://wa.me/${SITE_WHATSAPP}`, note: 'Fastest way to reach us' },
                { icon: <MapPin size={20} />,        label: 'Location',  value: SITE_LOCATION,           href: undefined,              note: 'Tanzania-based, field trips nationwide' },
              ].map(item => (
                <motion.div key={item.label} variants={fadeInUp} className="flex gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gold-400/10 text-gold-400 shrink-0">{item.icon}</div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider font-heading">{item.label}</span>
                    {item.href
                      ? <a href={item.href} className="text-navy-800 font-medium text-sm hover:text-gold-400 transition-colors">{item.value}</a>
                      : <span className="text-navy-800 font-medium text-sm">{item.value}</span>}
                    <span className="text-gray-400 text-xs">{item.note}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="h-px bg-gray-100" />

            <motion.div variants={staggerContainer} className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-navy-800 font-heading">Follow Our Work</p>
              <div className="flex flex-col gap-3">
                {SOCIAL_LIST.map(social => (
                  <motion.a key={social.label} variants={fadeInUp} href={social.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-500 hover:text-navy-800 transition-colors group" aria-label={`Follow on ${social.label}`}>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-500 group-hover:bg-gold-400/10 group-hover:text-gold-400 transition-all duration-200">
                      {social.icon}
                    </div>
                    <div className="flex flex-col gap-0">
                      <span className="font-medium text-navy-800 text-xs">{social.label}</span>
                      <span className="text-gray-400 text-xs">{social.handle}</span>
                    </div>
                    <ArrowRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewport} className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-7 sm:p-9">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-5 py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-hope-100 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-hope-500" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading font-bold text-navy-800 text-2xl">Message received!</h3>
                    <p className="text-gray-500 max-w-sm">We are a small team but we will reply personally. Give us 24–48 hours.</p>
                  </div>
                  <Button variant="outline-gold" size="md" onClick={() => setSubmitted(false)}>Send Another</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6" aria-label="Contact form" noValidate>
                  <div className="flex flex-col gap-1">
                    <h2 className="font-heading font-bold text-navy-800 text-xl">Send us a message</h2>
                    <p className="text-gray-500 text-sm">We read every message personally.</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-gray-600 font-heading uppercase tracking-wide">What is this about? *</label>
                    <div className="flex flex-wrap gap-2" role="group">
                      {INQUIRY_TYPES.map(type => (
                        <button key={type.id} type="button" onClick={() => setInquiryType(type.id)} aria-pressed={inquiryType === type.id}
                          className={cn('px-3 py-1.5 rounded-full text-xs font-semibold font-heading border transition-all',
                            inquiryType === type.id ? 'bg-navy-800 text-white border-navy-800' : 'border-gray-200 text-gray-500 hover:border-navy-800 hover:text-navy-800')}>
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: 'name',    label: 'Your name *',    placeholder: 'Amina Hassan',          type: 'text'  },
                      { id: 'phone',   label: 'Phone / WhatsApp', placeholder: '+255 000 000 000',    type: 'tel'   },
                      { id: 'email',   label: 'Email *',        placeholder: 'amina@email.com',       type: 'email' },
                      { id: 'subject', label: 'Subject *',      placeholder: 'How can we help?',      type: 'text'  },
                    ].map(field => (
                      <div key={field.id} className="flex flex-col gap-1.5">
                        <label htmlFor={`c-${field.id}`} className="text-xs font-semibold text-gray-600 font-heading uppercase tracking-wide">{field.label}</label>
                        <input id={`c-${field.id}`} type={field.type} placeholder={field.placeholder} required={field.label.includes('*')}
                          className="px-4 py-3 rounded-xl border-2 border-gray-200 text-navy-800 text-sm placeholder:text-gray-400 focus:outline-none focus:border-gold-400 transition-colors" />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="c-message" className="text-xs font-semibold text-gray-600 font-heading uppercase tracking-wide">Message *</label>
                    <textarea id="c-message" rows={4} required placeholder="Tell us what is on your mind…"
                      className="px-4 py-3 rounded-xl border-2 border-gray-200 text-navy-800 text-sm placeholder:text-gray-400 focus:outline-none focus:border-gold-400 transition-colors resize-none" />
                  </div>

                  <Button variant="primary" size="lg" fullWidth loading={loading} icon={!loading ? <Send size={16} /> : undefined} type="submit">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
