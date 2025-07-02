import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.jsx'
import MatrimonyHero from './Components/MatrimonyHero.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MatrimonyHero />
      <Footer />

    </>
  )
}

export default App
