export interface SkillCategory {
  id: string
  title: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: 'backend-data',
    title: 'Backend and Data',
    items: ['API integration', 'Supabase', 'Database workflows', 'Authentication integrations'],
  },
  {
    id: 'deployment-tools',
    title: 'Deployment and Development Tools',
    items: ['Git', 'GitHub', 'Vercel', 'Visual Studio Code'],
  },
  {
    id: 'motion-design',
    title: 'Motion and Interface Design',
    items: ['Framer Motion', 'Responsive design', 'Component architecture', 'Accessibility-conscious implementation'],
  },
  {
    id: 'ai-automation',
    title: 'AI and Automation',
    items: ['Gemini API', 'n8n', 'AI application integrations'],
  },
]