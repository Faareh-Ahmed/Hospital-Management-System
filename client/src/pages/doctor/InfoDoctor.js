import { useState, useEffect } from "react";
import React from "react";
import SideNavbar from "../../components/SideNavbar";
import { IoMdStopwatch } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";
import NavbarDomain from "../../components/NavbarDomain";
import { useLocation } from "react-router-dom";
export default function InfoDoctor() {

  const doctorInfo = JSON.parse(localStorage.getItem('doctorInfo'));
  console.log(doctorInfo);
  const doctorMenus = [
    { name: "Info", link: "/doctor/info", icon: IoMdSchool },
    { name: "History", link: "/doctor/history", icon: IoMdStopwatch },
    {
      name: "Upcoming Appointments",
      link: "/doctor/upcoming-appointment",
      icon: IoMdSchool,
    },
    {
      name: "All Appointments",
      link: "/doctor/all-appointment",
      icon: IoMdSchool,
    },{
        name: "Walk In",
        link: "/doctor/walk-in",
        icon: IoMdSchool,
      },
  ];


  const renderdoctorInfo = () => {
    if (!doctorInfo) {
      return <p>Loading...</p>;
    }

    return (
      <div className="admin-card p-8 border rounded shadow w-full h-full">
        <div className="grid text-xl font-semibold mb-4 justify-items-center">
          Doctor Information
        </div>
        <div className="flex-col p-8 bg-slate-500">
          <div className="p-4 bg-orange-400">
            <span className="font-semibold pt-4 pb-4">FirstName:</span>{" "}
            {doctorInfo.FirstName}
          </div>

          <div className="p-4 bg-orange-400">
            <span className="font-semibold">LastName:</span>{" "}
            {doctorInfo.LastName}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Email:</span> {doctorInfo.Email}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Contact:</span>{" "}
            {doctorInfo.ContactNumber}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Lisence Number:</span>{" "}
            {doctorInfo.LicenseNumber}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Specialization:</span>{" "}
            {doctorInfo.Specialization}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Experience:</span>{" "}
            {doctorInfo.Experience}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Salary:</span> {doctorInfo.Salary}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Consultation Fee:</span> {doctorInfo.ConsultationFee}
          </div>

        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex gap-4">
        <SideNavbar menus={doctorMenus} />
        <div className="flex flex-col w-full">
          <NavbarDomain   role ='doctor'/>

          <div className=" text-xl text-gray-900 font-semibold  w-full h-full ">
            {/* <Form fields={EmployeeFields} /> */}
            Doctor Info
            {renderdoctorInfo()}
          </div>
        </div>
      </div>
    </>
  );
}
