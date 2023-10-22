import React from 'react'
import { IoMdShirt } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import SideNavbar from '../components/SideNavbar'

export default function PateintPage() {

    const patientMenus = [
        { name: "Fee", link: '/', icon: IoMdShirt },
        { name: "Prescriptions", link: '/', icon: IoMdSchool },
    ];

  return (
    <>
    <SideNavbar menus={patientMenus} />
</>
  )
}
