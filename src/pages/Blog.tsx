import { POSTS } from '../sections/BlogPreview/BlogPreview'
import './Blog.css'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric',
  })
}

export default function Blog() {
  return (
    <div className="blog-page">
      <div className="container blog-page__inner">
        <header className="blog-page__header">
          <p className="section-label">// blog</p>
          <h1 className="section-title">Todos os artigos</h1>
          <p className="section-subtitle">
            Escrevo sobre desenvolvimento, boas práticas e tecnologia.
          </p>
        </header>

        <div className="blog-page__list">
          {POSTS.map(post => (
            <article key={post.slug} className="blog-post-row card">
              <div className="blog-post-row__meta">
                <span>{formatDate(post.date)}</span>
                <span>·</span>
                <span>{post.readTime} leitura</span>
              </div>
              <h2 className="blog-post-row__title">{post.title}</h2>
              <p className="blog-post-row__excerpt">{post.excerpt}</p>
              <div className="blog-post-row__footer">
                <div className="blog-post-row__tags">
                  {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
