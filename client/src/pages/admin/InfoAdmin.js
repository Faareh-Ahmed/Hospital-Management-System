

import { useState, useEffect } from 'react';
import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import { IoMdStar } from 'react-icons/io';
import { IoMdSubway } from 'react-icons/io';
import NavbarDomain from '../../components/NavbarDomain';

export default function InfoAdmin() {

    const AdminMenus = [
        { name: "Add Doctor", link: '/admin/add-doctor', icon: IoMdStar },
        { name: "Show Staff", link: '/admin/show-staff', icon: IoMdSubway },
        { name: "Add Nurses", link: '/admin/add-nurse', icon: IoMdSubway },
        { name: "Add Employees", link: '/admin/add-employee', icon: IoMdSubway },
        { name: "Add Rooms", link: '/admin/add-room', icon: IoMdSubway },
        { name: "Info", link: '/admin/info', icon: IoMdSubway },
        { name: "History", link: '/admin/history', icon: IoMdSubway },
    ];

    const [adminInfo, setAdminInfo] = useState(null);

    useEffect(() => {
        // Fetch doctor info from the database
        const fetchAdminInfo = async () => {
            try {
                const response = await fetch('YOUR_API_ENDPOINT'); // Replace with your actual API endpoint
                const data = await response.json();

                // Assuming the response structure is an object with doctor information
                setAdminInfo(data);
            } catch (error) {
                console.error('Error fetching Admin info:', error);
            }
        };

        fetchAdminInfo();
    }, []); // The empty dependency array ensures this effect runs once when the component mounts

    const renderAdminInfo = () => {
        if (!adminInfo) {
            return <p>Loading...</p>;
        }

        // Render doctor information here using doctorInfo object

        return (
            <div className='admin-card p-8 border rounded shadow w-full h-full'>
                <div className='grid text-xl font-semibold mb-4 justify-items-center'>Admin Information</div>
                <div className='flex-col p-8 bg-slate-500'>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold pt-4 pb-4'>FirstName:</span> {adminInfo.firstname}
                    </div>

                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>LastName:</span> {adminInfo.lastname}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Email:</span> {adminInfo.email}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>CNIC:</span> {adminInfo.cnic}
                    </div>
                    <div className='p-4 bg-orange-400'>
                        <span className='font-semibold'>Contact:</span> {adminInfo.contact}
                    </div>
                </div>


            </div>

        );
    };



    return (
        <>
            <div className='flex gap-4'>
                <SideNavbar menus={AdminMenus} />
                <div className='flex flex-col w-full'>
                    <NavbarDomain />

                    <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
                        Info Admin
                        {renderAdminInfo()}

                    </div>

                </div>

            </div>
        </>)
}

