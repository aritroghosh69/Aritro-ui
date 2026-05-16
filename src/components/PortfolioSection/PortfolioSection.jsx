import styles from './PortfolioSection.module.css'

const links = [
  {
    id: 'bento',
    label: 'Bento',
    icon: '⬡',
    color: '#4a9eff',
    bg: 'rgba(74,158,255,0.12)',
    href: 'https://bento.me',
  },
  {
    id: 'behance',
    label: 'Behance',
    icon: 'Bē',
    color: '#1769ff',
    bg: 'rgba(23,105,255,0.12)',
    href: 'https://behance.net',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: '📸',
    color: '#e1306c',
    bg: 'rgba(225,48,108,0.12)',
    href: 'https://instagram.com',
  },
  {
    id: 'youtube',
    label: 'Youtube',
    icon: '▶',
    color: '#ff0000',
    bg: 'rgba(255,0,0,0.12)',
    href: 'https://youtube.com',
  },
  {
    id: 'dribbble',
    label: 'Dribbble',
    icon: '⬤',
    color: '#ea4c89',
    bg: 'rgba(234,76,137,0.12)',
    href: 'https://dribbble.com',
  },
]

export default function PortfolioSection() {
  return (
    <div className={`card ${styles.wrapper}`}>
      <span className={styles.label}>Portfolio</span>
      <div className={styles.divider} />
      <div className={styles.links}>
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            style={{ '--link-bg': link.bg, '--link-color': link.color }}
          >
            <span className={styles.linkIcon} style={{ color: link.color }}>
              {link.icon}
            </span>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}
