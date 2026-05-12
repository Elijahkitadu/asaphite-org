'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS, SITE_NAME } from '@/lib/constants'
import Button from '@/components/ui/Button'
import { useLockBodyScroll } from '@/hooks'

// ─── Logo ─────────────────────────────────────────────

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 shrink-0 group"
      aria-label={`${SITE_NAME} home`}
    >
      {/* Icon mark */}
      <div
        className={cn(
          'flex items-center justify-center w-9 h-9 rounded-lg',
          'bg-gradient-to-br from-gold-400 to-yellow-500',
          'shadow-gold transition-transform duration-300 group-hover:scale-105'
        )}
      >
        <Heart size={18} className="text-navy-800 fill-navy-800" />
      </div>
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading font-bold text-sm tracking-tight',
            light ? 'text-white' : 'text-navy-800'
          )}
        >
          The Asaphites
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-gold-400">
          Foundation
        </span>
      </div>
    </Link>
  )
}

// ─── Desktop Nav Item ─────────────────────────────────

function DesktopNavItem({
  item,
  isActive,
  light,
}: {
  item: (typeof NAV_ITEMS)[number]
  isActive: boolean
  light: boolean
}) {
  const [open, setOpen] = useState(false)

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={cn(
          'relative text-sm font-medium font-heading px-1 py-2',
          'transition-colors duration-200',
          'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full',
          'after:bg-gold-400 after:scale-x-0 after:transition-transform after:duration-300',
          'hover:after:scale-x-100',
          isActive
            ? 'text-gold-400 after:scale-x-100'
            : light
            ? 'text-white/85 hover:text-white'
            : 'text-navy-800/75 hover:text-navy-800'
        )}
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={cn(
          'flex items-center gap-1 text-sm font-medium font-heading px-1 py-2',
          'transition-colors duration-200',
          isActive
            ? 'text-gold-400'
            : light
            ? 'text-white/85 hover:text-white'
            : 'text-navy-800/75 hover:text-navy-800'
        )}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          size={14}
          className={cn(
            'transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className={cn(
              'absolute top-full left-1/2 -translate-x-1/2 mt-1 w-48',
              'bg-white rounded-xl shadow-navy border border-gray-100',
              'py-2 z-50'
            )}
          >
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  'block px-4 py-2 text-sm font-medium text-navy-800/70',
                  'hover:text-navy-800 hover:bg-gray-50 transition-colors'
                )}
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Mobile Menu ──────────────────────────────────────

function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean
  onClose: () => void
  pathname: string
}) {
  useLockBodyScroll(open)

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navy-800/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={cn(
              'fixed inset-y-0 right-0 z-50 w-[min(320px,90vw)]',
              'bg-navy-800 shadow-2xl flex flex-col'
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <Logo light />
              <button
                onClick={onClose}
                className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10
                           transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      'block px-4 py-3 rounded-xl text-base font-medium font-heading',
                      'transition-colors duration-200',
                      pathname === item.href
                        ? 'text-gold-400 bg-white/8'
                        : 'text-white/75 hover:text-white hover:bg-white/8'
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer CTA */}
            <div className="p-6 border-t border-white/10">
              <Button href="/donate" variant="primary" size="lg" fullWidth>
                Donate Now
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ─── Navbar ───────────────────────────────────────────

function NavbarInner() {
  const pathname   = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  // Is the page a "light" page (dark bg hero) or plain white page?
  const isHeroPage = pathname === '/' || pathname === '/about' || pathname === '/stories'
  const light      = isHeroPage && !scrolled

  return (
    <>
      <motion.header
        initial={false}
        animate={scrolled ? 'scrolled' : 'top'}
        variants={{
          top:      { backgroundColor: 'rgba(15,23,42,0)', borderBottomColor: 'rgba(255,255,255,0)' },
          scrolled: { backgroundColor: 'rgba(15,23,42,0.92)', borderBottomColor: 'rgba(255,255,255,0.06)' },
        }}
        transition={{ duration: 0.3 }}
        style={{ backdropFilter: scrolled ? 'blur(20px)' : 'none' }}
        className={cn(
          'fixed top-0 inset-x-0 z-[100]',
          'border-b transition-[border-color] duration-300',
          !scrolled && 'border-transparent'
        )}
        role="banner"
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 sm:h-18">
            <Logo light={light} />

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {NAV_ITEMS.filter(n => n.label !== 'Home').map((item) => (
                <DesktopNavItem
                  key={item.href}
                  item={item}
                  isActive={pathname === item.href}
                  light={light}
                />
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                href="/donate"
                variant="primary"
                size="sm"
                iconRight={<Heart size={14} className="fill-navy-800" />}
              >
                Donate
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                'lg:hidden p-2 rounded-lg transition-colors',
                light
                  ? 'text-white/80 hover:text-white hover:bg-white/10'
                  : 'text-navy-800 hover:bg-navy-800/8'
              )}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  )
}

export default function Navbar() {
  return (
    <Suspense fallback={null}>
      <NavbarInner />
    </Suspense>
  )
}