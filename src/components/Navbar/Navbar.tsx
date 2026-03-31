import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Início',   to: '/',        hash: '#hero'     },
  { label: 'Sobre',    to: '/',        hash: '#about'    },
  { label: 'Skills',   to: '/',        hash: '#skills'   },
  { label: 'Projetos', to: '/',        hash: '#projects' },
  { label: 'Blog',     to: '/blog',    hash: ''          },
  { label: 'Contato',  to: '/',        hash: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const handleAnchorClick = (hash: string) => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a className="navbar__logo" href="/">
          <span className="navbar__logo-bracket">{'<'}</span>
          dev
          <span className="navbar__logo-bracket">{'/>'}</span>
        </a>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}>
          {NAV_LINKS.map(({ label, to, hash }) => (
            hash ? (
              <NavLink
                key={label}
                to={to}
                className="navbar__link"
                onClick={() => handleAnchorClick(hash)}
              >
                {label}
              </NavLink>
            ) : (
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            )
          ))}
        </nav>

        <button
          className={`navbar__menu-btn${menuOpen ? ' navbar__menu-btn--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
