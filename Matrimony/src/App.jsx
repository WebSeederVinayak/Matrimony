import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.jsx'
import MatrimonyHero from './Components/MatrimonyHero.jsx'
import Footer from './Components/Footer.jsx'
import MembershipSection from './Components/Membership.jsx'
import PersonalMatchmakingSection from './Components/PersonalMatchmaking.jsx'
import ContactForm from './Components/ContactForm.jsx'
import TestimonialSection from './Components/Testimonial.jsx'
import Info from './Components/Info.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MatrimonyHero />
      <Info />
      <MembershipSection />
      <PersonalMatchmakingSection />
      <TestimonialSection />
      <ContactForm />
      <Footer />

    </>
  )
}

export default App
