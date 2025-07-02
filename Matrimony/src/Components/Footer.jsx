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
              src="/images/Logo1.jpeg" 
              alt="Matrimony.com" 
              className="h-16 w-16"
            />
            <p className="text-gray-600 text-base leading-relaxed max-w-sm">
              India's most trusted matrimony service, connecting millions of hearts worldwide. Join us to find your perfect match.
            </p>
           
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
            <h3 className="font-semibold text-gray-900 mb-5 text-lg">Policies</h3>
            <ul className="space-y-3">
              <li><a href="https://www.appwin.in/policy.html" className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200">Terms Of Services</a></li>
              <li><a href="#" className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200">Refund Policy</a></li>
              <li><a href="https://www.appwin.in/child-safety-policy.html" className="text-gray-700 hover:text-red-600 text-base transition-colors duration-200">Child Safety Policy</a></li>
              
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
            
            <a href="#" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300">
              <img src="/images/gplay.png" alt="Google Play" className="h-5 mr-2" />
              Google Play
            </a>
          </div>
        </div>

        {/* Bottom Footer - Copyright and Policies */}
        <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
          <p className="text-sm text-gray-500">
            © 2025 Matrimony.com. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}