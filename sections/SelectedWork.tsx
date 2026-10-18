'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { QRCodeSVG } from 'qrcode.react'
import { projects } from '@/data/projects'
import { Project } from '@/data/projects'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TechBadge } from '@/components/ui/TechBadge'
import type { Variants } from 'framer-motion'

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}
const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function PreviewPlaceholder({ project }: { project: Project }) {
  const shortName = project.title.split(' — ')[0]
  return (
    <div className="relative h-full w-full bg-graphite border-y border-border flex items-center justify-center">
      <div className="text-center px-4">
        <div className="inline-flex items-center gap-1.5 mb-2 rounded-xl border border-border/60 bg-elevated/50 px-2.5 py-1 font-mono text-xs text-muted">
          Preview image not available
        </div>
        <div className="font-grotesk font-bold text-lg text-primary-text">{shortName}</div>
        <div className="mt-1 text-muted text-xs">{project.category}</div>
        {project.liveUrl && (
          <div className="mt-3 font-mono text-[0.7rem] text-secondary-text">{project.liveUrl}</div>
        )}
        {project.slug === 'brew-and-bloom' && project.liveUrl && (
          <div className="mt-5 flex flex-col items-center gap-2">
            <div className="bg-primary-text p-2 rounded-lg">
              <QRCodeSVG value={project.liveUrl} size={104} style={{ overflow: 'visible' }} />
            </div>
            <span className="text-[0.7rem] font-mono text-muted">QR code &rarr; live menu</span>
          </div>
        )}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const isExternal = Boolean(project.liveUrl)
  return (
    <motion.article
      variants={staggerItem}
      className="group relative rounded-2xl border border-border bg-card/90 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-lime/60 hover:shadow-[0_24px_48px_-20px_rgba(198,255,77,0.12)]"
    >
      <div className="relative h-64 lg:h-80 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.alt ?? `${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            loading="lazy"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <PreviewPlaceholder project={project} />
        )}
      </div>
      <div className="p-6 lg:p-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[0.7rem] font-mono text-cyan">{project.category}</span>
          {project.status === 'concept' && (
            <span className="text-[0.7rem] font-mono text-muted border border-border/60 rounded px-2 py-0.5">Concept</span>
          )}
        </div>
        <h3 className="font-bold text-xl lg:text-2xl mb-3">{project.title}</h3>
        <p className="text-secondary-text leading-relaxed mb-6 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-3 mb-6">
          {project.technologies.map((t) => <TechBadge key={t}>{t}</TechBadge>)}
        </div>
        <Button
          as="a"
          href={isExternal ? project.liveUrl! : `/work/${project.slug}`}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener' : undefined}
        >
          Explore Project <span aria-hidden="true">↗</span>
        </Button>
        {!isExternal && (
          <a href={`/work/${project.slug}`} className="mt-3 inline-flex items-center gap-1 text-[0.8rem] font-mono text-cyan hover:text-lime transition-colors">
            View case study &rarr;
          </a>
        )}
      </div>
    </motion.article>
  )
}


function FeaturedCard({ project }: { project: Project }) {
  const isExternal = Boolean(project.liveUrl)
  return (
    <motion.article
      variants={staggerItem}
      className="group relative rounded-2xl border border-border bg-card overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[400px] lg:h-full">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.alt ?? `${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <PreviewPlaceholder project={project} />
          )}
        </div>
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[0.7rem] font-mono text-cyan">{project.category}</span>
            {project.status === 'concept' && (
              <span className="text-[0.7rem] font-mono text-muted border border-border/60 rounded px-2 py-0.5">Concept</span>
            )}
          </div>
          <h2 className="font-bold text-[clamp(1.75rem,3vw,2.25rem)] leading-[1.2] mb-4">
            {project.title}
          </h2>
          <p className="text-secondary-text leading-relaxed mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((t) => <TechBadge key={t}>{t}</TechBadge>)}
          </div>
          <div className="mt-auto lg:mt-0">
            <Button
              as="a"
              href={isExternal ? project.liveUrl! : `/work/${project.slug}`}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener' : undefined}
            >
              Explore Project <span aria-hidden="true">↗</span>
            </Button>
            <a href={`/work/${project.slug}`} className="mt-4 inline-flex items-center gap-1 text-[0.8rem] font-mono text-cyan hover:text-lime transition-colors">
              View case study &rarr;
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function SelectedWorkSection() {
  return (
    <section id="work" className="relative py-20 lg:py-32 scroll-m-[100px]">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="FEATURED WORK"
          titleBefore="Selected work."
          description="A collection of websites, applications, and digital experiences built to solve practical problems."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
        >
          <motion.div className="lg:col-span-12" variants={staggerItem}>
            <FeaturedCard project={projects[0]} />
          </motion.div>
          {projects.slice(1).map((project) => (
            <motion.div
              key={project.slug}
              className="lg:col-span-6"
              variants={staggerItem}
            >
              {project.slug === projects[projects.length - 1].slug ? (
                <div className="lg:col-start-4 lg:col-end-10 mx-auto">
                  <ProjectCard project={project} />
                </div>
              ) : (
                <ProjectCard project={project} />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
