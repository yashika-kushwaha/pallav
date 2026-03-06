import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="border p-3 rounded"/>
          <input type="email" placeholder="Email" className="border p-3 rounded"/>
          <textarea placeholder="Message" className="border p-3 rounded"></textarea>
          <button type="submit" className="bg-purple-500 text-white px-6 py-3 rounded font-semibold hover:bg-purple-600 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact