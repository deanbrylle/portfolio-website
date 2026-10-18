# Dean Brylle Maguate — Portfolio

A single-page Next.js portfolio for Dean Brylle Maguate (Web Developer &
Frontend Engineer), featuring a dark editorial aesthetic, responsive sections,
project highlights with case-study pages, and a contact form.

## Project structure

```
portfolio-website
├── app/                # Next.js App Router: layout, homepage, /work/[slug], /api/contact
│   ├── layout.tsx      # Root layout (fonts, metadata, header/footer)
│   ├── page.tsx        # Homepage composing all sections
│   ├── globals.css     # Design tokens and base styles
│   └── fonts.ts        # next/font (Inter, Space Grotesk, JetBrains Mono)
├── components/
│   ├── layout/         # Header, Footer
│   ├── sections/       # ContactSection
│   └── ui/             # Button, badges, portrait, glow, back-to-top
├── sections/           # Hero, Work, Services, About, Process, Pricing, FAQ, …
├── forms/              # ContactForm (react-hook-form + zod)
├── data/               # projects, services, skills, pricing content
├── config/             # navigation
├── lib/                # cn() classnames helper
├── public/             # favicon, robots.txt, project images
├── css/ js/ assets/    # Legacy static site (kept for reference)
└── index.html          # Legacy static entry (kept for reference)
```

## Run locally

Requires Node.js 18+:

```bash
cd "C:/Users/Admin/Portfolio/portfolio-website"
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Other scripts

```bash
npm run build       # production build (also runs on Vercel)
npm run type-check  # tsc --noEmit
```

## Contact form email (Resend)

Copy `.env.example` to `.env.local` and fill in:

```bash
CONTACT_EMAIL_TO=deanbrylle.dev@gmail.com
RESEND_API_KEY=re_...   # obtain from https://resend.com
```

Without these variables, `POST /api/contact` returns 501 and visitors are
invited to email deanbrylle.dev@gmail.com directly instead. Set the same two
variables in the Vercel dashboard (Settings → Environment Variables,
Production) so the live form can send mail.

## Customize content

- Project case studies: `data/projects.ts`
- Services, skills, pricing: `data/services.ts`, `data/skills.ts`, `data/pricing.ts`
- Design tokens: `app/globals.css` + `tailwind.config.ts`

## Notes

- The legacy static files (`index.html`, `css/`, `js/`, `assets/`, and the nested
  `portfolio-website/` folder) predate the Next.js rebuild and are kept for
  reference only — Vercel deploys the Next.js app from the repo root.