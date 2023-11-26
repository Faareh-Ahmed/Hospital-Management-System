import React from 'react'
import SideNavbar from '../components/SideNavbar'
import { IoMdStopwatch } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import NavbarDomain from '../components/NavbarDomain';

export default function Show_Room() {

    const employeeMenus = [
        { name: "Add Appointment", link: '/add-appointment', icon: IoMdStopwatch },
        { name: "Show Appointments", link: '/show-appointment', icon: IoMdSchool },
        { name: "Show Rooms", link: '/show-room', icon: IoMdSchool },
    ];


    return (
        <>
            <div className='flex gap-4'>
                <SideNavbar menus={employeeMenus} />
                <div className='flex flex-col w-full'>
                    <NavbarDomain />

                    <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
                        {/* <Form fields={EmployeeFields} /> */}
                        Show Room
                    </div>

                </div>

            </div>
        </>
    )
}
