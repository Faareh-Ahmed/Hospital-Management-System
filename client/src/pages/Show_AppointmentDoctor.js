import React from 'react'
import SideNavbar from '../components/SideNavbar'
import { IoMdStopwatch } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import NavbarDomain from '../components/NavbarDomain';
export default function Show_AppointmentDoctor() {

    const doctorMenus = [
        { name: "Show Appointments", link: '/doctor/show-appointment', icon: IoMdStopwatch },
        { name: "Patients", link: '/', icon: IoMdSchool },
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
