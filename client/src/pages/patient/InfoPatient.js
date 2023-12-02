import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import { IoMdShirt } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";
import SideNavbar from "../../components/SideNavbar";
import NavbarDomain from "../../components/NavbarDomain";

export default function InfoPatient() {
  const location = useLocation();
  const { userInfo } = location.state;
  console.log(userInfo);
  const patientMenus = [
    { name: "Info", link: "/patient/info", icon: IoMdSchool },
    { name: "History", link: "/patient/show-history", icon: IoMdShirt },
    {
      name: "Upcoming Appointments",
      link: "/patient/upcoming-appointment",
      icon: IoMdSchool,
    },
    {
      name: "Doctor Assigned",
      link: "/patient/doctor-assigned",
      icon: IoMdSchool,
    },
  ];

  // The empty dependency array ensures this effect runs once when the component mounts

  const renderuserInfo = () => {
    if (!userInfo) {
      return <p>Loading...</p>;
    }

    // Render Patient information here using doctorInfo object

    return (
      <div className="admin-card p-8 border rounded shadow w-full h-full">
        <div className="grid text-xl font-semibold mb-4 justify-items-center">
          Patient Information
        </div>
        <div className="flex-col p-8 bg-slate-500">
          <div className="p-4 bg-orange-400">
            <span className="font-semibold pt-4 pb-4">FirstName:</span>{" "}
            {userInfo.FirstName}
          </div>

          <div className="p-4 bg-orange-400">
            <span className="font-semibold">LastName:</span> {userInfo.LastName}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Email:</span> {userInfo.Email}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Contact Number:</span>{" "}
            {userInfo.ContactNumber}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Blood Group:</span>{" "}
            {userInfo.BloodGroup}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Age:</span> {userInfo.Age}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Gender:</span> {userInfo.gender}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Height:</span> {userInfo.Height}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Weight: </span> {userInfo.Weight}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">BMI: </span> {userInfo.BMI}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex gap-4">
        <SideNavbar menus={patientMenus} />
        <div className="flex flex-col w-full">
          <NavbarDomain />

          <div className=" text-xl text-gray-900 font-semibold  w-full h-full ">
            {/* <Form fields={PatientFields}/> */}
            Patient Info
            {renderuserInfo()}
          </div>
        </div>
      </div>
    </>
  );
}
