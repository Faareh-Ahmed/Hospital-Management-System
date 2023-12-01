

import { useState,useEffect } from 'react';
import React from 'react'
import { IoMdShirt } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import SideNavbar from '../../components/SideNavbar'
import NavbarDomain from '../../components/NavbarDomain';

export default function InfoPatient()  {

    const patientMenus = [
      { name: "Info", link: '/patient/info', icon: IoMdSchool },
        { name: "History", link: '/patient/show-history', icon: IoMdShirt },
        { name: "Upcoming Appointments", link: '/patient/upcoming-appointment', icon: IoMdSchool },
        { name: "Doctor Assigned", link: '/patient/doctor-assigned', icon: IoMdSchool },
      ];


      const [patientInfo, setPatientInfo] = useState(null);

      useEffect(() => {
          // Fetch doctor info from the database
          const fetchPatientInfo = async () => {
              try {
                  const response = await fetch('YOUR_API_ENDPOINT'); // Replace with your actual API endpoint
                  const data = await response.json();
  
                  // Assuming the response structure is an object with doctor information
                  setPatientInfo(data);
              } catch (error) {
                  console.error('Error fetching Admin info:', error);
              }
          };
  
          fetchPatientInfo();
      }, []); // The empty dependency array ensures this effect runs once when the component mounts
  
      const renderPatientInfo = () => {
          if (!patientInfo) {
              return <p>Loading...</p>;
          }
  
          // Render Patient information here using doctorInfo object
  
          return (
              <div className='admin-card p-8 border rounded shadow w-full h-full'>
                  <div className='grid text-xl font-semibold mb-4 justify-items-center'>Patient Information</div>
                  <div className='flex-col p-8 bg-slate-500'>
                      <div className='p-4 bg-orange-400'>
                          <span className='font-semibold pt-4 pb-4'>FirstName:</span> {patientInfo.firstname}
                      </div>
  
                      <div className='p-4 bg-orange-400'>
                          <span className='font-semibold'>LastName:</span> {patientInfo.lastname}
                      </div>
                      <div className='p-4 bg-orange-400'>
                          <span className='font-semibold'>Email:</span> {patientInfo.email}
                      </div>
                      <div className='p-4 bg-orange-400'>
                          <span className='font-semibold'>CNIC:</span> {patientInfo.cnic}
                      </div>
                      <div className='p-4 bg-orange-400'>
                          <span className='font-semibold'>Contact:</span> {patientInfo.contact}
                      </div>
                      <div className='p-4 bg-orange-400'>
                          <span className='font-semibold'>Blood Group:</span> {patientInfo.bloodgroup}
                      </div>
                      <div className='p-4 bg-orange-400'>
                          <span className='font-semibold'>Age:</span> {patientInfo.age}
                      </div>
                      <div className='p-4 bg-orange-400'>
                          <span className='font-semibold'>Gender:</span> {patientInfo.gender}
                      </div>
                  </div>
  
  
              </div>
  
          );
      };

  return (
<>
      <div className='flex gap-4'>

        <SideNavbar menus={patientMenus} />
        <div className='flex flex-col w-full'>
          <NavbarDomain />

          <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
            {/* <Form fields={PatientFields}/> */}
            Patient Info
            {renderPatientInfo()}

          </div>

        </div>

      </div>
</>  )
}