import './Projects.css'

interface Project {
  title: string
  description: string
  tech: string[]
  image?: string
  github?: string
  demo?: string
}

const PROJECTS: Project[] = [
  {
    title: 'Sistema Join',
    description:
      'Sistema de adição e remoção de dashboards com login e senha, frontend feito em HTML, CSS e JavaScript, backend feito em Python com FastAPI.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python'],
    github: 'https://github.com/victoorsaants/Sistema-Join',
    demo: 'https://sistema-join.onrender.com',
  },
  {
    title: 'Landing Page Join',
    description:
      'Landing Page feita para venda de e-book da empresa, página feita com HTML, CSS e JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/victoorsaants/Join',
    demo: 'https://join-sigma.vercel.app/',
  },
  {
    title: 'Projeto Gamma',
    description:
      'Dashboard de analytics em tempo real com WebSockets, gráficos interativos e exportação de relatórios.',
    tech: ['React', 'WebSocket', 'TypeScript', 'CSS'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
]

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <p className="section-label">// projetos</p>
        <h2 className="section-title">O que eu construí</h2>
        <p className="section-subtitle">
          Seleção de projetos pessoais e profissionais. Cada um foi um aprendizado.
        </p>

        <div className="projects__grid">
          {PROJECTS.map(({ title, description, tech, image, github, demo }) => (
            <article key={title} className="project-card card">

              <div className="project-card__image-wrap">
                {image ? (
                  <img src={image} alt={title} className="project-card__image" />
                ) : (
                  <div className="project-card__placeholder" aria-hidden="true">
                    <span className="project-card__placeholder-icon">{'{ }'}</span>
                  </div>
                )}

                <div className="project-card__overlay">
                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__overlay-btn project-card__overlay-btn--demo"
                      onClick={e => e.stopPropagation()}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
                      </svg>
                      Demo
                    </a>
                  )}
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__overlay-btn project-card__overlay-btn--code"
                      onClick={e => e.stopPropagation()}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                      Código
                    </a>
                  )}
                </div>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{title}</h3>
                <p className="project-card__desc">{description}</p>
                <div className="project-card__tech">
                  {tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
