'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export type ButtonProps = (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
) & {
  variant?: 'lime' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
}

const variants: Record<string, string> = {
  lime:
    'bg-lime text-obsidian shadow-[0_0_20px_rgba(198,255,77,0.20)] hover:bg-lime/90 hover:shadow-[0_0_30px_rgba(198,255,77,0.30)] active:bg-lime/80',
  outline: 'border border-border hover:border-lime/60 hover:bg-lime/05 active:bg-lime/10',
  ghost: 'hover:bg-elevated active:bg-card',
}

const sizes: Record<string, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export const Button = React.forwardRef<any, ButtonProps>(
  ({ className, variant = 'lime', size = 'md', as = 'button', ...props }, ref) => {
    if (as === 'a') {
      const { type: _ignored, ...anchorProps } = props as Record<string, unknown>
      void _ignored
      return (
        <a
          ref={ref}
          className={cn(
            'inline-flex items-center justify-center gap-2 rounded-xl font-grotesk font-semibold text-primary-text transition-colors duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian disabled:opacity-50 disabled:pointer-events-none',
            variants[variant],
            sizes[size],
            className,
          )}
          {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      )
    }
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl font-grotesk font-semibold text-primary-text transition-colors duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className,
        )}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    )
  },
)

Button.displayName = 'Button'