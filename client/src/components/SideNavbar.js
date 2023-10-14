import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { IoIosBed } from 'react-icons/io'
import { IoMdStopwatch } from 'react-icons/io'
import { IoMdSchool } from 'react-icons/io'
import { IoMdShirt } from 'react-icons/io'
import { IoMdStar } from 'react-icons/io'
import { IoMdSubway } from 'react-icons/io'

import { Link } from 'react-router-dom'
export default function SideNavbar() {

    const menus = [
        { name: "dashboard", link: '/', icon: IoIosBed },
        { name: "Patient", link: '/', icon: IoMdSchool },
        { name: "Rooms", link: '/', icon: IoMdShirt },
        { name: "Doctors", link: '/', icon: IoMdStopwatch },
        { name: "Payment", link: '/', icon: IoMdSubway },
        { name: "Delivery", link: '/', icon: IoMdStar },
    ];

    const [open, setOpen] = useState(true);

    return (
        <>
            <section className='flex gap-6'>
                <div className={`min-h-screen ${open ? "w-72" : "w-16"} text-white bg-black px-4 duration-700`}>

                    <div className='py-3 flex justify-end'>
                        <HiMenu size={26} className='cursor-pointer' onClick={() => setOpen(!open)} />
                    </div>

                    <div className='mt-4 flex flex-col gap-4 relative'>
                        {
                            menus?.map((menu, i) => (

                                <Link to={menu?.link} key={i} className='flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-white text-white hover:text-black rounded-md'>
                                    <div>
                                        {React.createElement(menu?.icon, { size: "20" })}
                                    </div>
                                    <h2
                                        style={{
                                            transition: `${i + 3}00ms`,
                                        }}
                                        className={`duration-700 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}
                                    </h2>
                                </Link>
                            ))
                        }

                    </div>

                </div>

                {/* here below is the area where the content is placed */}
                <div className='m-3 text-xl text-gray-900 font-semibold'>
                    Content
                </div>
            </section>
        </>

    )
}
