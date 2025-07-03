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
import ContactPage from './Pages/Contactpage.jsx'; // Import your Contact page component


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter> {/* Wrap your entire app with BrowserRouter */}
      <div className='mb-0'>
        <Header />
      </div>

      <Routes> {/* Define your routes here */}
        <Route path="/" element={
          <>
            <div className='mt-20'>
              <MatrimonyHero />
            </div>
            <Info />
            <MembershipSection />
            <PersonalMatchmakingSection />
            <TestimonialSection />
            <ContactForm />
          </>
        } />
        <Route path="/aboutus" element={<AboutUsPage />} /> 
        <Route path="/profiles" element={<Profiles />} /> {/* Route for the profiles page */}
        <Route path="/contactus" element={<ContactPage />} /> 
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;