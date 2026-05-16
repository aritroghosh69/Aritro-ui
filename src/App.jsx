import { useEffect, useRef, useState } from 'react'
import ProfileSection from './components/ProfileSection/ProfileSection'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import SkillsSection from './components/SkillsSection/SkillsSection'
import EducationSection from './components/EducationSection/EducationSection'
import PortfolioSection from './components/PortfolioSection/PortfolioSection'
import DetailsSection from './components/DetailsSection/DetailsSection'
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
    <main className="app-shell" ref={containerRef}>
      <nav className="navbar section-animate">
        <span className="navbar-logo">Aritro Ghosh</span>
        <button className="nav-hire-btn" onClick={() => setShowHireMe(true)}>
          Hire Me
        </button>
      </nav>

      {showHireMe ? (
        <HireMePage onBack={() => setShowHireMe(false)} />
      ) : (
        <div className="bento-card">
          {/* Profile + Bio + Interests */}
          <div className="section-animate">
            <ProfileSection />
          </div>

          {/* Experience row */}
          <div className="section-animate">
            <ExperienceSection />
          </div>

          {/* Middle: Skills (left) + Education (right) */}
          <div className="section-animate mid-grid">
            <SkillsSection />
            <EducationSection />
          </div>

          {/* Portfolio links */}
          <div className="section-animate">
            <PortfolioSection />
          </div>

          {/* Details */}
          <div className="section-animate">
            <DetailsSection />
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
  )
}
