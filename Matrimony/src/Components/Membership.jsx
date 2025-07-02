import { Check, Star, Crown, Heart, Users, MessageCircle, Shield, Zap } from 'lucide-react';

export default function MembershipSection() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Sign up and build your detailed profile with photos and preferences",
      icon: <Users className="h-6 w-6" />
    },
    {
      number: "02", 
      title: "Browse & Connect",
      description: "Search through verified profiles and send interests to potential matches",
      icon: <Heart className="h-6 w-6" />
    },
    {
      number: "03",
      title: "Communicate",
      description: "Start conversations with mutual interests and build meaningful connections",
      icon: <MessageCircle className="h-6 w-6" />
    },
    {
      number: "04",
      title: "Find Your Match",
      description: "Meet your perfect life partner and begin your journey together",
      icon: <Star className="h-6 w-6" />
    }
  ];

  const freeFeatures = [
    "Create detailed profile",
    "Upload up to 5 photos",
    "Basic search filters",
    "Send interests",
    "View contact details of interested members",
    "Mobile app access"
  ];

  const premiumFeatures = [
    "All free features included",
    "Unlimited photo uploads",
    "Advanced search & filters",
    "Send unlimited messages",
    "View all member photos",
    "Profile highlighting",
    "Read message receipts",
    "Contact number visibility",
    "Priority customer support",
    "Ad-free experience"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-red-50"> {/* Adjusted background gradient */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your journey to find your life partner with our comprehensive membership options designed for every need
          </p>
        </div>

        {/* Steps Process */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group"> {/* Added group for hover effect */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform group-hover:-translate-y-2"> {/* Added hover transform */}
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 text-amber-600 rounded-full p-3 mr-4 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white"> {/* Amber color, hover to red */}
                      {step.icon}
                    </div>
                    <span className="text-3xl font-bold text-red-500">{step.number}</span> {/* Number remains red */}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-[calc(100%+8px)] w-8 h-0.5 bg-red-200 transform -translate-y-1/2 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Membership Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Free Membership */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-all duration-300"> {/* Subtle scale on hover */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 text-center">
              <div className="bg-gray-600 text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Membership</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">₹0</div>
              <p className="text-gray-600">Perfect to get started</p>
            </div>
            
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" /> {/* Checkmark in amber */}
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 transform hover:scale-[1.02]"> {/* Amber button */}
                Get Started Free
              </button>
            </div>
          </div>

          {/* Premium Membership */}
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-amber-500 overflow-hidden transform hover:scale-[1.02] transition-all duration-300 relative"> {/* Border in amber */}
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-2 text-sm font-semibold rounded-bl-lg"> {/* Badge in red */}
              Most Popular
            </div>
            
            <div className="bg-gradient-to-r from-red-600 to-amber-600 p-8 text-center text-white"> {/* Gradient from red to amber */}
              <div className="bg-white text-amber-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center"> {/* Crown icon in amber */}
                <Crown className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium Membership</h3>
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl line-through opacity-75 mr-2">₹4,999</span>
                <span className="text-4xl font-bold">₹2,999</span>
              </div>
              <p className="opacity-90">Best value for serious seekers</p>
              <div className="bg-yellow-300 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold mt-2 inline-block"> {/* Yellow for discount */}
                40% OFF
              </div>
            </div>
            
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" /> {/* Checkmark in amber */}
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center transform hover:scale-[1.02]"> {/* Gradient button */}
                <Zap className="h-5 w-5 mr-2" />
                Upgrade to Premium
              </button>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}