import { Link } from 'react-router-dom'
import './BlogPreview.css'

interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
}

export const POSTS: Post[] = [
  {
    slug: 'typescript-dicas-avancadas',
    title: 'TypeScript: dicas avançadas que todo dev deveria saber',
    excerpt: 'Generics, utility types e padrões que melhoram a qualidade do código TypeScript no dia a dia.',
    date: '2026-03-20',
    readTime: '6 min',
    tags: ['TypeScript', 'Dev'],
  },
  {
    slug: 'react-performance',
    title: 'Como otimizar performance em aplicações React',
    excerpt: 'memo, useCallback, useMemo — quando usar e quando evitar. Guia prático com exemplos reais.',
    date: '2026-03-10',
    readTime: '8 min',
    tags: ['React', 'Performance'],
  },
  {
    slug: 'css-moderno',
    title: 'CSS moderno: o que mudou nos últimos anos',
    excerpt: 'Container queries, cascade layers, :has() — recursos poderosos que muitos devs ainda não usam.',
    date: '2026-02-28',
    readTime: '5 min',
    tags: ['CSS', 'Frontend'],
  },
]

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'short', year: 'numeric',
  })
}

export default function BlogPreview() {
  return (
    <section className="blog-preview section" id="blog">
      <div className="container">
        <div className="blog-preview__header">
          <div>
            <p className="section-label">// blog</p>
            <h2 className="section-title">Artigos recentes</h2>
          </div>
          <Link to="/blog" className="btn btn-outline">Ver todos →</Link>
        </div>

        <div className="blog-preview__grid">
          {POSTS.map(post => (
            <article key={post.slug} className="blog-card card">
              <div className="blog-card__meta">
                <span className="blog-card__date">{formatDate(post.date)}</span>
                <span className="blog-card__dot" />
                <span className="blog-card__read">{post.readTime} leitura</span>
              </div>

              <h3 className="blog-card__title">{post.title}</h3>
              <p className="blog-card__excerpt">{post.excerpt}</p>

              <div className="blog-card__footer">
                <div className="blog-card__tags">
                  {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <Link to={`/blog/${post.slug}`} className="blog-card__link">
                  Ler →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
