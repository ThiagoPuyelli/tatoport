import { educationData } from '../data/portfolioData'
import { SectionHeader } from './SectionHeader'

export function EducationSection() {
  return (
    <section id="educacion" className="content-width section-block">
      <SectionHeader
        eyebrow="Educacion"
        title="Formacion academica"
        description="Base academica y capacitaciones enfocadas en ingenieria de software y desarrollo frontend."
      />

      <div className="cards-grid education-grid">
        {educationData.map((item) => (
          <article key={`${item.title}-${item.period}`} className="timeline-card">
            <div className="timeline-top">
              <span>{item.period}</span>
            </div>
            <h3>{item.title}</h3>
            <p className="card-subtitle">{item.institution}</p>
            <p className="card-text">{item.details}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
