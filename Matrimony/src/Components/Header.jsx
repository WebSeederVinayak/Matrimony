import { Search, ChevronDown } from 'lucide-react';
<<<<<<< HEAD
import { useState, useEffect } from 'react';
=======
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
>>>>>>> 6a19d00 (reated profiles page and about us page, modified header, added routing paths)

export default function MatrimonyHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when scrolling down
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <> {/* Use a React Fragment to return multiple elements */}
      <header
        className={`fixed top-0 left-0 w-full bg-white border-b border-gray-200 px-4 py-1 lg:py-1 shadow-md z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="px-3 lg:px-10 max-w-[100%] mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/Logo1.jpeg"
              alt="Matrimony.com"
              className="h-12 w-12 lg:h-20 lg:w-20 object-contain transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

<<<<<<< HEAD
          {/* Navigation Menu (Desktop) */}
          <nav className="hidden md:flex items-between space-x-12">
            {['Home', 'About Us', 'Clients', 'Contact Us'].map((item) => (
              <div key={item} className="relative group">
                <a
                  href="#"
                  className="block text-gray-700 hover:text-red-500 text-xl font-sans transition-colors duration-200 ease-in-out transform group-hover:scale-105"
                  style={{ fontFamily: 'Exo 2' }} // Applying Exo 2 font
                >
                  {item}
                </a>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </div>
            ))}
          </nav>
=======
        {/* Navigation Menu */}
        <nav className="hidden md:flex items-between space-x-12">
          {/* Home */}
          {/* Map through navigation items and use Link for routing */}
          {['Home', 'About Us', 'Profiles', 'Contact Us'].map((item) => (
            <div key={item} className="relative group">
              <Link // Use Link component here
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s/g, '')}`} // Determine the 'to' path
                className="block text-gray-700 hover:text-red-500 text-xl font-sans transition-colors duration-200 ease-in-out transform group-hover:scale-105"
              >
                {item}
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </div>
          ))}
        </nav>
>>>>>>> 6a19d00 (reated profiles page and about us page, modified header, added routing paths)

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {/* You can add your Auth buttons here */}
          </div>

          {/* Mobile Menu Button - visible on smaller screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu} // Add onClick handler
              className="p-2 text-gray-600 hover:text-red-500 focus:outline-none transition-colors duration-200 ease-in-out"
            >
              <div className="w-6 h-6 flex flex-col justify-around cursor-pointer">
                <span
                  className={`block h-0.5 w-full bg-gray-600 transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-gray-600 transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-gray-600 transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <nav
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-40 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 pt-20"> {/* Add padding-top to account for fixed header */}
          <ul className="flex flex-col space-y-4">
            {['Home', 'About Us', 'Clients', 'Contact Us'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block text-xl py-2 px-3 rounded-lg text-gray-700 hover:bg-yellow-100 hover:text-red-600 transition-colors duration-200 ease-in-out"
                  style={{ fontFamily: 'Exo 2' }} // Applying Exo 2 font
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Backdrop for Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ease-in-out md:hidden"
          onClick={toggleMobileMenu} // Close menu when backdrop is clicked
        ></div>
      )}
    </>
  );
}