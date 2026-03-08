import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaBehance, FaDribbble, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email} (demo)`);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden perspective-[3000px] pt-16 pb-8">
      {/* 3D Background Elements (subtle) */}
      <div className="absolute inset-0 transform-style-preserve-3d opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,transparent_1px),linear-gradient(90deg,transparent_1px,transparent_1px)] bg-[length:60px_60px] bg-center opacity-10"></div>
        <div className="absolute top-10 left-10 w-24 h-24 bg-purple-500/10 border border-white/5 rounded-lg transform rotate-45 translate-z-[-200px] animate-cube-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-500/10 border border-white/5 rounded-lg transform rotate-12 translate-z-[-300px] animate-cube-float-slow"></div>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translateZ(${Math.random() * -400}px)`,
              animation: `particle-float-slow ${10 + Math.random() * 10}s infinite alternate`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Pallav</h3>
            <p className="text-white/60 mb-4">Creative Graphic Designer & Video Editor crafting stunning visuals and engaging stories.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-purple-300 transform hover:scale-125 hover:translate-z-5 transition-all duration-300">
                <FaBehance size={22} />
              </a>
              <a href="#" className="text-white/60 hover:text-purple-300 transform hover:scale-125 hover:translate-z-5 transition-all duration-300">
                <FaDribbble size={22} />
              </a>
              <a href="#" className="text-white/60 hover:text-purple-300 transform hover:scale-125 hover:translate-z-5 transition-all duration-300">
                <FaLinkedin size={22} />
              </a>
              <a href="#" className="text-white/60 hover:text-purple-300 transform hover:scale-125 hover:translate-z-5 transition-all duration-300">
                <FaGithub size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl font-semibold mb-4 text-white/90 border-b border-purple-400/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/60 hover:text-purple-300 transition-colors duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-xl font-semibold mb-4 text-white/90 border-b border-purple-400/30 pb-2 inline-block">Services</h4>
            <ul className="space-y-2">
              {['Graphic Design', 'Video Editing', 'Motion Graphics', 'Brand Identity'].map((service, i) => (
                <li key={i}>
                  <a href="#services" className="text-white/60 hover:text-purple-300 transition-colors duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-xl font-semibold mb-4 text-white/90 border-b border-purple-400/30 pb-2 inline-block">Stay Updated</h4>
            <p className="text-white/60 mb-4">Subscribe for design insights and updates.</p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold transform hover:translate-y-[-2px] hover:scale-105 transition-all duration-300 shadow-lg btn-3d-alt"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
          <p className="animate-pulse-slow">
            © {new Date().getFullYear()} Pallav. Crafted with <FaHeart className="inline text-red-400 animate-heartbeat" /> for creativity.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-purple-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-purple-300 transition-colors">Terms</a>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 hover:text-purple-300 transition-colors group"
            >
              <span>Back to top</span>
              <FaArrowUp className="group-hover:translate-y-[-3px] transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom Styles & Animations */}
      <style jsx>{`
        .perspective-\[3000px\] {
          perspective: 3000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .translate-z-\[-200px\] {
          transform: translateZ(-200px);
        }
        .translate-z-\[-300px\] {
          transform: translateZ(-300px);
        }
        .hover\:translate-z-5:hover {
          transform: translateZ(5px);
        }
        .btn-3d-alt {
          box-shadow: 0 4px 0 #4a1d6d;
        }
        .btn-3d-alt:hover {
          box-shadow: 0 2px 0 #4a1d6d, 0 8px 12px rgba(0,0,0,0.3);
        }

        /* Animations */
        @keyframes cube-spin-slow {
          0% { transform: rotateX(0deg) rotateY(0deg) translateZ(-200px); }
          100% { transform: rotateX(360deg) rotateY(360deg) translateZ(-200px); }
        }
        .animate-cube-spin-slow {
          animation: cube-spin-slow 30s infinite linear;
        }

        @keyframes cube-float-slow {
          0% { transform: rotateX(0deg) rotateY(0deg) translateZ(-300px) translateY(0); }
          50% { transform: rotateX(180deg) rotateY(180deg) translateZ(-300px) translateY(-30px); }
          100% { transform: rotateX(360deg) rotateY(360deg) translateZ(-300px) translateY(0); }
        }
        .animate-cube-float-slow {
          animation: cube-float-slow 35s infinite ease-in-out;
        }

        @keyframes particle-float-slow {
          0% { transform: translateZ(-400px) translateY(0); }
          100% { transform: translateZ(-100px) translateY(-50px); }
        }

        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
          opacity: 0;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
          75% { transform: scale(1.1); }
        }
        .animate-heartbeat {
          animation: heartbeat 1.5s infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;