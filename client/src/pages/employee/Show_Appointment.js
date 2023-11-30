import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import { IoMdStopwatch } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import NavbarDomain from '../../components/NavbarDomain';
export default function Show_Appointment() {

    const employeeMenus = [
        { name: "Add Appointment", link: '/employee/add-appointment', icon: IoMdStopwatch },
        { name: "Show Appointments", link: '/employee/show-appointment', icon: IoMdSchool },
        { name: "Show Rooms", link: '/employee/show-room', icon: IoMdSchool },
        { name: "Available Doctors", link: '/employee/available-doctor', icon: IoMdSchool },
        { name: "Info", link: '/employee/info', icon: IoMdSchool },
      ];


    return (
        <>
            <div className='flex gap-4'>
                <SideNavbar menus={employeeMenus} />
                <div className='flex flex-col w-full'>
                    <NavbarDomain />

                    <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
                        {/* <Form fields={EmployeeFields} /> */}
                        Show Appointment
                    </div>

                </div>

            </div> 
        </>
    )
}
