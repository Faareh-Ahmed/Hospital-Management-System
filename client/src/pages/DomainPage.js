import React from 'react'
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Hero2 from '../images/hero2.jpg'
import Lottie1 from '../lotties/lottie1.json'
import Lottie from 'lottie-react';
export default function DomainPage() {

    const navigate = useNavigate(); // Initialize the navigate function


    return (
        <>
            <div className='relative w-full h-screen bg-zinc-900/90'>
                <img className='absolute w-full h-full object-cover  mix-blend-overlay' src={Hero2} alt='Background Image of Login Page'></img>
                <div className='absolute w-1/12 h-1/12 '>
                    <Lottie
                        onClick={() => navigate('/')} // Navigate to the Login page
                        className='hover:cursor-pointer'
                        animationData={Lottie1} />
                </div>
                <div className='flex flex-col  justify-center items-center  h-full'>


                    <button className="relative inline-block px-4 py-2 font-medium group w-1/3 mt-8"
                        onClick={() => navigate('/doctor')} // Navigate to the Login page
                    >
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Doctor</span>
                    </button>

                    <button className="relative inline-block px-4 py-2 font-medium group w-1/3 mt-8"
                        onClick={() => navigate('/login')} // Navigate to the Login page
                    >
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">patient</span>
                    </button>

                    <button className="relative inline-block px-4 py-2 font-medium group w-1/3 mt-8"
                        onClick={() => navigate('/login')} // Navigate to the Login page
                    >
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Admin</span>
                    </button>

                    <button className="relative inline-block px-4 py-2 font-medium group w-1/3 mt-8"
                        onClick={() => navigate('/login')} // Navigate to the Login page
                    >
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Employee</span>
                    </button>
                </div>

            </div>
        </>
    )
}
