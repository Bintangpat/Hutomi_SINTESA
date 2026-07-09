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
import TomiProfileDetail from './components/TomiProfileDetail.jsx'
import NomorUrut from './components/NomorUrut.jsx'
import { Analytics } from "@vercel/analytics"

export default function App() {
  const [view, setView] = useState('landing') // 'landing' | 'profile-husein' | 'profile-tomi'

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#/profile/husein') {
        setView('profile-husein')
        window.scrollTo({ top: 0, behavior: 'instant' })
      } else if (window.location.hash === '#/profile/tomi') {
        setView('profile-tomi')
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
    } else if (id === 'tomi') {
      window.location.hash = '#/profile/tomi'
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

  if (view === 'profile-tomi') {
    return (
      <>
        <TomiProfileDetail onBack={handleBackToLanding} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        <Analytics/>
        <Hero />
        <NomorUrut />
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
