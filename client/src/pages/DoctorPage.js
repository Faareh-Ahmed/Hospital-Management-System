import React from 'react'
import SideNavbar from '../components/SideNavbar'
import Form from '../components/Form'
import { IoMdStopwatch } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';

export default function DoctorPage() {

    const doctorMenus = [
        { name: "Appointments", link: '/', icon: IoMdStopwatch },
        { name: "Patients", link: '/', icon: IoMdSchool },
    ];

    return (
        <>
            <SideNavbar menus={doctorMenus} />
        </>

    )
}
