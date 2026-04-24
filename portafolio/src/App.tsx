import './App.css'
import { AboutSection } from './components/AboutSection'
import { EducationSection } from './components/EducationSection'
import { ExperienceSection } from './components/ExperienceSection'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { ProjectsSection } from './components/ProjectsSection'
import { SiteFooter } from './components/SiteFooter'
import { TechSection } from './components/TechSection'

function App() {
  return (
    <div className="portfolio-app">
      <div className="background-grid" aria-hidden="true"></div>
      <Navbar />

      <main className="page-content">
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <TechSection />
        <AboutSection />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
