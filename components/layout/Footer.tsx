'use client'

import Link from 'next/link'
import { Heart, Mail, MapPin, Phone, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { SITE_NAME, SITE_EMAIL, SITE_PHONE, SITE_LOCATION, SOCIAL_LINKS } from '@/lib/constants'

const FOOTER_LINKS = {
  'Our Work':     [
    { label: 'Stories',         href: '/stories' },
    { label: 'Church Partners', href: '/church'  },
    { label: 'Blog',            href: '/blog'    },
  ],
  'Foundation':   [
    { label: 'About Us',    href: '/about'          },
    { label: 'Our Mission', href: '/about#mission'  },
    { label: 'Our Values',  href: '/about#values'   },
  ],
  'Connect':      [
    { label: 'Contact Us',      href: '/contact' },
    { label: 'Church Partners', href: '/church'  },
  ],
}

const SOCIALS = [
  { href: SOCIAL_LINKS.facebook,  icon: <Facebook  size={18} />, label: 'Facebook'  },
  { href: SOCIAL_LINKS.instagram, icon: <Instagram size={18} />, label: 'Instagram' },
  { href: SOCIAL_LINKS.twitter,   icon: <Twitter   size={18} />, label: 'Twitter'   },
  { href: SOCIAL_LINKS.youtube,   icon: <Youtube   size={18} />, label: 'YouTube'   },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-800 text-white" role="contentinfo">
      <div className="container-site py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

          {/* Brand */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-yellow-500 shadow-gold transition-transform duration-300 group-hover:scale-105">
                <Heart size={20} className="text-navy-800 fill-navy-800" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-white">The Asaphites</span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-gold-400">Foundation</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              A storytelling foundation based in Tanzania, using film and photography to reveal community needs and deliver hope.
            </p>
            <p className="text-white/40 text-xs leading-relaxed max-w-xs italic">
              Currently undergoing official registration. Want to support us? Get in touch directly.
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/55">
              <a href={`mailto:${SITE_EMAIL}`} className="flex items-center gap-2 hover:text-gold-400 transition-colors"><Mail size={15} />{SITE_EMAIL}</a>
              <a href={`tel:${SITE_PHONE}`}    className="flex items-center gap-2 hover:text-gold-400 transition-colors"><Phone size={15} />{SITE_PHONE}</a>
              <span className="flex items-center gap-2"><MapPin size={15} />{SITE_LOCATION}</span>
            </div>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Follow on ${label}`}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/8 border border-white/10 text-white/60 hover:text-gold-400 hover:border-gold-400/50 hover:bg-gold-400/10 transition-all duration-200">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group}>
                <h3 className="font-heading font-semibold text-white text-sm mb-4 tracking-wide">{group}</h3>
                <ul className="flex flex-col gap-2.5" role="list">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-white/55 hover:text-gold-400 transition-colors duration-200">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div>
              <h3 className="font-heading font-semibold text-white text-sm mb-1 tracking-wide">Stay Connected</h3>
              <p className="text-white/55 text-sm leading-relaxed">Stories from Tanzania, straight to your inbox.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" required className="flex-1 px-4 py-2.5 rounded-full text-sm bg-white/8 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-gold-400 transition-colors" />
              <button type="submit" className="shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold font-heading bg-gold-400 text-navy-800 hover:bg-yellow-400 transition-colors whitespace-nowrap">Subscribe</button>
            </form>
            <p className="text-white/30 text-xs">Want to support our work? <Link href="/contact" className="text-gold-400 hover:underline">Get in touch</Link></p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">© {year} {SITE_NAME}. All rights reserved.</p>
          <p className="text-xs text-white/25 flex items-center gap-1">Designed by Elia Kitadu</p>
        </div>
      </div>
    </footer>
  )
}
