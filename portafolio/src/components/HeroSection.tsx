import profilePlaceholder from '../assets/Thiago_foto_perfil.jpeg'
import cvPdf from '../assets/Thiago_Puyelli_CV.pdf'
import { heroFacts, heroHighlights } from '../data/portfolioData'

export function HeroSection() {
  return (
    <section id="inicio" className="content-width hero-section">
      <div className="hero-copy">
        <p className="hero-kicker">Portafolio</p>
        <h1>
          Backend / Fullstack <span>Developer</span>
        </h1>
        <p className="hero-description">
          Más de 4 años desarrollando sistemas backend, plataformas multijugador en tiempo real y arquitecturas distribuidas utilizando Python, FastAPI, TypeScript, WebSockets y tecnologías cloud.
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
          <img src={profilePlaceholder} alt="Imagen placeholder de perfil" />
        </div>

        <div className="profile-content">
          <div className="profile-title">
            <h2>Thiago Puyelli</h2>
            <p>Backend / Fullstack Developer</p>
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
