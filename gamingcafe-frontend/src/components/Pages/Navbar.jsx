import logo1 from '../../assets/logo1.png';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'; // Import useRef and useLocation

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuRef = useRef(null); // Ref for the mobile menu container
  const buttonRef = useRef(null); // Ref for the hamburger button
  const location = useLocation(); // Hook to get current location

  // Effect for scroll background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to close the menu when the route changes (e.g., clicking a Link to a new page)
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Effect to handle click outside and scroll lock/unlock
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close menu if clicked outside the menu AND not on the hamburger button itself
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    const toggleBodyScroll = () => {
      if (menuOpen) {
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
      } else {
        document.body.style.overflow = 'unset'; // Allow scrolling when menu is closed
      }
    };

    // Add event listener when menu is open
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    toggleBodyScroll(); // Apply scroll lock/unlock based on menuOpen state

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Clean up
      document.body.style.overflow = 'unset'; // Ensure scroll is reset on component unmount
    };
  }, [menuOpen]); // Re-run this effect when menuOpen state changes

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when any link is clicked
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-black shadow-md' : 'bg-opacity-0'
      } px-4 sm:px-6 md:px-10 lg:px-14 py-1`}
    >
      <div className="w-full flex items-center justify-between pl-2 pr-4">
        {/* Logo */}
        <div className="flex items-center space-x-3 text-2xl font-bold text-indigo-600">
          <Link to="/" onClick={() => setMenuOpen(false)}> {/* Close menu if logo is clicked */}
            <img
              src={logo1}
              alt="Wild Gaming Logo"
              className="w-16 h-14 sm:w-18 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 "
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-7 text-white text-base font-lato font-bold max-w-xl ml-7">
          <Link to="/gaminglounge" className="animated-underline whitespace-nowrap">
            GAMING LOUNGE
          </Link>
          <Link to="/events" className="animated-underline whitespace-nowrap">
            EVENTS
          </Link>
          <Link to="/promo" className="animated-underline whitespace-nowrap">
            PROMOTIONS
          </Link>
        </div>

        {/* Desktop Socials + Contact */}
        <div className="hidden md:flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 ml-auto pr-4 sm:pr-6 lg:pr-8">
          {/* Social Icons */}
          <div className="flex space-x-2 sm:space-x-3">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <div className="w-7 h-7 rounded bg-transparent group flex items-center justify-center cursor-pointer transition duration-300 border hover:bg-white">
                <i className="fa-brands fa-twitter text-white group-hover:text-black text-base transition"></i>
              </div>
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <div className="w-7 h-7 rounded bg-transparent group flex items-center justify-center cursor-pointer transition duration-300 border border-white hover:bg-white">
                <i className="fa-brands fa-whatsapp text-white group-hover:text-black text-base transition"></i>
              </div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="w-7 h-7 rounded bg-transparent group flex items-center justify-center cursor-pointer transition duration-300 border hover:bg-white">
                <i className="fa-brands fa-instagram text-white group-hover:text-black text-base transition"></i>
              </div>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <div className="w-7 h-7 rounded bg-transparent group flex items-center justify-center cursor-pointer transition duration-300 border hover:bg-white">
                <i className="fa-brands fa-discord text-white group-hover:text-black text-base transition"></i>
              </div>
            </a>
          </div>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="h-7 flex items-center px-10 text-[11px] font-montserrat font-extrabold text-black bg-white border-2 border-white rounded-none hover:bg-black hover:text-white transition"
          >
            CONTACT
          </Link>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            ref={buttonRef} // Attach ref here
            className="w-8 h-8 sm:w-10 sm:h-10 bg-transparent flex items-center justify-center group border border-transparent hover:bg-[#ff993c] transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-controls="mobile-menu" // ARIA attributes
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span> {/* For screen readers */}
            <i className="fa-solid fa-bars text-white group-hover:text-black text-xl sm:text-2xl transition-all duration-300"></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Overlay (Click to close, dims background) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ease-in-out"
          onClick={handleLinkClick} // Click overlay to close menu
          aria-hidden="true" // Hide overlay from screen readers when open
        ></div>
      )}

      {/* Mobile Dropdown Menu Content */}
      <div
        ref={menuRef} // Attach ref here
        id="mobile-menu" // Link with aria-controls
        className={`
          md:hidden
          fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-black/95 backdrop-blur-md
          flex flex-col items-center justify-center space-y-8
          shadow-xl transform transition-transform duration-300 ease-in-out z-50
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        role="dialog" // ARIA role for dialog
        aria-modal="true" // Indicates it's a modal dialog
      >
        {/* Close Button inside Mobile Menu */}
        <button
          onClick={handleLinkClick} // Closes menu
          className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 focus:outline-none"
          aria-label="Close menu" // ARIA label for accessibility
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <a href="/gaminglounge" onClick={handleLinkClick} className="animated-underline text-white text-xl font-bold">
          GAMING LOUNGE
        </a>
        <a href="/events" onClick={handleLinkClick} className="animated-underline text-white text-xl font-bold">
          EVENTS
        </a>
        <a href="/promo" onClick={handleLinkClick} className="animated-underline text-white text-xl font-bold">
          PROMOTIONS
        </a>

        <div className="flex space-x-6 pt-4 text-white text-2xl">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
            <i className="fa-brands fa-twitter hover:text-blue-400 cursor-pointer"></i>
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
            <i className="fa-brands fa-whatsapp hover:text-green-500 cursor-pointer"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
            <i className="fa-brands fa-instagram hover:text-pink-500 cursor-pointer"></i>
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
            <i className="fa-brands fa-discord hover:text-indigo-400 cursor-pointer"></i>
          </a>
        </div>

        <Link
          to="/contact"
          onClick={handleLinkClick}
          className="mt-4 px-8 py-2 text-lg font-semibold font-lato text-black bg-white border-2 border-white rounded-none hover:bg-black hover:text-white transition"
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;