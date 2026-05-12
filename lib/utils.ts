import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// ─── Tailwind class merger ─────────────────────────────

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ─── Currency formatting ──────────────────────────────

export function formatCurrency(
  amount: number,
  currency = 'USD',
  locale = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount)
}

// ─── Number formatting ────────────────────────────────

export function formatNumber(num: number): string {
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`
  return num.toString()
}

// ─── Date formatting ──────────────────────────────────

export function formatDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string {
  return new Date(dateString).toLocaleDateString('en-US', options)
}

export function formatDateShort(dateString: string): string {
  return formatDate(dateString, { year: 'numeric', month: 'short', day: 'numeric' })
}

export function timeAgo(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
  return `${Math.floor(diffDays / 365)} years ago`
}

// ─── Campaign progress ────────────────────────────────

export function getProgressPercent(raised: number, goal: number): number {
  if (goal <= 0) return 0
  return Math.min(Math.round((raised / goal) * 100), 100)
}

export function getDaysRemaining(endDate?: string): number | null {
  if (!endDate) return null
  const end = new Date(endDate)
  const now = new Date()
  const diffMs = end.getTime() - now.getTime()
  const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24))
  return days > 0 ? days : 0
}

// ─── Reading time ─────────────────────────────────────

export function estimateReadTime(text: string): number {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

// ─── Slug utilities ───────────────────────────────────

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// ─── Image URL helpers ────────────────────────────────

export function getUnsplashUrl(
  photoId: string,
  width = 800,
  quality = 80
): string {
  return `https://images.unsplash.com/${photoId}?w=${width}&q=${quality}&auto=format&fit=crop`
}

// ─── Clamp ────────────────────────────────────────────

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}

// ─── Truncate text ────────────────────────────────────

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).replace(/\s+\S*$/, '') + '…'
}

// ─── Category label ───────────────────────────────────

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    water: 'Clean Water',
    education: 'Education',
    healthcare: 'Healthcare',
    churches: 'Churches',
    youth: 'Youth',
    community: 'Community',
    stories: 'Stories',
    news: 'News',
    impact: 'Impact',
    partnerships: 'Partnerships',
    advocacy: 'Advocacy',
    culture: 'Culture',
  }
  return labels[category] ?? category
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    water: 'bg-blue-100 text-blue-800',
    education: 'bg-yellow-100 text-yellow-800',
    healthcare: 'bg-green-100 text-green-800',
    churches: 'bg-purple-100 text-purple-800',
    youth: 'bg-orange-100 text-orange-800',
    community: 'bg-teal-100 text-teal-800',
  }
  return colors[category] ?? 'bg-gray-100 text-gray-800'
}
