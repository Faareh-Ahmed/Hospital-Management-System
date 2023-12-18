import React from "react";
import { IoMdShirt } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";
import SideNavbar from "../../components/SideNavbar";
import NavbarDomain from "../../components/NavbarDomain";
import { useState, useEffect } from "react";

export default function PaidBills() {
  const [roomData, setRoomData] = useState([]);
  const patientInfo = JSON.parse(localStorage.getItem("patientInfo"));

  const patientID = patientInfo.idPatient; // Replace 'your_nurse_id' with the actual nurse ID

  useEffect(() => {
    fetchRoomData();
  }, []);

  const fetchRoomData = async () => {
    try {
      const response = await fetch("/patient/show-allbills", {
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
                    <th className="border py-2 px-4">Visit Date</th>
                    <th className="border py-2 px-4">Amount</th>
                    <th className="border py-2 px-4">Payment Method</th>
                    <th className="border py-2 px-4">Bank ID</th>
                    <th className="border py-2 px-4">Bill Status</th>
                    <th className="border py-2 px-4">Billing Date</th>
                    <th className="border py-2 px-4">Print Invoice</th>
                  </tr>
                </thead>
                <tbody>
                  {roomData.map((history, index) => (
                    <tr key={history.idVisit} className="hover:bg-gray-100">
                      <td className="border py-2 px-4">{index + 1}</td>
                      <td className="border py-2 px-4">{history.VisitDate}</td>
                      <td className="border py-2 px-4">{history.Amount}</td>
                      <td className="border py-2 px-4">
                        {history.PaymentMethod}
                      </td>
                      <td className="border py-2 px-4">{history.BankID}</td>
                      <td className="border py-2 px-4">{history.BillStatus}</td>
                      <td className="border py-2 px-4">
                        {history.BillingDate}
                      </td>
                      <td className="border py-2 px-4">
                        <button>Get Invoice</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No Bills Paid Yet</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
