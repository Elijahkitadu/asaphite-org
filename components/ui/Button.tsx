'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'outline-gold' | 'ghost'
type Size    = 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:   Variant
  size?:      Size
  loading?:   boolean
  href?:      string
  external?:  boolean
  icon?:      React.ReactNode
  iconRight?: React.ReactNode
  fullWidth?: boolean
}

const variantStyles: Record<Variant, string> = {
  primary:       'bg-gradient-to-r from-gold-400 to-yellow-400 text-navy-800 shadow-[0_4px_24px_rgba(212,160,23,0.35)] hover:shadow-[0_8px_32px_rgba(212,160,23,0.5)] hover:-translate-y-0.5 font-semibold',
  outline:       'border-2 border-white/40 text-white backdrop-blur-sm hover:border-white/80 hover:bg-white/10 hover:-translate-y-0.5',
  'outline-gold':'border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-800 hover:-translate-y-0.5',
  ghost:         'text-navy-800 hover:bg-navy-800/8 hover:-translate-y-0.5',
}

const sizeStyles: Record<Size, string> = {
  sm:  'px-4 py-2 text-sm rounded-full gap-1.5',
  md:  'px-6 py-3 text-sm rounded-full gap-2',
  lg:  'px-8 py-3.5 text-base rounded-full gap-2',
  xl:  'px-10 py-4 text-lg rounded-full gap-2.5',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'primary', size = 'md', loading = false, href, external, icon, iconRight, fullWidth, className, children, disabled, ...props }, ref) => {
  const classes = cn('inline-flex items-center justify-center font-heading transition-all duration-300 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:translate-y-0', variantStyles[variant], sizeStyles[size], fullWidth && 'w-full', className)
  const content = (<>{loading ? <Loader2 className="animate-spin" size={16} /> : icon ? <span className="shrink-0">{icon}</span> : null}{children}{iconRight && !loading && <span className="shrink-0">{iconRight}</span>}</>)
  if (href) {
    if (external) return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{content}</a>
    return <Link href={href} className={classes}>{content}</Link>
  }
  return <button ref={ref} disabled={disabled || loading} className={classes} {...props}>{content}</button>
})
Button.displayName = 'Button'
export default Button
