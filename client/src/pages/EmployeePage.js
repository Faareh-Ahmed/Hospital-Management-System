import React from 'react'
import SideNavbar from '../components/SideNavbar'
import { IoMdStopwatch } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import NavbarDomain from '../components/NavbarDomain';
import Form from '../components/Form'

export default function EmployeePage() {

  const employeeMenus = [
    { name: "Add Appointment", link: '/employee/add-appointment', icon: IoMdStopwatch },
    { name: "Show Appointments", link: '/employee/show-appointment', icon: IoMdSchool },
    { name: "Show Rooms", link: '/employee/show-room', icon: IoMdSchool },
  ];

  const EmployeeFields = [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "contactNumber", label: "Contact Number", type: "tel", required: true, pattern: "[0-9]*" },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "cnic", label: "CNIC", type: "text", required: true },
  ];


  return (
    <>
      <div className='flex gap-4'>

        <SideNavbar menus={employeeMenus} />
        <div className='flex flex-col w-full'>
          <NavbarDomain />

          <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
            <Form fields={EmployeeFields}/>
          </div>

        </div>

      </div>
    </>)
}
