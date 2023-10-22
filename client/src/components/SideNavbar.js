import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoIosBed } from 'react-icons/io';
import { IoMdStopwatch } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import { IoMdShirt } from 'react-icons/io';
import { IoMdStar } from 'react-icons/io';
import { IoMdSubway } from 'react-icons/io';
import Form from '../components/Form'
import { Link } from 'react-router-dom';

export default function SideNavbar({ menus }) {
    

    const [open, setOpen] = useState(true);

    return (
        <div className='flex gap-4'>
            {/* Sidebar */}
            <div className={`min-h-screen ${open ? "w-72" : "w-16"} text-white bg-black px-4 duration-700`}>
                <div className='py-3 flex justify-start'>
                    <HiMenu size={26} className='cursor-pointer' onClick={() => setOpen(!open)} />
                </div>

                <div className='mt-4 flex flex-col gap-4 relative'>
                    {menus?.map((menu, i) => (
                        <Link to={menu?.link} key={i} className='flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-white text-white hover:text-black rounded-md'>
                            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                            <h2
                                style={{
                                    transition: `${i + 3}00ms`,
                                }}
                                className={`duration-700 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>



            <div className='flex flex-col w-full'>

                {/* Navbar */}
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


                {/* Content */}
                <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
                    <Form/>
                </div>


            </div>


        </div>
    );
}
