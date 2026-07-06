import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import CandidateProfiles from './components/CandidateProfiles.jsx'
import Philosophy from './components/Philosophy.jsx'
import Vision from './components/Vision.jsx'
import Manifesto from './components/Manifesto.jsx'
import CoreValues from './components/CoreValues.jsx'
import Gallery from './components/Gallery.jsx'
import ClosingCTA from './components/ClosingCTA.jsx'
import Footer from './components/Footer.jsx'
import HuseinProfileDetail from './components/HuseinProfileDetail.jsx'

export default function App() {
  const [view, setView] = useState('landing') // 'landing' | 'profile-husein'

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#/profile/husein') {
        setView('profile-husein')
        window.scrollTo({ top: 0, behavior: 'instant' })
      } else {
        setView('landing')
      }
    }

    // Run once on load
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleViewProfile = (id) => {
    if (id === 'husein') {
      window.location.hash = '#/profile/husein'
    }
  }

  const handleBackToLanding = () => {
    window.location.hash = '#profil'
  }

  if (view === 'profile-husein') {
    return (
      <>
        <HuseinProfileDetail onBack={handleBackToLanding} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CandidateProfiles onViewProfile={handleViewProfile} />
        <Philosophy />
        <Vision />
        <Manifesto />
        <CoreValues />
        <Gallery />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}
