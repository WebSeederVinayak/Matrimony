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
      number: "1:1",
      label: "Personal Attention",
      description: "Exclusive one-on-one consultation"
    },
    {
      number: "72hr",
      label: "Response Time", 
      description: "Guaranteed response within 3 days"
    },
    {
      number: "3-5",
      label: "Monthly Matches",
      description: "Carefully curated introductions"
    },
    {
      number: "∞",
      label: "Until Success",
      description: "We work until you find 'the one'"
    }
  ];

  const experiencePoints = [
    {
      icon: <Eye className="h-6 w-6 text-amber-400" />,
      title: "Confidential Consultation",
      description: "Begin with a private, in-depth conversation about your life, values, and relationship goals. Every detail remains strictly confidential."
    },
    {
      icon: <Compass className="h-6 w-6 text-amber-400" />,
      title: "Bespoke Search Strategy",
      description: "A personalized approach utilizing our extensive network and advanced compatibility assessment methods."
    },
    {
      icon: <Shield className="h-6 w-6 text-amber-400" />,
      title: "Verified Introductions",
      description: "Meet only the most suitable candidates who have been thoroughly vetted and align with your preferences."
    },
    {
      icon: <Phone className="h-6 w-6 text-amber-400" />,
      title: "Ongoing Partnership",
      description: "Continuous support, feedback, and guidance throughout your journey to finding lasting love."
    }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden"> {/* Reduced vertical padding */}
      {/* Elegant Background Pattern - Amber and Red/Pink blur */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-400 to-red-500 rounded-full blur-3xl animate-blob-slow-1"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-red-400 to-amber-500 rounded-full blur-3xl animate-blob-slow-2 delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Sophisticated Header */}
        <div className="text-center mb-16 animate-fade-in-up"> {/* Reduced margin-bottom */}
          <div className="inline-flex items-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-20"></div>
            <Crown className="h-8 w-8 text-amber-400 mx-4" />
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-20"></div>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-light mb-4 tracking-tight"> {/* Slightly reduced font size */}
            <span className="font-thin">Introducing</span>
            <br />
            <span className="font-bold bg-gradient-to-r from-amber-300 to-red-400 bg-clip-text text-transparent">
              Exclusive Matchmaking
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed"> {/* Slightly reduced font size */}
            Our bespoke matchmaking service is crafted for discerning individuals seeking meaningful connections through personalized, confidential consultations.
          </p>
        </div>

        {/* Service Highlights - Integrated below header */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"> {/* More compact grid */}
          {serviceHighlights.map((item, index) => (
            <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${100 + index * 75}ms` }}>
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-amber-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-400/10 transform group-hover:-translate-y-1"> {/* Reduced padding and hover effect */}
                <div className="text-3xl font-light text-amber-400 mb-1">{item.number}</div> {/* Reduced font size */}
                <div className="text-base font-medium mb-1">{item.label}</div> {/* Reduced font size */}
                <div className="text-xs text-slate-400">{item.description}</div> {/* Reduced font size */}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16"> {/* Reduced gap and margin-bottom */}
          {/* Left - Service Details */}
          <div className="animate-fade-in-up delay-300">
            <h3 className="text-3xl font-light mb-6 text-amber-400">The Experience</h3> {/* Reduced margin-bottom */}
            
            <div className="space-y-6"> {/* Reduced space-y */}
              {experiencePoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 group transform hover:scale-105 transition-transform duration-300"> {/* Added scale on hover */}
                  <div className="bg-amber-400 bg-opacity-20 rounded-full p-1 mt-1 flex-shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">{point.title}</h4> {/* Reduced margin-bottom */}
                    <p className="text-slate-300 leading-relaxed text-base">{point.description}</p> {/* Reduced font size */}
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
