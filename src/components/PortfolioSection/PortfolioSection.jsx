import styles from './PortfolioSection.module.css'

const socialLinks = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: '/in/aritro-ghosh',
    desc: 'Professional profile & network',
    icon: <img src="/linkedin.png" alt="LinkedIn" width="22" height="22" style={{ objectFit: 'contain' }} />,
    color: '#0077b5',
    bg: 'rgba(0,119,181,0.1)',
    border: 'rgba(0,119,181,0.25)',
    href: 'https://linkedin.com',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@aritro.ghosh',
    desc: 'Creative & personal moments',
    icon: <img src="/insta.png" alt="Instagram" width="22" height="22" style={{ objectFit: 'contain' }} />,
    color: '#e1306c',
    bg: 'rgba(225,48,108,0.1)',
    border: 'rgba(225,48,108,0.25)',
    href: 'https://instagram.com',
  },
  {
    id: 'x',
    label: 'X (Twitter)',
    handle: '@aritroghosh',
    desc: 'Thoughts on business & growth',
    icon: <img src="/x.png" alt="X" width="22" height="22" style={{ objectFit: 'contain' }} />,
    color: '#e7e9ea',
    bg: 'rgba(255,255,255,0.06)',
    border: 'rgba(255,255,255,0.12)',
    href: 'https://x.com',
  },
  {
    id: 'medium',
    label: 'Medium',
    handle: '@aritroghosh',
    desc: 'Articles on business & strategy',
    icon: <img src="/medium.png" alt="Medium" width="22" height="22" style={{ objectFit: 'contain' }} />,
    color: '#e8e8e8',
    bg: 'rgba(255,255,255,0.06)',
    border: 'rgba(255,255,255,0.12)',
    href: 'https://medium.com',
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: '@aritroghosh',
    desc: 'Code & project repositories',
    icon: <img src="/github.png" alt="GitHub" width="22" height="22" style={{ objectFit: 'contain' }} />,
    color: '#f0f0f0',
    bg: 'rgba(255,255,255,0.06)',
    border: 'rgba(255,255,255,0.12)',
    href: 'https://github.com',
  },
]

export default function PortfolioSection() {
  return (
    <div className={styles.wrapper}>
      {/* CTA Card */}
      <div className={`card ${styles.ctaCard}`}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaBadge}>Open to Opportunities</div>
          <h3 className={styles.ctaTitle}>Let's build something<br />together.</h3>
          <p className={styles.ctaText}>
            Whether you're looking for a driven management professional, a business collaborator, or just want to connect — my inbox is always open.
          </p>
          <a href="mailto:gmampi502@gmail.com" className={styles.ctaBtn}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Send me an email
          </a>
        </div>
        <div className={styles.ctaDecor} aria-hidden="true">
          <div className={styles.decor1} />
          <div className={styles.decor2} />
        </div>
      </div>

      {/* Social grid */}
      <div className={styles.grid}>
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            style={{ '--accent': link.color, '--bg': link.bg, '--border': link.border }}
          >
            <div className={styles.cardIcon}>{link.icon}</div>
            <div className={styles.cardInfo}>
              <span className={styles.cardLabel}>{link.label}</span>
              <span className={styles.cardHandle}>{link.handle}</span>
              <span className={styles.cardDesc}>{link.desc}</span>
            </div>
            <svg className={styles.arrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        ))}
      </div>
    </div>
  )
}
