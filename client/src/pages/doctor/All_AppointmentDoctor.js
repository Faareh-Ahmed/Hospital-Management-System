import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import { IoMdStopwatch } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import NavbarDomain from '../../components/NavbarDomain';
export default function All_AppointmentDoctor() {

    const doctorMenus = [
        { name: "Info", link: '/doctor/info', icon: IoMdSchool },
        { name: "History", link: '/doctor/history', icon: IoMdStopwatch },
        { name: "Upcoming Appointments", link: '/doctor/upcoming-appointment', icon: IoMdSchool },
        { name: "All Appointments", link: '/doctor/all-appointment', icon: IoMdSchool },
    ];


    return (
        <>
            <div className='flex gap-4'>
                <SideNavbar menus={doctorMenus} />
                <div className='flex flex-col w-full'>
                    <NavbarDomain />

                    <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
                        {/* <Form fields={EmployeeFields} /> */}
                        Show Appointment for doctor
                    </div>

                </div>

            </div>
        </>)
}
