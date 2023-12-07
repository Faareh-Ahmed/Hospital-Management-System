import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import { IoMdStopwatch } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import NavbarDomain from '../../components/NavbarDomain';
export default function InfoEmployee() {
    const location = useLocation();
    const { userInfo } = location.state || { userInfo: null };
    console.log(userInfo);
    const employeeMenus = [
        { name: "Info", link: '/employee/info', icon: IoMdSchool },
        { name: "Add Appointment", link: '/employee/add-appointment', icon: IoMdStopwatch },
        { name: "Show Appointments", link: '/employee/show-appointment', icon: IoMdSchool },
        { name: "Show Rooms", link: '/employee/show-room', icon: IoMdSchool },
        { name: "Available Doctors", link: '/employee/available-doctor', icon: IoMdSchool },
      ];

      

    const renderuserInfo = () => {
        if (!userInfo) {
            return <p>Loading...</p>;
        }

        // Render Patient information here using doctorInfo object

        return (
            <div className='admin-card p-8 border rounded shadow w-full h-full'>
                <div className='grid text-xl font-semibold mb-4 justify-items-center'>Patient Information</div>
                <div className='flex-col p-8 bg-slate-500'>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold pt-4 pb-4'>FirstName:</span> {userInfo.FirstName}
                    </div>

                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>LastName:</span> {userInfo.LastName}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Email:</span> {userInfo.Email}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>CNIC:</span> {userInfo.CNIC}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Salary:</span> {userInfo.Salary}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Shift:</span> {userInfo.Shift}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Contact:</span> {userInfo.ContactNumber}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Certificate Number:</span> {userInfo.CertificateNumber}
                    </div>
                </div>


            </div>

        );
    };




    return (
        <>
            <div className='flex gap-4'>
                <SideNavbar menus={employeeMenus} />
                <div className='flex flex-col w-full'>
                    <NavbarDomain  role ='employee'/>

                    <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
                        {/* <Form fields={EmployeeFields} /> */}
                       Employee Info
                       {renderuserInfo()}
                    </div>

                </div>

            </div> 
        </>
    )
}
