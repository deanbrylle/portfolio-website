import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  projectType: z.enum([
    'Business Website',
    'Custom Web Application',
    'E-commerce or Digital Store',
    'QR Menu',
    'UI Redesign',
    'AI or Automation',
    'Other',
  ]),
  budget: z.enum(['Under ₱5,000', '₱5,000–₱15,000', '₱15,000–₱30,000', '₱30,000+', 'Not sure yet']),
  timeline: z.string().min(1),
  details: z.string().min(10),
  honeypot: z.string().max(0).optional().default(''),
})

const FALLBACK_MESSAGE =
  'Email delivery is not configured on this server yet — please email deanbrylle.dev@gmail.com directly.'

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { message: 'Please check the form fields and try again.' },
      { status: 400 },
    )
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ ok: true })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL_TO ?? 'deanbrylle.dev@gmail.com'
  if (!apiKey) {
    return NextResponse.json({ message: FALLBACK_MESSAGE }, { status: 501 })
  }

  const { fullName, email, projectType, budget, timeline, details } = parsed.data

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [to],
        reply_to: email,
        subject: `New project inquiry — ${projectType} (from ${fullName})`,
        text: [
          `Name: ${fullName}`,
          `Email: ${email}`,
          `Project type: ${projectType}`,
          `Budget: ${budget}`,
          `Timeline: ${timeline}`,
          '',
          'Project details:',
          details,
        ].join('\n'),
      }),
    })

    if (!response.ok) {
      return NextResponse.json({ message: FALLBACK_MESSAGE }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ message: FALLBACK_MESSAGE }, { status: 502 })
  }
}
