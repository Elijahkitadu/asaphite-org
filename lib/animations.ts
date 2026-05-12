import type { Variants } from 'framer-motion'

// ─── Fade Variants ────────────────────────────────────

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const fadeInUp: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export const fadeInDown: Variants = {
  hidden:  { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const fadeInLeft: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export const fadeInRight: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

// ─── Scale Variants ───────────────────────────────────

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
}

export const scaleInSlow: Variants = {
  hidden:  { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: 'easeOut' } },
}

// ─── Stagger Containers ───────────────────────────────

export const staggerContainer: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

export const staggerContainerSlow: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
}

// ─── Hero Variants ────────────────────────────────────

export const heroContainer: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

export const heroTitle: Variants = {
  hidden:  { opacity: 0, y: 48, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export const heroSubtitle: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export const heroCTA: Variants = {
  hidden:  { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
  },
}

// ─── Card Variants ────────────────────────────────────

export const cardHover: Variants = {
  rest:  { y: 0,  boxShadow: '0 4px 24px rgba(0,0,0,0.08)' },
  hover: { y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.16)', transition: { duration: 0.3 } },
}

export const imageZoom: Variants = {
  rest:  { scale: 1 },
  hover: { scale: 1.06, transition: { duration: 0.6, ease: 'easeOut' } },
}

// ─── Progress Bar Variant ─────────────────────────────

export const progressBar = (percent: number): Variants => ({
  hidden:  { width: '0%' },
  visible: {
    width: `${percent}%`,
    transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 },
  },
})

// ─── Cinematic Reveal ─────────────────────────────────

export const cinematicReveal: Variants = {
  hidden:  { opacity: 0, y: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

// ─── Slide Up from Bottom ─────────────────────────────

export const slideUp: Variants = {
  hidden:  { y: '100%', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:    { y: '100%', opacity: 0, transition: { duration: 0.3 } },
}

// ─── Draw Line (for decorative lines) ────────────────

export const drawLine: Variants = {
  hidden:  { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 },
  },
}

// ─── Navbar Variants ──────────────────────────────────

export const navbarSlide: Variants = {
  top:      { backgroundColor: 'transparent', borderBottomColor: 'transparent' },
  scrolled: {
    backgroundColor: 'rgba(15,23,42,0.92)',
    borderBottomColor: 'rgba(255,255,255,0.06)',
    backdropFilter: 'blur(20px)',
  },
}

export const mobileMenuVariants: Variants = {
  closed: { opacity: 0, x: '100%' },
  open:   { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:   { opacity: 0, x: '100%', transition: { duration: 0.25 } },
}

// ─── Shared viewport settings ─────────────────────────

export const viewport = {
  once:   true,
  margin: '-80px',
}

export const viewportEager = {
  once:   true,
  margin: '-40px',
}
