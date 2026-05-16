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
      {/* CTA Card */}
      <div className={`card ${styles.ctaCard}`}>
        <div className={styles.ctaContent}>
          <h3 className={styles.ctaTitle}>Let's work together</h3>
          <p className={styles.ctaText}>
            Aspiring management professional open to discussing strategic growth, marketing insights, or business operations. Let's connect and drive impactful results together.
          </p>
          <div className={styles.socialIcons}>
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconLink}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

      </div>


    </div>
  )
}
