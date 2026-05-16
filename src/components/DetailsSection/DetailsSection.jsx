import styles from './DetailsSection.module.css'

const details = [
  { id: 'age',   icon: '🧑', label: '26 years' },
  { id: 'email', icon: '📧', label: 'iamsunilfreelancer.com' },
  { id: 'phone', icon: '📞', label: '+91 9899052055' },
  { id: 'location', icon: '🇮🇳', label: 'India' },
]

export default function DetailsSection() {
  return (
    <div className={`card ${styles.wrapper}`}>
      <span className={styles.label}>Details</span>
      <div className={styles.divider} />
      <div className={styles.items}>
        {details.map((d) => (
          <div key={d.id} className={styles.item}>
            <span className={styles.itemIcon}>{d.icon}</span>
            <span className={styles.itemLabel}>{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
