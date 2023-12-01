
import { useState,useEffect } from 'react';
import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import { IoMdStopwatch } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import NavbarDomain from '../../components/NavbarDomain';
export default function InfoDoctor() {

    const doctorMenus = [
        { name: "History", link: '/doctor/history', icon: IoMdStopwatch },
        { name: "Upcoming Appointments", link: '/doctor/upcoming-appointment', icon: IoMdSchool },
        { name: "All Appointments", link: '/doctor/all-appointment', icon: IoMdSchool },
        { name: "Info", link: '/doctor/info', icon: IoMdSchool },
    ];

    const [doctorInfo, setDoctorInfo] = useState(null);

    useEffect(() => {
        // Fetch doctor info from the database
        const fetchDoctorInfo = async () => {
            try {
                const response = await fetch('YOUR_API_ENDPOINT'); // Replace with your actual API endpoint
                const data = await response.json();

                // Assuming the response structure is an object with doctor information
                setDoctorInfo(data);
            } catch (error) {
                console.error('Error fetching Admin info:', error);
            }
        };

        fetchDoctorInfo();
    }, []); // The empty dependency array ensures this effect runs once when the component mounts

    const renderDoctorInfo = () => {
        if (!doctorInfo) {
            return <p>Loading...</p>;
        }

        // Render Patient information here using doctorInfo object

        return (
            <div className='admin-card p-8 border rounded shadow w-full h-full'>
                <div className='grid text-xl font-semibold mb-4 justify-items-center'>Patient Information</div>
                <div className='flex-col p-8 bg-slate-500'>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold pt-4 pb-4'>FirstName:</span> {doctorInfo.firstname}
                    </div>

                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>LastName:</span> {doctorInfo.lastname}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Email:</span> {doctorInfo.email}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>CNIC:</span> {doctorInfo.cnic}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Contact:</span> {doctorInfo.contact}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Lisence Number:</span> {doctorInfo.lisence}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Specialization:</span> {doctorInfo.specialization}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Experience:</span> {doctorInfo.specialization}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Salary:</span> {doctorInfo.salary}
                    </div>
                </div>


            </div>

        );
    };


    return (
        <>
            <div className='flex gap-4'>
                <SideNavbar menus={doctorMenus} />
                <div className='flex flex-col w-full'>
                    <NavbarDomain />

                    <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
                        {/* <Form fields={EmployeeFields} /> */}
                        Doctor Info
                        {renderDoctorInfo()}
                    </div>

                </div>

            </div>
        </>)
}
