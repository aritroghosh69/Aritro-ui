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
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
    color: '#e1306c',
    bg: 'rgba(225,48,108,0.12)',
    href: 'https://instagram.com',
  },
  {
    id: 'youtube',
    label: 'Youtube',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>,
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
