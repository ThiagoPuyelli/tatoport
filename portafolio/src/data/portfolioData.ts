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
  { value: '+6', label: 'años desde que empecé a programar' },
]

export const heroFacts = [
  'Disponible para proyectos freelance y empleos',
  'Interés en el mundo distribuido',
]

export const experienceData: ExperienceItem[] = [
  {
    role: 'Desarrollador Fullstack',
    company: 'POW',
    period: 'Sept 2025 - Abril 2026',
    mode: 'Remoto Full-Time',
    summary:
      'Cuando me movieron a este puesto, adquirí mayor experiencia en el mundo del backend de lo que ya tenia, aplicando patrones de diseño, arquitectura de software, manejo de AWS, uso de Python con FastAPI conectado a PostgreSQL, teniendo una mayor responsabilidad de la que tenía y teniendo una carga mayor en el trabajo afrontando problemas de requerimientos complejos, tratando de sostener el equilibrio entre productividad, buena calidad de arquitectura y código limpio.',
  },
  {
    role: 'Desarrollador de Engines',
    company: 'POW',
    period: 'Enero 2022 - Abril 2026',
    mode: 'Remoto',
    summary:
      'Trabajé desarrollando la lógica de los diferentes juegos que ofrece POW, aplicando conceptos de POO, principios SOLID, patrones de diseño, estructuras de datos y algoritmia con el fin de lograr la menor complejidad algorítmica posible. Además tuve que desarrollar tests fuertes con el fin de generar diferentes estados de los juegos y testear diferentes casos puntuales.',
  },
  {
    role: 'Desarollador Frontend',
    company: 'Bacord',
    period: 'Enero 2022 - Febrero 2023',
    mode: 'Remoto',
    summary:
      'Durante este puesto me desempeñé como desarrollador frontend, participando activamente en el diseño e implementación de aplicaciones web para la organización. Trabajé principalmente con React, Next.js y TypeScript, desarrollando interfaces modernas, escalables y orientadas a una buena experiencia de usuario.',
  },
  {
    role: 'Desarollador Backend',
    company: 'Eduli',
    period: 'Mayo 2021 - Junio 2021',
    mode: 'Remoto',
    summary:
      'En este proyecto estuve haciendo una tienda online de venta de autos. Cuando entre a este proyecto tenía la corta edad de 17 años, es por esto que aprendi muchos conceptos que me hicieron crecer mucho como desarrollador, ya que en ese momento simplemente venia de cursos y ahí pude fortalecer mucho de los conocimientos que hoy en día manejo, utilizando Node.js con Express, MongoDB y Typescript.',
  },
]

export const educationData: EducationItem[] = [
  {
    title: 'Analista Programador Universitario',
    institution: 'Universidad Nacional de Luján',
    period: 'Marzo 2022 - Febrero 2026',
    details:
      'Título intermedio de la carrera que estuve estudiando el cual me enseño los conocimientos base relacionado a bases de datos, estructuras de datos, redes, sistemas distribuidos, POO, seguridad y demás.',
  },
  {
    title: 'Licenciatura en sistemas de información',
    institution: 'Universidad Nacional de Luján',
    period: 'Marzo 2022 - actualidad',
    details:
      'Sigo estudiando para ser licenciado, el cual estoy aprendiendo mucho sobre análisis de datos, IA, seguridad y estoy planteando mi idea de tesis el cual va a tratar sobre WebAssembly.',
  },
]

export const projectsData: ProjectItem[] = [
  {
    title: 'Aplicación Zkuads',
    category: 'Web App',
    summary:
      'Proyecto el cual estuve trabajando durante 4 años aportando código en los engines de los juegos en Typescript y luego en lo que respecta al backend de la plataforma en Python, haciendo un gran manejo en requerimientos complejos y código de calidad. Se trata de juegos de apuestas donde el premio no se obtiene por suerte sino por habilidad, puediendo juegar diferentes modos apostando.',
    stack: ['Python', 'TypeScript', 'WebSockets', 'FastAPI', 'AWS', 'Docker', 'Terraform', 'Jenkins', 'MongoDB', 'PostgreSQL'],
    previewLabel: 'Case 01',
    gif: zkuads_gif,
    video: 'https://www.youtube.com/watch?v=5YHtFPym7z4',
    link: 'https://qa-frontend.zkuads.com/'
  },
  {
    title: 'Blockchain',
    category: 'Proyecto universitario - Cloud',
    summary:
      'Trabajo práctico final de Sistemas Distribuidos y Programación Paralela, donde tuve que desarrollar con un compañero toda una infraestructura en Google GCP haciendo uso de diversas tecnologías para hacer funcionar una blockchain, aplicando muchos conceptos del mundo distribuido. Sumado a la funcionalidad, implementamos diversas tecnologías de métricas para poder visualizar mediante dashboard el estado de la blockchain.',
    stack: ['Kubernetes', 'Docker', 'Terraform', 'Google GCP', 'Redis', 'RabbitMQ', 'Python', 'FastAPI', 'Grafana', 'Loki', 'Prometheus', 'Vault', 'Nginx', 'Linkerd', 'ArgoCD', 'CI/CD', 'Microservicios', 'Github Actions'],
    previewLabel: 'Case 02',
    gif: screen_blockchain,
    repo: 'https://github.com/ThiagoPuyelli/SDyPP-2025-Grupo4'
  },
  {
    title: 'MiPla',
    category: 'Proyecto universitario - Web App',
    summary:
      'Trabajo práctico de la materia Seminario de Integración Profesional, donde aplicamo un desarrollo full stack e infraestructura en la nube, donde la aplicación permite gestionar clases particulares con una agenda, con el fin de automatizar el manejo de horarios de tanto los profesores como los alumnos, como también tiene su gestión de eventos, donde se pueden organizar charlas en conjunto.',
    stack: ['React', 'Auth0', 'PostgreSQL', 'Python', 'FastAPI', 'Kubernetes', 'Google GCP', 'Terraform', 'CI/CD', 'ArgoCD', 'Github Actions'],
    previewLabel: 'Case 03',
    gif: screen_mipla,
    repo: 'https://github.com/Juanbrero/MyPla'
  },
]

export const technologyGroups: TechnologyGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'CSS', 'Next.js', 'HTML', 'Javascript'],
  },
  {
    category: 'Backend',
    items: ['Python', 'FastAPI', 'Node.js', 'Express', 'WebSockets', 'PostgreSQL', 'MongoDB', 'REST', 'POO', 'ORM', 'PL/SQL'],
  },
  {
    category: 'DevOps',
    items: ['Kubernetes', 'Docker', 'Terraform', 'ArgoCD', 'Grafana', 'CI/CD', 'Loki', 'Prometheus', 'RabbitMQ', 'Jenkins', 'Github Actions'],
  },
  {
    category: 'Bases de datos',
    items: ['PostgreSQL', 'Firebird', 'Redis', 'SQL', 'PL/SQL', 'ORM', 'DER'],
  },
  {
    category: 'Análisis de datos',
    items: ['ETL', 'Colab', 'Scipy', 'Matplotlib', 'Python', 'Data Warehouse', 'Clustering'],
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
