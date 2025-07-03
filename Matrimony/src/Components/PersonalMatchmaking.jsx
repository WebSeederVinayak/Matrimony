import React, { useState } from 'react';
import { User, BookOpen, Star, Heart, ArrowRight, CheckCircle } from 'lucide-react';

const ServicesComponent = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const mainServices = [
    {
      icon: <User className="w-10 h-10" />,
      title: "Expert Pandit Consultations",
      subtitle: "Divine Guidance for Sacred Unions",
      description: "Receive comprehensive spiritual guidance from renowned Pandits who specialize in matrimonial ceremonies. Our experts provide detailed insights on auspicious timings, sacred rituals, and traditional practices that ensure your union is blessed by divine forces and ancient wisdom.",
      features: [
        "Personalized Muhurat Selection",
        "Sacred Ritual Guidance",
        "Spiritual Pre-Marriage Counseling",
        "Traditional Ceremony Planning",
        "Astrological Compatibility Insights",
        "Family Blessing Ceremonies"
      ],
      gradient: "from-amber-400 to-amber-600",
      darkBg: "from-amber-900/20 to-amber-800/10"
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Spiritual Storytelling (Kathavaachak)",
      subtitle: "Sacred Narratives for Cultural Harmony",
      description: "Immerse families in enriching spiritual narratives and sacred stories that bridge generational gaps and cultural differences. Our skilled Kathavaachaks help align family values, traditions, and spiritual beliefs through timeless tales that create deeper understanding and connection.",
      features: [
        "Cultural Value Alignment Sessions",
        "Traditional Story Narration",
        "Family Bonding Workshops",
        "Spiritual Heritage Education",
        "Inter-Family Harmony Sessions",
        "Custom Cultural Integration Programs"
      ],
      gradient: "from-red-400 to-red-600",
      darkBg: "from-red-900/20 to-red-800/10"
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: "Vedic Astrology Insights (Jyotish)",
      subtitle: "Cosmic Compatibility & Divine Timing",
      description: "Unlock the mysteries of celestial compatibility through detailed Vedic astrology analysis. Our expert Jyotishis provide comprehensive birth chart analysis, dosha identification, planetary influence assessment, and auspicious timing guidance for a harmonious and prosperous married life.",
      features: [
        "Detailed Kundli Matching Analysis",
        "Comprehensive Dosha Assessment",
        "Planetary Compatibility Reports",
        "Future Life Predictions",
        "Remedial Measures Guidance",
        "Auspicious Wedding Date Selection"
      ],
      gradient: "from-amber-500 to-red-500",
      darkBg: "from-yellow-900/20 to-orange-800/10"
    }
  ];

  return (
    <div className="font-inter py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Main Services Section */}
        <div className="text-center mb-20">
          
         <h2 className="text-5xl lg:text-6xl font-light mb-4 tracking-tight">
            <span className="font-thin"></span>
         
            <span className="font-bold bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">
              Exclusive Matrimonial Services
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover divine pathways to finding your perfect life partner through time-honored traditions, spiritual wisdom, and personalized guidance.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16"> {/* Reduced bottom margin slightly */}
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl border border-slate-700 transition-all duration-700 transform ${
                hoveredService === index
                  ? 'scale-105 shadow-3xl border-amber-400/50 shadow-amber-400/20'
                  : 'hover:scale-102'
              }`}>

                {/* Animated Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.darkBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

                {/* Content */}
                <div className="relative p-8 z-10">
                  {/* Icon & Title */}
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-2xl text-white mr-4 transform transition-all duration-500 shadow-md ${
                      hoveredService === index ? 'scale-110 rotate-6 shadow-lg' : 'group-hover:scale-105'
                    }`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-amber-400 text-sm font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 mb-8 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center text-slate-400 transition-all duration-300 ${
                          hoveredService === index ? 'translate-x-2 text-slate-300' : ''
                        }`}
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <CheckCircle className="w-4 h-4 text-amber-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="mt-8">
                    <button className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group-hover:shadow-lg transform ${
                      hoveredService === index ? 'scale-105 shadow-amber-500/30' : ''
                    } hover:shadow-amber-500/30`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;