import React from 'react'
import { IoMdShirt } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import SideNavbar from '../../components/SideNavbar'
import NavbarDomain from '../../components/NavbarDomain';
export default function Show_BillingPatient() {

    const patientMenus = [
        { name: "History", link: '/patient/show-history', icon: IoMdShirt },
        { name: "Billing History", link: '/patient/show-billing', icon: IoMdSchool },
    ];


    return (
        <>
            <div className='flex gap-4'>

                <SideNavbar menus={patientMenus} />
                <div className='flex flex-col w-full'>
                    <NavbarDomain />

                    <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
                        {/* <Form fields={PatientFields}/> */}
                        SHow Billing History
                    </div>

                </div>

            </div>
        </>)
}
