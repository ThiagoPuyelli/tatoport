import { projectsData } from '../data/portfolioData'
import { SectionHeader } from './SectionHeader'

export function ProjectsSection() {
  return (
    <section id="proyectos" className="content-width section-block">
      <SectionHeader
        eyebrow="Proyectos"
        title="Trabajos recientes"
        description="Seleccion de proyectos para mostrar resolucion tecnica, diseno de interfaz y foco en resultados."
      />

      <div className="projects-grid">
        {projectsData.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-preview" aria-hidden="true">
              <span>{project.previewLabel}</span>
            </div>

            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p className="card-text">{project.summary}</p>

            <ul className="chip-list">
              {project.stack.map((tech) => (
                <li key={`${project.title}-${tech}`}>{tech}</li>
              ))}
            </ul>

            <a href="#footer-contacto" className="project-link">
              Ver detalle
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
