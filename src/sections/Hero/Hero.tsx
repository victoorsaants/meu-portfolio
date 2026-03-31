import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__greeting">
            <span className="hero__greeting-dot" />
            Disponível para oportunidades
          </p>

          <h1 className="hero__title">
            Olá, eu sou{' '}
            <span className="hero__title-name">João Victor</span>
            <br />
            <span className="hero__title-role">Desenvolvedor Full Stack</span>
          </h1>

          <p className="hero__desc">
            Construo interfaces modernas e sistemas robustos com foco em
            performance, acessibilidade e experiência do usuário.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              Ver projetos
            </a>
            <a href="#contact" className="btn btn-outline">
              Entrar em contato
            </a>
          </div>

          <div className="hero__stack">
            {['TypeScript', 'React', 'Node.js', 'Python'].map(tech => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__code-card">
            <div className="hero__code-header">
              <span className="hero__code-dot hero__code-dot--red" />
              <span className="hero__code-dot hero__code-dot--yellow" />
              <span className="hero__code-dot hero__code-dot--green" />
              <span className="hero__code-filename">portfolio.ts</span>
            </div>
            <pre className="hero__code-body"><code>{`const developer = {
  name: "João Victor",
  role: "Full Stack Dev",
  stack: [
    "TypeScript",
    "React",
    "Node.js",
  ],
  available: true,
}`}</code></pre>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}
