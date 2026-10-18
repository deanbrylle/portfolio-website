'use client'

import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Portrait({ className }: { className?: string }) {
  const [hasImage, setHasImage] = React.useState<boolean | null>(null)

  return (
    <div className={cn('relative', className)}>
      <div
        className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-lime/20 via-transparent to-cyan/20 opacity-0 group-hover:opacity-60 transition-opacity duration-700"
        aria-hidden="true"
      />
      <div className="relative rounded-2xl border border-border bg-card overflow-hidden shadow-2xl">
        <Image
          src="/images/portrait.png"
          alt="Portrait of Dean Brylle Maguate"
          fill
          sizes="(max-width: 768px) 100vw, 560px"
          priority
          className="object-cover object-center"
          onLoad={() => setHasImage(true)}
          onError={() => setHasImage(false)}
        />
      </div>
      {hasImage === false && (
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-border/60 bg-card/90 backdrop-blur-sm">
          <div className="rounded-full bg-lime/10 p-3 mb-3">
            <span className="text-lime font-grotesk font-bold text-2xl">DM</span>
          </div>
          <p className="text-muted text-xs font-mono">Portrait placeholder — add public/images/portrait.png</p>
        </div>
      )}
    </div>
  )
}