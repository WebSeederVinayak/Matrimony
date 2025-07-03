import React, { useState, useEffect } from 'react';
import { Heart, ArrowRight, BadgeCheck, Users, Lock, Sparkles } from 'lucide-react';

// Main App Component (unchanged)
const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Profiles Section */}
      <ProfilesSection isVisible={isVisible} />
    </div>
  );
};

// Profiles Section Component
const ProfilesSection = ({ isVisible }) => {
  // Array of placeholder profile images
  const profiles = [
    { id: 1, src: "https://placehold.co/300x400/D4A349/ffffff?text=Profile+1", name: "Rahul Sharma", age: 28, profession: "Engineer", location: "Mumbai" },
    { id: 2, src: "https://placehold.co/300x400/D4A349/ffffff?text=Profile+2", name: "Anjali Singh", age: 30, profession: "Doctor", location: "Delhi" },
    { id: 3, src: "https://placehold.co/300x400/D4A349/ffffff?text=Profile+3", name: "Vikram Patel", age: 32, profession: "Entrepreneur", location: "Bengaluru" },
    { id: 4, src: "https://placehold.co/300x400/D4A349/ffffff?text=Profile+4", name: "Pooja Gupta", age: 27, profession: "Designer", location: "Pune" },
    { id: 5, src: "https://placehold.co/300x400/D4A349/ffffff?text=Profile+5", name: "Suresh Kumar", age: 35, profession: "Architect", location: "Hyderabad" },
  ];

  // Pick a random profile to be the "featured" blurred one
  const randomProfile = profiles[Math.floor(Math.random() * profiles.length)];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-200 overflow-hidden">
      {/* Background Blobs for visual interest */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob-1"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob-2"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className={`text-5xl font-extrabold text-gray-900 mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-amber-500">Exclusive Profiles</span> Await
        </h2>
        <p className={`text-xl text-gray-700 mb-16 max-w-4xl mx-auto transition-all duration-1000 ease-out delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
          Dive into a carefully curated selection of potential partners. Unlock detailed insights and direct communication options with our premium membership.
        </p>

        {/* Grid of Blurred Profiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 mb-20">
          {profiles.map((profile, index) => (
            <div
              key={profile.id}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden group transform hover:scale-105 transition-all duration-500 ease-out delay-${index * 75} ${isVisible ? 'opacity-100 scale-100 animate-fade-in-up-bounce' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${index * 0.075}s` }} // Apply individual delays
            >
              <img
                src={profile.src}
                alt={profile.name}
                className="w-full h-72 object-cover filter blur-md group-hover:blur-sm transition-all duration-500 transform group-hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x400/D4A349/ffffff?text=Profile"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col items-center justify-center text-white text-center p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                <Lock className="w-10 h-10 mb-2 text-amber-300" />
                <p className="text-sm font-semibold">Locked Profile</p>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{profile.name}</h3>
                <p className="text-sm text-gray-500">{profile.age}, {profile.profession}, {profile.location}</p>
              </div>
              <div className="absolute top-4 right-4 bg-amber-400 text-white rounded-full p-2 shadow-md">
                <Heart className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* Featured Blurred Profile with Call to Action */}
        <div className={`relative w-full max-w-2xl mx-auto bg-white rounded-4xl shadow-2xl overflow-hidden border-4 border-amber-400 transition-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100 scale-100 animate-fade-in-up-bounce' : 'opacity-0 scale-95'}`}>
          <img
            src={randomProfile.src}
            alt="Blurred Profile"
            className="w-full h-96 object-cover filter blur-lg transition-transform duration-700 ease-out"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x700/D4A349/ffffff?text=Profile+Image"; }}
          />

          <div className="absolute inset-0 bg-gradient-to-br from-red-600/90 to-amber-600/90 flex flex-col items-center justify-center p-10 text-white text-center">
            <Lock className="w-20 h-20 mb-8 text-white animate-pulse-slow drop-shadow-lg" />
            <h3 className="text-4xl font-extrabold mb-4 leading-tight">
              Unlock the Full Story.
            </h3>
            <p className="text-xl mb-10 max-w-md">
              Become a **Premium Member** today to reveal full profile details, enable direct messaging, and access our advanced matching algorithms.
            </p>
            <button className="group bg-white text-amber-700 px-12 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 border-2 border-white hover:border-amber-700">
              <Sparkles className="w-7 h-7 text-amber-600 group-hover:rotate-180 transition-transform duration-500" />
              <span>Discover Membership Plans</span>
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;