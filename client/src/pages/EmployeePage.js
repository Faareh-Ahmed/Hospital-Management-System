import React from 'react'
import SideNavbar from '../components/SideNavbar'
import { IoMdStopwatch } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
export default function EmployeePage() {

    const employeeMenus = [
        { name: "Shifts", link: '/', icon: IoMdStopwatch },
        { name: "Schedules", link: '/', icon: IoMdSchool },
    ];

  return (
    <>
    <SideNavbar menus={employeeMenus} />
</>  )
}
