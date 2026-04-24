import { aboutParagraphs, valueItems } from '../data/portfolioData'
import { SectionHeader } from './SectionHeader'

export function AboutSection() {
  return (
    <section id="sobre-mi" className="content-width section-block about-section">
      <SectionHeader
        eyebrow="Sobre mi"
        title="Perfil profesional"
        description="Una breve introduccion personal y forma de trabajo para colaborar en proyectos de calidad."
      />

      <div className="about-layout">
        <div className="about-copy">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="values-grid">
          {valueItems.map((item) => (
            <article key={item.title} className="value-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
