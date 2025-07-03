import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, XCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [message, setMessage] = useState(null); // State for the custom message box: { type: 'success' | 'error', text: string }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    const isSuccess = Math.random() > 0.1; // 90% chance of success for demo

    if (isSuccess) {
      setMessage({ type: 'success', text: 'Thank you for your message! We will get back to you soon.' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } else {
      setMessage({ type: 'error', text: 'Oops! Something went wrong. Please try again later.' });
    }
  };

  // Effect to hide the message after a few seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 5000); // Message disappears after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-red-50 relative">
      {/* Custom Message Box */}
      {message && (
        <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 p-4 rounded-lg shadow-lg flex items-center space-x-3 transition-all duration-300 ${
          message.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          {message.type === 'success' ? <CheckCircle2 className="h-6 w-6" /> : <XCircle className="h-6 w-6" />}
          <span>{message.text}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-light mb-4 tracking-tight">
            
         
            <span className="font-bold bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Fill out the form below, and our team will get back to you shortly.
          </p>
        </div>

        {/* Main Content Area: Form, Map, and Contact Info */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start relative overflow-hidden">
          {/* Subtle background pattern within the card */}
          <div className="absolute inset-0 opacity-5 z-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d97706' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>

          {/* Contact Form (takes 2/3 width on large screens) */}
          <div className="lg:col-span-2 relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                  placeholder="Inquiry about Premium Membership"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 resize-y"
                  placeholder="Please describe your query here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info & Map (takes 1/3 width on large screens) */}
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="mb-8 lg:mb-0"> {/* Margin bottom for spacing on small screens */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left">Reach Us Directly</h3>
              <div className="flex flex-col items-start lg:items-start gap-6"> {/* Aligned to start on large screens */}
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 text-amber-600 rounded-full p-3">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">Call Us</p>
                    <a href="tel:+918871186630" className="text-gray-600 hover:text-amber-600 transition-colors duration-200">+91 8871186630</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 text-amber-600 rounded-full p-3">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">Email Us</p>
                    <a href="mailto:projects@appwin.in" className="text-gray-600 hover:text-amber-600 transition-colors duration-200">projects@appwin.in</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 text-amber-600 rounded-full p-3">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">Our Office</p>
                    <p className="text-gray-600">Vijay Nagar, Indore, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Embedded Google Map */}
            <div className="mt-8 lg:mt-0 w-full h-64 rounded-xl shadow-lg overflow-hidden border border-gray-200"> {/* Fixed height for map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.580790898517!2d77.2294472149021!3d28.61393918242491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd17f7b3c2e1%3A0x86f8a9e0f3e0c0d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
