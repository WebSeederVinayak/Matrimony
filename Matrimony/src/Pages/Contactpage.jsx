import React from 'react';
import ContactForm from '../Components/ContactForm';

export default function ContactPage() {
  return (
    // Main container now takes full width, with less restrictive horizontal padding on the outer div.
    <div className="min-h-screen w-full bg-gray-50 font-sans antialiased flex flex-col items-center py-30">

      {/* Contact Form Section - Now much wider */}
      {/* max-w-7xl is a significant increase, covering most of the screen width */}
      <section className="w-full max-w-6xl mb-12 px-4"> {/* Increased max-w to 6xl and added back some minimal px-4 for edges */}
        <ContactForm />
      </section>

      ---

      {/* Container for the Two-Column Layout - Also wider */}
      {/* This grid will now expand up to max-w-6xl */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 px-4"> {/* Added px-4 here too */}

        {/* Frequently Asked Questions Section (Left Column) */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">How do I update my profile?</h3>
              <p className="text-gray-600 mt-2">
                You can update your profile by logging into your account and navigating to the 'Edit Profile' section.
                Remember to save your changes!
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">What are the membership plans?</h3>
              <p className="text-gray-600 mt-2">
                We offer various membership plans to suit your needs. Please visit our 'Membership' page for detailed
                information on features and pricing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">How can I report an issue?</h3>
              <p className="text-gray-600 mt-2">
                If you encounter any issues, please use the contact form above, selecting 'Technical Support' as your
                inquiry type. We'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Right Column Container for Office and Social Media */}
        <div className="flex flex-col gap-8">
          {/* Location / Office Hours Section */}
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Office</h2>
            <div className="text-center text-gray-700">
              <p className="text-lg font-semibold">Matrimony App Headquarters</p>
              <p>123 Matrimony Lane, Loveville, Dreamland 12345</p>
              <p className="mt-4">
                **Office Hours:** Monday - Friday: 9:00 AM - 5:00 PM (IST)
              </p>
              <p>Saturday & Sunday: Closed</p>
              <p className="mt-4">
                <a href="tel:+911234567890" className="text-blue-600 hover:underline">
                  +91 123 456 7890
                </a>
              </p>
            </div>
          </section>

          {/* Social Media / Connect Section */}
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Connect With Us</h2>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl" aria-label="Facebook">
                {/* Replace with actual SVG/Icon for Facebook */}
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 text-2xl" aria-label="Twitter">
                {/* Replace with actual SVG/Icon for Twitter */}
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800 text-2xl" aria-label="Instagram">
                {/* Replace with actual SVG/Icon for Instagram */}
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
            <p className="text-center text-gray-600 mt-6">
              Follow us on social media for the latest updates and success stories!
            </p>
          </section>
        </div>
      </div>

      
    </div>
  );
}