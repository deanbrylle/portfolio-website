import { packages, brewBloomLaunch } from '@/data/pricing'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { ChevronRight } from 'lucide-react'

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-20 lg:py-32 scroll-m-[100px]">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="PRICING"
          titleBefore="Clear scope. Thoughtful execution."
          description="Every project is scoped to your needs. The packages below are starting points — confirmed pricing is agreed in writing before work begins."
        />

        <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <article key={pkg.id} className="rounded-2xl border border-border bg-card p-8 lg:p-10 flex flex-col">
              <div className="flex items-start gap-2 mb-6">
                <span className="font-mono text-[0.7rem] text-cyan">{pkg.priceNote}</span>
              </div>
              <h3 className="font-bold text-xl lg:text-2xl mb-3">{pkg.title}</h3>
              <p className="text-secondary-text leading-relaxed mb-6 flex-1">{pkg.subtitle}</p>
              <ul className="mt-auto space-y-3">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.875rem] text-secondary-text leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime mt-[0.35rem] shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" as="a" href={pkg.href} className="w-full lg:w-auto">
                {pkg.cta} <ChevronRight width={16} height={16} strokeWidth={2} />
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-16 lg:mt-20 rounded-2xl border border-lime/30 bg-lime/05 p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2">{brewBloomLaunch.title}</h3>
              <p className="text-muted text-sm">{brewBloomLaunch.subtitle}</p>
            </div>
            <div className="text-right lg:text-left">
              <p className="font-grotesk font-bold text-xl text-lime">{brewBloomLaunch.setupPrice}</p>
              <p className="text-secondary-text text-sm">{brewBloomLaunch.maintenance}</p>
            </div>
          </div>
          <ul className="mt-8 space-y-3 text-secondary-text text-sm leading-relaxed">
            {brewBloomLaunch.includes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-lime mt-[0.35rem] shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[0.8rem] text-muted leading-relaxed">{brewBloomLaunch.scopeNote}</p>
        </div>

        <p className="mt-12 text-[0.8rem] text-muted max-w-xl">
          All packages include a written scope before work starts. Contact me to agree on inclusions, timeline, and pricing for your project.
        </p>
      </div>
    </section>
  )
}