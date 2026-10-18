'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <a href="#top" className="fixed bottom-6 right-6 z-40">
      <Button variant="lime" size="sm" className="shadow-lg">
        Back to top <ArrowUp size={16} strokeWidth={2} />
      </Button>
    </a>
  )
}