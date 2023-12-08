import React, { useState, useEffect } from 'react';
import SideNavbar from '../../components/SideNavbar';
import { IoMdStar } from 'react-icons/io';
import { IoMdSubway } from 'react-icons/io';
import NavbarDomain from '../../components/NavbarDomain';

export default function HistoryAdmin() {
    const [historyData, setHistoryData] = useState([]);

    const AdminMenus = [
        { name: "Info", link: '/admin/info', icon: IoMdSubway },
        { name: "Add Doctor", link: '/admin/add-doctor', icon: IoMdStar },
        { name: "Show Staff", link: '/admin/show-staff', icon: IoMdSubway },
        { name: "Add Nurses", link: '/admin/add-nurse', icon: IoMdSubway },
        { name: "Add Employees", link: '/admin/add-employee', icon: IoMdSubway },
        { name: "History", link: '/admin/history', icon: IoMdSubway },
    ];

    useEffect(() => {
        // Fetch data from the backend API '/admin/show-history'
        fetch('/admin/show-history')
            .then(response => response.json())
            .then(data => setHistoryData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <div className='flex gap-4'>
                <SideNavbar menus={AdminMenus} />
                <div className='flex flex-col w-full'>
                    <NavbarDomain role='admin' />

                    <div className='text-xl text-gray-900 font-semibold w-full'>
                        History Admin
                    </div>

                    <div>
                        <table className="border-collapse border w-full">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border py-2 px-4">ID</th>
                                    <th className="border py-2 px-4">Patient Name</th>
                                    <th className="border py-2 px-4">Doctor Name</th>
                                    <th className="border py-2 px-4">License Number</th>
                                    <th className="border py-2 px-4">Visit Type</th>
                                    <th className="border py-2 px-4">Symptoms</th>
                                    <th className="border py-2 px-4">Prescriptions</th>
                                    <th className="border py-2 px-4">Visit Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {historyData.map((record,index) => (
                                    <tr key={record.idVisit} className="hover:bg-gray-100">
                                        <td className="border py-2 px-4">{index+1}</td>
                                        <td className="border py-2 px-4">{record.PatientName}</td>
                                        <td className="border py-2 px-4">{record.DoctorName}</td>
                                        <td className="border py-2 px-4">{record.LicenseNumber}</td>
                                        <td className="border py-2 px-4">{record.VisitType}</td>
                                        <td className="border py-2 px-4">{record.Symptoms}</td>
                                        <td className="border py-2 px-4">{record.Prescriptions}</td>
                                        <td className="border py-2 px-4">{record.VisitDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
