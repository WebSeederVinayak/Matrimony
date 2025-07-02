import { Search, ChevronDown } from 'lucide-react';

export default function MatrimonyHeader() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
      <div className="px-10 max-w-[100%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src="/images/Logo.jpg" 
            alt="Matrimony.com" 
            className="h-16 w-48"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-between space-x-12">
          {/* Home */}
          {['Home', 'About Us', 'Clients', 'Contact Us'].map((item) => (
            <div key={item} className="relative group">
              <a 
                href="#" 
                className="block text-gray-700 hover:text-red-500 text-lg font-sans transition-colors duration-200 ease-in-out transform group-hover:scale-105"
              >
                {item}
              </a>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </div>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4"> {/* Added space between buttons */}
          {/* Sign Up Button */}
          <button 
            className="px-6 py-2 bg-transparent border border-red-500 text-red-500 rounded-full font-semibold hover:bg-red-50 hover:text-red-600 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Sign Up
          </button>

          {/* Login Button */}
          <button 
            className="px-6 py-2 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button - visible on smaller screens */}
        <div className="md:hidden">
          <button className="p-2 text-gray-600 hover:text-red-500 focus:outline-none transition-colors duration-200 ease-in-out">
            <div className="w-6 h-6 flex flex-col justify-around cursor-pointer">
              <span className="block h-0.5 w-full bg-gray-600 transform transition-all duration-300 ease-in-out group-hover:bg-red-500"></span>
              <span className="block h-0.5 w-full bg-gray-600 transform transition-all duration-300 ease-in-out group-hover:bg-red-500"></span>
              <span className="block h-0.5 w-full bg-gray-600 transform transition-all duration-300 ease-in-out group-hover:bg-red-500"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}