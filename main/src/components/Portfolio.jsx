import React, { useState, useEffect, useRef } from 'react';
import { FiEye, FiFilter } from 'react-icons/fi';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  // Sample portfolio items
  const items = [
    { id: 1, category: 'design', title: 'Brand Identity', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 2, category: 'video', title: 'Product Promo', image: 'https://images.unsplash.com/photo-1574717024453-354056af8391?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 3, category: 'design', title: 'Packaging Design', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 4, category: 'video', title: 'Motion Graphics', image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 5, category: 'design', title: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 6, category: 'video', title: 'Commercial Edit', image: 'https://images.unsplash.com/photo-1578022761797-b8636ac1773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  ];

  // Intersection Observer for scroll animations
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

    const cards = document.querySelectorAll('.portfolio-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filter]); // Re-run when filter changes to observe new cards

  // Filter items
  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

  return (
    <section id="portfolio" ref={sectionRef} className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      {/* 3D Background Elements (matching the site's theme) */}
      <div className="absolute inset-0 transform-style-preserve-3d opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,transparent_1px),linear-gradient(90deg,transparent_1px,transparent_1px)] bg-[length:80px_80px] bg-center"></div>
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/10 border border-white/5 rounded-lg transform rotate-45 translate-z-[-400px] animate-cube-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-indigo-500/10 border border-white/5 rounded-lg transform rotate-12 translate-z-[-600px] animate-cube-float-slow"></div>
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-3d-light animate-fade-in-up">
            My Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            A showcase of my creative work in graphic design and video editing.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 space-x-4 flex-wrap gap-3">
          {['all', 'design', 'video'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full capitalize font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              {cat === 'all' ? 'All Work' : cat === 'design' ? 'Graphic Design' : 'Video Editing'}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="portfolio-card opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="group relative rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-purple-300 text-sm mb-3 capitalize">{item.category}</p>
                  <button className="flex items-center text-white bg-purple-600/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm hover:bg-purple-700 transition-colors">
                    <FiEye className="mr-2" /> View Project
                  </button>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-500 -z-10"></div>
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
        .text-3d-light {
          text-shadow: 0 2px 5px rgba(0,0,0,0.3);
        }

        /* In-view animation for cards */
        .portfolio-card.in-view {
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

export default Portfolio;