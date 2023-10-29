import React from 'react'
import SideNavbar from '../components/SideNavbar'
import { IoMdStar } from 'react-icons/io';
import { IoMdSubway } from 'react-icons/io';
import NavbarDomain from '../components/NavbarDomain';
import Form from '../components/Form'
export default function AdminPage() {

    const AdminMenus = [
        { name: "Rooms", link: '/', icon: IoMdStar },
        { name: "Employee", link: '/', icon: IoMdSubway },
    ];

    const AdminFields = [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "bloodGroup", label: "Blood Group", type: "text", required: true },
        { name: "contactNumber", label: "Contact Number", type: "tel", required: true, pattern: "[0-9]*" },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "gender", label: "Gender", type: "select", options: ["", "Male", "Female", "Other"] },
        { name: "cnic", label: "CNIC", type: "text", required: true },
        { name: "age", label: "Age", type: "number", required: true, min: 0 },
      ];

    return (
        <>
            <div className='flex gap-4'>

                <SideNavbar menus={AdminMenus} />

                <div className='flex flex-col w-full'>
                    <NavbarDomain />

                    <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
                        <Form fields={AdminFields}/>
                    </div>

                </div>

            </div>
        </>)
}
