import './Projects.css'

interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

const PROJECTS: Project[] = [
  {
    title: 'Projeto Alpha',
    description:
      'Aplicação web completa com autenticação, dashboard e integração com APIs externas. Construída com React, Node.js e PostgreSQL.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    title: 'Projeto Beta',
    description:
      'CLI para automação de tarefas de desenvolvimento. Reduz tempo de setup de novos projetos em até 80%.',
    tech: ['Python', 'CLI', 'Docker'],
    github: 'https://github.com/',
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
          {PROJECTS.map(({ title, description, tech, github, demo }) => (
            <article key={title} className="project-card card">
              <div className="project-card__top">
                <div className="project-card__icon">
                  <span>{'{ }'}</span>
                </div>
                <div className="project-card__links">
                  {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer"
                      className="project-card__link" aria-label="GitHub">
                      GH
                    </a>
                  )}
                  {demo && (
                    <a href={demo} target="_blank" rel="noopener noreferrer"
                      className="project-card__link" aria-label="Demo">
                      ↗
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-card__title">{title}</h3>
              <p className="project-card__desc">{description}</p>

              <div className="project-card__tech">
                {tech.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
