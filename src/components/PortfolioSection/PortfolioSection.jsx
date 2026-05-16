import styles from './PortfolioSection.module.css'

const links = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
    color: '#0077b5',
    bg: 'rgba(0,119,181,0.12)',
    href: 'https://linkedin.com',
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
    id: 'github',
    label: 'GitHub',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
    color: '#f0f0f0',
    bg: 'rgba(255,255,255,0.12)',
    href: 'https://github.com',
  },
  {
    id: 'x',
    label: 'X',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
    color: '#f0f0f0',
    bg: 'rgba(255,255,255,0.12)',
    href: 'https://x.com',
  },
  {
    id: 'medium',
    label: 'Medium',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>,
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
