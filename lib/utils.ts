import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency = 'USD', locale = 'en-US'): string {
  return new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 0 }).format(amount)
}

export function formatNumber(num: number): string {
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`
  if (num >= 1_000)     return `${(num / 1_000).toFixed(0)}K`
  return num.toString()
}

export function formatDate(dateString: string, options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }): string {
  return new Date(dateString).toLocaleDateString('en-US', options)
}

export function formatDateShort(dateString: string): string {
  return formatDate(dateString, { year: 'numeric', month: 'short', day: 'numeric' })
}

export function getProgressPercent(raised: number, goal: number): number {
  if (goal <= 0) return 0
  return Math.min(Math.round((raised / goal) * 100), 100)
}

export function getDaysRemaining(endDate?: string): number | null {
  if (!endDate) return null
  const days = Math.ceil((new Date(endDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
  return days > 0 ? days : 0
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).replace(/\s+\S*$/, '') + '…'
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    water: 'Clean Water', education: 'Education', healthcare: 'Healthcare',
    churches: 'Churches', youth: 'Youth', community: 'Community',
    stories: 'Stories', news: 'News', impact: 'Impact',
    partnerships: 'Partnerships', advocacy: 'Advocacy', culture: 'Culture',
  }
  return labels[category] ?? category
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    water: 'bg-blue-100 text-blue-800', education: 'bg-yellow-100 text-yellow-800',
    healthcare: 'bg-green-100 text-green-800', churches: 'bg-purple-100 text-purple-800',
    youth: 'bg-orange-100 text-orange-800', community: 'bg-teal-100 text-teal-800',
    advocacy: 'bg-red-100 text-red-800', news: 'bg-gray-100 text-gray-800',
    impact: 'bg-emerald-100 text-emerald-800', partnerships: 'bg-indigo-100 text-indigo-800',
    stories: 'bg-pink-100 text-pink-800',
  }
  return colors[category] ?? 'bg-gray-100 text-gray-800'
}
