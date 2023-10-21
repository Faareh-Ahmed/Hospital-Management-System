import React from 'react'
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Lottie1 from '../lotties/lottie1.json'
import Lottie from 'lottie-react';
import hamburger from '../icons/hamburger.svg'
export default function Nav() {

  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <>
      <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className=' flex justify-between items-center max-container'>


          <div className='w-1/12 h-1/6 '>
            <Lottie
              onClick={() => navigate('/')} // Navigate to the Login page
              className='hover:cursor-pointer'
              animationData={Lottie1} />
          </div>

          <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            <li>
              <button className="bg-blue-600 text-white hover:bg-blue-300 hover:text-blue-600 py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                Home
              </button>
            </li>
            <li>
              <button className="bg-blue-600 text-white hover:bg-blue-300 hover:text-blue-600 py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                Description
              </button>
            </li>

            <li>
              <button className="bg-blue-600 text-white hover:bg-blue-300 hover:text-blue-600 py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                Contact Us
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/login')} // Navigate to the Login page
                className="bg-blue-600 text-white hover:bg-blue-300 hover:text-blue-600 py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 ">
                Login
              </button>
            </li>

          </ul>
          <div className='hidden max-lg:block'>
            <img src={hamburger} alt='hamburger' height={35} width={35} />
          </div>


        </nav>
      </header>
    </>
  )
}
