import React from "react";
import { Mail, Phone, Globe, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20" >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Let’s Connect with M Global</h2>
          <p className="text-gray-400 mb-8">
            Whether you have questions about Forex trading, want to open an account, 
            or simply need expert support, our team is here for you 24/7.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4  p-4 rounded-xl border border-white">
              <Mail className="text-gold" />
              <span className="text-gray-300">support@mglobalforex.com</span>
            </div>

            <div className="flex items-center space-x-4  p-4 rounded-xl border border-white">
              <Phone className="text-gold" />
              <span className="text-gray-300">+971-123-456-789</span>
            </div>

            <div className="flex items-center space-x-4  p-4 rounded-xl border border-white">
              <Globe className="text-gold" />
              <a href="https://mglobalforex.com" className="text-gray-300 hover:text-gold">
                www.mglobalforex.com
              </a>
            </div>

            <div className="flex items-center space-x-4  p-4 rounded-xl border border-white">
              <MapPin className="text-gold" />
              <span className="text-gray-300">Pune, India</span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className=" p-8 rounded-xl border border-gold">
          <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your full name"
                className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-gold"
              />
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-gold"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-gold"
            />

            <textarea
              placeholder="Tell us about your trading goals or queries..."
              rows="5"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-gold"
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full hover:bg-gold bg-[#E69A00] text-white font-semibold py-3 rounded-lg transition"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
