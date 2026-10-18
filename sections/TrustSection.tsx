import Link from 'next/link'
import Image from 'next/image'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TechBadge } from '@/components/ui/TechBadge'

const TRUST_ITEMS = [
  {
    name: 'Brew & Bloom — Digital QR Menu',
    href: 'https://brew-and-bloom-qr-menu.vercel.app',
    image: '/images/projects/brew-and-bloom.png',
    role: 'Interface design and frontend development',
    tech: ['QR menu', 'Mobile-first', 'Vercel'],
    alt: 'Brew & Bloom digital QR menu preview',
  },
  {
    name: 'Fileora — Digital Products Marketplace',
    href: 'https://fileora-market.vercel.app',
    image: '/images/projects/fileora.png',
    role: 'Frontend development and product presentation',
    tech: ['Digital storefront', 'Category navigation', 'Vercel'],
    alt: 'Fileora marketplace preview',
  },
  {
    name: 'Atome Referral — Landing Page',
    href: 'https://deanbrylleatomereferral.vercel.app',
    image: '/images/projects/atome-referral.png',
    role: 'Frontend development and page layout (independent project)',
    tech: ['Landing page', 'Mobile-first', 'Vercel'],
    alt: 'Atome Referral landing page preview',
  },
]

export function TrustSection() {
  return (
    <section id="trust" className="relative py-20 lg:py-32 bg-graphite/40 scroll-m-[100px]">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="TRUST AND CREDIBILITY"
          titleBefore="Real work you can open right now."
          description="Every project linked below is live and was built by me. Screenshots show the actual deployed sites."
        />

        <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRUST_ITEMS.map((item) => (
            <article key={item.name} className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col">
              <div className="relative h-48 md:h-64 overflow-hidden">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-full bg-graphite flex items-center justify-center">
                    <span className="text-[0.7rem] font-mono text-muted">Preview not available</span>
                  </div>
                )}
              </div>
              <div className="p-6 lg:p-8 flex flex-col">
                <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                <p className="text-[0.8rem] text-muted mb-4 flex-1">{item.role}</p>
                <div className="mt-auto flex flex-wrap gap-2 mb-6">
                  {item.tech.map((t) => <TechBadge key={t}>{t}</TechBadge>)}
                </div>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[0.85rem] font-mono text-cyan hover:text-lime transition-colors"
                >
                  Open project <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}