import { Search, ChevronDown } from 'lucide-react';

export default function MatrimonyHeader() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-1 shadow-md">
      <div className="px-10 max-w-[100%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src="/images/Logo1.jpeg" 
            alt="Matrimony.com" 
            className="h-20 w-20 object-contain transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-between space-x-12">
          {/* Home */}
          {['Home', 'About Us', 'Clients', 'Contact Us'].map((item) => (
            <div key={item} className="relative group">
              <a 
                href="#" 
                className="block text-gray-700 hover:text-red-500 text-xl font-sans transition-colors duration-200 ease-in-out transform group-hover:scale-105"
              >
                {item}
              </a>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </div>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4"> {/* Added space between buttons */}
          
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