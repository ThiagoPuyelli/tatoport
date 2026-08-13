import { useEffect, useState } from 'react'
import menuIcon from '../assets/menu.png'
import { navItems } from '../data/portfolioData'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 980) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen)

    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-nav">
      <div className="content-width nav-inner">
        <a className="brand-link" href="#inicio">
          <span className="brand-main">Thiago Puyelli</span>
        </a>

        <nav className="nav-links" aria-label="Secciones principales">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu-panel"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <img src={menuIcon} alt="" />
        </button>
      </div>

      <button
        type="button"
        className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}
        aria-label="Cerrar menú lateral"
        onClick={closeMenu}
      />

      <nav
        id="mobile-menu-panel"
        className={`mobile-menu-panel ${isMenuOpen ? 'open' : ''}`}
        aria-label="Secciones principales en móvil"
      >
        <div className="mobile-menu-head">
          <p>Menú</p>
          <button type="button" onClick={closeMenu}>
            Cerrar
          </button>
        </div>

        <div className="mobile-menu-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
