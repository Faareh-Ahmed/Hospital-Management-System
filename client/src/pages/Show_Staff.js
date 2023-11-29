import React from 'react'
import SideNavbar from '../components/SideNavbar'
import { IoMdStar } from 'react-icons/io';
import { IoMdSubway } from 'react-icons/io';
import NavbarDomain from '../components/NavbarDomain';
import { useState } from 'react';

export default function Show_Staff() {

    const AdminMenus = [
        { name: "Add Doctor", link: '/admin/add-doctor', icon: IoMdStar },
        { name: "Show Staff", link: '/admin/show-staff', icon: IoMdSubway },
        { name: "Add Nurses", link: '/admin/add-nurse', icon: IoMdSubway },
        { name: "Add Employees", link: '/admin/add-employee', icon: IoMdSubway },
        { name: "Show Rooms", link: '/admin/show-room', icon: IoMdSubway },
        { name: "Add Rooms", link: '/admin/add-room', icon: IoMdSubway },
        { name: "Info", link: '/admin/info', icon: IoMdSubway },
        { name: "History", link: '/admin/history', icon: IoMdSubway },
    ];

    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };


    return (
        <>
            <div className='flex gap-4'>
                <SideNavbar menus={AdminMenus} />
                <div className='flex flex-col w-full'>
                    <NavbarDomain />

                    <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
                        Show Staff
                        <div className='w-full p-4 justify-between flex'>
                            <button
                                className={`${activeButton === 'Doctors' ? 'bg-green-500 text-black' : 'bg-black text-green-500'}
                                 w-[150px] rounded font-medium my-6 mx-auto md:m-0 py-3`}
                                onClick={() => handleButtonClick('Doctors')}>Doctors</button>

                            <button
                                className={`${activeButton === 'Nurses' ? 'bg-green-500 text-black' : 'bg-black text-green-500'}
                                 w-[150px] rounded font-medium my-6 mx-auto md:m-0 py-3 `}
                                onClick={() => handleButtonClick('Nurses')}>Nurses</button>

                            <button
                                className={`${activeButton === 'Employees' ? 'bg-green-500 text-black' : 'bg-black text-green-500'}
                                 w-[150px] rounded font-medium my-6 mx-auto md:m-0 py-3 `}
                                onClick={() => handleButtonClick('Employees')}>Employees</button>

                            <button
                                className={`${activeButton === 'Employees' ? 'bg-green-500 text-black' : 'bg-black text-green-500'}
                                 w-[150px] rounded font-medium my-6 mx-auto md:m-0 py-3 `}
                                onClick={() => handleButtonClick('Employees')}>Rooms</button>
                        </div>
                    </div>

                </div>

            </div>
        </>)
}
