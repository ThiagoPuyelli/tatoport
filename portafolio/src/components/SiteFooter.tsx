import { navItems } from '../data/portfolioData'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
  { label: 'Email', href: 'mailto:tuemail@ejemplo.com' },
]

export function SiteFooter() {
  return (
    <footer id="footer-contacto" className="site-footer">
      <div className="content-width footer-content">
        <h2>
          <span>Tu Nombre</span> Portfolio
        </h2>
        <p>Base inicial de portafolio inspirada en estilo tech, lista para personalizar.</p>

        <nav className="footer-nav" aria-label="Navegacion del pie de pagina">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer-social">
          {socialLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>

        <small>© 2026 Tu Nombre. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}
