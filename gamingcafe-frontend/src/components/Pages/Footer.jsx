import { FaTwitter, FaWhatsapp, FaInstagram, FaDiscord } from 'react-icons/fa';
import logo1 from '../../assets/logo3.png';

import ParticlesBackground1 from '../Animations/ParticleBackground1';
import ParticlesBackgroundTri from '../Animations/ParticlesBackgroundTri';


export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
    <ParticlesBackgroundTri />
  </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo1} alt="Wild Gaming Cafe Logo" className="min-w-full min-h-full" />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="font-poppins font-semibold mb-1 animated-underline">Contact</h3>
          <p className="text-sm font-lato font-bold">📞 +91-98765-43210</p>

          <h3 className="font-poppins font-semibold animated-underline mt-4">Hours</h3>
          <div className="text-sm space-y-1">
            <div className="flex items-start">
              <span className="w-20 font-bold font-lato">Mon–Fri:</span>
              <span className="w-18 font-bold font-lato">9 AM – 11 PM</span>
            </div>
            <div className="flex items-start">
              <span className="w-20 font-bold font-lato">Sat–Sun:</span>
              <span className="w-18 font-bold font-lato">7 AM – 12 AM</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center space-y-2">
          <h3 className="font-poppins font-semibold mb-1 animated-underline">Quick Links</h3>
          <a href="/" className="hover:text-cyan-400 font-lato">Home</a>
          <a href="/gaminglounge" className="hover:text-cyan-400 font-lato">Gaming Lounge</a>
          <a href="/events" className="hover:text-cyan-400 font-lato">Events</a>
          <a href="/contact" className="hover:text-cyan-400 font-lato">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <h3 className="font-poppins font-semibold mb-2 animated-underline pr-2 md:pr-2">Connect With Us</h3>
          <div className="flex space-x-4 py-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <FaWhatsapp size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              <FaDiscord size={24} />
            </a>
          </div>
        </div>

      </div>

      {/* Footer bottom text */}
      <div className="relative z-10 border-t border-gray-800 py-4 font-montserrat text-center text-sm">
        © {new Date().getFullYear()} Wild Gaming Cafe. All rights reserved.
      </div>
    </footer>
  );
}