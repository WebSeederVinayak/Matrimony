import { Facebook, Twitter, Instagram, Linkedin, Youtube, Smartphone } from 'lucide-react';

export default function MatrimonyFooter() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-2">
            <img 
              src="/footer-logo.png" 
              alt="Matrimony.com" 
              className="h-9 w-auto"
            />
            <p className="text-gray-600 text-base leading-relaxed max-w-sm">
              India's most trusted matrimony service, connecting millions of hearts worldwide. Join us to find your perfect match.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-5 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200">Clients</a></li>
              <li><a href="#" className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-5 text-lg">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200">Free Membership</a></li>
              <li><a href="#" className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200">Paid Membership</a></li>
              <li><a href="#" className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200">Personal Matchmaking</a></li>
              <li><a href="#" className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200">Success Stories</a></li>
            </ul>
          </div>

          {/* Support & Company Combined */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-5 text-lg">Support & Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200">Safety Tips</a></li>
              <li><a href="#" className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200">Press</a></li>
              <li><a href="#" className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200">Testimonials</a></li>
            </ul>
          </div>
        </div>

        {/* Download App Section */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
            <Smartphone className="h-6 w-6 text-gray-700" />
            <span className="text-gray-700 font-medium text-lg">Download Our App</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 transition-colors duration-300">
              <img src="/app-store-badge.png" alt="App Store" className="h-5 mr-2" />
              App Store
            </a>
            <a href="#" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300">
              <img src="/google-play-badge.png" alt="Google Play" className="h-5 mr-2" />
              Google Play
            </a>
          </div>
        </div>

        {/* Bottom Footer - Copyright and Policies */}
        <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
          <p className="text-sm text-gray-500">
            © 2025 Matrimony.com. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end items-center space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-red-600 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-red-600 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-red-600 transition-colors duration-200">Cookie Policy</a>
            <a href="#" className="hover:text-red-600 transition-colors duration-200">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}