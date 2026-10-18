'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    id: 'types',
    q: 'What types of websites do you build?',
    a: 'Business websites, landing pages, e-commerce storefronts, digital QR menus, custom web applications, and UI redesigns. If you are not sure what fits, get in touch and we can figure it out together.',
  },
  {
    id: 'redesign',
    q: 'Can you redesign my existing website?',
    a: 'Yes. The UI engineering and redesign service covers responsive rebuilds, accessibility improvements, design consistency, and interface refinements — keeping your content and goals while modernizing the presentation.',
  },
  {
    id: 'responsive',
    q: 'Do you build responsive mobile-friendly websites?',
    a: 'Yes. Everything is mobile-first by default and checked across phone, tablet, and desktop viewports.',
  },
  {
    id: 'integrations',
    q: 'Can you integrate APIs or AI features?',
    a: 'Yes, where it fits the project: API connections, Gemini-powered features, and workflow automation (for example n8n). Each integration is scoped per project, and I only build what is actually useful for your workflow.',
  },
  {
    id: 'pricing',
    q: 'How does project pricing work?',
    a: 'Pricing is scoped per project. Starter and Business websites start with a quote, and custom applications are discussed case by case. The Brew & Bloom QR menu launch package has fixed pricing (₱3,500 one-time setup, ₱1,000 per month optional maintenance).',
  },
  {
    id: 'timeline',
    q: 'How long does a project take?',
    a: 'It depends on scope and complexity. I do not guarantee delivery dates until requirements are agreed — we will agree on a timeline before work begins.',
  },
  {
    id: 'maintenance',
    q: 'Do you provide maintenance after launch?',
    a: 'Yes. The maintenance and improvements package covers bug fixes, content updates, interface improvements, and performance checks. Scope, support limits, and hosting/domain fees are agreed per project.',
  },
  {
    id: 'proposal',
    q: 'How can I request a proposal?',
    a: 'Use the contact form or email deanbrylle.dev@gmail.com directly. Tell me what you are building, the problem you want to solve, and your timeline so I can scope a useful response.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<string | null>(null)
  const reduced = useReducedMotion()

  return (
    <section id="faq" className="relative py-20 lg:py-32 scroll-m-[100px]">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="FAQ"
          titleBefore="Questions?"
          description="Concise, honest answers. If yours is not here, the contact form is the fastest way to ask."
        />

        <div className="mt-16 lg:mt-20 space-y-3">
          {FAQS.map((faq) => {
            const isOpen = open === faq.id
            return (
              <div key={faq.id} className="rounded-xl border border-border bg-card">
                <button
                  onClick={() => setOpen(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                  className={cn(
                    'flex w-full items-center justify-between px-6 py-4 text-left text-sm text-secondary-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian',
                    isOpen ? 'bg-elevated text-primary-text' : 'hover:bg-elevated hover:text-primary-text',
                  )}
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp width={18} height={18} strokeWidth={2} aria-hidden="true" />
                  ) : (
                    <ChevronDown width={18} height={18} strokeWidth={2} aria-hidden="true" />
                  )}
                </button>
                <AnimatePresence mode="wait">
                  {isOpen && (
                    <motion.div
                      key="panel"
                      initial={{ height: 0 }}
                      animate={{ height: reduced ? 'auto' : 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: reduced ? 0 : 0.3 }}
                      layout
                      className="border-t border-border/50 bg-elevated/50 overflow-hidden"
                    >
                      <div className="px-6 pt-4 pb-6 text-secondary-text text-sm leading-relaxed" id={`faq-panel-${faq.id}`}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}