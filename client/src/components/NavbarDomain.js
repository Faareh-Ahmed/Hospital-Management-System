import React from 'react'


export default function NavbarDomain() {
    return (
        <>
            <div className='w-full  bg-black text-white py-3 grid'>
                <ul className='flex justify-center items-center gap-16 max-lg:hidden'>
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
                            className="bg-blue-600 text-white hover:bg-blue-300 hover:text-blue-600 py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 ">
                            Login
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}
