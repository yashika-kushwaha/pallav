import React from 'react'

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">My Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container mx-auto">
        <div className="h-48 bg-gray-300 rounded-lg flex items-center justify-center">Design 1</div>
        <div className="h-48 bg-gray-300 rounded-lg flex items-center justify-center">Design 2</div>
        <div className="h-48 bg-gray-300 rounded-lg flex items-center justify-center">Design 3</div>
        <div className="h-48 bg-gray-300 rounded-lg flex items-center justify-center">Design 4</div>
        <div className="h-48 bg-gray-300 rounded-lg flex items-center justify-center">Design 5</div>
        <div className="h-48 bg-gray-300 rounded-lg flex items-center justify-center">Design 6</div>
      </div>
    </section>
  )
}

export default Portfolio