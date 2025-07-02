import React, { useState, useEffect } from 'react';
import { Heart, ArrowRight, Shield, Users, Award, Sparkles } from 'lucide-react';

const MatrimonyHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-100 to-rose-100 border border-red-200 text-red-700 px-5 py-2 rounded-full text-sm font-semibold shadow-md">
              <Award className="w-4 h-4" />
              <span>India's Premier Matrimony Platform</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Where Love
                <span className="block bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                  Finds Its Way
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Discover meaningful connections with compatible partners who share your values, dreams, and vision for the future.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-3 gap-6">
              <div className="group text-center p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <Shield className="w-6 h-6 text-red-600 group-hover:text-white" />
                </div>
                <div className="text-sm font-semibold text-gray-800">Verified Profiles</div>
              </div>
              <div className="group text-center p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <Users className="w-6 h-6 text-red-600 group-hover:text-white" />
                </div>
                <div className="text-sm font-semibold text-gray-800">Smart Matching</div>
              </div>
              <div className="group text-center p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <Heart className="w-6 h-6 text-red-600 group-hover:text-white" />
                </div>
                <div className="text-sm font-semibold text-gray-800">Success Stories</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Browse Profiles
              </button>
            </div>

            {/* Statistics */}
            <div className="flex items-center space-x-8 pt-6 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-red-600">2M+</div>
                <div className="text-sm text-gray-600">Registered Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">50K+</div>
                <div className="text-sm text-gray-600">Happy Couples</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Visual Section */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Main Image Container */}
            <div className="relative">
              
              {/* Primary Image - Elegant Couple */}
              <div className="relative z-10 bg-white p-6 rounded-3xl shadow-2xl">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-red-100 to-rose-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Happy couple"
                    className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
                    <div className="flex items-center space-x-1">
                      <Sparkles className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-semibold text-gray-800">Perfect Match</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Image - Wedding Rings */}
              <div className="absolute -bottom-8 -left-8 z-20 bg-white p-4 rounded-2xl shadow-xl transform rotate-6 hover:rotate-3 transition-transform duration-300">
                <div className="w-32 h-32 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    alt="Wedding rings"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Third Image - Traditional Wedding */}
              <div className="absolute -top-6 -right-6 z-20 bg-white p-3 rounded-xl shadow-lg transform -rotate-6 hover:-rotate-3 transition-transform duration-300">
                <div className="w-24 h-24 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    alt="Indian wedding"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-16 -left-16 w-24 h-24 bg-gradient-to-r from-red-200 to-rose-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-16 right-16 w-20 h-20 bg-gradient-to-r from-rose-200 to-red-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
              
              {/* Success Notification */}
              <div className="absolute bottom-12 left-12 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  <span className="text-sm font-semibold">New Match Found!</span>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="mt-12 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-red-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
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