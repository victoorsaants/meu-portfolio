import './Skills.css'

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
  },
  {
    category: 'Backend',
    skills: ['Python', 'FastAPI', 'Java', 'PostgreSQL'],
  },
  {
    category: 'Ferramentas',
    skills: ['Git', 'GitHub', 'Antigravity'],
  },
]

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <p className="section-label">// habilidades</p>
        <h2 className="section-title">Stack & Tecnologias</h2>
        <p className="section-subtitle">
          Tecnologias que uso no dia a dia para construir produtos completos,
          do front ao back.
        </p>

        <div className="skills__grid">
          {SKILL_GROUPS.map(({ category, skills }) => (
            <div key={category} className="skills__group card">
              <h3 className="skills__category">{category}</h3>
              <div className="skills__tags">
                {skills.map(skill => (
                  <span key={skill} className="tag skills__tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
