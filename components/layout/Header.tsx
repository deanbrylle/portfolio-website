'use client'

import { useCallback, useEffect, useState } from 'react'
import { Briefcase, Home, Mail, Menu, Sliders, User, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const NAV = [
  { name: 'Home', href: '#top', icon: Home },
  { name: 'Work', href: '#work', icon: Briefcase },
  { name: 'Services', href: '#services', icon: Sliders },
  { name: 'About', href: '#about', icon: User },
  { name: 'Contact', href: '#contact', icon: Mail },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#top')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive('#' + entry.target.id)
        }
      },
      { rootMargin: '-90px 0% -70% 0%', threshold: 0.02 },
    )
    NAV.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1))
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  const handleNavClick = useCallback((href: string) => {
    setIsOpen(false)
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.location.href = href
    }
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-y',
        scrolled ? 'bg-obsidian/95 backdrop-blur-md border-border/70' : 'bg-obsidian/80 backdrop-blur-md border-border/50',
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#top')}
              className="flex items-center gap-2 p-2 rounded-xl hover:bg-elevated transition-colors"
              aria-label="Go to homepage"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-lime text-obsidian font-grotesk font-bold text-sm">
                DM
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-grotesk font-semibold text-[0.9rem]">Dean Maguate</span>
                <span className="font-mono text-[0.65rem] text-muted">Web Developer</span>
              </div>
            </button>
            <div className="hidden md:block h-5 w-px border-border/50 mx-2" aria-hidden="true" />
          </div>

          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {NAV.map((item) => {
              const Icon = item.icon
              const isActive = active === item.href
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={cn(
                    'flex items-center gap-2 text-sm font-medium transition-colors',
                    isActive ? 'text-lime' : 'text-secondary-text hover:text-primary-text',
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon width={16} height={16} strokeWidth={2} aria-hidden="true" />
                  <span>{item.name}</span>
                </a>
              )
            })}
          </nav>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#contact')
            }}
            className="hidden md:block"
          >
            <Button variant="lime" size="sm">
              Let's Talk <span aria-hidden="true">↗</span>
            </Button>
          </a>

          <button
            onClick={() => setIsOpen((o) => !o)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex items-center justify-center p-2 rounded-xl hover:bg-elevated transition-colors"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <X width={20} height={20} strokeWidth={2} />
            ) : (
              <Menu width={20} height={20} strokeWidth={2} />
            )}
          </button>
        </div>

        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-4 border border-border bg-card rounded-2xl p-5 shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {NAV.map((item) => {
                const Icon = item.icon
                const isActive = active === item.href
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-colors',
                      isActive
                        ? 'bg-elevated text-lime font-medium'
                        : 'text-secondary-text hover:bg-elevated/50 hover:text-primary-text',
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon width={18} height={18} strokeWidth={2} aria-hidden="true" />
                    <span>{item.name}</span>
                  </a>
                )
              })}
            </div>
            <div className="mt-5 pt-5 border-t border-border/60 flex gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('#contact')
                }}
                className="flex-1"
              >
                <Button variant="lime" size="md" className="w-full">
                  Let's Talk <span aria-hidden="true">↗</span>
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}