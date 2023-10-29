import React from 'react'
import SideNavbar from '../components/SideNavbar'
import { IoMdStopwatch } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import NavbarDomain from '../components/NavbarDomain';
import Form from '../components/Form'

export default function DoctorPage() {

    const doctorMenus = [
        { name: "Appointments", link: '/', icon: IoMdStopwatch },
        { name: "Patients", link: '/', icon: IoMdSchool },
    ];

    const DoctorFields = [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "specialty", label: "Specialty", type: "text", required: true },
        { name: "contactNumber", label: "Contact Number", type: "tel", required: true, pattern: "[0-9]*" },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "gender", label: "Gender", type: "select", options: ["", "Male", "Female", "Other"] },
        { name: "cnic", label: "CNIC", type: "text", required: true },
      ];

    return (
        <>
            <div className='flex gap-4'>

                <SideNavbar menus={doctorMenus} />

                <div className='flex flex-col w-full'>
                    <NavbarDomain />

                    <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
                        <Form fields={DoctorFields}/>
                    </div>

                </div>

            </div>
        </>

    )
}
