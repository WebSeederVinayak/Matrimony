import { Crown, Phone, Calendar, Shield, Eye, Compass, ArrowRight, Play, Quote } from 'lucide-react';

export default function PersonalMatchmaking() {
  const clientTestimonial = {
    text: "The personal touch made all the difference. My matchmaker understood exactly what I was looking for and introduced me to my husband within 3 months. The service was discreet, professional, and truly personalized.",
    name: "Priya & Rajesh",
    location: "Mumbai",
    image: "/images/couple1.jpg" // Ensure this image path is correct
  };

  const serviceHighlights = [
    {
      icon: <Crown className="h-8 w-8 text-amber-400" />,
      label: "Expert Pandit Consultations",
      description: "Guidance on auspicious timings and rituals for harmonious unions."
    },
    {
      icon: <Play className="h-8 w-8 text-amber-400" />,
      label: "Spiritual Storytelling (Kathavaachak)",
      description: "Enriching narratives to align values and cultural understanding."
    },
    {
      icon: <Eye className="h-8 w-8 text-amber-400" />,
      label: "Vedic Astrology Insights (Jyotish)",
      description: "Personalized astrological readings for deep compatibility analysis."
    },
  ];

  const experiencePoints = [
    {
      icon: <Eye className="h-6 w-6 text-amber-400" />,
      title: "Confidential Consultation",
      description: "Begin with a private, in-depth conversation about your life, values, and spiritual relationship goals. Every detail remains strictly confidential."
    },
    {
      icon: <Compass className="h-6 w-6 text-amber-400" />,
      title: "Bespoke Search Strategy",
      description: "A personalized approach utilizing our extensive network and traditional compatibility assessment methods, including spiritual alignments."
    },
    {
      icon: <Shield className="h-6 w-6 text-amber-400" />,
      title: "Verified Introductions",
      description: "Meet only the most suitable candidates who have been thoroughly vetted for both personal alignment and cultural compatibility."
    },
    {
      icon: <Phone className="h-6 w-6 text-amber-400" />,
      title: "Ongoing Partnership",
      description: "Continuous support, feedback, and guidance throughout your journey to finding a spiritually and personally fulfilling connection."
    }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Elegant Background Pattern - Amber and Red/Pink blur */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-400 to-red-500 rounded-full blur-3xl animate-blob-slow-1"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-red-400 to-amber-500 rounded-full blur-3xl animate-blob-slow-2 delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Sophisticated Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-20"></div>
            <Crown className="h-8 w-8 text-amber-400 mx-4" />
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-20"></div>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-light mb-4 tracking-tight">
            <span className="font-thin">Discover</span>
            <br />
            <span className="font-bold bg-gradient-to-r from-amber-300 to-red-400 bg-clip-text text-transparent">
              Holistic Matchmaking
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Our bespoke matchmaking service integrates traditional wisdom with personalized attention for discerning individuals seeking profound, meaningful connections.
          </p>
        </div>

        {/* Service Highlights - Integrated below header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-16"> {/* Changed to md:grid-cols-3 */}
          {serviceHighlights.map((item, index) => (
            <div key={index} className="text-center lg:w-70 lg:ml-15 group animate-fade-in-up" style={{ animationDelay: `${100 + index * 75}ms` }}>
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-amber-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-400/10 transform group-hover:-translate-y-1 h-48 flex flex-col justify-between">
                <div className="text-3xl font-light text-amber-400 mb-1">{item.icon}</div>
                <div className="text-base font-medium mb-1 flex-grow">{item.label}</div>
                <div className="text-xs text-slate-400">{item.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left - Service Details */}
          <div className="animate-fade-in-up delay-300">
            <h3 className="text-3xl font-light mb-6 text-amber-400">Our Holistic Approach</h3>
            
            <div className="space-y-6">
              {experiencePoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 group transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-amber-400 bg-opacity-20 rounded-full p-1 mt-1 flex-shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">{point.title}</h4>
                    <p className="text-slate-300 leading-relaxed text-base">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Testimonial Card */}
          <div className="lg:sticky lg:top-8 animate-fade-in-up delay-400">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 border border-slate-600 relative shadow-2xl">
              <Quote className="h-12 w-12 text-amber-400 opacity-30 absolute top-6 right-6" />
              
              <div className="mb-8">
                <p className="text-lg text-slate-200 leading-relaxed mb-6 font-light italic">
                  "{clientTestimonial.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={clientTestimonial.image} 
                    alt={clientTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-amber-400"
                  />
                  <div>
                    <div className="font-medium text-amber-400">{clientTestimonial.name}</div>
                    <div className="text-sm text-slate-400">{clientTestimonial.location}</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-600 pt-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-light text-amber-400 mb-2">₹50,000</div>
                  <div className="text-slate-400">Comprehensive 12-month program</div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group transform hover:scale-[1.02]">
                  Schedule Private Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <p className="text-center text-slate-400 text-sm mt-4">
                  Exclusively limited to 20 clients per year
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up delay-500">
          <p className="text-slate-400 text-lg mb-4">Ready to begin your personalized journey?</p>
          <p className="text-sm text-slate-500">
            All consultations are completely confidential and conducted by appointment only.
          </p>
        </div>
      </div>
    </section>
  );
}