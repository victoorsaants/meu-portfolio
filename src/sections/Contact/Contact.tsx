import { useState, FormEvent } from 'react'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: integrar com serviço de e-mail (ex: EmailJS, Formspree)
    setSent(true)
  }

  return (
    <section className="contact section" id="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <p className="section-label">// contato</p>
          <h2 className="section-title">Vamos trabalhar juntos?</h2>
          <p className="section-subtitle">
            Estou disponível para freelances, projetos e oportunidades de emprego.
            Manda uma mensagem!
          </p>

          <div className="contact__channels">
            <a href="mailto:dev.victor77@gmail.com" className="contact__channel">
              <span className="contact__channel-icon">@</span>
              <div>
                <span className="contact__channel-label">E-mail</span>
                <span className="contact__channel-value"></span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-18b214326/" target="_blank" rel="noopener noreferrer" className="contact__channel">
              <span className="contact__channel-icon">in</span>
              <div>
                <span className="contact__channel-label">LinkedIn</span>
                <span className="contact__channel-value"></span>
              </div>
            </a>
          </div>
        </div>

        <div className="contact__form-wrap card">
          {sent ? (
            <div className="contact__success">
              <span className="contact__success-icon">✓</span>
              <p>Mensagem enviada! Responderei em breve.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label htmlFor="name">Nome</label>
                <input id="name" name="name" type="text" placeholder="Seu nome" required />
              </div>
              <div className="contact__field">
                <label htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" placeholder="seu@email.com" required />
              </div>
              <div className="contact__field">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" rows={5} placeholder="Olá, gostaria de..." required />
              </div>
              <button type="submit" className="btn btn-primary contact__submit">
                Enviar mensagem
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
