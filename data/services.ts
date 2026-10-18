export interface Service {
  id: string
  title: string
  description: string
  bullets: string[]
  icon: string
  linkLabel: string
}

export const services: Service[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    description:
      'Responsive company websites and landing pages that present your brand clearly and make it easy for customers to get in touch.',
    bullets: ['Responsive company websites', 'Landing pages', 'Brand presentation', 'Clear inquiry flows', 'Mobile-first layouts'],
    icon: 'Layout',
    linkLabel: 'Discuss Business Websites',
  },
  {
    id: 'custom-web-apps',
    title: 'Custom Web Applications',
    description:
      'Interactive interfaces and data-driven applications built around real workflows, with API integrations where your business needs them.',
    bullets: ['Interactive interfaces', 'Dashboards', 'Application workflows', 'API integrations', 'Data-driven experiences'],
    icon: 'Code2',
    linkLabel: 'Discuss Web Applications',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce and Digital Stores',
    description:
      'Product-focused storefronts with category navigation and responsive shopping experiences built to convert browsers into buyers.',
    bullets: ['Product presentation', 'Category navigation', 'Digital storefront interfaces', 'Responsive shopping experiences', 'Conversion-focused layouts'],
    icon: 'ShoppingBag',
    linkLabel: 'Discuss E-commerce',
  },
  {
    id: 'ui-engineering',
    title: 'UI Engineering and Redesign',
    description:
      'Responsive frontend development, component-based architecture, and interface refinements that make existing products easier to use.',
    bullets: ['Responsive frontend development', 'Component-based architecture', 'Design consistency', 'Accessibility improvements', 'Interface refinements'],
    icon: 'Edit3',
    linkLabel: 'Discuss UI Redesign',
  },
  {
    id: 'ai-automation',
    title: 'AI and Automation',
    description:
      'Practical AI-powered interfaces and API-connected features that simplify workflows — without the hype.',
    bullets: ['AI-powered interfaces', 'API-connected features', 'Productivity applications', 'Workflow automation', 'Practical integrations'],
    icon: 'Sparkles',
    linkLabel: 'Discuss AI & Automation',
  },
  {
    id: 'maintenance',
    title: 'Maintenance and Improvements',
    description:
      'Ongoing care for your website: bug fixes, content updates, interface improvements, and incremental feature development.',
    bullets: ['Bug fixes', 'Content updates', 'Interface improvements', 'Performance checks', 'Incremental feature development'],
    icon: 'Settings',
    linkLabel: 'Discuss Maintenance',
  },
]

// Note: "Business Webites" typo fix below is handled in the file rewrite.