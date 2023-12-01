
import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import { IoMdStar } from 'react-icons/io';
import { IoMdSubway } from 'react-icons/io';
import NavbarDomain from '../../components/NavbarDomain';

export default function HistoryAdmin() {

    const AdminMenus = [
        { name: "Info", link: '/admin/info', icon: IoMdSubway },
        { name: "Add Doctor", link: '/admin/add-doctor', icon: IoMdStar },
        { name: "Show Staff", link: '/admin/show-staff', icon: IoMdSubway },
        { name: "Add Nurses", link: '/admin/add-nurse', icon: IoMdSubway },
        { name: "Add Employees", link: '/admin/add-employee', icon: IoMdSubway },
        { name: "Add Rooms", link: '/admin/add-room', icon: IoMdSubway },
        { name: "History", link: '/admin/history', icon: IoMdSubway },
    ];



    return (
        <>
            <div className='flex gap-4'>
                <SideNavbar menus={AdminMenus} />
                <div className='flex flex-col w-full'>
                    <NavbarDomain />

                    <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
                        History Admin
                        
                    </div>

                </div>

            </div>
        </>)
}
