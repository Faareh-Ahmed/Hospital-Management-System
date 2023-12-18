import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import { IoMdStopwatch } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import NavbarDomain from '../../components/NavbarDomain';
import { useState,useEffect } from 'react';
export default function Show_Appointment() {
    const [appointments, setAppointments] = useState([]);

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
      useEffect(() => {
        fetchAppointments();
      }, []); // Fetch appointments on component mount

      const fetchAppointments = async () => {
        try {
          const response = await fetch('/receptionist/show-appointments');
          const data = await response.json();
          setAppointments(data); // Update the appointments state with fetched data
        } catch (error) {
          console.error('Error fetching appointments:', error);
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
                        Show Appointment
                        <table className="border-collapse border-stone-950 border w-full bg-blue-600 text-white">
              <thead>
                <tr className="bg-purple-600">
                  <th className="border py-2 px-4">ID</th>
                  <th className="border py-2 px-4">PatientID</th>
                  <th className="border py-2 px-4">PatientName</th>
                  <th className="border py-2 px-4">DoctorID</th>
                  <th className="border py-2 px-4">AppointmentDate</th>
                  <th className="border py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointments) => (
                  <tr key={appointments.idAppointment} className="hover:bg-blue-900">
                    <td className="border py-2 px-4">{appointments.idAppointment}</td>
                    <td className="border py-2 px-4">{appointments.idPatient}</td>
                    <td className="border py-2 px-4">{appointments.PatientName}</td>
                    <td className="border py-2 px-4">{appointments.idDoctor}</td>
                    <td className="border py-2 px-4">{appointments.AppointmentDate1}</td>
                    <td className="border py-2 px-4">{appointments.Status}</td>
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
