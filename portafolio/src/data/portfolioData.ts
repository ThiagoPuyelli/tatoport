import zkuads_gif from '../assets/ezgif-6343d35cfe9dbd2d.gif'
import screen_blockchain from '../assets/screen-blockchain.png'
import screen_mipla from '../assets/screen-mipla.png'
import github from '../assets/github.png'
import gmail from '../assets/gmail.png'
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
  { label: 'Educacion', href: '#educacion' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Contacto', href: '#contacto' },
]

export const heroHighlights = [
  { value: '+4', label: 'años de experiencia' },
]

export const heroFacts = [
  'Disponible para proyectos freelance y empleos',
  'Experiencia en sistemas distribuidos y tiempo real',
]

export const experienceData: ExperienceItem[] = [
  {
    role: 'Desarrollador Backend / Fullstack',
    company: 'POW',
    period: 'Sept 2025 - Abril 2026',
    mode: 'Remoto Full-Time',
    summary:
      'Participé en el desarrollo de soluciones backend utilizando Python, FastAPI y PostgreSQL para funcionalidades orientadas al sector fintech. Implementé APIs REST utilizadas por múltiples módulos de negocio, integraciones con Amazon S3 mediante Boto3 y arquitecturas basadas en capas y patrones de diseño para mejorar mantenibilidad y reutilización del código. También colaboré en herramientas administrativas desarrolladas con React y Next.js.',
  },
  {
    role: 'Desarrollador Backend / Engine',
    company: 'POW',
    period: 'Enero 2022 - Abril 2026',
    mode: 'Remoto',
    summary:
      'Desarrollo de motores de juego y servicios backend para plataformas multijugador en tiempo real utilizando TypeScript, WebSockets y MongoDB. Implementé reglas de negocio, sincronización de estado entre múltiples clientes conectados y optimización del procesamiento de eventos para soportar escenarios concurrentes. Participé además en tareas de refactorización, mejora de arquitectura e implementación de tests.',
  },
  {
    role: 'Desarollador Frontend',
    company: 'Bacord',
    period: 'Enero 2022 - Febrero 2023',
    mode: 'Remoto',
    summary:
      'Desarrollo de aplicaciones web utilizando React, Next.js y TypeScript. Implementación de interfaces responsivas, componentes reutilizables y mejoras orientadas a experiencia de usuario y rendimiento frontend, colaborando en distintos proyectos de la organización.',
  },
  {
    role: 'Desarollador Backend',
    company: 'Eduli',
    period: 'Mayo 2021 - Junio 2021',
    mode: 'Remoto',
    summary:
      'Participación en el desarrollo backend de una plataforma e-commerce orientada a la venta de vehículos. Implementación de funcionalidades CRUD, persistencia de datos e integración entre frontend y backend utilizando Node.js, Express y MongoDB.',
  },
]

export const educationData: EducationItem[] = [
  {
    title: 'Analista Programador Universitario',
    institution: 'Universidad Nacional de Luján',
    period: 'Marzo 2022 - Febrero 2026',
    details: 'Plan 17.13'
  },
  {
    title: 'Licenciatura en sistemas de información',
    institution: 'Universidad Nacional de Luján',
    period: 'Marzo 2022 - actualidad',
    details: 'Plan 17.13'
  },
]

export const projectsData: ProjectItem[] = [
  {
    title: 'Blockchain',
    category: 'Proyecto universitario - Cloud',
    summary: 'Diseño e implementación de una blockchain distribuida basada en microservicios desplegada sobre Kubernetes. El proyecto incluyó nodos de minería CPU/GPU, comunicación distribuida mediante RabbitMQ y Redis, observabilidad con Grafana, Loki y Prometheus, gestión de secretos con HashiCorp Vault y despliegue automatizado mediante Terraform sobre Google Cloud Platform.',
    stack: ['Kubernetes', 'Docker', 'Terraform', 'Google GCP', 'Redis', 'RabbitMQ', 'Python', 'FastAPI', 'Grafana', 'Loki', 'Prometheus', 'Vault', 'Nginx', 'Linkerd', 'ArgoCD', 'CI/CD', 'Microservicios', 'Github Actions'],
    previewLabel: 'Case 02',
    gif: screen_blockchain,
    repo: 'https://github.com/ThiagoPuyelli/SDyPP-2025-Grupo4'
  },
  {
    title: 'Aplicación Zkuads',
    category: 'Web App',
    summary: 'Participación en el desarrollo backend de plataformas multijugador en tiempo real utilizando Python, FastAPI, TypeScript y WebSockets. Implementación de lógica de juego, sincronización de estado entre clientes, APIs backend y mejoras orientadas a escalabilidad y mantenibilidad del sistema.', 
    stack: ['Python', 'TypeScript', 'WebSockets', 'FastAPI', 'AWS', 'Docker', 'Terraform', 'Jenkins', 'MongoDB', 'PostgreSQL'],
    previewLabel: 'Case 01',
    gif: zkuads_gif,
    video: 'https://www.youtube.com/watch?v=5YHtFPym7z4',
    link: 'https://qa-frontend.zkuads.com/'
  },
  {
    title: 'MiPla',
    category: 'Proyecto universitario - Web App',
    summary: 'Desarrollo de una plataforma de gestión académica desplegada sobre infraestructura cloud. La aplicación permite administrar horarios, eventos y recursos institucionales mediante una arquitectura basada en React, FastAPI y PostgreSQL, incorporando prácticas de CI/CD y despliegue automatizado.',
    stack: ['React', 'Auth0', 'PostgreSQL', 'Python', 'FastAPI', 'Kubernetes', 'Google GCP', 'Terraform', 'CI/CD', 'ArgoCD', 'Github Actions'],
    previewLabel: 'Case 03',
    gif: screen_mipla,
    repo: 'https://github.com/Juanbrero/MyPla'
  },
]

export const technologyGroups: TechnologyGroup[] = [
  {
    category: 'Backend',
    items: ['Python', 'FastAPI', 'Node.js', 'Express', 'WebSockets', 'RabbitMQ', 'REST', 'POO', 'ORM', 'Microservicios', 'SQLAlchemy', 'Alembic', 'JWT'],
  },
  {
    category: 'DevOps',
    items: ['Kubernetes', 'Docker', 'Terraform', 'ArgoCD', 'Grafana', 'CI/CD', 'Loki', 'Prometheus', 'Vault', 'Jenkins', 'Github Actions', 'Linux'],
  },
  {
    category: 'Bases de datos',
    items: ['PostgreSQL', 'Firebird', 'Redis', 'SQL', 'PL/SQL', 'MongoDB'],
  },
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'CSS', 'Next.js', 'HTML', 'Javascript'],
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
