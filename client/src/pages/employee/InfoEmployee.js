import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import { IoMdStopwatch } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import NavbarDomain from '../../components/NavbarDomain';
export default function InfoEmployee() {
    const staffInfo = JSON.parse(localStorage.getItem('staffInfo'));
    console.log(staffInfo);
    const employeeMenus = [
        { name: "Info", link: "/employee/info", icon: IoMdSchool },
        {
          name: "Add Appointment",
          link: "/employee/add-appointment",
          icon: IoMdStopwatch,
        },
        {
            name: "Add Patient",
            link: "/employee/add-patient",
            icon: IoMdStopwatch,
        },
        {
          name: "Show Appointments",
          link: "/employee/show-appointment",
          icon: IoMdSchool,
        },
        {
          name: "Available Doctors",
          link: "/employee/available-doctor",
          icon: IoMdSchool,
        },
        { name: "Show Patients", link: "/employee/show-patients", icon: IoMdSchool },

      ];

      

    const renderstaffInfo = () => {
        if (!staffInfo) {
            return <p>Loading...</p>;
        }

        // Render Patient information here using doctorInfo object

        return (
            <div className='admin-card p-8 border rounded shadow w-full h-full'>
                <div className='grid text-xl font-semibold mb-4 justify-items-center'>Patient Information</div>
                <div className='flex-col p-8 bg-slate-500'>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold pt-4 pb-4'>FirstName:</span> {staffInfo.FirstName}
                    </div>

                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>LastName:</span> {staffInfo.LastName}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Email:</span> {staffInfo.Email}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>CNIC:</span> {staffInfo.CNIC}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Salary:</span> {staffInfo.Salary}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Shift:</span> {staffInfo.Shift}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Contact:</span> {staffInfo.ContactNumber}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Certificate Number:</span> {staffInfo.CertificateNumber}
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
                       {renderstaffInfo()}
                    </div>

                </div>

            </div> 
        </>
    )
}
