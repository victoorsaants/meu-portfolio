import './Certificates.css'

const CERTIFICATES = [
  {
    title: 'Nome do Certificado',
    issuer: 'Plataforma / Instituição',
    date: 'Mês YYYY',
    url: '#',
  },
  {
    title: 'Nome do Certificado',
    issuer: 'Plataforma / Instituição',
    date: 'Mês YYYY',
    url: '#',
  },
  {
    title: 'Nome do Certificado',
    issuer: 'Plataforma / Instituição',
    date: 'Mês YYYY',
    url: '#',
  },
]

export default function Certificates() {
  return (
    <section className="certificates section" id="certificates">
      <div className="container">
        <p className="section-label">// certificados</p>
        <h2 className="section-title">Certificações</h2>
        <p className="section-subtitle">
          Cursos e certificações concluídos ao longo da minha jornada.
        </p>

        <div className="certificates__grid">
          {CERTIFICATES.map((cert, i) => (
            <a
              key={i}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="certificates__card card"
            >
              <div className="certificates__icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                </svg>
              </div>

              <div className="certificates__info">
                <h3 className="certificates__title">{cert.title}</h3>
                <span className="certificates__issuer">{cert.issuer}</span>
              </div>

              <span className="certificates__date tag">{cert.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
