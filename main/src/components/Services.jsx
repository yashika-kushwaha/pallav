import React, { useEffect, useRef } from 'react';
import { FiPenTool, FiImage, FiShare2, FiFeather, FiMonitor, FiLayout } from 'react-icons/fi';

const Services = () => {
  const sectionRef = useRef(null);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    { icon: <FiPenTool size={32} />, title: 'Logo Design', desc: 'Unique, memorable logos that capture your brand essence.' },
    { icon: <FiImage size={32} />, title: 'Poster & Banner', desc: 'Eye-catching print and digital designs for events and promotions.' },
    { icon: <FiShare2 size={32} />, title: 'Social Media Design', desc: 'Engaging visuals optimized for all social platforms.' },
    { icon: <FiFeather size={32} />, title: 'Brand Identity', desc: 'Complete visual identity systems including color, typography, and style guides.' },
    { icon: <FiMonitor size={32} />, title: 'UI Design', desc: 'Intuitive and beautiful interfaces for web and mobile apps.' },
    { icon: <FiLayout size={32} />, title: 'Illustration', desc: 'Custom illustrations that bring your ideas to life.' },
  ];

  return (
    <section id="services" ref={sectionRef} className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 transform-style-preserve-3d opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,transparent_1px),linear-gradient(90deg,transparent_1px,transparent_1px)] bg-[length:80px_80px] bg-center"></div>
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/10 border border-white/5 rounded-lg transform rotate-45 translate-z-[-400px] animate-cube-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-indigo-500/10 border border-white/5 rounded-lg transform rotate-12 translate-z-[-600px] animate-cube-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-white/5 rounded-full transform rotate-x-45 rotate-y-30 translate-z-[-200px] animate-ring-rotate-slow"></div>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translateZ(${Math.random() * -800}px)`,
              animation: `particle-float-slow ${10 + Math.random() * 10}s infinite alternate`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-3d-light">Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            What I can do for you – creative solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl hover:scale-105 hover:rotate-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500">
                {/* Icon with gradient */}
                <div className="w-16 h-16 mx-auto mb-4 text-purple-300 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{service.desc}</p>
                {/* Subtle glow on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-\[3000px\] {
          perspective: 3000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .translate-z-\[-400px\] {
          transform: translateZ(-400px);
        }
        .translate-z-\[-600px\] {
          transform: translateZ(-600px);
        }
        .translate-z-\[-200px\] {
          transform: translateZ(-200px);
        }
        .text-3d-light {
          text-shadow: 0 2px 5px rgba(0,0,0,0.3);
        }

        /* Scroll animations */
        .service-card.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        /* Background animations */
        @keyframes cube-spin-slow {
          0% { transform: rotateX(0deg) rotateY(0deg) translateZ(-400px); }
          100% { transform: rotateX(360deg) rotateY(360deg) translateZ(-400px); }
        }
        .animate-cube-spin-slow {
          animation: cube-spin-slow 30s infinite linear;
        }

        @keyframes cube-float-slow {
          0% { transform: rotateX(0deg) rotateY(0deg) translateZ(-600px) translateY(0); }
          50% { transform: rotateX(180deg) rotateY(180deg) translateZ(-600px) translateY(-40px); }
          100% { transform: rotateX(360deg) rotateY(360deg) translateZ(-600px) translateY(0); }
        }
        .animate-cube-float-slow {
          animation: cube-float-slow 35s infinite ease-in-out;
        }

        @keyframes ring-rotate-slow {
          0% { transform: rotateX(45deg) rotateY(30deg) rotateZ(0deg) translateZ(-200px); }
          100% { transform: rotateX(45deg) rotateY(30deg) rotateZ(360deg) translateZ(-200px); }
        }
        .animate-ring-rotate-slow {
          animation: ring-rotate-slow 40s infinite linear;
        }

        @keyframes particle-float-slow {
          0% { transform: translateZ(-800px) translateY(0); }
          100% { transform: translateZ(-200px) translateY(-50px); }
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Services;