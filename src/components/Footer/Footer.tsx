import './Footer.css'

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'in' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          <span className="footer__copy-bracket">{'<'}</span>
          feito com React + TypeScript
          <span className="footer__copy-bracket">{'/>'}</span>
          <span className="footer__year"> — {year}</span>
        </p>

        <div className="footer__socials">
          {SOCIALS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
