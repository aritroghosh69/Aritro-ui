import { useEffect, useRef, useState } from 'react'
import ProfileSection from './components/ProfileSection/ProfileSection'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import SkillsSection from './components/SkillsSection/SkillsSection'
import EducationSection from './components/EducationSection/EducationSection'
import PortfolioSection from './components/PortfolioSection/PortfolioSection'
import CertificationsSection from './components/CertificationsSection/CertificationsSection'
import HireMePage from './components/HireMePage/HireMePage'
import './App.css'

export default function App() {
  const containerRef = useRef(null)
  const [showHireMe, setShowHireMe] = useState(false)

  // Staggered entrance animation for each section
  useEffect(() => {
    if (showHireMe) return; // Don't animate if showing hire me

    const sections = containerRef.current?.querySelectorAll('.section-animate')
    sections?.forEach((el, i) => {
      el.style.animationDelay = `${i * 80}ms`
      el.classList.add('animate-in')
    })
  }, [showHireMe])

  return (
    <div className="app-container" ref={containerRef}>
      <nav className="navbar-top">
        <div className="nav-left">
          <img src="/hero.jpeg" alt="Aritro" className="nav-avatar" />
          <div className="nav-links">
            <a href="#" onClick={(e) => { e.preventDefault(); setShowHireMe(false); }} className={`nav-link ${!showHireMe ? 'active' : ''}`}>Home</a>
            <a href="#portfolio" className="nav-link">Projects</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
          </div>
        </div>
        <div className="nav-right">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="nav-github-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{ color: '#fbbf24', marginLeft: '4px' }}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span>5</span>
          </a>
          <button className="nav-hire-btn" onClick={() => setShowHireMe(true)}>Hire Me</button>
        </div>
      </nav>

      <main className="app-content">
        {showHireMe ? (
          <HireMePage onBack={() => setShowHireMe(false)} />
        ) : (
          <div className="bento-card">
          <div className="section-animate section-header" id="about">
            <span className="section-number">01</span>
            <span className="section-title">About Me.</span>
          </div>

          <div className="section-animate">
            <ProfileSection />
          </div>



          <div className="section-animate section-header" id="experience">
            <span className="section-number">02</span>
            <span className="section-title">Experience.</span>
          </div>

          {/* Experience row */}
          <div className="section-animate">
            <ExperienceSection />
          </div>

          <div className="section-animate section-header">
            <span className="section-number">03</span>
            <span className="section-title">Expertise.</span>
          </div>

          {/* Middle: Skills (left) + Education (right) */}
          <div className="section-animate mid-grid">
            <SkillsSection />
            <EducationSection />
          </div>

          <div className="section-animate section-header" id="portfolio">
            <span className="section-number">04</span>
            <span className="section-title">Network.</span>
          </div>

          {/* Portfolio links */}
          <div className="section-animate">
            <PortfolioSection />
          </div>

          <div className="section-animate section-header" id="certifications">
            <span className="section-number">05</span>
            <span className="section-title">Certifications.</span>
          </div>

          <div className="section-animate">
            <CertificationsSection />
          </div>

            {/* Footer */}
            <div className="section-animate footer-made-by">
              <span>This portfolio was made by</span>
              <a href="https://theuicompany.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src="/ui.png" alt="The UI Company" className="footer-logo" />
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
