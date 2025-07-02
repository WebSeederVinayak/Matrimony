import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react'; // Added ArrowRight import

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "Finding my life partner through this platform was a dream come true. The smart matching truly works, and the support team was incredibly helpful throughout my journey. Highly recommended!",
      name: "Anjali Sharma",
      location: "Delhi",
      image: "https://placehold.co/80x80/FFDDC1/E67E22?text=AS" // Placeholder for Anjali
    },
    {
      quote: "I was skeptical at first, but the personalized approach and verified profiles gave me confidence. I connected with my soulmate within months. This platform truly understands what modern relationships need.",
      name: "Rahul Verma",
      location: "Bengaluru",
      image: "https://placehold.co/80x80/FFDDC1/E67E22?text=RV" // Placeholder for Rahul
    },
    {
      quote: "The best decision I made for my future! The interface is user-friendly, and the focus on genuine connections made all the difference. I'm now happily married, all thanks to this amazing service.",
      name: "Priya Singh",
      location: "Mumbai",
      image: "https://placehold.co/80x80/FFDDC1/E67E22?text=PS" // Placeholder for Priya
    },
    {
      quote: "After trying several other platforms, this one stood out with its commitment to quality matches. My family and I are incredibly grateful for helping me find such a wonderful partner.",
      name: "Vikram Reddy",
      location: "Hyderabad",
      image: "https://placehold.co/80x80/FFDDC1/E67E22?text=VR" // Placeholder for Vikram
    },
    {
      quote: "Our journey started here, and it led us to a beautiful marriage. The profiles were genuine, and the matching algorithm truly understood our preferences. Thank you for bringing us together!",
      name: "Shruti Desai",
      location: "Ahmedabad",
      image: "https://placehold.co/80x80/FFDDC1/E67E22?text=SD" // Placeholder for Shruti
    },
    {
      quote: "From the first conversation to our wedding day, every step was guided by the excellent features of this platform. It's more than just a matrimonial site; it's a community that fosters true love.",
      name: "Arjun Kapoor",
      location: "Pune",
      image: "https://placehold.co/80x80/FFDDC1/E67E22?text=AK" // Placeholder for Arjun
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hear From Our Happy Couples
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from individuals who found their perfect match and built lasting relationships through our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 
                         transform hover:scale-[1.03] transition-all duration-300 relative overflow-hidden"
            >
              {/* Quote icon as subtle background */}
              <Quote className="absolute top-4 right-4 h-12 w-12 text-amber-200 opacity-5" />

              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-500 mr-4 flex-shrink-0" 
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Star Rating (Example) */}
              <div className="flex items-center justify-end text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action at the bottom */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 mb-6">
            Curious to see more inspiring journeys?
          </p>
          <button className="inline-flex items-center bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Read More Success Stories
            <ArrowRight className="ml-3 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
