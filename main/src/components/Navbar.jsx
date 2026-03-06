import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed w-full bg-gray-100 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">GraphicPro</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-blue-500">Home</a>
          <a href="#portfolio" className="hover:text-blue-500">Portfolio</a>
          <a href="#services" className="hover:text-blue-500">Services</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 w-full text-center py-4 space-y-4">
          <a href="#hero" className="block hover:text-blue-500" onClick={toggleMenu}>Home</a>
          <a href="#portfolio" className="block hover:text-blue-500" onClick={toggleMenu}>Portfolio</a>
          <a href="#services" className="block hover:text-blue-500" onClick={toggleMenu}>Services</a>
          <a href="#about" className="block hover:text-blue-500" onClick={toggleMenu}>About</a>
          <a href="#contact" className="block hover:text-blue-500" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar