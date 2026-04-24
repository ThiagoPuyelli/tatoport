import { navItems } from '../data/portfolioData'

export function Navbar() {
  return (
    <header className="site-nav">
      <div className="content-width nav-inner">
        <a className="brand-link" href="#inicio">
          <span className="brand-main">Tu Nombre</span>
          <span className="brand-accent">Portfolio</span>
        </a>

        <nav className="nav-links" aria-label="Secciones principales">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="contact-chip" href="#footer-contacto">
          Contacto
        </a>
      </div>
    </header>
  )
}
