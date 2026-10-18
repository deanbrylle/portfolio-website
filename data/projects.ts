export interface ProjectCaseStudy {
  overview: string
  problem: string
  role: string
  approach: string
  implementation: string
  challenges: string
  outcomes: string
  important?: string
}

export interface Project {
  slug: string
  title: string
  category: string
  description: string
  image?: string
  liveUrl?: string
  status: 'completed' | 'concept'
  technologies: string[]
  alt?: string
  caseStudy: ProjectCaseStudy
}

export const projects: Project[] = [
  {
    slug: 'brew-and-bloom',
    title: 'Brew & Bloom — Digital QR Menu',
    category: 'QR Menu',
    description:
      'A cafe-focused digital menu experience designed to make menu browsing and item discovery easier on mobile devices.',
    image: '/images/projects/brew-and-bloom.png',
    liveUrl: 'https://brew-and-bloom-qr-menu.vercel.app',
    status: 'completed',
    technologies: ['QR menu', 'Mobile-first layout', 'Vercel deployment'],
    caseStudy: {
      overview:
        'Brew & Bloom is a digital QR menu built for cafes. Customers open the menu by scanning a QR code at the table — no app download required — and browse drink and food items on their phones.',
      problem:
        'Cafes needed a low-contact way for customers to browse menus on their own devices. Printed menus are costly to update, and PDF menus are difficult to read on small screens.',
      role: 'Interface design and frontend development.',
      approach:
        'A mobile-first, single-column layout with tap-friendly category sections. Item cards keep names, short descriptions, and prices easy to scan. Brand colors are used sparingly so the QR code stays scannable under cafe lighting.',
      implementation:
        'A static website deployed on Vercel. The QR code links directly to the live menu URL so printed table cards never need reprinting when the menu changes.',
      challenges:
        'Keeping the menu legible on small phone screens, and making sure the QR code stays readable when printed at small sizes.',
      outcomes:
        'A live, working QR menu at brew-and-bloom-qr-menu.vercel.app. Key lesson: always test QR codes at the sizes they will actually be printed.',
    },
  },
  {
    slug: 'fileora',
    title: 'Fileora — Digital Products Marketplace',
    category: 'Digital Marketplace',
    description:
      'A digital storefront concept for presenting and discovering downloadable products and digital resources.',
    image: '/images/projects/fileora.png',
    liveUrl: 'https://fileora-market.vercel.app',
    status: 'completed',
    technologies: ['Digital storefront', 'Category navigation', 'Responsive layout', 'Vercel deployment'],
    caseStudy: {
      overview:
        'Fileora is a product-focused marketing site for a digital products platform. It presents downloadable products with clear category navigation and a storefront layout built for discovery.',
      problem:
        'Digital products can feel intangible. The storefront needed to make downloadable resources feel concrete and trustworthy before a visitor decides to download.',
      role: 'Frontend development and product presentation layout.',
      approach:
        'Product cards with clear imagery, category grouping, and responsive layouts that stack cleanly on mobile. Visual hierarchy guides visitors from browsing to product detail.',
      implementation:
        'Responsive storefront pages deployed on Vercel, with category-based filtering and mobile-friendly navigation.',
      challenges:
        'Presenting digital goods without physical packaging to lean on — solved with clear product imagery and descriptive copy.',
      outcomes:
        'A browsable digital storefront at fileora-market.vercel.app with working category navigation across device sizes.',
    },
  },

  {
    slug: 'atome-referral',
    title: 'Atome Referral — Conversion-Focused Landing Page',
    category: 'Landing Page',
    description:
      'A focused landing page designed to explain a referral offer and guide visitors toward the next step.',
    image: '/images/projects/atome-referral.png',
    liveUrl: 'https://deanbrylleatomereferral.vercel.app',
    status: 'completed',
    technologies: ['Landing page', 'Mobile-first layout', 'Referral journey', 'Vercel deployment'],
    caseStudy: {
      overview:
        'A single-page referral landing page that explains an offer clearly and directs visitors toward the next step without friction.',
      problem:
        'Referral offers lose visitors when the value proposition is buried. The page needed one clear message and one obvious next step.',
      role: 'Frontend development and page layout.',
      approach:
        'Mobile-first presentation with a clear content hierarchy: headline, offer explanation, how it works, and a prominent call to action. The referral journey is kept to the shortest possible path.',
      implementation:
        'A static landing page deployed on Vercel with responsive layouts and a CTA-focused button hierarchy.',
      challenges:
        'Keeping the page focused on one action without adding distracting sections.',
      outcomes:
        'A live referral landing page at deanbrylleatomereferral.vercel.app.',
      important:
        'This is an independent referral page I built. It is not affiliated with Atome, and I do not claim any official relationship with the Atome service.',
    },
  },
  {
    slug: 'studybuddy-ai',
    title: 'StudyBuddy AI — AI-Powered Quiz App',
    category: 'AI Application',
    description:
      'A learning application concept that turns uploaded study material into interactive multiple-choice quizzes and review sessions.',
    status: 'concept',
    technologies: ['AI application interface', 'Quiz interface', 'Results dashboard', 'Concept'],
    caseStudy: {
      overview:
        'StudyBuddy AI is a concept for a learning application. A student uploads study material, and the app generates interactive multiple-choice quizzes with answer feedback and a results dashboard.',
      problem:
        'Reviewing long study notes is time-consuming. Students wanted a faster way to turn material they already have into active recall practice.',
      role: 'Product concept and interface design.',
      approach:
        'File upload → AI-generated quiz → multiple-choice answers with instant feedback → results dashboard with study history. Each screen keeps one clear focus.',
      implementation:
        'Conceptual interface screens. File upload, quiz flow, answer feedback, and results dashboard are shown as interface designs; AI generation behavior is a planned feature.',
      challenges:
        'Designing the feedback states so students immediately understand whether an answer was correct and why.',
      outcomes:
        'A clickable concept illustrating the full quiz flow, from upload to results. AI-powered generation is labeled as a planned feature, not a shipped capability.',
      important:
        'This project is a concept. Only screens shown are implemented interface designs; AI generation features are clearly labeled as planned.',
    },
  },
]
