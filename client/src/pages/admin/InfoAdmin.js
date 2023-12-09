import { useState, useEffect } from "react";
import React from "react";
import SideNavbar from "../../components/SideNavbar";
import { IoMdStar } from "react-icons/io";
import { IoMdSubway } from "react-icons/io";
import NavbarDomain from "../../components/NavbarDomain";
import { useLocation } from "react-router-dom";

export default function InfoAdmin() {
  const adminInfo = JSON.parse(localStorage.getItem('adminInfo'));
  console.log(adminInfo);
  const AdminMenus = [
    { name: "Info", link: "/admin/info", icon: IoMdSubway },
    { name: "Add Doctor", link: "/admin/add-doctor", icon: IoMdStar },
    { name: "Show Staff", link: "/admin/show-staff", icon: IoMdSubway },
    { name: "Add Nurses", link: "/admin/add-nurse", icon: IoMdSubway },
    { name: "Add Employees", link: "/admin/add-employee", icon: IoMdSubway },
    { name: "History", link: "/admin/history", icon: IoMdSubway },
  ];

  const renderadminInfo = () => {
    if (!adminInfo) {
      return <p>Loading...</p>;
    }

    // Render doctor information here using doctorInfo object

    return (
      <div className="admin-card p-8 border rounded shadow w-full h-full">
        <div className="grid text-xl font-semibold mb-4 justify-items-center">
          Admin Information
        </div>
        <div className="flex-col p-8 bg-slate-500">
          <div className="p-4 bg-orange-400">
            <span className="font-semibold pt-4 pb-4">FirstName: </span>{" "}
            {adminInfo.FirstName}
          </div>

          <div className="p-4 bg-orange-400">
            <span className="font-semibold">LastName: </span>{" "}
            {adminInfo.LastName}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Email: </span> {adminInfo.Email}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">Contact: </span>{" "}
            {adminInfo.ContactNumber}
          </div>
          <div className="p-4 bg-orange-400">
            <span className="font-semibold">CNIC: </span> {adminInfo.CNIC}
          </div>
            <div className="p-4 bg-orange-400">
              <span className="font-semibold">Certificate Number: </span>{" "}
              {adminInfo.CertificateNumber}
            </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex gap-4">
        <SideNavbar menus={AdminMenus} />
        <div className="flex flex-col w-full">
          <NavbarDomain  role ='admin'/>

          <div className=" text-xl text-gray-900 font-semibold  w-full h-full ">
            Info Admin
            {renderadminInfo()}
          </div>
        </div>
      </div>
    </>
  );
}
