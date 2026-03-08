import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'portfolio', 'services', 'about'];
      const scrollPos = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'navbar-scrolled'
          : 'navbar-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-12 relative z-10">
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent transform hover:scale-110 transition-transform duration-300 animate-float"
        >
          Pallav
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {['home', 'portfolio', 'services', 'about', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative px-1 py-2 text-sm font-medium uppercase tracking-wider text-white/90 transition-all duration-300 group ${
                activeSection === item ? 'text-white' : 'hover:text-white'
              }`}
            >
              {item}
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                  activeSection === item
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white/90 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div
          className={`py-6 flex flex-col items-center space-y-4 ${
            scrolled
              ? 'bg-white/10 backdrop-blur-xl border-t border-white/20'
              : 'bg-transparent'
          }`}
        >
          {['home', 'portfolio', 'services', 'about', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`text-lg font-medium capitalize text-white/80 hover:text-white transition-colors ${
                activeSection === item ? 'text-white' : ''
              }`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        /* Base navbar styles */
        .navbar-transparent {
          background-color: transparent;
          backdrop-filter: none;
        }
        .navbar-scrolled {
          background-color: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,0.2);
          box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
        }

        /* Pseudo-element for slow light flash (every 4 seconds) */
        nav {
          position: relative;
        }
        nav::before {
          content: '';
          position: absolute;
          inset: 0;
          background: white;
          opacity: 0;
          pointer-events: none;
          z-index: 1;
          animation: lightFlash 4s infinite ease-in-out;
        }

        @keyframes lightFlash {
          0%, 50%, 100% { opacity: 0; }
          20% { opacity: 0.1; }
          30% { opacity: 0.15; }
          40% { opacity: 0.1; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;