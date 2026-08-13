import profilePlaceholder from '../assets/Thiago_foto_perfil.jpeg'
import cvPdf from '../assets/Thiago_Puyelli_CV.pdf'
import { heroFacts, heroHighlights } from '../data/portfolioData'

export function HeroSection() {
  return (
    <section id="inicio" className="content-width hero-section">
      <div className="hero-copy">
        <p className="hero-kicker">Portafolio</p>
        <h1>
          Full Stack <span>Developer</span>
        </h1>
        <p className="hero-description">
          Más de 4 años construyendo productos web, APIs y sistemas distribuidos con TypeScript, Python, React, Next.js, FastAPI y tecnologías cloud.
        </p>

        <div className="hero-actions">
          <a className="btn-primary" href="#proyectos">
            Ver proyectos
          </a>
          <a className="btn-secondary" href="#contacto">
            Contacto
          </a>
          <a className="btn-secondary" href={cvPdf} download="Thiago_Puyelli_CV.pdf">
            Descargar CV
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
          <img src={profilePlaceholder} alt="Foto de perfil de Thiago Puyelli" />
        </div>

        <div className="profile-content">
          <div className="profile-title">
            <h2>Thiago Puyelli</h2>
            <p>Full Stack Developer</p>
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
