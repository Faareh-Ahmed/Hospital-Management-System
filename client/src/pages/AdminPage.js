import React from 'react'
import SideNavbar from '../components/SideNavbar'
import { IoMdStar } from 'react-icons/io';
import { IoMdSubway } from 'react-icons/io';
export default function AdminPage() {

    const AdminMenus = [
        { name: "Rooms", link: '/', icon: IoMdStar },
        { name: "Employee", link: '/', icon: IoMdSubway },
    ];

    return (
        <>
            <SideNavbar menus={AdminMenus} />
        </>)
}
