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

    return (
        <>
            <div className='flex gap-4'>

                <SideNavbar menus={AdminMenus} />

                <div className='flex flex-col w-full'>
                    <NavbarDomain />

                    <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
                        <Form />
                    </div>

                </div>

            </div>
        </>)
}
