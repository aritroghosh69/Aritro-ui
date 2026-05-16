import styles from './HireMePage.module.css'

export default function HireMePage({ onBack }) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.backButton} onClick={onBack}>
        &larr; Back to Portfolio
      </button>
      
      <div className={`card ${styles.card}`}>
        <h1 className={styles.title}>Hire Me</h1>
        <p className={styles.subtitle}>Let's build something great together. Fill out the details below based on the skills you need.</p>
        
        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); onBack(); }}>
          <div className={styles.inputGroup}>
            <label>Name</label>
            <input type="text" placeholder="John Doe" required />
          </div>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="email" placeholder="john@example.com" required />
          </div>
          <div className={styles.inputGroup}>
            <label>Required Skills / Project Type</label>
            <select required>
              <option value="">Select an option...</option>
              <option value="business">Business Development & Strategy</option>
              <option value="marketing">Sales & Marketing</option>
              <option value="tech">Software Development (Python, Java, SQL)</option>
              <option value="other">Other / General Inquiry</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label>Message</label>
            <textarea rows="4" placeholder="Tell me about your project..." required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Request</button>
        </form>
      </div>
    </div>
  )
}
