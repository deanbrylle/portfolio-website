'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { ContactForm } from '@/forms/ContactForm'
import { SectionHeading } from '@/components/ui/SectionHeading'

function ContactFormWithProject() {
  const searchParams = useSearchParams()
  const project = searchParams.get('project') ?? undefined
  return <ContactForm key={project ?? 'default'} defaultProject={project} />
}

const CHANNELS = [
  {
    label: 'Email',
    value: 'deanbrylle.dev@gmail.com',
    href: 'mailto:deanbrylle.dev@gmail.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+63 993 922 6715',
    href: 'tel:+639939226715',
    icon: Phone,
  },
  {
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: 'https://wa.me/639939226715',
    icon: MessageCircle,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 lg:py-32 scroll-m-[100px]">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="CONTACT"
          titleBefore="Let's craft something memorable."
          description="Need a landing page, product site, or personal portfolio that genuinely reflects your work? Tell me about your project."
        />

        <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-8 lg:p-10">
            <Suspense fallback={<p className="text-sm text-muted">Loading form…</p>}>
              <ContactFormWithProject />
            </Suspense>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
              <h3 className="font-mono text-xs text-cyan uppercase tracking-widest mb-6">
                Reach me directly
              </h3>
              <ul className="flex flex-col gap-4">
                {CHANNELS.map((channel) => {
                  const Icon = channel.icon
                  return (
                    <li key={channel.label}>
                      <a
                        href={channel.href}
                        target={channel.href.startsWith('http') ? '_blank' : undefined}
                        rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-3 text-sm text-secondary-text hover:text-lime transition-colors"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-elevated text-lime">
                          <Icon width={18} height={18} strokeWidth={2} aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block font-mono text-[0.7rem] text-muted uppercase tracking-wider">
                            {channel.label}
                          </span>
                          {channel.value}
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>
              <p className="mt-6 text-[0.8rem] text-muted leading-relaxed">
                Prefer LinkedIn? Find me in the footer. I usually reply within one business day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
