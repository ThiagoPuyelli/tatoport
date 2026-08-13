import { technologyGroups } from '../data/portfolioData'
import { SectionHeader } from './SectionHeader'

export function TechSection() {
  return (
    <section id="tecnologias" className="content-width section-block">
      <SectionHeader
        eyebrow="Conocimientos"
        title="Tecnologías y conceptos"
        description="Herramientas, conceptos y tecnologías que uso en desarrollo Full Stack, cloud e IA."
      />

      <div className="tech-grid">
        {technologyGroups.map((group) => (
          <article key={group.category} className="tech-card">
            <h3>{group.category}</h3>
            <div className="chip-list">
              {group.items.map((item) => (
                <span key={`${group.category}-${item}`}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
