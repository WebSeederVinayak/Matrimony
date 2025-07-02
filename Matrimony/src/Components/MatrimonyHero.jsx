import React, { useState, useEffect } from 'react';
import { Heart, ArrowRight, BadgeCheck, Users } from 'lucide-react'; // Changed Shield to BadgeCheck

const MatrimonyHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setIsVisible(true);

    // Optional: Clean up animation state on unmount if component could be unmounted frequently
    return () => setIsVisible(false);
  }, []);

  // Note: For the SVG background pattern, Tailwind classes cannot be used directly.
  // We'll use a slightly different approach or a hardcoded hex if a very specific color is needed,
  // but I'll try to approximate with a standard Tailwind color's hex.
  // Closest to 'matrimony-golden' #D4A349 is perhaps amber-600 or yellow-600. Let's use yellow-600 for its hex.
  const patternColorHex = '#d97706'; // Approximate hex for amber-600

  return (
    <div className="min-h-[0vh] bg-gradient-to-br from-amber-50 via-white to-amber-50 relative overflow-hidden flex items-center py-12">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${patternColorHex.slice(1)}' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight">
                Where Love
                <span className="block bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">
                  Finds Its Way
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Discover meaningful connections with compatible partners who share your values, dreams, and vision for the future.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6"> {/* Changed to sm:grid-cols-3 for better small screen layout */}
              <div className="group text-center p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <BadgeCheck className="w-6 h-6 text-amber-600 group-hover:text-white" /> {/* Changed Shield to BadgeCheck */}
                </div>
                <div className="text-sm font-semibold text-gray-800">Verified Profiles</div>
              </div>
              <div className="group text-center p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 delay-75">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <Users className="w-6 h-6 text-amber-600 group-hover:text-white" />
                </div>
                <div className="text-sm font-semibold text-gray-800">Smart Matching</div>
              </div>
              <div className="group text-center p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 delay-150">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <Heart className="w-6 h-6 text-amber-600 group-hover:text-white" />
                </div>
                <div className="text-sm font-semibold text-gray-800">Success Stories</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Removed hover:scale-105 to prevent "bugging" effect */}
              <button className="group bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white px-4 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-[16.25rem]">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              {/* Removed hover:scale-105 to prevent "bugging" effect */}
              <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4  rounded-xl font-semibold text-lg transition-all duration-300 w-full sm:w-[16.25rem]">
                Browse Profiles
              </button>
            </div>

            {/* Statistics */}
            
          </div>

          {/* Right Visual Section */}
          <div className={`relative transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}> {/* Adjusted delay */}
            
            {/* Main Image Container */}
            <div className="relative">
              
              {/* Primary Image - Elegant Couple */}
              <div className="relative z-10 bg-white p-6 rounded-3xl shadow-2xl transform transition-transform duration-500 ease-out hover:scale-[1.02]">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-yellow-100 relative">
                  <img 
                    src="/images/heromain.jpg"
                    alt="Happy couple"
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-in-out hover:scale-105"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x750/D4A349/ffffff?text=Happy+Couple"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  
                </div>
              </div>

              {/* Secondary Image - Wedding Rings */}
              <div className="absolute -bottom-8 -left-8 z-20 bg-white p-4 rounded-2xl shadow-xl transform rotate-6 hover:rotate-3 transition-transform duration-300 ease-out hover:scale-110">
                <div className="w-32 h-32 rounded-xl overflow-hidden">
                  <img 
                    src="/images/rings.jpg"
                    alt="Wedding rings"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/128x128/D4A349/ffffff?text=Rings"; }}
                  />
                </div>
              </div>

              {/* Third Image - Traditional Wedding */}
              <div className="absolute -top-6 -right-6 z-20 bg-white p-3 rounded-xl shadow-lg transform -rotate-6 hover:-rotate-3 transition-transform duration-300 ease-out hover:scale-110">
                <div className="w-24 h-24 rounded-lg overflow-hidden">
                  <img 
                    src="/images/wedding.jpg"
                    alt="Indian wedding"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/96x96/D4A349/ffffff?text=Wedding"; }}
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              {/* To make these work, you need to add the keyframes and animations to your tailwind.config.js */}
              <div className="absolute top-16 -left-16 w-24 h-24 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-full opacity-60 animate-blob-1"></div>
              <div className="absolute -bottom-16 right-16 w-20 h-20 bg-gradient-to-r from-yellow-200 to-amber-200 rounded-full opacity-40 animate-blob-2 delay-700"></div>
              
              {/* Success Notification */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg animate-fade-in-up-bounce flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse-slow"></div>
                <span className="text-sm font-semibold">New Match Found!</span>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="mt-12 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-100 transform transition-transform duration-500 ease-out hover:translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src="/images/woman.jpg"
                    alt="Happy customer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 text-sm italic mb-2">
                    "Found my perfect life partner through this platform. The process was smooth and the matches were highly compatible!"
                  </p>
                  <div className="text-red-600 font-semibold text-sm">- Priya Sharma, Mumbai</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatrimonyHero;
