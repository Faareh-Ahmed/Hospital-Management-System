import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
    <div className="container  grid grid-cols-1 md:grid-cols-3 gap-4 ml-4">

      <div className="footer-column">
        <h4 className="text-lg font-semibold">Links</h4>
        <ul className="mt-2 space-y-2">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#services" className="hover:text-gray-400">About</a></li>
          <li><a href="#about" className="hover:text-gray-400">Description</a></li>
          <li><a href="#about" className="hover:text-gray-400">Contributors</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4 className="text-lg font-semibold">Contact Details</h4>
        <p className="mt-2">Phone: +92-123-456789</p>
        <p>Email: hms@gmail.com</p>
        <p>Address: SEECS NUST, Islamabad, Pakistan</p>
      </div>
 
      <div className="footer-column">
        <p className="text-lg font-semibold">&copy;HospitalManagementSystem. All rights reserved</p>
      </div>
    </div>
  </footer> 
   )
}
