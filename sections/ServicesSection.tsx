import type { ElementType } from 'react'
import { services } from '@/data/services'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Briefcase, Code2, ShoppingBag, Edit3, Sparkles, Settings } from 'lucide-react'

const ICONS: Record<string, ElementType> = {
  Layout: Briefcase,
  Code2,
  ShoppingBag,
  Edit3,
  Sparkles,
  Settings,
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 lg:py-32 scroll-m-[100px]">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="WHAT I DO"
          titleBefore="How I can help."
          description="Practical digital solutions for modern businesses and growing brands."
        />

        <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = ICONS[service.icon]
            return (
              <article
                key={service.id}
                className="rounded-2xl border border-border bg-card p-8 lg:p-10 hover:border-lime/50 hover:shadow-[0_20px_40px_-15px_rgba(198,255,77,0.12)] transition-all duration-300 flex flex-col"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-elevated mb-6 text-lime">
                  <Icon width={20} height={20} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-secondary-text leading-relaxed mb-6 flex-1">{service.description}</p>
                <ul className="mt-auto flex flex-col gap-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2.5 text-[0.875rem] text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a
                  href={`#contact?project=${encodeURIComponent(service.title)}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-[0.85rem] font-mono text-cyan hover:text-lime transition-colors"
                >
                  {service.linkLabel} <span aria-hidden="true">→</span>
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}