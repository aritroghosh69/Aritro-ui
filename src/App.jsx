import { useEffect, useRef } from 'react'
import ProfileSection from './components/ProfileSection/ProfileSection'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import SkillsSection from './components/SkillsSection/SkillsSection'
import EducationSection from './components/EducationSection/EducationSection'
import PortfolioSection from './components/PortfolioSection/PortfolioSection'
import DetailsSection from './components/DetailsSection/DetailsSection'
import './App.css'

export default function App() {
  const containerRef = useRef(null)

  // Staggered entrance animation for each section
  useEffect(() => {
    const sections = containerRef.current?.querySelectorAll('.section-animate')
    sections?.forEach((el, i) => {
      el.style.animationDelay = `${i * 80}ms`
      el.classList.add('animate-in')
    })
  }, [])

  return (
    <main className="app-shell">
      <div ref={containerRef} className="bento-card">
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
      </div>
    </main>
  )
}
