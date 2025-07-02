import React from 'react';
import { Calendar, Users, Briefcase, Heart, Shield, Zap, Sparkles, Handshake, MessageSquareText, ArrowRight, Lightbulb, Check } from 'lucide-react';

export default function Info() {
  return (
    <section className="py-28 bg-gradient-to-br from-amber-50 via-white to-red-50 relative overflow-hidden">
      {/* Background Shapes and Gradients for Dynamic Feel */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Large flowing amber shape */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply opacity-30 animate-blob-1 filter blur-2xl"></div>
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply opacity-30 animate-blob-2 filter blur-2xl"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply opacity-20 animate-blob-3 filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-20"> {/* Higher z-index for content */}

        {/* Main Section Header with Bold Statement */}
        <div className="text-center mb-28 relative">
          <h2 className="text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-tight drop-shadow-lg animate-fade-in-up-stagger-1">
            Unlock Your <span className="text-red-600">Love Story</span>
            <br />
            Find Your <span className="text-amber-600">Forever Partner</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-stagger-2">
            We are dedicated to helping you discover profound connections and build a future filled with happiness and companionship.
          </p>
          {/* Subtle icon flourish */}
          <Sparkles className="absolute top-4 right-1/4 h-12 w-12 text-amber-400 opacity-70 animate-sparkle-float hidden lg:block" />
          <Heart className="absolute bottom-4 left-1/4 h-10 w-10 text-red-400 opacity-70 animate-sparkle-float animation-delay-300 hidden lg:block" />
        </div>

        {/* Dynamic Grid Layout for Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-28">

          {/* Value Card 1: Legacy */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-amber-500 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-amber-600 animate-slide-in-bottom">
            <div className="bg-amber-100 text-amber-700 rounded-full p-5 mb-6 shadow-md transition-all duration-300 group-hover:bg-amber-200">
              <Calendar className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
            <p className="text-gray-600 leading-relaxed">
              Established since <span className="font-semibold text-amber-700">2010</span>, we've fostered over <span className="font-extrabold text-red-600">50,000 successful unions</span>.
            </p>
          </div>

          {/* Value Card 2: Technology */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-red-500 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-red-600 animate-slide-in-bottom animation-delay-200">
            <div className="bg-red-100 text-red-700 rounded-full p-5 mb-6 shadow-md transition-all duration-300 group-hover:bg-red-200">
              <Zap className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Matching</h3>
            <p className="text-gray-600 leading-relaxed">
              Our <span className="font-semibold text-amber-700">advanced AI</span> intelligently connects you with truly compatible partners.
            </p>
          </div>

          {/* Value Card 3: Security & Support */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-amber-500 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-amber-600 animate-slide-in-bottom animation-delay-400">
            <div className="bg-amber-100 text-amber-700 rounded-full p-5 mb-6 shadow-md transition-all duration-300 group-hover:bg-amber-200">
              <Shield className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Trusted & Secure</h3>
            <p className="text-gray-600 leading-relaxed">
              Benefit from <span className="font-semibold text-red-600">100% verified profiles</span> and dedicated customer support.
            </p>
          </div>
        </div>

        {/* Feature Section: How We Work - Left Image, Right Text (with overlap) */}
        <div className="flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-2xl overflow-hidden mb-28 border-l-8 border-red-500 animate-fade-in">
          <div className="relative w-full lg:w-1/2 h-80 lg:h-130 bg-amber-100 p-8 flex items-center rounded-2xl justify-center">
            {/* Placeholder for an engaging image or illustration */}
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/images/couple.png')"}}></div>
            <div className="absolute inset-0 bg-amber-600 opacity-30 mix-blend-multiply"></div>
            
          </div>
          <div className="w-full lg:w-1/2 p-12 lg:p-16 text-gray-800">
            <h3 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Our Journey to Love: <span className="text-red-600">Simple & Effective</span>
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Check className="h-7 w-7 text-amber-600 mr-4 flex-shrink-0 animate-checkmark" />
                <div>
                  <h4 className="font-bold text-xl text-gray-900">Personalized Profile Creation</h4>
                  <p className="text-gray-700 mt-1">Craft a detailed profile that truly represents you, guided by our intuitive process.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="h-7 w-7 text-amber-600 mr-4 flex-shrink-0 animate-checkmark animation-delay-100" />
                <div>
                  <h4 className="font-bold text-xl text-gray-900">Intelligent Match Discovery</h4>
                  <p className="text-gray-700 mt-1">Receive hand-picked matches daily, filtered for deep compatibility.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="h-7 w-7 text-amber-600 mr-4 flex-shrink-0 animate-checkmark animation-delay-200" />
                <div>
                  <h4 className="font-bold text-xl text-gray-900">Secure & Engaging Communication</h4>
                  <p className="text-gray-700 mt-1">Connect safely with potential partners through our secure messaging system.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

   
      </div>

      {/* Embedded Style Block for Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInBottom {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes blob1 {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }

        @keyframes blob2 {
          0%, 100% { border-radius: 30% 70% 70% 30% / 70% 70% 30% 30%; }
          50% { border-radius: 70% 30% 30% 70% / 30% 30% 70% 70%; }
        }

        @keyframes blob3 {
          0%, 100% { border-radius: 70% 30% 40% 60% / 40% 60% 40% 60%; }
          50% { border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%; }
        }

        @keyframes sparkleFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-10px) rotate(5deg); opacity: 1; }
        }

        @keyframes pulseLight {
            0% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(1); opacity: 0.7; }
        }

        @keyframes checkmark {
            0% { transform: scale(0); opacity: 0; }
            70% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1); }
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }


        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-fade-in-up-stagger-1 { animation: fadeInUp 1s ease-out forwards; }
        .animate-fade-in-up-stagger-2 { animation: fadeInUp 1s ease-out forwards; animation-delay: 0.2s; }
        .animate-slide-in-bottom { animation: slideInBottom 0.8s ease-out forwards; }
        .animate-slide-in-up { animation: fadeInUp 1s ease-out forwards; }

        .animate-blob-1 { animation: blob1 10s infinite alternate; }
        .animate-blob-2 { animation: blob2 12s infinite alternate; }
        .animate-blob-3 { animation: blob3 8s infinite alternate; }

        .animate-sparkle-float { animation: sparkleFloat 3s infinite ease-in-out; }
        .animate-pulse-light { animation: pulseLight 2s infinite ease-in-out; }
        .animate-checkmark { animation: checkmark 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }

        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
}