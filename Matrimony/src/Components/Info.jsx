import React from 'react';
import { Calendar, Users, Briefcase, Heart, Shield, Zap, Sparkles, Handshake, MessageSquareText, ArrowRight, Check } from 'lucide-react';

export default function Info() {
  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-red-50 relative overflow-hidden">
      {/* Subtle background pattern for visual interest */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d97706' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Main Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Journey to Lasting Love Starts Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why millions trust us to find their perfect life partner. We combine tradition with modern technology for meaningful connections.
          </p>
        </div>

        {/* Pillar 1: Our Legacy - Full Width Block */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-12 flex flex-col md:flex-row items-center justify-center gap-8 transition-all duration-300 hover:shadow-xl hover:border-amber-200 transform hover:-translate-y-2">
          <div className="bg-amber-100 text-amber-600 rounded-full p-4 flex-shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
            <Calendar className="h-10 w-10" /> {/* Larger icon */}
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Established Since 2010</h3>
            <p className="text-gray-700 leading-relaxed max-w-2xl">
              With over a decade of dedicated service, we have a proven track record of uniting compatible individuals and fostering countless happy marriages. Trusted by millions globally, we proudly boast over 50,000 success stories.
            </p>
          </div>
        </div>

        {/* Pillar 2: Why Choose Us - Two-Column Layout */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center transition-all duration-300 hover:shadow-xl hover:border-red-200 transform hover:-translate-y-2">
          <div className="text-center lg:text-left">
            <div className="bg-red-100 text-red-600 rounded-full p-4 mb-4 mx-auto lg:mx-0 w-fit group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
              <Heart className="h-10 w-10" /> {/* Larger icon */}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Why Partner With Us?</h3>
            <p className="text-gray-700 leading-relaxed">
              Our platform is built on principles of trust, security, and genuine connection. We prioritize your privacy and success above all else, ensuring a safe and effective journey.
            </p>
          </div>
          <div className="text-gray-600 text-left space-y-3">
            <li className="flex items-center">
              <Shield className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" /> <span className="font-semibold text-gray-800">100% Verified Profiles:</span> Ensuring authenticity and trust.
            </li>
            <li className="flex items-center">
              <Zap className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" /> <span className="font-semibold text-gray-800">Advanced AI Matching:</span> Connecting you with truly compatible partners.
            </li>
            <li className="flex items-center">
              <Handshake className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" /> <span className="font-semibold text-gray-800">Dedicated Customer Support:</span> Assistance whenever you need it.
            </li>
          </div>
        </div>

        {/* Pillar 3: How We Work - Full Width Block */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-16 flex flex-col md:flex-row-reverse items-center justify-center gap-8 transition-all duration-300 hover:shadow-xl hover:border-amber-200 transform hover:-translate-y-2">
          <div className="bg-amber-100 text-amber-600 rounded-full p-4 flex-shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
            <Briefcase className="h-10 w-10" /> {/* Larger icon */}
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Our Seamless Process</h3>
            <p className="text-gray-700 leading-relaxed max-w-2xl">
              We've refined our approach to make your search for a life partner intuitive and effective, guiding you through every step from profile creation to first contact.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-700 mb-6">
            Ready to embark on your journey to a beautiful future?
          </p>
          <button className="inline-flex items-center bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-semibold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Start Your Free Registration
            <ArrowRight className="ml-3 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
