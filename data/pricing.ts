export interface Package {
  id: string
  title: string
  subtitle: string
  priceNote: string
  includes: string[]
  cta: string
  href: string
}

export const packages: Package[] = [
  {
    id: 'starter',
    title: 'Starter Website',
    subtitle: 'For small businesses needing a professional online presence.',
    priceNote: 'Request a Quote',
    includes: ['Defined page count (to be agreed)', 'Responsive design', 'Contact section', 'Basic SEO setup', 'Deployment assistance'],
    cta: 'Request a Quote',
    href: '#contact?project=Business Website',
  },
  {
    id: 'business',
    title: 'Business Website',
    subtitle: 'For businesses requiring more pages, stronger content structure, and additional integrations.',
    priceNote: 'Request a Quote',
    includes: ['Custom page layouts', 'Responsive development', 'Content organization', 'Basic SEO setup', 'Agreed integrations', 'Deployment support'],
    cta: 'Request a Quote',
    href: '#contact?project=Business Website',
  },
  {
    id: 'custom',
    title: 'Custom Web Application',
    subtitle: 'For businesses that need interactive workflows, dashboards, data integrations, or tailored functionality.',
    priceNote: 'Let\u2019s Discuss Your Project.',
    includes: ['Custom interface', 'Application workflows', 'API integration', 'Data features', 'Testing and deployment'],
    cta: 'Let\u2019s Discuss Your Project.',
    href: '#contact?project=Custom Web Application',
  },
]

export const brewBloomLaunch = {
  title: 'Simple Launch Package',
  subtitle: 'Brew & Bloom digital QR menu launch',
  setupPrice: '₱3,500 one-time setup',
  maintenance: '₱1,000 per month maintenance (optional)',
  includes: [
    'Menu digitization',
    'Brand styling',
    'QR code generation',
    'Responsive digital menu',
  ],
  scopeNote:
    'Physical acrylic QR table stands are subject to agreed quantity and supplier costs. Hosting, domain fees, third-party services, printing, and revisions are not included unless agreed in writing. Maintenance covers content updates to the digital menu; it does not include unlimited revisions or free additional services.',
}