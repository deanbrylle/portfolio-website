'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { Portrait } from '@/components/ui/Portrait'
import { SectionHeading } from '@/components/ui/SectionHeading'

const VALUES = [
  'Clear communication',
  'Practical problem-solving',
  'Responsive-first development',
  'Maintainable code',
  'Thoughtful user experience',
  'Continuous learning',
]

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  return (
    <section id="about" className="relative py-20 lg:py-32 scroll-m-[100px]">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={reduced ? {} : { opacity: 0, y: 24 }}
          animate={reduced ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <SectionHeading
            eyebrow="ABOUT ME"
            titleBefore="A developer who thinks beyond the interface."
            description="I build digital products that are visually polished, responsive, useful, and easy to navigate — interfaces that serve both the people using them and the businesses behind them."
          />
        </motion.div>

        <div className="mt-20 lg:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={reduced ? {} : { opacity: 0, y: 24 }}
              animate={reduced ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="h-[460px] w-full max-w-[520px] mx-auto lg:mx-0 group"
            >
              <Portrait className="h-full w-full" />
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={reduced ? {} : { opacity: 0, y: 24 }}
              animate={reduced ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-6"
            >
              <p className="text-secondary-text leading-relaxed">
                My approach is practical: understand the problem first, then build the simplest interface that solves it
                well. I prefer projects with a clear purpose — a cafe that needs a digital menu, a brand that needs a
                storefront, or a team that needs an internal tool that actually gets used.
              </p>
              <div className="mt-4">
                <h3 className="font-mono text-xs text-cyan uppercase tracking-widest mb-3">Professional values</h3>
                <ul className="space-y-3">
                  {VALUES.map((value) => (
                    <li key={value} className="flex items-start gap-3 text-secondary-text leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime mt-[0.35rem] shrink-0" aria-hidden="true" />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#process"
                className="inline-flex items-center gap-1.5 mt-8 text-[0.85rem] font-mono text-cyan hover:text-lime transition-colors"
              >
                More about my approach <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}