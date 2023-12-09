import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import { IoMdStopwatch } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import NavbarDomain from '../../components/NavbarDomain';
import { useState,useEffect } from 'react';
export default function Show_Patients() {
    const [patients, setPatients] = useState([]);

    const employeeMenus = [
        { name: "Info", link: "/employee/info", icon: IoMdSchool },
        {
          name: "Add Appointment",
          link: "/employee/add-appointment",
          icon: IoMdStopwatch,
        },
        {
          name: "Show Appointments",
          link: "/employee/show-appointment",
          icon: IoMdSchool,
        },
        { name: "Show Rooms", link: "/employee/show-room", icon: IoMdSchool },
        {
          name: "Available Doctors",
          link: "/employee/available-doctor",
          icon: IoMdSchool,
        },
        { name: "Show Patients", link: "/employee/show-patients", icon: IoMdSchool },
      ];
      useEffect(() => {
        fetchPatients();
      }, []); // Fetch patients on component mount

      const fetchPatients = async () => {
        try {
            const response = await fetch('/receptionist/show-patients');
            const data = await response.json();
            if (Array.isArray(data)) {
                setPatients(data); // Update the patients state with fetched data if it's an array
            } else {
                console.error('Fetched data is not an array:', data);
            }
        } catch (error) {
            console.error('Error fetching patients:', error);
        }
    };

    return (
        <>
            <div className='flex gap-4'>
                <SideNavbar menus={employeeMenus} />
                <div className='flex flex-col w-full'>
                    <NavbarDomain  role ='employee'/>

                    <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
                        {/* <Form fields={EmployeeFields} /> */}
                        Patients Data
                        <table className="border-collapse border w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border py-2 px-4">ID</th>
                  <th className="border py-2 px-4">Name</th>
                  <th className="border py-2 px-4">Age</th>
                  <th className="border py-2 px-4">BloodGroup</th>
                  <th className="border py-2 px-4">Disease</th>
                  <th className="border py-2 px-4">BMI</th>
                  <th className="border py-2 px-4">Address</th>
                  <th className="border py-2 px-4">Email</th>
                  <th className="border py-2 px-4">ContactNumber</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patients) => (
                  <tr key={patients.idPatient} className="hover:bg-gray-100">
                    <td className="border py-2 px-4">{patients.idPatient}</td>
                    <td className="border py-2 px-4">{patients.Name}</td>
                    <td className="border py-2 px-4">{patients.Age}</td>
                    <td className="border py-2 px-4">{patients.BloodGroup}</td>
                    <td className="border py-2 px-4">{patients.Disease}</td>
                    <td className="border py-2 px-4">{patients.BMI}</td>
                    <td className="border py-2 px-4">{patients.Address}</td>
                    <td className="border py-2 px-4">{patients.Email}</td>
                    <td className="border py-2 px-4">{patients.ContactNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
                    </div>

                </div>

            </div>
        </>
    )
}
