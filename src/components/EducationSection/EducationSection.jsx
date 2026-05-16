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
    id: 'highschool',
    logo: '/central moder.png',
    title: 'High School',
    field: '10th & 12th (Higher Secondary)',
    institution: 'Central Modern School, Baranagar',
    year: 'Completed',
  },
]

export default function EducationSection() {
  return (
    <div className={styles.stack}>
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
