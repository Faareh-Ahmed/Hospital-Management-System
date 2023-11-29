import React from 'react'
import SideNavbar from '../components/SideNavbar'
import { IoMdStar } from 'react-icons/io';
import { IoMdSubway } from 'react-icons/io';
import NavbarDomain from '../components/NavbarDomain';

export default function Show_Staff() {

    const AdminMenus = [
        { name: "Add Doctor", link: '/admin/add-doctor', icon: IoMdStar },
        { name: "Show Staff", link: '/admin/show-staff', icon: IoMdSubway },
    ];


    return (
        <>
            <div className='flex gap-4'>
                <SideNavbar menus={AdminMenus} />
                <div className='flex flex-col w-full'>
                    <NavbarDomain />

                    <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
                        {/* <Form fields={EmployeeFields} /> */}
                        Show Staff
                    </div>

                </div>

            </div>
        </>)
}
