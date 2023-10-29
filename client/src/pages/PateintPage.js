import React from 'react'
import { IoMdShirt } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import SideNavbar from '../components/SideNavbar'
import NavbarDomain from '../components/NavbarDomain';
import Form from '../components/Form'

export default function PateintPage() {

  const patientMenus = [
    { name: "Fee", link: '/', icon: IoMdShirt },
    { name: "Prescriptions", link: '/', icon: IoMdSchool },
  ];

  return (
    <>
      <div className='flex gap-4'>

        <SideNavbar menus={patientMenus} />
        <div className='flex flex-col w-full'>
          <NavbarDomain />

          <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
            <Form />
          </div>

        </div>

      </div>
    </>
  )
}
