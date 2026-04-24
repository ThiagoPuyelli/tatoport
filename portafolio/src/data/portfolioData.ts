export type NavItem = {
  label: string
  href: string
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  mode: string
  summary: string
}

export type EducationItem = {
  title: string
  institution: string
  period: string
  details: string
}

export type ProjectItem = {
  title: string
  category: string
  summary: string
  stack: string[]
  previewLabel: string
}

export type TechnologyGroup = {
  category: string
  items: string[]
}

export type ValueItem = {
  title: string
  text: string
}

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Educacion', href: '#educacion' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Sobre mi', href: '#sobre-mi' },
]

export const heroHighlights = [
  { value: '+12', label: 'proyectos entregados' },
  { value: '+3', label: 'anos de experiencia' },
  { value: '100%', label: 'enfoque en calidad' },
]

export const heroFacts = [
  'Disponible para proyectos freelance',
  'Stack moderno con React y TypeScript',
  'Colaboracion remota para LATAM y Europa',
]

export const experienceData: ExperienceItem[] = [
  {
    role: 'Frontend Developer',
    company: 'Nombre de Empresa',
    period: '2024 - Actualidad',
    mode: 'Remoto',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et massa eu odio interdum dapibus congue quis nibh.',
  },
  {
    role: 'Desarrollador Web',
    company: 'Studio Digital',
    period: '2022 - 2024',
    mode: 'Hibrido',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat, dui id ultricies pellentesque, metus metus porttitor magna.',
  },
  {
    role: 'Programador Junior',
    company: 'Agencia Creativa',
    period: '2021 - 2022',
    mode: 'Presencial',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate vehicula lorem, non iaculis magna consequat ac.',
  },
]

export const educationData: EducationItem[] = [
  {
    title: 'Tecnicatura en Desarrollo de Software',
    institution: 'Instituto Superior - Placeholder',
    period: '2021 - 2024',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo gravida, interdum sem vitae, blandit nisl.',
  },
  {
    title: 'Curso Avanzado de React y TypeScript',
    institution: 'Plataforma Online - Placeholder',
    period: '2023',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac risus convallis, tincidunt arcu ac, aliquam augue.',
  },
]

export const projectsData: ProjectItem[] = [
  {
    title: 'Dashboard Financiero',
    category: 'Web App',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere sem vel eros aliquam, at viverra justo dictum.',
    stack: ['React', 'TypeScript', 'Chart.js', 'Node.js'],
    previewLabel: 'Case 01',
  },
  {
    title: 'Landing para SaaS',
    category: 'Marketing',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed erat lacinia, varius erat vitae, fermentum magna.',
    stack: ['Vite', 'React', 'Framer Motion', 'CSS'],
    previewLabel: 'Case 02',
  },
  {
    title: 'Sistema de Turnos',
    category: 'Full Stack',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor neque id tortor aliquet, vitae feugiat augue consequat.',
    stack: ['React', 'Express', 'PostgreSQL', 'JWT'],
    previewLabel: 'Case 03',
  },
]

export const technologyGroups: TechnologyGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'Next.js', 'Redux', 'Sass'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB', 'REST'],
  },
  {
    category: 'Herramientas',
    items: ['Git', 'Docker', 'Figma', 'Postman', 'Jest', 'CI/CD'],
  },
]

export const aboutParagraphs = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate lectus in nunc facilisis, in elementum metus faucibus. Sed vitae lorem non lectus gravida varius.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse vulputate justo non massa iaculis, at viverra purus feugiat.',
]

export const valueItems: ValueItem[] = [
  {
    title: 'Pensamiento de producto',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis pretium nibh.',
  },
  {
    title: 'Comunicacion clara',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum justo sed auctor faucibus.',
  },
  {
    title: 'Iteracion constante',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tortor et odio faucibus hendrerit.',
  },
]
