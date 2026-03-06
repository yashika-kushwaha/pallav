import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-purple-200">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Pallav</h1>
      <p className="text-xl mb-6 text-center">Creative Graphic Designer | Logo & Branding Expert</p>
      <a href="#portfolio" className="px-6 py-3 bg-purple-500 text-white rounded">View Portfolio</a>
    </section>
  )
}

export default Hero