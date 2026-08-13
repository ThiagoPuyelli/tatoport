import screen_blockchain from '../assets/screen-blockchain.png'
import github from '../assets/github.png'
import gmail from '../assets/gmail.png'
import agent from '../assets/agent.png'
import linkedin from '../assets/linkedin.png'

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
  gif: string
  link?: string
  repo?: string
  video?: string
}

export type TechnologyGroup = {
  category: string
  items: string[]
}

export type ContactLink = {
  label: string
  href: string
  icon: string
}

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Contacto', href: '#contacto' },
]

export const heroHighlights = [
  { value: '+4', label: 'años de experiencia' },
]

export const heroFacts = [
  'Full Stack orientado a productos web, backend y cloud',
  'Experiencia con TypeScript, Python, React, Next.js y FastAPI',
]

export const experienceData: ExperienceItem[] = [
  {
    role: 'Backend / Full Stack Developer y Engine Developer',
    company: 'POW',
    period: '01/2022 - 04/2026',
    mode: 'Remoto',
    summary:
      'Desarrollé aplicaciones y servicios con TypeScript, Node.js, Python y FastAPI, participando en componentes backend y funcionalidades Full Stack. Diseñé APIs REST, lógica de negocio, autenticación e integraciones entre servicios, y trabajé con React para interfaces conectadas al backend. También colaboré en sistemas distribuidos y aplicaciones en tiempo real con WebSockets y MongoDB, integré AWS mediante Boto3 y Amazon S3, refactoricé componentes siguiendo SOLID y patrones de diseño, y optimicé procesos críticos orientados a eventos.',
  },
]

export const educationData: EducationItem[] = [
  {
    title: 'Licenciatura en Sistemas de Información',
    institution: 'Universidad Nacional de Luján',
    period: '2022 - Actualidad',
    details: 'Formación en curso',
  },
  {
    title: 'Analista Programador Universitario',
    institution: 'Universidad Nacional de Luján',
    period: '2022 - 2026',
    details: 'Título intermedio obtenido en 2026',
  },
]

export const projectsData: ProjectItem[] = [
  {
    title: 'Blockchain distribuida sobre Kubernetes',
    category: 'Proyecto universitario - Cloud',
    summary:
      'Desarrollé una blockchain distribuida basada en microservicios con Python, Docker, Kubernetes y Terraform. El proyecto incorporó comunicación distribuida mediante RabbitMQ y Redis, observabilidad con Grafana, Loki y Prometheus, gestión de secretos con HashiCorp Vault y despliegue sobre Google Cloud Platform.',
    stack: ['Python', 'Docker', 'Kubernetes', 'Terraform', 'RabbitMQ', 'Redis', 'Grafana', 'Loki', 'Prometheus', 'Vault', 'GCP', 'Microservicios'],
    previewLabel: 'Case 01',
    gif: screen_blockchain,
    repo: 'https://github.com/ThiagoPuyelli/SDyPP-2025-Grupo4',
  },
  {
    title: 'Agente conversacional para aula virtual con LangGraph',
    category: 'Proyecto universitario - IA',
    summary:
      'Desarrollé un agente conversacional en Python y LangGraph para responder consultas sobre contenidos de aulas virtuales. Implementé herramientas de crawling para recorrer cursos y secciones, extraer HTML y alimentar dinámicamente al agente con información recuperada según la consulta.',
    stack: ['Python', 'LangGraph', 'Web Crawling', 'Web Scraping', 'Gemini', 'Ollama'],
    previewLabel: 'Case 02',
    gif: agent,
    repo: 'https://github.com/MatiasHerrneder/agent-for-web-campus',
  },
]

export const technologyGroups: TechnologyGroup[] = [
  {
    category: 'Lenguajes',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'C'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI', 'SQLAlchemy', 'Alembic', 'Pydantic', 'REST', 'WebSockets', 'JWT', 'Microservicios'],
  },
  {
    category: 'Bases de datos y mensajería',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ'],
  },
  {
    category: 'Cloud e infraestructura',
    items: ['AWS', 'Amazon S3', 'Boto3', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Linux', 'CI/CD', 'Vault'],
  },
  {
    category: 'Arquitectura y desarrollo',
    items: ['Arquitectura por capas', 'SOLID', 'Patrones de diseño', 'Sistemas distribuidos', 'Testing unitario', 'Git'],
  },
  {
    category: 'IA y automatización',
    items: ['LangGraph', 'Agentes con LLMs', 'Tool calling', 'Web scraping', 'Crawling', 'Claude Code', 'Codex'],
  },
  {
    category: 'Observabilidad',
    items: ['Grafana', 'Loki', 'Prometheus'],
  },
]

export const contactLinks: ContactLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/ThiagoPuyelli',
    icon: github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thiago-puyelli/',
    icon: linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:thiagopuyelli@gmail.com',
    icon: gmail,
  },
]
