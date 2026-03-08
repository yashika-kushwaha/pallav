import React from "react";
import { FaBehance, FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  // Split the subheading into individual characters (including spaces)
  const subheading = "Creative Graphic Designer & Video Editor";
  const letters = subheading.split("");

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 overflow-hidden perspective-[3000px]">
      {/* 3D Scene Container */}
      <div className="absolute inset-0 transform-style-preserve-3d">
        {/* Deep background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,transparent_1px),linear-gradient(90deg,transparent_1px,transparent_1px)] bg-[length:100px_100px] bg-center opacity-10 animate-grid-pulse"></div>
        
        {/* Floating 3D Cubes */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500/20 border border-white/10 rounded-lg transform rotate-45 translate-z-[-500px] animate-cube-spin"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 bg-indigo-500/20 border border-white/10 rounded-lg transform rotate-12 translate-z-[-800px] animate-cube-float"></div>
        
        {/* Rotating Torus-like ring */}
        <div className="absolute top-1/3 left-1/4 w-80 h-80 border-4 border-purple-400/30 rounded-full transform rotate-x-60 rotate-y-30 translate-z-[-300px] animate-ring-rotate"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translateZ(${Math.random() * -1000}px)`,
              animation: `particle-float ${5 + Math.random() * 10}s infinite alternate`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 transform-style-preserve-3d">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left transform translate-z-[200px]">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-3d">
              Hi, I'm <span className="text-purple-300">Pallav</span>
            </h1>
            
            {/* Snake-like letter animation with 3s pause, repeating */}
            <h2 className="text-2xl md:text-3xl text-white/80 mb-6 text-3d-light inline-block max-w-full break-words">
              {letters.map((char, index) => (
                <span
                  key={index}
                  className="inline-block animate-letter-rise"
                  style={{ animationDelay: `${index * 0.03}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>

            <p className="text-white/70 max-w-lg mx-auto lg:mx-0 mb-8 text-lg text-3d-light">
              I craft stunning visuals and engaging videos that tell your story.
              From logo design to motion graphics – let's bring your ideas to life.
            </p>

            {/* Hire Me Button */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-2xl hover:bg-purple-700 transform hover:translate-z-10 hover:scale-110 transition-all duration-300 border border-purple-400/30 btn-3d">
                Hire Me
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 justify-center lg:justify-start text-white/80">
              <a href="#" className="hover:text-purple-300 transform hover:translate-z-5 hover:scale-125 transition-all duration-300">
                <FaBehance size={32} />
              </a>
              <a href="#" className="hover:text-purple-300 transform hover:translate-z-5 hover:scale-125 transition-all duration-300">
                <FaDribbble size={32} />
              </a>
              <a href="#" className="hover:text-purple-300 transform hover:translate-z-5 hover:scale-125 transition-all duration-300">
                <FaLinkedin size={32} />
              </a>
              <a href="#" className="hover:text-purple-300 transform hover:translate-z-5 hover:scale-125 transition-all duration-300">
                <FaGithub size={32} />
              </a>
            </div>
          </div>

          {/* Right - 3D Geometric Portrait */}
          <div className="flex-1 flex justify-center lg:justify-end transform translate-z-[300px]">
            <div className="relative w-72 h-72 md:w-96 md:h-96 transform-style-preserve-3d animate-portrait-float">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-purple-400/30 transform rotate-x-45 rotate-y-45 animate-ring-spin"></div>
              {/* Inner Core - Hexagonal Image */}
              <div className="absolute inset-4 overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border-4 border-white/20 shadow-2xl transform translate-z-20 hover:scale-105 transition-transform duration-500">
                <img
                  src="/public/main.png"
                  alt="Pallav"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-indigo-600/20 rounded-full blur-2xl transform translate-z-[-20px]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .perspective-\[3000px\] {
          perspective: 3000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .translate-z-\[-500px\] {
          transform: translateZ(-500px);
        }
        .translate-z-\[-800px\] {
          transform: translateZ(-800px);
        }
        .translate-z-\[-300px\] {
          transform: translateZ(-300px);
        }
        .translate-z-\[200px\] {
          transform: translateZ(200px);
        }
        .translate-z-\[300px\] {
          transform: translateZ(300px);
        }
        .translate-z-20 {
          transform: translateZ(20px);
        }
        .translate-z-\[-20px\] {
          transform: translateZ(-20px);
        }
        .hover\:translate-z-10:hover {
          transform: translateZ(10px);
        }
        .hover\:translate-z-5:hover {
          transform: translateZ(5px);
        }
        .rotate-x-45 {
          transform: rotateX(45deg);
        }
        .rotate-y-45 {
          transform: rotateY(45deg);
        }
        .rotate-x-60 {
          transform: rotateX(60deg);
        }
        .rotate-y-30 {
          transform: rotateY(30deg);
        }
        .text-3d {
          text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
        }
        .text-3d-light {
          text-shadow: 0 2px 5px rgba(0,0,0,0.3);
        }
        .btn-3d {
          box-shadow: 0 10px 0 #4a1d6d, 0 15px 20px rgba(0,0,0,0.4);
        }
        .btn-3d:hover {
          transform: translateY(-2px) translateZ(10px);
          box-shadow: 0 8px 0 #4a1d6d, 0 20px 25px rgba(0,0,0,0.4);
        }

        /* Letter rise animation with 3s pause, repeating */
        @keyframes letter-rise {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
          }
          12% { /* rise takes ~0.4s out of 3.4s cycle */
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-letter-rise {
          animation: letter-rise 3.4s infinite ease-out;
          opacity: 0; /* initial state hidden (will be overridden by animation) */
        }

        @keyframes cube-spin {
          0% { transform: rotateX(0deg) rotateY(0deg) translateZ(-500px); }
          100% { transform: rotateX(360deg) rotateY(360deg) translateZ(-500px); }
        }
        .animate-cube-spin {
          animation: cube-spin 20s infinite linear;
        }
        @keyframes cube-float {
          0% { transform: rotateX(0deg) rotateY(0deg) translateZ(-800px) translateY(0); }
          50% { transform: rotateX(180deg) rotateY(180deg) translateZ(-800px) translateY(-50px); }
          100% { transform: rotateX(360deg) rotateY(360deg) translateZ(-800px) translateY(0); }
        }
        .animate-cube-float {
          animation: cube-float 25s infinite ease-in-out;
        }
        @keyframes ring-rotate {
          0% { transform: rotateX(60deg) rotateY(30deg) rotateZ(0deg) translateZ(-300px); }
          100% { transform: rotateX(60deg) rotateY(30deg) rotateZ(360deg) translateZ(-300px); }
        }
        .animate-ring-rotate {
          animation: ring-rotate 30s infinite linear;
        }
        @keyframes ring-spin {
          0% { transform: rotateX(45deg) rotateY(45deg) rotateZ(0deg); }
          100% { transform: rotateX(45deg) rotateY(45deg) rotateZ(360deg); }
        }
        .animate-ring-spin {
          animation: ring-spin 15s infinite linear;
        }
        @keyframes portrait-float {
          0% { transform: translateZ(300px) rotateX(0deg) rotateY(0deg); }
          50% { transform: translateZ(320px) rotateX(5deg) rotateY(5deg); }
          100% { transform: translateZ(300px) rotateX(0deg) rotateY(0deg); }
        }
        .animate-portrait-float {
          animation: portrait-float 8s infinite ease-in-out;
        }
        @keyframes grid-pulse {
          0% { opacity: 0.05; }
          50% { opacity: 0.15; }
          100% { opacity: 0.05; }
        }
        .animate-grid-pulse {
          animation: grid-pulse 8s infinite;
        }
        @keyframes particle-float {
          0% { transform: translateZ(-1000px) translateY(0); }
          100% { transform: translateZ(-100px) translateY(-100px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;