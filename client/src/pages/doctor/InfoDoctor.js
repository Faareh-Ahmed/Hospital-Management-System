import { useState, useEffect } from "react";
import React from "react";
import SideNavbar from "../../components/SideNavbar";
import { IoMdStopwatch } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";
import NavbarDomain from "../../components/NavbarDomain";
import { useLocation } from "react-router-dom";
export default function InfoDoctor() {

    const location = useLocation();
  const { userInfo } = location.state;
  console.log(userInfo);
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
    },
  ];


  const renderuserInfo = () => {
    if (!userInfo) {
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
            {userInfo.FirstName}
          </div>

          <div className="p-4 bg-orange-400">
            <span className="font-semibold">LastName:</span>{" "}
            {userInfo.LastName}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Email:</span> {userInfo.Email}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Contact:</span>{" "}
            {userInfo.ContactNumber}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Lisence Number:</span>{" "}
            {userInfo.LicenseNumber}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Specialization:</span>{" "}
            {userInfo.Specialization}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Experience:</span>{" "}
            {userInfo.Experience}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Salary:</span> {userInfo.Salary}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Consultation Fee:</span> {userInfo.ConsultationFee}
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
          <NavbarDomain />

          <div className=" text-xl text-gray-900 font-semibold  w-full h-full ">
            {/* <Form fields={EmployeeFields} /> */}
            Doctor Info
            {renderuserInfo()}
          </div>
        </div>
      </div>
    </>
  );
}
