import styles from './SkillsSection.module.css'

const rows = [
  {
    id: 'entrepreneur',
    label: 'Mindset & Vision',
    items: [
      { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>, label: 'Entrepreneurship', color: '#FF9A00', bg: 'rgba(255,154,0,0.15)' },
    ],
  },
  {
    id: 'tech',
    label: 'Tech Skills',
    items: [
      { icon: <img src="/mysql.png" alt="MySQL" width="16" height="16" style={{ objectFit: 'contain' }} />, label: 'MySQL', color: '#4a9eff', bg: 'rgba(74,158,255,0.15)' },
      { icon: <img src="/python.png" alt="Python" width="16" height="16" style={{ objectFit: 'contain' }} />, label: 'Python', color: '#FFD43B', bg: 'rgba(255,212,59,0.15)' },
      { icon: <img src="/java.png" alt="Java" width="16" height="16" style={{ objectFit: 'contain' }} />, label: 'Java', color: '#E8564B', bg: 'rgba(232,86,75,0.15)' },
    ],
  },
  {
    id: 'other',
    label: 'Other Skills',
    items: [
      { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M5 17H3v-6l2-5h14l2 5v6h-2"/><path d="M5 11h14"/></svg>, label: 'Driving', color: '#3ecf8e', bg: 'rgba(62,207,142,0.15)' },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    items: [
      { icon: <img src="https://flagcdn.com/w40/in.png" width="16" alt="India" />, label: 'Hindi', color: '#f0f0f0', bg: 'rgba(255,255,255,0.08)' },
      { icon: <img src="https://flagcdn.com/w40/gb.png" width="16" alt="UK" />, label: 'English', color: '#f0f0f0', bg: 'rgba(255,255,255,0.08)' },
      { icon: <img src="https://flagcdn.com/w40/us.png" width="16" alt="US" />, label: 'American', color: '#f0f0f0', bg: 'rgba(255,255,255,0.08)' },
    ],
  },
]

export default function SkillsSection() {
  return (
    <div className={styles.stack}>
      {rows.map((row) => (
        <div key={row.id} className={`card ${styles.row}`}>
          <span className={styles.label}>{row.label}</span>
          <div className={styles.divider} />
          <div className={styles.items}>
            {row.items.map((item) => (
              <div
                key={item.label}
                className={styles.badge}
                style={{ '--badge-bg': item.bg, '--badge-color': item.color }}
              >
                <span className={styles.badgeIcon}>{item.icon}</span>
                <span className={styles.badgeLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
