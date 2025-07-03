// src/Components/MatrimonyFooter.jsx (assuming this is your footer file)
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Smartphone } from 'lucide-react';

export default function MatrimonyFooter() {

  // Function to scroll to the top of the page (or a specific section after navigation)
  // We'll modify this slightly for smooth scrolling to sections.
  const scrollToSection = (id) => {
    // Timeout is often needed for React Router to finish rendering the new page
    // before attempting to scroll to an element on it.
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // If no specific ID, scroll to top as a fallback
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100); // Small delay to allow page rendering
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-2">
            <img
              src="/images/Logo1.jpeg"
              alt="Matrimony.com"
              className="h-16 w-16"
            />
            <p className="text-gray-600 text-base leading-relaxed max-w-sm" style={{ fontFamily: 'Exo 2' }}>
              India's most trusted matrimony service, connecting millions of hearts worldwide. Join us to find your perfect match.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-5 text-lg" style={{ fontFamily: 'Tilt Neon' }}>Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" onClick={() => scrollToSection('top')} className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200" style={{ fontFamily: 'Exo 2' }}>Home</Link></li>
              <li><Link to="/aboutus" onClick={() => scrollToSection('top')} className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200" style={{ fontFamily: 'Exo 2' }}>About Us</Link></li>
              <li><Link to="/profiles" onClick={() => scrollToSection('top')} className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200" style={{ fontFamily: 'Exo 2' }}>Profiles</Link></li>
              <li><Link to="/contactus" onClick={() => scrollToSection('top')} className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200" style={{ fontFamily: 'Exo 2' }}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-5 text-lg" style={{ fontFamily: 'Tilt Neon' }}>Services</h3>
            <ul className="space-y-3">
              {/* Updated Links for Services */}
              <li><Link to="/#membership-section" onClick={() => scrollToSection('membership-section')} className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200" style={{ fontFamily: 'Exo 2' }}>Free Membership</Link></li>
              <li><Link to="/#membership-section" onClick={() => scrollToSection('membership-section')} className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200" style={{ fontFamily: 'Exo 2' }}>Paid Membership</Link></li>
              <li><Link to="/#personal-matchmaking-section" onClick={() => scrollToSection('personal-matchmaking-section')} className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200" style={{ fontFamily: 'Exo 2' }}>Personal Matchmaking</Link></li>
              <li><Link to="#" onClick={() => scrollToSection('top')} className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200" style={{ fontFamily: 'Exo 2' }}>Success Stories</Link></li> {/* Assuming this stays on home or placeholder */}
            </ul>
          </div>

          {/* Support & Company Combined */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-5 text-lg" style={{ fontFamily: 'Tilt Neon' }}>Policies</h3>
            <ul className="space-y-3">
              <li><a href="https://www.appwin.in/policy.html" className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200" style={{ fontFamily: 'Exo 2' }}>Privacy Policy</a></li>
              <li><Link to="#" onClick={() => scrollToSection('top')} className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200" style={{ fontFamily: 'Exo 2' }}>Terms Of Services</Link></li>
              <li><Link to="#" onClick={() => scrollToSection('top')} className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200" style={{ fontFamily: 'Exo 2' }}>Cookie Policy</Link></li>
              <li><Link to="#" onClick={() => scrollToSection('top')} className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200" style={{ fontFamily: 'Exo 2' }}>Refund Policy</Link></li>
              <li><a href="https://www.appwin.in/child-safety-policy.html" className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200" style={{ fontFamily: 'Exo 2' }}>Child Safety Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Download App Section */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
            <Smartphone className="h-6 w-6 text-gray-700" />
            <span className="text-gray-700 font-medium text-lg" style={{ fontFamily: 'Exo 2' }}>Download Our App</span>
          </div>
          <div className="flex space-x-4">
            <a href="https://play.google.com/store/apps/details?id=com.brahminmilanbyappwin.app&amp;pcampaignid=web_share" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300" style={{ fontFamily: 'Exo 2' }}>
              <img src="/images/gplay.png" alt="Google Play" className="h-5 mr-2" />
              Google Play
            </a>
          </div>
        </div>

        {/* Bottom Footer - Copyright and Policies */}
        <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
          <p className="text-sm text-gray-500" style={{ fontFamily: 'Exo 2' }}>
            © 2025 Matrimony.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}