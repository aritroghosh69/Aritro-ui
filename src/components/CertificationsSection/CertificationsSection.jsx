import styles from './CertificationsSection.module.css'

const certifications = [
  {
    id: 'google',
    logo: '/google.png',
    title: 'Project Management Simulation',
    issuer: 'Google',
    url: '#',
    logoStyle: {},
  },
  {
    id: 'jpmorgan',
    logo: '/jpmaorgan.png',
    title: 'Job Simulation',
    issuer: 'JPMorgan Chase & Co.',
    url: '#',
    logoStyle: { filter: 'brightness(0) invert(1)', transform: 'scale(1.25)' },
  },
]

export default function CertificationsSection() {
  return (
    <div className={styles.stack}>
      {certifications.map((cert) => (
        <div key={cert.id} className={`card ${styles.row}`}>
          <div className={styles.left}>
            <div className={styles.logoWrap}>
              <img
                src={cert.logo}
                alt={cert.issuer}
                className={styles.logo}
                style={cert.logoStyle}
              />
            </div>
            <div className={styles.info}>
              <span className={styles.title}>{cert.title}</span>
              <span className={styles.issuer}>{cert.issuer}</span>
            </div>
          </div>
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkBtn}
            aria-label={`View ${cert.title} certificate`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      ))}
    </div>
  )
}
