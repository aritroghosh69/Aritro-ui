import styles from './EducationSection.module.css'

const education = [
  {
    id: 'graduation',
    logo: '/techno.png',
    title: 'Bachelor of Business Admin',
    field: 'BBA',
    institution: 'Techno Main Saltlake, MAKAUT',
    year: 'Present',
  },
  {
    id: 'highersecondary',
    logo: '/central moder.png',
    title: 'Higher Secondary',
    field: '12th Grade',
    institution: 'Central Modern School, Baranagar',
    year: 'Completed',
  },
  {
    id: 'secondary',
    logo: '/central moder.png',
    title: 'Secondary',
    field: '10th Grade',
    institution: 'Central Modern School, Baranagar',
    year: 'Completed',
  },
]

export default function EducationSection() {
  return (
    <div className={styles.stack}>
      <div className={styles.subHeader}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        Education
      </div>
      {education.map((edu) => (
        <div key={edu.id} className={`card ${styles.card}`}>
          <div className={styles.row}>
            <div className={styles.info}>
              <div className={styles.titleRow}>
                {edu.logo && <img src={edu.logo} alt="" className={styles.logo} />}
                <h3 className={styles.title}>{edu.title}</h3>
              </div>
              <p className={styles.field}>{edu.field}</p>
              <p className={styles.institution}>{edu.institution}</p>
            </div>
            <span className="tag">{edu.year}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
