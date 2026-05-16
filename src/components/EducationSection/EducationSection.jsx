import styles from './EducationSection.module.css'

const education = [
  {
    id: 'highschool',
    title: 'High School',
    field: 'Humanities',
    institution: 'Delhi Cantonment, India',
    year: '2017',
  },
  {
    id: 'diploma',
    title: 'Diploma',
    field: 'Animation and Graphic Design',
    institution: 'Delhi, India',
    year: '2017–18',
  },
  {
    id: 'graduation',
    title: 'Graduation',
    field: 'Bachelor of Fine Arts',
    institution: 'IGNOU Delhi, India',
    year: '2017–21',
  },
]

export default function EducationSection() {
  return (
    <div className={styles.stack}>
      {education.map((edu) => (
        <div key={edu.id} className={`card ${styles.card}`}>
          <div className={styles.row}>
            <div className={styles.info}>
              <h3 className={styles.title}>{edu.title}</h3>
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
