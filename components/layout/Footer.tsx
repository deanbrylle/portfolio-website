import { NAV } from '@/config/navigation'
import { ArrowUp, ExternalLink, Mail } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-obsidian">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-lime text-obsidian font-grotesk font-bold text-[0.7rem]">
                DM
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-grotesk font-semibold text-sm">Dean Maguate</span>
                <span className="font-mono text-[0.65rem] text-muted">Web Developer</span>
              </div>
            </div>
            <p className="text-[0.85rem] text-muted leading-relaxed">
              Designed with intention. Built for real-world use.
            </p>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-mono text-xs text-cyan uppercase tracking-widest mb-6">Navigate</h3>
            <nav className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-6 gap-4">
              {NAV.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-secondary-text hover:text-lime transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-mono text-xs text-cyan uppercase tracking-widest mb-6">Contact</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="mailto:deanbrylle.dev@gmail.com" className="text-sm text-secondary-text hover:text-lime transition-colors flex items-center gap-2">
                  <Mail width={16} height={16} strokeWidth={1.5} aria-hidden="true" />
                  deanbrylle.dev@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dean-brylle-undefined-360810434"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary-text hover:text-lime transition-colors flex items-center gap-2"
                >
                  <ExternalLink width={16} height={16} strokeWidth={1.5} aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-[0.8rem] text-muted">
            © {new Date().getFullYear()} Dean Brylle Maguate. All rights reserved.
          </p>
          <Button variant="ghost" as="a" href="#top" size="sm" className="text-[0.8rem]">
            Back to top <ArrowUp size={14} strokeWidth={2} />
          </Button>
        </div>
      </div>
    </footer>
  )
}