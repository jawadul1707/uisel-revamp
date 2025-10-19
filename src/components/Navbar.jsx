import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logos/uisel_logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll function with offset for sticky navbar
  const scrollWithOffset = (el) => {
    const yOffset = -90; // adjust based on navbar height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  // Handle Home click
  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/">
    <img
      src={logo}
      alt="UISEL Logo"
      className="w-16 h-16 object-contain"
      style={{ background: 'transparent' }}
    />
  </Link>
          <span
            className={`text-l font-bold tracking-wide leading-tight transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            <span className="block">Universal Institute of Skills</span>
            <span className="block">& Entrepreneurship Ltd.</span>
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {/* Home */}
          <button
            onClick={handleHomeClick}
            className={`text-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-gray-200'
            }`}
          >
            Home
          </button>

          {/* Hash links */}
          <HashLink
            smooth
            scroll={el => scrollWithOffset(el)}
            to="/#about"
            className={`text-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-gray-200'
            }`}
          >
            About Us
          </HashLink>

          <HashLink
            smooth
            scroll={el => scrollWithOffset(el)}
            to="/#services"
            className={`text-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-gray-200'
            }`}
          >
            Services
          </HashLink>

          <Link
            to="/training"
            className={`text-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-gray-200'
            }`}
          >
            Training Programs
          </Link>

          <HashLink
            smooth
            scroll={el => scrollWithOffset(el)}
            to="/#global"
            className={`text-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-gray-200'
            }`}
          >
            Global Reach
          </HashLink>

          <HashLink
            smooth
            scroll={el => scrollWithOffset(el)}
            to="/#contact"
            className={`text-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-gray-200'
            }`}
          >
            Contact
          </HashLink>

          <Link
            to="/apply"
            className={`px-5 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
              isScrolled
                ? 'bg-primary text-white hover:bg-purple-700'
                : 'bg-white text-primary hover:bg-gray-200'
            }`}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
