


import { useState, useEffect } from "react";
import React from "react";
import SideNavbar from "../../components/SideNavbar";
import { IoMdStopwatch } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";
import NavbarDomain from "../../components/NavbarDomain";
import { useLocation } from "react-router-dom";
export default function InfoNurse() {

    const location = useLocation();
  const { userInfo } = location.state;
  console.log(userInfo);
  const nurseMenus = [
    { name: "Info", link: "/nurse/info", icon: IoMdSchool },
    { name: "Assigned Rooms", link: "/nurse/assigned-room", icon: IoMdStopwatch },
   
  ];


  const renderuserInfo = () => {
    if (!userInfo) {
      return <p>Loading...</p>;
    }

    return (
      <div className="admin-card p-8 border rounded shadow w-full h-full">
        <div className="grid text-xl font-semibold mb-4 justify-items-center">
          Nurse Information
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
            <span className="font-semibold">Experience:</span>{" "}
            {userInfo.Experience}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Salary:</span> {userInfo.Salary}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Responsibilities:</span> {userInfo.ConsultationFee}
          </div>

        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex gap-4">
        <SideNavbar menus={nurseMenus} />
        <div className="flex flex-col w-full">
          <NavbarDomain role='nurse' />

          <div className=" text-xl text-gray-900 font-semibold  w-full h-full ">
            {/* <Form fields={EmployeeFields} /> */}
            Nurse Info
            {renderuserInfo()}
          </div>
        </div>
      </div>
    </>
  );
}
