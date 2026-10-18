'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { AlertCircle, CheckCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name.'),
  email: z.string().email('Please enter a valid email address.'),
  projectType: z.enum(['Business Website', 'Custom Web Application', 'E-commerce or Digital Store', 'QR Menu', 'UI Redesign', 'AI or Automation', 'Other']),
  budget: z.enum(['Under ₱5,000', '₱5,000–₱15,000', '₱15,000–₱30,000', '₱30,000+', 'Not sure yet']),
  timeline: z.string().min(1, 'Please let me know your desired timeline.'),
  details: z.string().min(10, 'Please tell me more about your project.'),
  honeypot: z.string().max(0),
})

type FormValues = z.infer<typeof schema>

const PROJECT_TYPES: FormValues['projectType'][] = [
  'Business Website', 'Custom Web Application', 'E-commerce or Digital Store', 'QR Menu', 'UI Redesign', 'AI or Automation', 'Other',
]
const BUDGET_OPTIONS: FormValues['budget'][] = ['Under ₱5,000', '₱5,000–₱15,000', '₱15,000–₱30,000', '₱30,000+', 'Not sure yet']

export function ContactForm({ defaultProject }: { defaultProject?: string }) {
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema) as never,
    defaultValues: {
      fullName: '',
      email: '',
      projectType: (defaultProject as FormValues['projectType']) ?? undefined,
      budget: undefined,
      timeline: '',
      details: '',
      honeypot: '',
    },
  })

  const { register, handleSubmit, formState: { errors, isSubmitting, isValid }, reset } = methods
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = React.useState('')

  const onSubmit = async (data: FormValues) => {
    setStatus('submitting')
    setErrorMessage('')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data),
      })
      const json = await response.json().catch(() => ({}))
      if (response.ok) {
        setStatus('success'); reset()
      } else if (response.status === 501) {
        setStatus('error'); setErrorMessage(json.message || 'Email delivery is not configured on this server yet — please email deanbrylle.dev@gmail.com directly.')
      } else {
        setStatus('error'); setErrorMessage(json.message || "Couldn't send your message — please try again or email deanbrylle.dev@gmail.com directly.")
      }
    } catch {
      setStatus('error'); setErrorMessage('Unable to reach the server — please email deanbrylle.dev@gmail.com directly.')
    }
  }

  return (
    <>
      {status === 'success' && (
        <div className="rounded-xl border border-success/30 bg-success/05 p-6">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-success shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-bold text-lg">Thanks for getting in touch.</h3>
              <p className="text-secondary-text mt-1">Your message was sent successfully. I will get back to you soon.</p>
            </div>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-xl border border-error/30 bg-error/05 p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-error shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-bold text-lg">Something went wrong.</h3>
              <p className="text-secondary-text mt-1">{errorMessage}</p>
              <p className="mt-3">You can still reach me directly at <a href="mailto:deanbrylle.dev@gmail.com" className="text-lime hover:underline">deanbrylle.dev@gmail.com</a></p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-[0.8rem] font-mono text-muted uppercase tracking-wider">Full name</label>
            <input id="fullName" {...register('fullName')} autoComplete="name" placeholder="Juan Dela Cruz" className={cn('block w-full rounded-xl border px-4 py-3 text-sm text-primary-text placeholder-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime', errors.fullName ? 'border-error bg-error/05' : 'border-border hover:border-muted/60')} />
            {errors.fullName && <span className="text-error text-[0.75rem]">{errors.fullName.message}</span>}
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-[0.8rem] font-mono text-muted uppercase tracking-wider">Email address</label>
            <input id="email" {...register('email')} type="email" autoComplete="email" placeholder="you@example.com" className={cn('block w-full rounded-xl border px-4 py-3 text-sm text-primary-text placeholder-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime', errors.email ? 'border-error bg-error/05' : 'border-border hover:border-muted/60')} />
            {errors.email && <span className="text-error text-[0.75rem]">{errors.email.message}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="projectType" className="text-[0.8rem] font-mono text-muted uppercase tracking-wider">Project type</label>
            <select id="projectType" {...register('projectType')} className={cn('block w-full rounded-xl border px-4 py-3 text-sm text-primary-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime', errors.projectType ? 'border-error bg-error/05' : 'border-border hover:border-muted/60')}>
              <option value="">Select a project type</option>
              {PROJECT_TYPES.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
            {errors.projectType && <span className="text-error text-[0.75rem]">{errors.projectType.message}</span>}
          </div>
          <div className="space-y-2">
            <label htmlFor="budget" className="text-[0.8rem] font-mono text-muted uppercase tracking-wider">Budget range</label>
            <select id="budget" {...register('budget')} className={cn('block w-full rounded-xl border px-4 py-3 text-sm text-primary-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime', errors.budget ? 'border-error bg-error/05' : 'border-border hover:border-muted/60')}>
              <option value="" disabled>Select a budget range</option>
              {BUDGET_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
            {errors.budget && <span className="text-error text-[0.75rem]">{errors.budget.message}</span>}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="timeline" className="text-[0.8rem] font-mono text-muted uppercase tracking-wider">Desired timeline</label>
          <input id="timeline" {...register('timeline')} placeholder="e.g. Within a month" className={cn('block w-full rounded-xl border px-4 py-3 text-sm text-primary-text placeholder-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime', errors.timeline ? 'border-error bg-error/05' : 'border-border hover:border-muted/60')} />
          {errors.timeline && <span className="text-error text-[0.75rem]">{errors.timeline.message}</span>}
        </div>

        <div className="space-y-2">
          <label htmlFor="details" className="text-[0.8rem] font-mono text-muted uppercase tracking-wider">Project details</label>
          <textarea id="details" {...register('details')} rows={5} placeholder="Tell me what you are building, the problem you want to solve, and where you would like to go next." className={cn('block w-full rounded-xl border px-4 py-3 text-sm text-primary-text placeholder-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime', errors.details ? 'border-error bg-error/05' : 'border-border hover:border-muted/60')} />
          {errors.details && <span className="text-error text-[0.75rem]">{errors.details.message}</span>}
        </div>

        <input id="honeypot" {...register('honeypot')} tabIndex={-1} aria-hidden="true" style={{ display: 'none' }} />

        <Button type="submit" variant="lime" size="lg" disabled={isSubmitting || !isValid} className="w-full lg:w-auto shadow-lg">
          {isSubmitting ? 'Sending…' : (<>Send message <Send size={18} strokeWidth={2} /></>)}
        </Button>

        <p className="text-[0.8rem] text-muted">Messages go straight to my inbox. I do not share your details with anyone else.</p>
      </form>
    </>
  )
}
