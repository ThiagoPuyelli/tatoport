import { experienceData } from '../data/portfolioData'
import { SectionHeader } from './SectionHeader'

export function ExperienceSection() {
  return (
    <section id="experiencia" className="content-width section-block">
      <SectionHeader
        eyebrow="Experiencia"
        title="Trayectoria profesional"
        description="Experiencias destacadas con enfoque en desarrollo web, colaboracion y entrega de producto."
      />

      <div className="cards-grid">
        {experienceData.map((item) => (
          <article key={`${item.company}-${item.period}`} className="timeline-card">
            <div className="timeline-top">
              <span>{item.period}</span>
              <small>{item.mode}</small>
            </div>
            <h3>{item.role}</h3>
            <p className="card-subtitle">{item.company}</p>
            <p className="card-text">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
