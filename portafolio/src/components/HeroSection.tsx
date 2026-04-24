import profilePlaceholder from '../assets/profile-placeholder.svg'
import { heroFacts, heroHighlights } from '../data/portfolioData'

export function HeroSection() {
  return (
    <section id="inicio" className="content-width hero-section">
      <div className="hero-copy">
        <p className="hero-kicker">Portafolio profesional</p>
        <h1>
          Diseno soluciones web <span>con impacto real</span>
        </h1>
        <p className="hero-description">
          Frontend y full stack con foco en performance, experiencia de usuario y
          calidad de codigo. Esta es una base editable para tu portafolio final.
        </p>

        <div className="hero-actions">
          <a className="btn-primary" href="#proyectos">
            Ver proyectos
          </a>
          <a className="btn-secondary" href="#sobre-mi">
            Sobre mi
          </a>
        </div>

        <div className="highlights-grid">
          {heroHighlights.map((highlight) => (
            <div key={highlight.label} className="highlight-card">
              <p>{highlight.value}</p>
              <span>{highlight.label}</span>
            </div>
          ))}
        </div>
      </div>

      <aside className="hero-profile">
        <div className="profile-image-shell">
          <img src={profilePlaceholder} alt="Imagen placeholder de perfil" />
        </div>

        <div className="profile-content">
          <h2>Tu Nombre Apellido</h2>
          <p>Desarrollador Frontend / Full Stack</p>
          <ul>
            {heroFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  )
}
