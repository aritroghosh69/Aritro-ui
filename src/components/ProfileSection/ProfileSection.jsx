import styles from './ProfileSection.module.css'

const bio = `My name is Aritro Ghosh — an aspiring management professional with a strong foundation in business administration and a passion for driving strategic growth and operational excellence.`

const targetRoles = [
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>, label: 'Marketing' },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>, label: 'Sales' },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5.5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>, label: 'Business Dev' },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, label: 'HR' },
]

export default function ProfileSection({ onHireClick }) {
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
          <div className={styles.actionRow}>
            <button className={styles.hireBtn} onClick={onHireClick}>
              Hire Me
            </button>
          </div>
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
