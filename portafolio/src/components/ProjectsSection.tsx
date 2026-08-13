import { projectsData } from '../data/portfolioData'
import { SectionHeader } from './SectionHeader'

export function ProjectsSection() {
  return (
    <section id="proyectos" className="content-width section-block">
      <SectionHeader
        eyebrow="Proyectos"
        title="Proyectos destacados"
        description="Proyectos académicos y técnicos que reflejan mi trabajo en Full Stack, IA y cloud."
      />

      <div className="projects-grid">
        {projectsData.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-preview" aria-hidden="true">
              <img className="project-gif" src={project.gif} alt={`Vista previa de ${project.title}`} />
            </div>

            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p className="card-text text-justify">{project.summary}</p>

            <ul className="chip-list">
              {project.stack.map((tech) => (
                <li key={`${project.title}-${tech}`}>{tech}</li>
              ))}
            </ul>

            <div className="project-links">
              {project.link && 
              <a href={project.link} className="project-link" target='_blank'>
                Link
              </a>
              }
  
              {project.repo && 
              <a href={project.repo} className='project-link' target='_blank'>
                Repositorio
              </a>
              }
              {project.video &&
              <a href={project.video} className='project-link' target='_blank'>
                Video
              </a>
              }
            </div>
            
          </article>
        ))}
      </div>
    </section>
  )
}
