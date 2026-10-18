'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRight } from 'lucide-react'

const STEPS = [
  { step: '01', title: 'Discover', description: 'Understand the business, target audience, goals, and project requirements.' },
  { step: '02', title: 'Plan and Design', description: 'Organize content, establish visual direction, and plan the responsive interface.' },
  { step: '03', title: 'Build and Test', description: 'Implement the website or application, connect necessary integrations, and test key interactions.' },
  { step: '04', title: 'Launch and Improve', description: 'Deploy the product, verify important user journeys, and plan future improvements.' },
]

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const inView = true
  const visible = reduced || inView
  void ref

  return (
    <section id="process" className="relative py-20 lg:py-32 scroll-m-[100px]">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="MY PROCESS"
          titleBefore="From idea to launch."
          description="A clear four-step process so you always know where things stand."
        />

        <div className="mt-16 lg:mt-20">
          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:block">
            <div className="relative flex items-end gap-12">
              {STEPS.map((step, index) => (
                <div key={step.step} className="flex flex-col items-center gap-4 w-full max-w-xs">
                  <motion.div
                    initial={visible ? {} : { opacity: 0, y: 20 }}
                    animate={visible ? {} : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-lime text-obsidian font-grotesk font-bold text-sm shadow-lg"
                  >
                    {step.step}
                  </motion.div>
                  <motion.h3
                    initial={visible ? {} : { opacity: 0 }}
                    animate={visible ? {} : { opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                    className="font-bold text-lg"
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    initial={visible ? {} : { opacity: 0 }}
                    animate={visible ? {} : { opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="text-muted text-sm leading-relaxed text-center max-w-xs"
                  >
                    {step.description}
                  </motion.p>
                  {index < STEPS.length - 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] h-px bg-border/50" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden space-y-12">
            {STEPS.map((step, index) => (
              <div key={step.step} className="relative pl-10">
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-lime" aria-hidden="true" />
                {index < STEPS.length - 1 && (
                  <div className="absolute left-0 top-8 w-px h-[calc(100%-24px)] bg-border/50" aria-hidden="true" />
                )}
                <motion.div
                  initial={visible ? {} : { opacity: 0, x: -20 }}
                  animate={visible ? {} : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="shrink-0 font-mono text-sm text-lime">{step.step}</span>
                  <div>
                    <h3 className="font-bold text-lg">{step.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {index < STEPS.length - 1 && <ArrowRight width={16} height={16} strokeWidth={2} className="ml-1 text-muted" aria-hidden="true" />}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}