import { cn } from '@/lib/utils'

export interface SectionHeadingProps {
  eyebrow?: string
  titleBefore: string
  titleHighlight?: string
  description?: string
  className?: string
}

export function SectionHeading({ eyebrow, titleBefore, titleHighlight, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', className)}>
      {eyebrow && (
        <p className="mb-3 text-[0.72rem] font-mono font-medium tracking-widest text-cyan uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="font-bold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.15] tracking-tight mb-6">
        {titleBefore}
        {titleHighlight && <span className="text-lime">{titleHighlight}</span>}
      </h2>
      {description && (
        <p className="text-secondary-text text-lg leading-relaxed text-balance">{description}</p>
      )}
    </div>
  )
}