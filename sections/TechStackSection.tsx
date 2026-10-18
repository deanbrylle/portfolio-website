import { skills } from '@/data/skills'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TechBadge } from '@/components/ui/TechBadge'

export function TechStackSection() {
  return (
    <section id="tech" className="relative py-20 lg:py-32 bg-graphite/50 scroll-m-[100px]">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="MY TOOLKIT"
          titleBefore="Tools I use to build."
          description="Modern technologies for responsive interfaces, scalable applications, and practical digital products."
        />

        <div className="mt-16 lg:mt-20 grid gap-8 lg:grid-cols-2">
          {skills.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-border bg-card p-8 lg:p-10"
            >
              <h3 className="font-mono text-sm text-cyan uppercase tracking-widest mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <TechBadge key={item}>{item}</TechBadge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-[0.85rem] text-muted max-w-xl">
          No arbitrary proficiency percentages — I only list technologies I have actually used in client or project work.
        </p>
      </div>
    </section>
  )
}