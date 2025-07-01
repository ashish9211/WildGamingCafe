import logo1 from '../../assets/logo1.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY>10);
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
            isScrolled ? 'bg-black shadow-md' : 'bg-opacity-0'} px-4 sm:px-6 md:px-10 lg:px-14 py-1`}>
      <div className="w-full flex items-center justify-between pl-2 pr-4">
        {/* Logo */}
        <div className="flex items-center space-x-3 text-2xl font-bold text-indigo-600">
          <Link to="/">
          <img 
            src={logo1} 
            alt="Wild Gaming Logo" 
            className="w-16 h-14 sm:w-18 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
          />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-7 text-white text-base font-lato font-bold  max-w-xl ml-7">
          <Link to="/gaminglounge" className="animated-underline whitespace-nowrap">GAMING LOUNGE</Link>
          <Link to="/events" className="animated-underline whitespace-nowrap"> EVENTS</Link>
          <Link to="/promo" className="animated-underline whitespace-nowrap"> PROMOTIONS</Link>
          
        </div>

        {/* Desktop Socials + Contact */}
        <div className="hidden md:flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 ml-auto pr-4 sm:pr-6 lg:pr-8">
          {/* Social Icons */}
          <div className="flex space-x-2 sm:space-x-3">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
               <div className="w-7 h-7   rounded bg-transparent group flex items-center justify-center cursor-pointer transition duration-300 border hover:bg-white">
                <i className="fa-brands fa-twitter text-white group-hover:text-black text-base transition"></i>
              </div>
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <div className="w-7 h-7  rounded bg-transparent group flex items-center justify-center cursor-pointer transition duration-300 border border-white hover:bg-white">
                <i className="fa-brands fa-whatsapp text-white group-hover:text-black text-base transition"></i>
              </div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="w-7 h-7  rounded bg-transparent group flex items-center justify-center cursor-pointer transition duration-300 border hover:bg-white">
                <i className="fa-brands fa-instagram text-white group-hover:text-black text-base transition"></i>
              </div>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <div className="w-7 h-7  rounded bg-transparent group flex items-center justify-center cursor-pointer transition duration-300 border hover:bg-white">
                <i className="fa-brands fa-discord text-white group-hover:text-black text-base transition"></i>
              </div>
            </a>
          </div>

          {/* Contact Button */}
          <Link to='/contact' className="h-7 flex items-center px-10 text-[11px]  font-montserrat  font-extrabold text-black bg-white border-2 border-white rounded-none hover:bg-black hover:text-white transition">
            CONTACT
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center ml-auto">
            <button
              className="w-4 h-4 sm:w-6 sm:h-6 bg-transparent flex items-center justify-center group border border-transparent hover:bg-white transition-all duration-300 rounded"
              onClick={() => setMenuOpen(!menuOpen)}
            >
                    <i className="fa-solid fa-bars text-white group-hover:text-black text-lg sm:text-xl transition-all duration-300"></i>
            </button>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-2 px-4 pb-4 text-white bg-black/90 rounded-none shadow flex flex-col items-center space-y-4">
          <a href="/gaminglounge" className="animated-underline text-base">GAMING LOUNGE</a>
          <a href="/events" className="animated-underline text-base">EVENTS</a>
          <a href="/events" className="animated-underline text-base">PROMOTIONS</a>
          <a href="/events" className="animated-underline text-base">SHOP</a>

          <div className="flex space-x-3 pt-2">
            <i className="fa-brands fa-twitter hover:text-blue-400 cursor-pointer"></i>
            <i className="fa-brands fa-whatsapp hover:text-green-500 cursor-pointer"></i>
            <i className="fa-brands fa-instagram hover:text-pink-500 cursor-pointer"></i>
            <i className="fa-brands fa-discord hover:text-indigo-400 cursor-pointer"></i>
          </div>

          <button className="mt-2 px-6 py-1.5 text-sm font-semibold font-lato text-black bg-white border-2 border-white rounded-none hover:bg-black hover:text-white transition">
            CONTACT
          </button>
        </div>
      )}
    </nav>
  );
};



export default Navbar