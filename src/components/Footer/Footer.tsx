import './Footer.css'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/victoorsaants', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jo%C3%A3o-victor-18b214326/', icon: 'in' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          <span className="footer__copy-bracket">{'<'}</span>
          feito por João Victor
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
