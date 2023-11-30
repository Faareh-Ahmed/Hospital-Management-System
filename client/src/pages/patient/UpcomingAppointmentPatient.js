




import React from 'react'
import { IoMdShirt } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import SideNavbar from '../../components/SideNavbar'
import NavbarDomain from '../../components/NavbarDomain';

export default function UpcomingAppointmentPatient()  {

    const patientMenus = [
        { name: "History", link: '/patient/show-history', icon: IoMdShirt },
        { name: "Upcoming Appointments", link: '/patient/upcoming-appointment', icon: IoMdSchool },
        { name: "Doctor Assigned", link: '/patient/doctor-assigned', icon: IoMdSchool },
        { name: "Info", link: '/patient/info', icon: IoMdSchool },
      ];


  return (
<>
      <div className='flex gap-4'>

        <SideNavbar menus={patientMenus} />
        <div className='flex flex-col w-full'>
          <NavbarDomain />

          <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
            {/* <Form fields={PatientFields}/> */}
            upcoming Appointment Patient
          </div>

        </div>

      </div>
</>  )
}
