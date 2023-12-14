import React from "react";
import { IoMdShirt } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";
import SideNavbar from "../../components/SideNavbar";
import NavbarDomain from "../../components/NavbarDomain";
import { useState, useEffect } from "react";

export default function PayBills() {
  const [roomData, setRoomData] = useState([]);
  const patientInfo = JSON.parse(localStorage.getItem("patientInfo"));

  const patientID = patientInfo.idPatient; // Replace 'your_nurse_id' with the actual nurse ID

  useEffect(() => {
    fetchRoomData();
  }, []);

  const fetchRoomData = async () => {
    try {
      const response = await fetch("/patient/show-pendingbills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ patientID }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Log the received data for testing
        setRoomData(data); // Update roomData state with fetched data
      } else {
        throw new Error("Failed to fetch room data");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const patientMenus = [
    { name: "Info", link: "/patient/info", icon: IoMdSchool },
    { name: "All Visits", link: "/patient/show-history", icon: IoMdShirt },
    {
      name: "Upcoming Appointments",
      link: "/patient/upcoming-appointment",
      icon: IoMdSchool,
    },
    {
      name: "Pay Bills",
      link: "/patient/paybills",
      icon: IoMdSchool,
    },
    {
        name: "Get Invoices",
        link: "/patient/invoices",
        icon: IoMdSchool,
      },
      {
        name: "Get Slips",
        link: "/patient/slips",
        icon: IoMdSchool,
      },
  ];

  return (
    <>
      <div className="flex gap-4">
        <SideNavbar menus={patientMenus} />
        <div className="flex flex-col w-full">
          <NavbarDomain role={"patient"} />

          <div className=" text-xl text-gray-900 font-semibold  w-full h-full ">
            {/* <Form fields={PatientFields}/> */}
            SHow History
            {Array.isArray(roomData) && roomData.length > 0 ? (
              <table className="border-collapse border w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border py-2 px-4">No #</th>
                    <th className="border py-2 px-4">Doctor Name</th>
                    <th className="border py-2 px-4">Doctor Email</th>
                    <th className="border py-2 px-4">License Number</th>
                    <th className="border py-2 px-4">Specialization</th>
                    <th className="border py-2 px-4">Visit Type</th>
                    <th className="border py-2 px-4">Symptoms</th>
                    <th className="border py-2 px-4">Prescriptions</th>
                    <th className="border py-2 px-4">Visit Date</th>
                  </tr>
                </thead>
                <tbody>
                  {roomData.map((history, index) => (
                    <tr key={history.idVisit} className="hover:bg-gray-100">
                      <td className="border py-2 px-4">{index + 1}</td>
                      <td className="border py-2 px-4">{history.Name}</td>
                      <td className="border py-2 px-4">
                        {history.DoctorEmail}
                      </td>
                      <td className="border py-2 px-4">
                        {history.LicenseNumber}
                      </td>
                      <td className="border py-2 px-4">
                        {history.Specialization}
                      </td>
                      <td className="border py-2 px-4">{history.VisitType}</td>
                      <td className="border py-2 px-4">{history.Symptoms}</td>
                      <td className="border py-2 px-4">
                        {history.Prescriptions}
                      </td>
                      <td className="border py-2 px-4">{history.VisitDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No Bills to Pay</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
