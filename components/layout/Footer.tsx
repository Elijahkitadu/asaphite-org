'use client'

import Link from 'next/link'
import { Heart, Mail, MapPin, Phone, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react'
import {
  SITE_NAME,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_LOCATION,
  SOCIAL_LINKS,
  NAV_ITEMS,
} from '@/lib/constants'

const SOCIAL_ICONS = [
  { href: SOCIAL_LINKS.facebook,  icon: <Facebook  size={18} />, label: 'Facebook'  },
  { href: SOCIAL_LINKS.instagram, icon: <Instagram size={18} />, label: 'Instagram' },
  { href: SOCIAL_LINKS.twitter,   icon: <Twitter   size={18} />, label: 'Twitter'   },
  { href: SOCIAL_LINKS.youtube,   icon: <Youtube   size={18} />, label: 'YouTube'   },
  { href: SOCIAL_LINKS.linkedin,  icon: <Linkedin  size={18} />, label: 'LinkedIn'  },
]

const FOOTER_LINKS = {
  'Our Work': [
    { label: 'Stories',           href: '/stories'   },
    { label: 'Campaigns',         href: '/campaigns' },
    { label: 'Impact',            href: '/impact'    },
    { label: 'Blog',              href: '/blog'      },
  ],
  'Get Involved': [
    { label: 'Donate',            href: '/donate'            },
    { label: 'Church Partners',   href: '/church'            },
    { label: 'Volunteer',         href: '/contact?type=volunteer' },
    { label: 'Contact Us',        href: '/contact'           },
  ],
  'Foundation': [
    { label: 'About Us',          href: '/about'     },
    { label: 'Our Mission',       href: '/about#mission' },
    { label: 'Leadership',        href: '/about#team'    },
    { label: 'Privacy Policy',    href: '/privacy'       },
  ],
}

// ─── Newsletter Form ──────────────────────────────────

function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-sm"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Newsletter signup"
    >
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        type="email"
        placeholder="Your email address"
        required
        className="flex-1 px-4 py-2.5 rounded-full text-sm bg-white/8 border border-white/15
                   text-white placeholder:text-white/40 focus:outline-none focus:border-gold-400
                   transition-colors"
      />
      <button
        type="submit"
        className="shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold font-heading
                   bg-gold-400 text-navy-800 hover:bg-yellow-400
                   transition-colors duration-200 whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  )
}

// ─── Footer ───────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-800 text-white" role="contentinfo">
      {/* Main footer */}
      <div className="container-site py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

          {/* Brand column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group w-fit" aria-label="Go to homepage">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg
                              bg-gradient-to-br from-gold-400 to-yellow-500 shadow-gold
                              transition-transform duration-300 group-hover:scale-105">
                <Heart size={20} className="text-navy-800 fill-navy-800" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-white">The Asaphites</span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-gold-400">Foundation</span>
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Healing the community through storytelling by visualizing needs and delivering hope.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 text-sm text-white/55">
              <a href={`mailto:${SITE_EMAIL}`}
                 className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Mail size={15} aria-hidden="true" />
                {SITE_EMAIL}
              </a>
              <a href={`tel:${SITE_PHONE}`}
                 className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Phone size={15} aria-hidden="true" />
                {SITE_PHONE}
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={15} aria-hidden="true" />
                {SITE_LOCATION}
              </span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {SOCIAL_ICONS.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`}
                  className="flex items-center justify-center w-9 h-9 rounded-full
                             bg-white/8 border border-white/10 text-white/60
                             hover:text-gold-400 hover:border-gold-400/50 hover:bg-gold-400/10
                             transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group}>
                <h3 className="font-heading font-semibold text-white text-sm mb-4 tracking-wide">
                  {group}
                </h3>
                <ul className="flex flex-col gap-2.5" role="list">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/55 hover:text-gold-400
                                   transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div>
              <h3 className="font-heading font-semibold text-white text-sm mb-1 tracking-wide">
                Stay Connected
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Stories of hope, straight to your inbox.
              </p>
            </div>
            <NewsletterForm />

            {/* Trust badge */}
            <div className="flex items-center gap-2 text-xs text-white/35 mt-2">
              <Heart size={12} className="fill-gold-400 text-gold-400 shrink-0" />
              <span>We never share your information. Unsubscribe anytime.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35 text-center sm:text-left">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-white/25 flex items-center gap-1">
            Made with <Heart size={10} className="fill-gold-400 text-gold-400" /> for communities worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}