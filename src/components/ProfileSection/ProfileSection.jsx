import styles from './ProfileSection.module.css'

const bio = `My name is Aritro — a self-taught logo/brand designer with 4+ years of experience creating modern, clean, and minimal brands that make a lasting impression.`

const interests = [
  { icon: '🎮', label: 'Gaming' },
  { icon: '🎬', label: 'Film Making' },
  { icon: '✈️', label: 'Traveling' },
]

export default function ProfileSection() {
  return (
    <div className={styles.wrapper}>
      {/* Top row: avatar + bio */}
      <div className={styles.topRow}>
        <div className={styles.avatarWrap}>
          <img
            src="https://api.dicebear.com/7.x/notionists/svg?seed=aritro&backgroundColor=1a1a1a&radius=16"
            alt="Aritro avatar"
            className={styles.avatar}
          />
        </div>
        <div className={`card ${styles.bioCard}`}>
          <p className={styles.bioText}>{bio}</p>
        </div>
      </div>

      {/* Interests row */}
      <div className={`card ${styles.interestsCard}`}>
        <span className={styles.label}>Interests</span>
        <div className={styles.divider} />
        <div className={styles.pills}>
          {interests.map((item) => (
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
