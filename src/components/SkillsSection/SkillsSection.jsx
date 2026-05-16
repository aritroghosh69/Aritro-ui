import styles from './SkillsSection.module.css'

const rows = [
  {
    id: 'design',
    label: 'Design Tools',
    items: [
      { icon: '🎨', label: 'Ai', color: '#FF9A00', bg: 'rgba(255,154,0,0.15)' },
      { icon: '🖼️', label: 'Ps', color: '#31A8FF', bg: 'rgba(49,168,255,0.15)' },
      { icon: '📐', label: 'Id', color: '#FF3366', bg: 'rgba(255,51,102,0.15)' },
      { icon: '✏️', label: 'Xd', color: '#FF61F6', bg: 'rgba(255,97,246,0.15)' },
    ],
  },
  {
    id: 'editing',
    label: 'Editing Tools',
    items: [
      { icon: '🎞️', label: 'Ae', color: '#9999FF', bg: 'rgba(153,153,255,0.15)' },
      { icon: '🎬', label: 'Pr', color: '#EA77FF', bg: 'rgba(234,119,255,0.15)' },
      { icon: '🎥', label: 'Da', color: '#E8564B', bg: 'rgba(232,86,75,0.15)' },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    items: [
      { icon: '🇮🇳', label: 'Hindi', color: '#f0f0f0', bg: 'rgba(255,255,255,0.08)' },
      { icon: '🇬🇧', label: 'English', color: '#f0f0f0', bg: 'rgba(255,255,255,0.08)' },
      { icon: '🇺🇸', label: 'American', color: '#f0f0f0', bg: 'rgba(255,255,255,0.08)' },
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
