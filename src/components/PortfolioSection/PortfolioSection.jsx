import styles from './PortfolioSection.module.css'

const links = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: <img src="/linkedin.png" alt="LinkedIn" width="16" height="16" style={{ objectFit: 'contain' }} />,
    color: '#0077b5',
    bg: 'rgba(0,119,181,0.12)',
    href: 'https://linkedin.com',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: <img src="/insta.png" alt="Instagram" width="16" height="16" style={{ objectFit: 'contain' }} />,
    color: '#e1306c',
    bg: 'rgba(225,48,108,0.12)',
    href: 'https://instagram.com',
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: <img src="/github.png" alt="GitHub" width="16" height="16" style={{ objectFit: 'contain' }} />,
    color: '#f0f0f0',
    bg: 'rgba(255,255,255,0.12)',
    href: 'https://github.com',
  },
  {
    id: 'x',
    label: 'X',
    icon: <img src="/x.png" alt="X" width="16" height="16" style={{ objectFit: 'contain' }} />,
    color: '#f0f0f0',
    bg: 'rgba(255,255,255,0.12)',
    href: 'https://x.com',
  },
  {
    id: 'medium',
    label: 'Medium',
    icon: <img src="/medium.png" alt="Medium" width="16" height="16" style={{ objectFit: 'contain' }} />,
    color: '#f0f0f0',
    bg: 'rgba(255,255,255,0.12)',
    href: 'https://medium.com',
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
