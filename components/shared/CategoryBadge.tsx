import { cn, getCategoryLabel, getCategoryColor } from '@/lib/utils'

interface Props { category: string; className?: string; size?: 'sm' | 'md' }

export default function CategoryBadge({ category, className, size = 'sm' }: Props) {
  return (
    <span className={cn('inline-flex items-center font-heading font-semibold uppercase tracking-wider rounded-full', size === 'sm' ? 'text-[10px] px-2.5 py-1' : 'text-xs px-3 py-1.5', getCategoryColor(category), className)}>
      {getCategoryLabel(category)}
    </span>
  )
}
