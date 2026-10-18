import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { QRCodeSVG } from 'qrcode.react'
import { projects } from '@/data/projects'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TechBadge } from '@/components/ui/TechBadge'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: 'Project not found' }
  return {
    title: project.title,
    description: project.description,
  }
}

const CASE_STUDY_FIELDS = [
  { key: 'overview', label: 'Overview' },
  { key: 'problem', label: 'Problem' },
  { key: 'role', label: 'My role' },
  { key: 'approach', label: 'Approach' },
  { key: 'implementation', label: 'Implementation' },
  { key: 'challenges', label: 'Challenges' },
  { key: 'outcomes', label: 'Outcomes' },
  { key: 'important', label: 'Important note' },
] as const

export default async function WorkCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <div className="container mx-auto px-6 py-20 lg:py-28">
      <Link
        href="/#work"
        className="inline-flex items-center gap-1.5 text-[0.85rem] font-mono text-cyan hover:text-lime transition-colors"
      >
        ← Back to work
      </Link>

      <div className="mt-8">
        <SectionHeading
          eyebrow={project.category.toUpperCase()}
          titleBefore={project.title}
          description={project.description}
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {project.technologies.map((t) => (
          <TechBadge key={t}>{t}</TechBadge>
        ))}
        {project.status === 'concept' && (
          <span className="text-[0.7rem] font-mono text-muted border border-border/60 rounded px-2 py-0.5">
            Concept
          </span>
        )}
      </div>

      {project.image && (
        <div className="relative mt-12 h-64 md:h-96 overflow-hidden rounded-2xl border border-border">
          <Image
            src={project.image}
            alt={project.alt ?? `${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 1100px"
            className="object-cover object-center"
            priority
          />
        </div>
      )}

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 flex flex-col gap-8">
          {CASE_STUDY_FIELDS.map(({ key, label }) => {
            const value = project.caseStudy[key]
            if (!value) return null
            return (
              <section key={key} className="rounded-2xl border border-border bg-card p-8">
                <h2 className="font-mono text-xs text-cyan uppercase tracking-widest mb-4">
                  {label}
                </h2>
                <p className="text-secondary-text leading-relaxed">{value}</p>
              </section>
            )
          })}
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-2xl border border-border bg-card p-8 flex flex-col gap-6">
            {project.liveUrl ? (
              <>
                <Button as="a" href={project.liveUrl} target="_blank" rel="noopener">
                  Open live site <span aria-hidden="true">↗</span>
                </Button>
                {project.slug === 'brew-and-bloom' && (
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-primary-text p-2 rounded-lg">
                      <QRCodeSVG value={project.liveUrl} size={120} />
                    </div>
                    <span className="text-[0.7rem] font-mono text-muted">
                      Scan to open the live menu
                    </span>
                  </div>
                )}
              </>
            ) : (
              <p className="text-sm text-muted leading-relaxed">
                This is a design concept — there is no live site yet.
              </p>
            )}
            <Button variant="outline" as="a" href="/#contact">
              Discuss a similar project <span aria-hidden="true">→</span>
            </Button>
          </div>
        </aside>
      </div>
    </div>
  )
}
