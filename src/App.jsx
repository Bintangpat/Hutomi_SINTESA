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

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CandidateProfiles />
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
