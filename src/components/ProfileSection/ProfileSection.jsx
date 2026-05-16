import styles from './ProfileSection.module.css'

const bio = `My name is Aritro Ghosh — an aspiring management professional with a strong foundation in business administration and a passion for driving strategic growth and operational excellence.`

const targetRoles = [
  { icon: '📈', label: 'Marketing' },
  { icon: '💼', label: 'Sales' },
  { icon: '🚀', label: 'Business Dev' },
  { icon: '👥', label: 'HR' },
]

export default function ProfileSection() {
  return (
    <div className={styles.wrapper}>
      {/* Top row: avatar + bio */}
      <div className={styles.topRow}>
        <div className={styles.avatarWrap}>
          <img
            src="/hero.jpeg"
            alt="Aritro avatar"
            className={styles.avatar}
          />
        </div>
        <div className={`card ${styles.bioCard}`}>
          <p className={styles.bioText}>{bio}</p>
        </div>
      </div>

      {/* Roles row */}
      <div className={`card ${styles.interestsCard}`}>
        <span className={styles.label}>Target Roles</span>
        <div className={styles.divider} />
        <div className={styles.pills}>
          {targetRoles.map((item) => (
            <span key={item.label} className="pill">
              <span className="pill-icon">{item.icon}</span>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
