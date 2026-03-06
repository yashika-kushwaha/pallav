import React from 'react'

const Services = () => {
  return (
    <section id="services" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container mx-auto text-center">
        <div className="p-6 border rounded-lg">Logo Design</div>
        <div className="p-6 border rounded-lg">Poster & Banner</div>
        <div className="p-6 border rounded-lg">Social Media Design</div>
        <div className="p-6 border rounded-lg">Brand Identity</div>
        <div className="p-6 border rounded-lg">UI Design</div>
        <div className="p-6 border rounded-lg">Illustration</div>
      </div>
    </section>
  )
}

export default Services