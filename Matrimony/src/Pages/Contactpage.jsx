import React, { useState } from 'react';
import ContactForm from '../Components/ContactForm';

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState(null); // State to manage which FAQ item is open

  const faqData = [
    {
      id: 1,
      question: "How do I update my profile?",
      answer: "You can update your profile by logging into your account and navigating to the 'Edit Profile' section. Remember to save your changes!"
    },
    {
      id: 2,
      question: "What are the membership plans?",
      answer: "We offer various membership plans to suit your needs. Please visit our 'Membership' page for detailed information on features and pricing."
    },
    {
      id: 3,
      question: "How can I report an issue?",
      answer: "If you encounter any issues, please use the contact form above, selecting 'Technical Support' as your inquiry type. We'll get back to you as soon as possible."
    },
    {
      id: 4,
      question: "Is my data secure on your platform?",
      answer: "Absolutely. We prioritize your privacy and security. Our platform uses advanced encryption and security measures to protect your personal information. Please refer to our Privacy Policy for more details."
    },
    {
      id: 5,
      question: "Can I find community-specific services on your platform?",
      answer: "Yes, our platform is not just for matchmaking! You can also 'Find Community Places & Members' and even 'Find Pandits & Astrologers' to support your spiritual journey and community needs."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id); // Toggle open/close state
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans antialiased flex flex-col items-center mt-20 py-10">

      {/* Contact Form Section */}
      <section className="w-full max-w-6xl mb-12 px-4">
        <ContactForm />
      </section>

      {/* --- */}

      {/* Extraordinary Frequently Asked Questions Section */}
      <section className="w-full max-w-4xl px-4">
        <h2 className="text-5xl lg:text-6xl font-light mb-12 tracking-tight flex justify-center items-center text-center">
            <span className="font-bold bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
        </h2>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"> {/* Rounded corners, refined shadow */}
          {faqData.map((item) => (
            <div key={item.id} className="border-b border-gray-100 last:border-b-0">
              <button
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none transition-all duration-300 ease-in-out"
                onClick={() => toggleFAQ(item.id)}
              >
                <h3 className={`text-xl font-semibold ${openFAQ === item.id ? 'bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent' : 'text-gray-800'} transition-colors duration-300`} style={{ fontFamily: 'Exo 2' }}>
                  {item.question}
                </h3>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${openFAQ === item.id ? 'rotate-180 bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent' : 'rotate-0 text-gray-500'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === item.id ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-700 leading-relaxed px-6 pb-6" style={{ fontFamily: 'Exo 2' }} dangerouslySetInnerHTML={{ __html: item.answer }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}