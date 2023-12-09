import { useState, useEffect } from "react";
import React from "react";
import SideNavbar from "../../components/SideNavbar";
import { IoMdStopwatch } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";
import NavbarDomain from "../../components/NavbarDomain";
import { useLocation } from "react-router-dom";
export default function InfoNurse() {
  const nurseInfo = JSON.parse(localStorage.getItem('nurseInfo'));
  console.log(nurseInfo);
  const nurseMenus = [
    { name: "Info", link: "/nurse/info", icon: IoMdSchool },
    {
      name: "Assigned Rooms",
      link: "/nurse/assigned-room",
      icon: IoMdStopwatch,
    },
  ];

  const rendernurseInfo = () => {
    if (!nurseInfo) {
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
            {nurseInfo.FirstName}
          </div>

          <div className="p-4 bg-orange-400">
            <span className="font-semibold">LastName:</span> {nurseInfo.LastName}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Email:</span> {nurseInfo.Email}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Contact:</span>{" "}
            {nurseInfo.ContactNumber}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Experience:</span>{" "}
            {nurseInfo.Experience}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Salary:</span> {nurseInfo.Salary}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Responsibilities:</span>{" "}
            {nurseInfo.Responsibilities}
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
          <NavbarDomain role="nurse" />

          <div className=" text-xl text-gray-900 font-semibold  w-full h-full ">
            {/* <Form fields={EmployeeFields} /> */}
            Nurse Info
            {rendernurseInfo()}
          </div>
        </div>
      </div>
    </>
  );
}
