// src/App.jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Import Link for navigation
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Components/Header.jsx';
import MatrimonyHero from './Components/MatrimonyHero.jsx';
import Footer from './Components/Footer.jsx';
import MembershipSection from './Components/Membership.jsx';
import PersonalMatchmakingSection from './Components/PersonalMatchmaking.jsx';
import ContactForm from './Components/ContactForm.jsx';
import TestimonialSection from './Components/Testimonial.jsx';
import Info from './Components/Info.jsx';
import Profiles from './Pages/Profiles.jsx'; // Import your new Profiles component
import AboutUsPage from './Pages/About.jsx';


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter> {/* Wrap your entire app with BrowserRouter */}
      <Header />

      <Routes> {/* Define your routes here */}
        <Route path="/" element={
          <>
            <MatrimonyHero />
            <Info />
            <MembershipSection />
            <PersonalMatchmakingSection />
            <TestimonialSection />
            <ContactForm />
          </>
        } />
        <Route path="/about" element={<AboutUsPage />} /> 
        <Route path="/profiles" element={<Profiles />} /> {/* Route for the profiles page */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;