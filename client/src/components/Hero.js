import React from 'react'
// import Hero2 from '../images/hero2.jpg'
import Hero1 from '../images/hero1.png'
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Hero() {

  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <>
      <div className="relative bg-blue-600 overflow-hidden">
        {/* Full-width image */}
        <img
          src={Hero1} 
          alt="Hero Background"
          className="absolute h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-container flex flex-col items-center justify-center h-screen text-white">
          <h1 className="text-4xl font-semibold mb-4">Hospital Management System</h1>

          <button className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md w-1/4"
            onClick={() => navigate('/domain')} // Navigate to the Login page
          >
            <span className="w-full h-full bg-gradient-to-br from-[#6C63FF] via-[#7952E6] to-[#9C56D2] group-hover:from-[#9C56D2] group-hover:via-[#7952E6] group-hover:to-[#6C63FF] absolute"></span>
            <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400 w-full">
              <span className="relative text-white"
              >MEDICARE HMS</span>
            </span>
          </button>

        </div>
      </div>
    </>
  )
}
