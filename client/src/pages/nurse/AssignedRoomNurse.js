import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import { IoMdStopwatch } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import NavbarDomain from '../../components/NavbarDomain';

export default function AssignedRoomNurse() {

    const nurseMenus = [
        { name: "Info", link: "/nurse/info", icon: IoMdSchool },
        { name: "Assigned Rooms", link: "/nurse/assigned-room", icon: IoMdStopwatch },
       
      ];

    return (

        <>
            <div className='flex gap-4'>
                <SideNavbar menus={nurseMenus} />
                <div className='flex flex-col w-full'>
                    <NavbarDomain role='nurse' />

                    <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
                        Assigned Rooms
                    </div>

                </div>

            </div>
        </>
    )
}






