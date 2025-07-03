// src/App.jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // No need for 'Link' here as it's not used directly in App.jsx's return
import './App.css';
import Header from './Components/Header.jsx';
import MatrimonyHero from './Components/MatrimonyHero.jsx';
import MembershipSection from './Components/Membership.jsx';
import PersonalMatchmakingSection from './Components/PersonalMatchmaking.jsx';
import ContactForm from './Components/ContactForm.jsx';
import TestimonialSection from './Components/Testimonial.jsx';
import Info from './Components/Info.jsx';
import Profiles from './Pages/Profiles.jsx';
import AboutUsPage from './Pages/About.jsx';
import ContactPage from './Pages/Contactpage.jsx';
import Footer from './Components/Footer.jsx'; // Import your Footer component


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className='mb-0'>
        <Header />
      </div>

      <Routes>
        <Route path="/" element={
          <>
            <div className='mt-10 lg:mt-20'>
              <MatrimonyHero />
            </div>
            <Info />
            {/* Add id for MembershipSection */}
            <div id="membership-section">
              <MembershipSection />
            </div>
            {/* Add id for PersonalMatchmakingSection */}
            <div id="personal-matchmaking-section">
              <PersonalMatchmakingSection />
            </div>
            <TestimonialSection />
            <ContactForm />
          </>
        } />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/contactus" element={<ContactPage />} />
      </Routes>

      <Footer /> {/* Your MatrimonyFooter component */}
    </BrowserRouter>
  );
}

export default App;