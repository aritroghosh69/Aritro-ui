import styles from './SkillsSection.module.css'

const AiIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#330000" />
    <rect x="1.5" y="1.5" width="21" height="21" rx="3" stroke="#FF9A00" strokeWidth="3" />
    <path d="M7.5 16.5L10 9H12.5L15 16.5H13L12.3 14H9.7L9 16.5H7.5ZM11 10.5L10.1 13H11.9L11 10.5Z" fill="#FF9A00"/>
    <path d="M16 16.5V9H17.5V16.5H16ZM16 7.5V6H17.5V7.5H16Z" fill="#FF9A00"/>
  </svg>
);

const PsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#001E36" />
    <rect x="1.5" y="1.5" width="21" height="21" rx="3" stroke="#31A8FF" strokeWidth="3" />
    <path d="M7 16.5V7.5H11.5C13 7.5 14 8.2 14 9.5C14 10.8 13 11.5 11.5 11.5H8.5V16.5H7ZM8.5 10.2H11C11.8 10.2 12.3 9.9 12.3 9.2C12.3 8.5 11.8 8.2 11 8.2H8.5V10.2Z" fill="#31A8FF"/>
    <path d="M14.5 14C14.5 15.5 15.5 16.5 17 16.5C18.2 16.5 19 15.8 19 14.8C19 13.5 18 13 16.5 12.8C15.5 12.6 15 12.4 15 11.8C15 11.2 15.5 10.8 16.5 10.8C17.2 10.8 17.8 11.2 18 11.8L19 11.2C18.5 10.2 17.5 9.8 16.5 9.8C15.2 9.8 14.2 10.5 14.2 11.8C14.2 13.2 15.2 13.8 16.8 14C17.5 14.1 18 14.4 18 14.8C18 15.4 17.5 15.8 16.8 15.8C15.8 15.8 15.2 15.2 15 14.5L14.5 14Z" fill="#31A8FF"/>
  </svg>
);

const IdIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#49021F" />
    <rect x="1.5" y="1.5" width="21" height="21" rx="3" stroke="#FF3366" strokeWidth="3" />
    <path d="M7 16.5V7.5H8.5V16.5H7Z" fill="#FF3366"/>
    <path d="M10.5 16.5V7.5H13C15.2 7.5 17 9 17 12C17 15 15.2 16.5 13 16.5H10.5ZM12 15H13C14.2 15 15.5 14.2 15.5 12C15.5 9.8 14.2 9 13 9H12V15Z" fill="#FF3366"/>
  </svg>
);

const XdIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#470137" />
    <rect x="1.5" y="1.5" width="21" height="21" rx="3" stroke="#FF61F6" strokeWidth="3" />
    <path d="M7 16.5L10 12L7 7.5H8.8L10.8 10.8L12.8 7.5H14.6L11.6 12L14.6 16.5H12.8L10.8 13.2L8.8 16.5H7Z" fill="#FF61F6"/>
    <path d="M15 16.5V7.5H17C18.8 7.5 20 8.8 20 12C20 15.2 18.8 16.5 17 16.5H15ZM16.5 15H17C18 15 18.5 14.2 18.5 12C18.5 9.8 18 9 17 9H16.5V15Z" fill="#FF61F6"/>
  </svg>
);

const AeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#00005B" />
    <rect x="1.5" y="1.5" width="21" height="21" rx="3" stroke="#9999FF" strokeWidth="3" />
    <path d="M6 16.5L8.5 9H10.5L13 16.5H11.5L10.8 14.2H8.2L7.5 16.5H6ZM9.5 10.5L8.6 13H10.4L9.5 10.5Z" fill="#9999FF"/>
    <path d="M13.5 16.5V9H18V10.5H15V12H17.5V13.5H15V15H18V16.5H13.5Z" fill="#9999FF"/>
  </svg>
);

const PrIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#2B005A" />
    <rect x="1.5" y="1.5" width="21" height="21" rx="3" stroke="#EA77FF" strokeWidth="3" />
    <path d="M7 16.5V7.5H11C12.5 7.5 13.5 8.2 13.5 9.8C13.5 11.2 12.5 12 11 12H8.5V16.5H7ZM8.5 10.5H11C11.8 10.5 12 10.2 12 9.8C12 9.2 11.8 9 11 9H8.5V10.5Z" fill="#EA77FF"/>
    <path d="M14 16.5V10.5H15.5V11.5C15.8 10.8 16.5 10.5 17 10.5C17.5 10.5 18 10.8 18 11V12.5C17.5 12.2 17 12.2 16.5 12.5C16 12.8 15.5 13.5 15.5 14.5V16.5H14Z" fill="#EA77FF"/>
  </svg>
);

const DaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="none" stroke="#E8564B" strokeWidth="2.5" />
    <path d="M12 6L17 15H7L12 6Z" fill="#E8564B" />
  </svg>
);

const rows = [
  {
    id: 'design',
    label: 'Design Tools',
    items: [
      { icon: <AiIcon />, label: 'Ai', color: '#FF9A00', bg: 'rgba(255,154,0,0.15)' },
      { icon: <PsIcon />, label: 'Ps', color: '#31A8FF', bg: 'rgba(49,168,255,0.15)' },
      { icon: <IdIcon />, label: 'Id', color: '#FF3366', bg: 'rgba(255,51,102,0.15)' },
      { icon: <XdIcon />, label: 'Xd', color: '#FF61F6', bg: 'rgba(255,97,246,0.15)' },
    ],
  },
  {
    id: 'editing',
    label: 'Editing Tools',
    items: [
      { icon: <AeIcon />, label: 'Ae', color: '#9999FF', bg: 'rgba(153,153,255,0.15)' },
      { icon: <PrIcon />, label: 'Pr', color: '#EA77FF', bg: 'rgba(234,119,255,0.15)' },
      { icon: <DaIcon />, label: 'Da', color: '#E8564B', bg: 'rgba(232,86,75,0.15)' },
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
