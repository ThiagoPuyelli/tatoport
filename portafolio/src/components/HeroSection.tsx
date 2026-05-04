import profilePlaceholder from '../assets/Thiago_foto_perfil.jpeg'
import { heroFacts, heroHighlights } from '../data/portfolioData'

export function HeroSection() {
  return (
    <section id="inicio" className="content-width hero-section">
      <div className="hero-copy">
        <p className="hero-kicker">Portafolio</p>
        <h1>
          Analista Programador Universitario <span>Backend/Infra</span>
        </h1>
        <p className="hero-description">
          Experiencia como fullstack, con conocimientos respecto a infraestructura y el mundo distribuido. Empecé en el mundo de la programación a la corta edad de los 16 años, desde ese momento nunca deje de progresar como desarrollador y analista.
        </p>

        <div className="hero-actions">
          <a className="btn-primary" href="#proyectos">
            Ver proyectos
          </a>
          <a className="btn-secondary" href="#contacto">
            Contacto
          </a>
        </div>

        <div className="highlights-grid">
          {heroHighlights.map((highlight) => (
            <div key={highlight.label} className="highlight-card">
              <p className='text-justify'>{highlight.value}</p>
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
          <div className="profile-title">
            <h2>Thiago Puyelli</h2>
            <p>Analista Programador Universitario</p>
          </div>
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
