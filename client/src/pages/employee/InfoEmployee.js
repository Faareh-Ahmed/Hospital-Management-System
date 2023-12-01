




import { useState,useEffect } from 'react';


import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import { IoMdStopwatch } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import NavbarDomain from '../../components/NavbarDomain';
export default function InfoEmployee() {

    const employeeMenus = [
        { name: "Add Appointment", link: '/employee/add-appointment', icon: IoMdStopwatch },
        { name: "Show Appointments", link: '/employee/show-appointment', icon: IoMdSchool },
        { name: "Show Rooms", link: '/employee/show-room', icon: IoMdSchool },
        { name: "Available Doctors", link: '/employee/available-doctor', icon: IoMdSchool },
        { name: "Info", link: '/employee/info', icon: IoMdSchool },
      ];

      
    const [employeeInfo, setEmployeeInfo] = useState(null);

    useEffect(() => {
        // Fetch doctor info from the database
        const fetchEmployeeInfo = async () => {
            try {
                const response = await fetch('YOUR_API_ENDPOINT'); // Replace with your actual API endpoint
                const data = await response.json();

                // Assuming the response structure is an object with doctor information
                setEmployeeInfo(data);
            } catch (error) {
                console.error('Error fetching Admin info:', error);
            }
        };

        fetchEmployeeInfo();
    }, []); // The empty dependency array ensures this effect runs once when the component mounts

    const renderEmployeeInfo = () => {
        if (!employeeInfo) {
            return <p>Loading...</p>;
        }

        // Render Patient information here using doctorInfo object

        return (
            <div className='admin-card p-8 border rounded shadow w-full h-full'>
                <div className='grid text-xl font-semibold mb-4 justify-items-center'>Patient Information</div>
                <div className='flex-col p-8 bg-slate-500'>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold pt-4 pb-4'>FirstName:</span> {employeeInfo.firstname}
                    </div>

                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>LastName:</span> {employeeInfo.lastname}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Email:</span> {employeeInfo.email}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>CNIC:</span> {employeeInfo.cnic}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Salary:</span> {employeeInfo.salary}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Shift:</span> {employeeInfo.shift}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Contact:</span> {employeeInfo.contact}
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
                    <NavbarDomain />

                    <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
                        {/* <Form fields={EmployeeFields} /> */}
                       Employee Info
                       {renderEmployeeInfo()}
                    </div>

                </div>

            </div> 
        </>
    )
}
