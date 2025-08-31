import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B0C10] text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-brand-gold">M Global</h2>
          <p className="mt-4 text-sm text-gray-400">
            Empowering traders worldwide with real-time forex insights, 
            financial advisory, and smart investment solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-brand-gold">About Us</a></li>
            <li><a href="#services" className="hover:text-brand-gold">Services</a></li>
            <li><a href="#resources" className="hover:text-brand-gold">Resources</a></li>
            <li><a href="#contact" className="hover:text-brand-gold">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#news" className="hover:text-brand-gold">Forex News</a></li>
            <li><a href="#charts" className="hover:text-brand-gold">Live Charts</a></li>
            <li><a href="#analysis" className="hover:text-brand-gold">Market Analysis</a></li>
            <li><a href="#faq" className="hover:text-brand-gold">FAQs</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect with Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-brand-gold"><Facebook size={20} /></a>
            <a href="#" className="hover:text-brand-gold"><Twitter size={20} /></a>
            <a href="#" className="hover:text-brand-gold"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-brand-gold"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} M Global. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
