import { cn } from '@/lib/utils'

export interface TechBadgeProps {
  children: React.ReactNode
  className?: string
}

export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border/70 bg-card/60 px-2.5 py-0.5 text-[0.7rem] font-mono font-medium text-secondary-text transition-colors hover:border-cyan/50 hover:text-cyan',
        className,
      )}
    >
      {children}
    </span>
  )
}