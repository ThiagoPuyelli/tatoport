import { contactLinks } from '../data/portfolioData'
import { SectionHeader } from './SectionHeader'

export function AboutSection() {
  return (
    <section id="contacto" className="content-width section-block contact-section">
      <SectionHeader
        eyebrow="Contacto"
        title="Conectemos"
        description="GitHub, LinkedIn y correo para seguir en contacto profesional."
      />

      <div className="contact-layout">
        {contactLinks.map((item) => (
          <a
            key={item.label}
            className="contact-link-card"
            href={item.href}
            aria-label={item.label}
            title={item.label}
            data-label={item.label}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <img className="contact-link-icon" src={item.icon} alt="" />
          </a>
        ))}
      </div>
    </section>
  )
}
