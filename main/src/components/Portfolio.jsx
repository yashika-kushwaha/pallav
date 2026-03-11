import React, { useState, useEffect, useRef } from 'react';
import { FiEye, FiX } from 'react-icons/fi';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const sectionRef = useRef(null);

  // Sample portfolio categories (unchanged)
  const categories = [
    {
      id: 1,
      category: 'design',
      title: 'Brand Identity',
      mainImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      subItems: [
        { id: 101, title: 'Tech Startup Branding', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 102, title: 'Fashion Label Identity', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 103, title: 'Restaurant Rebrand', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
      ]
    },
    {
      id: 2,
      category: 'video',
      title: 'Product Promo',
      mainImage: 'https://images.unsplash.com/photo-1574717024453-354056af8391?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      subItems: [
        { id: 201, title: 'Gadget Launch Video', image: 'https://images.unsplash.com/photo-1574717024453-354056af8391?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 202, title: 'Fashion Ad', image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 203, title: 'Food Commercial', image: 'https://images.unsplash.com/photo-1578022761797-b8636ac1773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
      ]
    },
    {
      id: 3,
      category: 'design',
      title: 'Packaging Design',
      mainImage: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      subItems: [
        { id: 301, title: 'Eco-friendly Boxes', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 302, title: 'Luxury Perfume', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
      ]
    },
    {
      id: 4,
      category: 'video',
      title: 'Motion Graphics',
      mainImage: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      subItems: [
        { id: 401, title: 'Animated Logo', image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 402, title: 'Explainer Video', image: 'https://images.unsplash.com/photo-1574717024453-354056af8391?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
      ]
    },
    {
      id: 5,
      category: 'design',
      title: 'UI/UX Design',
      mainImage: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      subItems: [
        { id: 501, title: 'Mobile App', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 502, title: 'Dashboard Design', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
      ]
    },
    {
      id: 6,
      category: 'video',
      title: 'Commercial Edit',
      mainImage: 'https://images.unsplash.com/photo-1578022761797-b8636ac1773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      subItems: [
        { id: 601, title: 'Car Commercial', image: 'https://images.unsplash.com/photo-1578022761797-b8636ac1773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 602, title: 'Travel Vlog Edit', image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
      ]
    },
  ];

  const filteredCategories = filter === 'all' ? categories : categories.filter(cat => cat.category === filter);

  // Intersection Observer
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
  }, [filter]);

  const closeModal = () => setSelectedCategory(null);

  return (
    <section id="portfolio" ref={sectionRef} className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 transform-style-preserve-3d opacity-20 pointer-events-none">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,transparent_1px),linear-gradient(90deg,transparent_1px,transparent_1px)] bg-[length:80px_80px] bg-center"></div>

        {/* Existing cubes */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/10 border border-white/5 rounded-lg transform rotate-45 translate-z-[-400px] animate-cube-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-indigo-500/10 border border-white/5 rounded-lg transform rotate-12 translate-z-[-600px] animate-cube-float-slow"></div>

        {/* Additional spinning cubes */}
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-pink-500/10 border border-white/5 rounded-lg transform rotate-90 translate-z-[-500px] animate-cube-spin-medium"></div>
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-blue-500/10 border border-white/5 rounded-lg transform -rotate-12 translate-z-[-700px] animate-cube-spin-reverse"></div>
        <div className="absolute top-2/3 right-1/2 w-20 h-20 bg-purple-400/10 border border-white/5 rounded-lg transform rotate-45 translate-z-[-300px] animate-cube-spin-slow"></div>

        {/* Floating rings (torus-like) */}
        <div className="absolute top-40 left-1/3 w-48 h-48 border-4 border-purple-400/20 rounded-full transform rotate-x-45 rotate-y-30 translate-z-[-450px] animate-ring-rotate"></div>
        <div className="absolute bottom-32 right-1/4 w-64 h-64 border-4 border-indigo-400/20 rounded-full transform rotate-x-30 rotate-y-60 translate-z-[-550px] animate-ring-float"></div>
        <div className="absolute top-60 right-20 w-36 h-36 border-2 border-pink-400/20 rounded-full transform rotate-x-60 rotate-y-15 translate-z-[-350px] animate-ring-spin"></div>

        {/* Abstract stretched shapes */}
        <div className="absolute top-10 right-1/3 w-40 h-20 bg-purple-500/10 border border-white/5 transform rotate-45 skew-x-12 translate-z-[-650px] animate-shape-float"></div>
        <div className="absolute bottom-40 left-20 w-56 h-28 bg-indigo-500/10 border border-white/5 transform -rotate-12 skew-y-6 translate-z-[-480px] animate-shape-spin"></div>

        {/* Particle layers - increased count */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`particle1-${i}`}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translateZ(${Math.random() * -900}px)`,
              animation: `particle-float-slow ${15 + Math.random() * 20}s infinite alternate`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle2-${i}`}
            className="absolute w-1.5 h-1.5 bg-purple-300/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translateZ(${Math.random() * -1100}px)`,
              animation: `particle-float-medium ${12 + Math.random() * 15}s infinite alternate`,
              animationDelay: `${Math.random() * 4}s`,
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
          {filteredCategories.map((category, index) => (
            <div
              key={category.id}
              className="portfolio-card opacity-0 translate-y-10 transition-all duration-700 cursor-pointer"
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedCategory(category)}
            >
              <div className="group relative rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.mainImage}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                  <p className="text-purple-300 text-sm mb-3 capitalize">{category.category}</p>
                  <button className="flex items-center text-white bg-purple-600/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm hover:bg-purple-700 transition-colors">
                    <FiEye className="mr-2" /> View Projects ({category.subItems.length})
                  </button>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCategory && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-indigo-900 rounded-2xl border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <FiX size={24} />
            </button>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-2">{selectedCategory.title}</h3>
              <p className="text-purple-300 mb-6 capitalize">{selectedCategory.category} • {selectedCategory.subItems.length} projects</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCategory.subItems.map((sub) => (
                  <div key={sub.id} className="group rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                    <div className="h-48 overflow-hidden">
                      <img src={sub.image} alt={sub.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-white font-semibold">{sub.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .translate-z-\[-400px\] {
          transform: translateZ(-400px);
        }
        .translate-z-\[-600px\] {
          transform: translateZ(-600px);
        }
        .translate-z-\[-300px\] {
          transform: translateZ(-300px);
        }
        .translate-z-\[-500px\] {
          transform: translateZ(-500px);
        }
        .translate-z-\[-700px\] {
          transform: translateZ(-700px);
        }
        .translate-z-\[-450px\] {
          transform: translateZ(-450px);
        }
        .translate-z-\[-550px\] {
          transform: translateZ(-550px);
        }
        .translate-z-\[-350px\] {
          transform: translateZ(-350px);
        }
        .translate-z-\[-650px\] {
          transform: translateZ(-650px);
        }
        .translate-z-\[-480px\] {
          transform: translateZ(-480px);
        }
        .rotate-x-45 {
          transform: rotateX(45deg);
        }
        .rotate-y-30 {
          transform: rotateY(30deg);
        }
        .rotate-x-30 {
          transform: rotateX(30deg);
        }
        .rotate-y-60 {
          transform: rotateY(60deg);
        }
        .rotate-x-60 {
          transform: rotateX(60deg);
        }
        .rotate-y-15 {
          transform: rotateY(15deg);
        }
        .text-3d-light {
          text-shadow: 0 2px 5px rgba(0,0,0,0.3);
        }

        /* In-view animation for cards */
        .portfolio-card.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        /* Cube animations */
        @keyframes cube-spin-slow {
          0% { transform: rotateX(0deg) rotateY(0deg) translateZ(-400px); }
          100% { transform: rotateX(360deg) rotateY(360deg) translateZ(-400px); }
        }
        .animate-cube-spin-slow {
          animation: cube-spin-slow 30s infinite linear;
        }

        @keyframes cube-spin-medium {
          0% { transform: rotateX(0deg) rotateY(0deg) translateZ(-500px); }
          100% { transform: rotateX(360deg) rotateY(360deg) translateZ(-500px); }
        }
        .animate-cube-spin-medium {
          animation: cube-spin-medium 20s infinite linear;
        }

        @keyframes cube-spin-reverse {
          0% { transform: rotateX(0deg) rotateY(0deg) translateZ(-700px); }
          100% { transform: rotateX(-360deg) rotateY(-360deg) translateZ(-700px); }
        }
        .animate-cube-spin-reverse {
          animation: cube-spin-reverse 25s infinite linear;
        }

        @keyframes cube-float-slow {
          0% { transform: rotateX(0deg) rotateY(0deg) translateZ(-600px) translateY(0); }
          50% { transform: rotateX(180deg) rotateY(180deg) translateZ(-600px) translateY(-40px); }
          100% { transform: rotateX(360deg) rotateY(360deg) translateZ(-600px) translateY(0); }
        }
        .animate-cube-float-slow {
          animation: cube-float-slow 35s infinite ease-in-out;
        }

        /* Ring animations */
        @keyframes ring-rotate {
          0% { transform: rotateX(45deg) rotateY(30deg) rotateZ(0deg) translateZ(-450px); }
          100% { transform: rotateX(45deg) rotateY(30deg) rotateZ(360deg) translateZ(-450px); }
        }
        .animate-ring-rotate {
          animation: ring-rotate 40s infinite linear;
        }

        @keyframes ring-float {
          0% { transform: rotateX(30deg) rotateY(60deg) translateZ(-550px) translateY(0); }
          50% { transform: rotateX(30deg) rotateY(60deg) translateZ(-550px) translateY(-30px); }
          100% { transform: rotateX(30deg) rotateY(60deg) translateZ(-550px) translateY(0); }
        }
        .animate-ring-float {
          animation: ring-float 30s infinite ease-in-out;
        }

        @keyframes ring-spin {
          0% { transform: rotateX(60deg) rotateY(15deg) rotateZ(0deg) translateZ(-350px); }
          100% { transform: rotateX(60deg) rotateY(15deg) rotateZ(360deg) translateZ(-350px); }
        }
        .animate-ring-spin {
          animation: ring-spin 35s infinite linear;
        }

        /* Abstract shape animations */
        @keyframes shape-float {
          0% { transform: rotate(45deg) skewX(12deg) translateZ(-650px) translateY(0); }
          50% { transform: rotate(45deg) skewX(12deg) translateZ(-650px) translateY(-30px); }
          100% { transform: rotate(45deg) skewX(12deg) translateZ(-650px) translateY(0); }
        }
        .animate-shape-float {
          animation: shape-float 25s infinite ease-in-out;
        }

        @keyframes shape-spin {
          0% { transform: rotate(-12deg) skewY(6deg) translateZ(-480px) rotate(0deg); }
          100% { transform: rotate(-12deg) skewY(6deg) translateZ(-480px) rotate(360deg); }
        }
        .animate-shape-spin {
          animation: shape-spin 30s infinite linear;
        }

        /* Particle animations */
        @keyframes particle-float-slow {
          0% { transform: translateZ(-800px) translateY(0) translateX(0); }
          100% { transform: translateZ(-200px) translateY(-50px) translateX(30px); }
        }

        @keyframes particle-float-medium {
          0% { transform: translateZ(-1000px) translateY(0) translateX(0); }
          100% { transform: translateZ(-300px) translateY(-80px) translateX(-40px); }
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