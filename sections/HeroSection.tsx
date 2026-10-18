'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { BackgroundGlow } from '@/components/ui/BackgroundGlow'
import { Button } from '@/components/ui/Button'
import { Portrait } from '@/components/ui/Portrait'
import { TechBadge } from '@/components/ui/TechBadge'

const TAGS = ['Web Applications', 'QR Menus', 'E-commerce', 'Frontend Engineering']

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export function HeroSection() {
  const reduced = useReducedMotion()

  return (
    <section id="top" className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-x-clip scroll-m-[100px]">
      <BackgroundGlow />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-6"
            initial={reduced ? false : 'hidden'}
            animate="visible"
            variants={itemVariants}
          >
            <p className="mb-4 text-[0.72rem] font-mono font-medium tracking-widest text-cyan uppercase">
              INDEPENDENT WEB DEVELOPER &middot; AVAILABLE FOR PROJECTS
            </p>
            <h1 className="font-bold text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] tracking-tight mb-6 text-balance">
              Digital experiences built to{' '}
              <span className="text-lime">move businesses forward.</span>
            </h1>
            <p className="text-secondary-text text-lg leading-relaxed max-w-3xl mb-8">
              I design and develop responsive websites and practical web applications for businesses that want to stand
              out, work smarter, and grow online.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button as="a" href="#work" size="lg">
                Explore My Work <span aria-hidden="true">↘</span>
              </Button>
              <Button variant="outline" size="lg" as="a" href="#contact">
                Start a Project <span aria-hidden="true">↗</span>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {TAGS.map((tag) => (
                <TechBadge key={tag}>{tag}</TechBadge>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 h-[480px] lg:h-[640px] w-full max-w-[560px] mx-auto lg:mx-0 group"
            initial={reduced ? false : 'hidden'}
            animate="visible"
            variants={itemVariants}
            transition={reduced ? undefined : { delay: 0.2 }}
          >
            <Portrait className="h-full w-full" />
          </motion.div>
        </div>

        <div className="mt-24 lg:mt-32 flex justify-end">
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: reduced ? 0 : 0.5 }}
            className="font-grotesk italic text-cyan text-[1.125rem] leading-relaxed"
          >
            Dean Brylle Maguate
          </motion.p>
        </div>
      </div>
    </section>
  )
}