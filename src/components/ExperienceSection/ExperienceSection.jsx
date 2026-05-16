import styles from './ExperienceSection.module.css'

const experiences = [
  {
    id: 'essentiapro',
    logo: '/essentiapro.png',
    title: 'Essentia Pro',
    role: 'Co-Founder & Business Manager',
    period: '2024 – Present',
    url: 'https://essentia-pro.vercel.app/',
    points: [
      'Co-founded and managed a growing healthcare and hygiene brand with a team-driven approach.',
      'Handled sales, marketing, and day-to-day business operations.',
      'Served 200+ customers on a monthly basis through consistent customer engagement.',
      'Collaborated with partners and distributors to expand brand reach and sales.',
      'Led branding and promotional strategies to drive business growth.',
      'Managed client communication, negotiations, and customer relationships.',
      'Built practical experience in entrepreneurship, leadership, and business development.',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <div className={styles.grid}>
      {experiences.map((exp) => (
        <div key={exp.id} className={`card ${styles.card}`}>
          <div className={styles.header}>
            <div className={styles.titleWrapper}>
              {exp.logo && (
                <div className={styles.logoContainer}>
                  <img src={exp.logo} alt={exp.title} className={styles.logo} />
                </div>
              )}
              <div>
                <div className={styles.titleRow}>
                  <h2 className={styles.title}>{exp.title}</h2>
                  {exp.url && (
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className={styles.titleLink} aria-label="Visit website">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                    </a>
                  )}
                </div>
                <p className={styles.role}>{exp.role}</p>
              </div>
            </div>
            <span className="tag">{exp.period}</span>
          </div>
          <div className="divider" />
          <ul className={styles.list}>
            {exp.points.map((point, i) => (
              <li key={i} className={styles.point}>
                <span className={styles.bullet} />
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
