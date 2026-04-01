import './About.css'

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__inner">
        <div className="about__content">
          <p className="section-label">// sobre mim</p>
          <h2 className="section-title">Quem sou eu</h2>
          <p className="section-subtitle">
            Desenvolvedor apaixonado por criar soluções que unem boa engenharia
            com experiências visuais marcantes. Gosto de trabalhar em toda a
            stack do banco de dados à interface final.
          </p>
          <p className="about__text">
            Tenho foco em código limpo, performance e acessibilidade. Quando não
            estou programando, estou estudando novas tecnologias ou contribuindo
            com projetos open source.
          </p>

          <div className="about__actions">
            <a href="#contact" className="btn btn-primary">Vamos conversar</a>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
