import React, { useEffect, useRef } from 'react';

const About = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    'Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects',
    'Figma', 'Blender', 'Lightroom', 'InDesign'
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 transform-style-preserve-3d opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,transparent_1px),linear-gradient(90deg,transparent_1px,transparent_1px)] bg-[length:80px_80px] bg-center"></div>
        <div className="absolute top-40 left-20 w-48 h-48 bg-purple-500/10 border border-white/5 rounded-lg transform rotate-45 translate-z-[-300px] animate-cube-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-indigo-500/10 border border-white/5 rounded-lg transform rotate-12 translate-z-[-500px] animate-cube-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-white/5 rounded-full transform rotate-x-45 rotate-y-30 translate-z-[-200px] animate-ring-rotate-slow"></div>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translateZ(${Math.random() * -600}px)`,
              animation: `particle-float-slow ${8 + Math.random() * 12}s infinite alternate`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-3d-light">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Get to know the person behind the designs.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio & Stats */}
          <div className="space-y-8 animate-on-scroll opacity-0 translate-x-[-30px] transition-all duration-700 delay-200">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Hi, I'm Pallav</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                A passionate Graphic Designer and Video Editor with over 5 years of experience in creating stunning visuals and engaging video content. I specialize in brand identity, motion graphics, and post-production, helping businesses tell their stories through design.
              </p>
              <p className="text-white/70 leading-relaxed">
                My approach combines creativity with strategic thinking to deliver work that not only looks beautiful but also achieves real results.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-300">5+</div>
                  <div className="text-white/60 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-300">200+</div>
                  <div className="text-white/60 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-300">50+</div>
                  <div className="text-white/60 text-sm">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Fun Fact / Quote */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
              <p className="text-white/80 italic">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
              <p className="text-white/40 mt-2">— Steve Jobs</p>
            </div>
          </div>

          {/* Right Column - Skills Cloud */}
          <div className="animate-on-scroll opacity-0 translate-x-[30px] transition-all duration-700 delay-400">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Skills & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white/90 rounded-full text-sm border border-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative 3D Element */}
              <div className="relative h-40 mt-8 flex justify-center">
                <div className="absolute w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="relative w-24 h-24 border-4 border-purple-400/30 rounded-full animate-ring-spin"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-\[3000px\] {
          perspective: 3000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .translate-z-\[-300px\] {
          transform: translateZ(-300px);
        }
        .translate-z-\[-500px\] {
          transform: translateZ(-500px);
        }
        .translate-z-\[-200px\] {
          transform: translateZ(-200px);
        }
        .text-3d-light {
          text-shadow: 0 2px 5px rgba(0,0,0,0.3);
        }

        /* Scroll animations */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .animate-on-scroll.in-view {
          opacity: 1;
          transform: translateY(0) translateX(0);
        }

        /* Background animations */
        @keyframes cube-spin-slow {
          0% { transform: rotateX(0deg) rotateY(0deg) translateZ(-300px); }
          100% { transform: rotateX(360deg) rotateY(360deg) translateZ(-300px); }
        }
        .animate-cube-spin-slow {
          animation: cube-spin-slow 30s infinite linear;
        }

        @keyframes cube-float-slow {
          0% { transform: rotateX(0deg) rotateY(0deg) translateZ(-500px) translateY(0); }
          50% { transform: rotateX(180deg) rotateY(180deg) translateZ(-500px) translateY(-40px); }
          100% { transform: rotateX(360deg) rotateY(360deg) translateZ(-500px) translateY(0); }
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
          0% { transform: translateZ(-600px) translateY(0); }
          100% { transform: translateZ(-200px) translateY(-50px); }
        }

        @keyframes ring-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-ring-spin {
          animation: ring-spin 10s infinite linear;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default About;