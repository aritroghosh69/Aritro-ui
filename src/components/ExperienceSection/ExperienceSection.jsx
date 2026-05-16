import styles from './ExperienceSection.module.css'

const experiences = [
  {
    id: 'freelancer',
    title: 'Freelancer',
    role: 'Logo/Brand Designer',
    period: '2021 – now',
    points: [
      'Worked on diverse logo and brand identity projects.',
      'Collaborated with clients from multiple countries.',
      'Developed a versatile design skill set.',
      'Adapted to unique challenges and requirements.',
    ],
  },
  {
    id: 'meetzed',
    title: 'Meetzed',
    role: 'Graphic Designer',
    period: '2020 – 2021',
    points: [
      'Collaboration: Supported Lead Designer on projects.',
      'Branding: Crafted unique brand identities.',
      'Tools: Used Illustrator, Photoshop & InDesign.',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <div className={styles.grid}>
      {experiences.map((exp) => (
        <div key={exp.id} className={`card ${styles.card}`}>
          <div className={styles.header}>
            <div>
              <h2 className={styles.title}>{exp.title}</h2>
              <p className={styles.role}>{exp.role}</p>
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
