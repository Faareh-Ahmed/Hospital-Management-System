import React from 'react'
// import Hero2 from '../images/hero2.jpg'
import Hero1 from '../images/hero1.png'

export default function Hero() {
  return (
    <>
    <div className="relative bg-blue-600 overflow-hidden">
      {/* Full-width image */}
      <img
        src={Hero1} // Replace with your image URL
        alt="Hero Background"
        className="absolute h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-container flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-4xl font-semibold mb-4">Hospital Management System</h1>
        <p className="text-lg mb-8">Presenting Innovation to Existing Hospitals</p>
        
      </div>
    </div>
    </>
  )
}
