import React, { useEffect, useState } from 'react';
import { Heart, Sparkles, Users, Target, ShieldCheck, MessageCircle, Gem, Handshake, TrendingUp, ChevronRight } from 'lucide-react'; // More relevant icons

// Assume these components exist in their respective files
import TestimonialSection from '../Components/Testimonial'; // Placeholder for your Testimonials component

const AboutUsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="font-inter text-gray-800 bg-gray-50 min-h-screen">
      

      <main className="relative overflow-hidden py-16 lg:py-24">
        {/* Background Gradients and Shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply opacity-20 animate-blob-1 filter blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply opacity-20 animate-blob-2 filter blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply opacity-15 animate-blob-3 filter blur-2xl"></div>
        </div>

        {/* Hero Section: Our Story */}
        <section className="relative z-10 text-center px-6 mb-20 lg:mb-32">
          <h1 className={`text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-lg ${isVisible ? 'animate-fade-in-up-stagger-1' : 'opacity-0'}`}>
            Our Mission: <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-amber-600">Connecting Hearts</span>
          </h1>
          <p className={`text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in-up-stagger-2' : 'opacity-0'}`}>
            At **[Your Website Name]**, we believe in the power of genuine connection. We're dedicated to building meaningful relationships that last a lifetime, driven by shared values and mutual respect.
          </p>
          <div className="mt-10 flex justify-center space-x-6">
            <Heart className={`w-12 h-12 text-red-500 animate-pulse-slow ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.5s' }} />
            <Sparkles className={`w-12 h-12 text-amber-500 animate-sparkle-float ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.7s' }} />
          </div>
        </section>

        {/* --- */}

        {/* Section: Our Values */}
        <section className="relative z-10 px-6 py-16 bg-white rounded-3xl shadow-xl max-w-7xl mx-auto mb-20 lg:mb-32 transform-gpu ${isVisible ? 'animate-fade-in' : 'opacity-0'}" style={{ transitionDelay: '0.8s' }}>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-12">
            The Values That Drive Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Value Card 1 */}
            <div className={`p-8 bg-amber-50 rounded-2xl shadow-md border-b-4 border-amber-500 flex flex-col items-center text-center group ${isVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`} style={{ transitionDelay: '0.9s' }}>
              <div className="bg-amber-100 text-amber-700 rounded-full p-4 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Authenticity</h3>
              <p className="text-gray-700 leading-relaxed">
                We champion real profiles and genuine intentions, fostering a community built on honesty.
              </p>
            </div>
            {/* Value Card 2 */}
            <div className={`p-8 bg-red-50 rounded-2xl shadow-md border-b-4 border-red-500 flex flex-col items-center text-center group ${isVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`} style={{ transitionDelay: '1.0s' }}>
              <div className="bg-red-100 text-red-700 rounded-full p-4 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <Target className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Precision Matching</h3>
              <p className="text-gray-700 leading-relaxed">
                Our smart algorithms focus on deep compatibility, not just surface-level interests.
              </p>
            </div>
            {/* Value Card 3 */}
            <div className={`p-8 bg-amber-50 rounded-2xl shadow-md border-b-4 border-amber-500 flex flex-col items-center text-center group ${isVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`} style={{ transitionDelay: '1.1s' }}>
              <div className="bg-amber-100 text-amber-700 rounded-full p-4 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Unwavering Security</h3>
              <p className="text-gray-700 leading-relaxed">
                Your privacy and safety are paramount. We ensure a secure and trusted environment.
              </p>
            </div>
          </div>
        </section>

        {/* --- */}

        {/* Section: How We Stand Out (Feature Section) */}
        <section className="relative z-10 px-6 max-w-7xl mx-auto mb-20 lg:mb-32">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-12">
            Why Choose <span className="text-amber-600">[Your Website Name]</span>?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Feature List */}
            <div className="space-y-8 bg-white p-10 rounded-3xl shadow-xl border-l-8 border-red-500 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}" style={{ transitionDelay: '1.2s' }}>
              <div className="flex items-start">
                <MessageCircle className="h-8 w-8 text-red-600 mr-4 flex-shrink-0 animate-float-icon" />
                <div>
                  <h4 className="font-bold text-2xl text-gray-900">Engaging Communication Tools</h4>
                  <p className="text-gray-700 mt-1">Chat, video call, and express interest seamlessly within our secure platform.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Gem className="h-8 w-8 text-amber-600 mr-4 flex-shrink-0 animate-float-icon" style={{ animationDelay: '0.1s' }} />
                <div>
                  <h4 className="font-bold text-2xl text-gray-900">Premium Membership Benefits</h4>
                  <p className="text-gray-700 mt-1">Unlock advanced features, priority support, and exclusive events.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Handshake className="h-8 w-8 text-red-600 mr-4 flex-shrink-0 animate-float-icon" style={{ animationDelay: '0.2s' }} />
                <div>
                  <h4 className="font-bold text-2xl text-gray-900">Dedicated Success Support</h4>
                  <p className="text-gray-700 mt-1">Our team is here to guide you every step of your journey to finding love.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Illustrative Image */}
            <div className={`relative bg-gray-100 rounded-3xl shadow-2xl overflow-hidden min-h-[300px] lg:min-h-[450px] flex items-center justify-center ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ transitionDelay: '1.3s' }}>
              <img
                src="https://placehold.co/600x400/FFF8E1/E57373?text=Connecting+Couples" // Placeholder image
                alt="Connecting Couples Illustration"
                className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/30 to-red-500/30"></div>
              <div className="absolute bottom-6 right-6 p-4 bg-white rounded-full shadow-lg text-red-600 flex items-center space-x-2 animate-pulse-slow">
                <TrendingUp className="w-6 h-6" />
                <span className="font-bold text-lg">Growing Community</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- */}

        {/* Testimonials Section */}
        <TestimonialSection /> {/* Your Testimonials Component */}

        {/* --- */}

        {/* Call to Action Section */}
        <section className="relative z-10 text-center px-6 py-20 bg-gradient-to-r from-red-600 to-amber-600 rounded-3xl shadow-2xl max-w-6xl mx-auto mt-20 transform-gpu ${isVisible ? 'animate-fade-in' : 'opacity-0'}" style={{ transitionDelay: '1.8s' }}>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to Begin Your Story?
          </h2>
          <p className="text-lg text-white mb-10 max-w-3xl mx-auto opacity-90">
            Join thousands of happy individuals who found their perfect match. Your journey to lasting love starts here.
          </p>
          <button className="group bg-white text-amber-700 px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto space-x-3 transform hover:scale-105">
            <span>Find Your Match Now</span>
            <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </section>
      </main>

      <Footer /> {/* Your Footer Component */}

      {/* Embedded Style Block for Animations (Same as original but adjusted delays where needed) */}
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

        @keyframes pulseSlow {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
        }

        @keyframes floatIcon {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }

        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-fade-in-up-stagger-1 { animation: fadeInUp 1s ease-out forwards; }
        .animate-fade-in-up-stagger-2 { animation: fadeInUp 1s ease-out forwards; animation-delay: 0.2s; }
        .animate-slide-in-bottom { animation: slideInBottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; } /* Smoother ease-out */
        .animate-fade-in-left { animation: fadeInLeft 1s ease-out forwards; }
        .animate-fade-in-right { animation: fadeInRight 1s ease-out forwards; }

        .animate-blob-1 { animation: blob1 10s infinite alternate; }
        .animate-blob-2 { animation: blob2 12s infinite alternate; }
        .animate-blob-3 { animation: blob3 8s infinite alternate; }

        .animate-sparkle-float { animation: sparkleFloat 3s infinite ease-in-out; }
        .animate-pulse-slow { animation: pulseSlow 2s infinite ease-in-out; }
        .animate-float-icon { animation: floatIcon 2s infinite ease-in-out; }

        @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
        }

        /* Utility for staggered animation delays - used with style prop for more control */
        .delay-0 { animation-delay: 0s; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </div>
  );
};

export default AboutUsPage;