import { Check, Star, Crown, Heart, Users, MessageCircle, Shield, Zap, X } from 'lucide-react'; // Import X icon

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

  // Define a comprehensive list of all features
  const allFeatures = [
    { name: "Create detailed profile", free: true },
    { name: "Upload photos (up to 5)", free: true },
    { name: "Basic search filters", free: true },
    { name: "Send interests", free: true },
    { name: "View contact details of interested members", free: true },
    { name: "Mobile app access", free: true },
    { name: "Unlimited photo uploads", free: false }, // Premium only
    { name: "Advanced search & filters", free: false }, // Premium only
    { name: "Send unlimited messages", free: false }, // Premium only
    { name: "View all member photos", free: false }, // Premium only
    { name: "Profile highlighting", free: false }, // Premium only
    { name: "Read message receipts", free: false }, // Premium only
    { name: "Contact number visibility", free: false }, // Premium only
    { name: "Priority customer support", free: false }, // Premium only
    { name: "Ad-free experience", free: false } // Premium only
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-amber-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-24 relative">
          <h2 className="text-5xl lg:text-6xl font-light mb-4 tracking-tight">
            <span className="font-thin">Choose your </span>
         
            <span className="font-bold bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">
              Perfect plan
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-stagger-2">
            Start your journey to find your life partner with our carefully curated membership options crafted for every heart and every need.
          </p>
        </div>
        
        {/* Steps Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform group-hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 text-amber-600 rounded-full p-3 mr-4 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                      {step.icon}
                    </div>
                    <span className="text-3xl font-bold text-red-500">{step.number}</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Free Membership */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
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
                {allFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {feature.free ? (
                      <Check className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" /> // Gray X for non-free features
                    )}
                    <span className={feature.free ? "text-gray-700" : "text-gray-500 line-through"}>{feature.name}</span> {/* Line-through for non-free */}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 transform hover:scale-[1.02]">
                Get Started Free
              </button>
            </div>
          </div>

          {/* Premium Membership */}
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-amber-500 overflow-hidden transform hover:scale-[1.02] transition-all duration-300 relative">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-2 text-sm font-semibold rounded-bl-lg">
              Most Popular
            </div>

            <div className="bg-gradient-to-r from-red-600 to-amber-600 p-8 text-center text-white">
              <div className="bg-white text-amber-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Crown className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium Membership</h3>
              <div className="flex items-center justify-center mb-2">
                {/* No line-through or discount display here, just the final price */}
                <span className="text-4xl font-bold">₹2,999</span>
              </div>
              <p className="opacity-90">Best value for serious seekers</p>
              {/* Removed 40% OFF badge */}
            </div>

            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {allFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {/* All premium features get a checkmark */}
                    <Check className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature.name}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center transform hover:scale-[1.02]">
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