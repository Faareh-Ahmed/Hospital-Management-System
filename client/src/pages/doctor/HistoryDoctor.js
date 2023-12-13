import React, { useEffect, useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import { IoMdStopwatch } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";
import NavbarDomain from "../../components/NavbarDomain";

export default function IHistoryDoctor() {
  const [appointment, setAppointments] = useState([]);
  const ID = JSON.parse(localStorage.getItem("doctorInfo"));


  const idDoctor = ID.idDoctor;

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("/doctor/show-history", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idDoctor: idDoctor }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Log the received data for testing
        setAppointments(data); // Update appointment state with fetched data
      } else {
        throw new Error("Failed to fetch history data");
      }
    } catch (error) {
      console.error(error);
    }
  };

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

  return (
    <>
      <div className="flex gap-4">
        <SideNavbar menus={doctorMenus} />
        <div className="flex flex-col w-full">
          <NavbarDomain role="doctor" />

          <div className="text-xl text-gray-900 font-semibold w-full h-full">
History of Visited Patients            {Array.isArray(appointment) && appointment.length > 0 ? (
              <table className="border-collapse border w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border py-2 px-4">ID</th>
                    <th className="border py-2 px-4">Patient Name</th>
                    <th className="border py-2 px-4">Gender</th>
                    <th className="border py-2 px-4">Contact Number</th>
                    <th className="border py-2 px-4">Age</th>
                    <th className="border py-2 px-4">BMI</th>
                    <th className="border py-2 px-4">Address</th>
                    <th className="border py-2 px-4">Symptoms</th>
                    <th className="border py-2 px-4">Prescriptions</th>
                    <th className="border py-2 px-4">Visit Date</th>

                  </tr>
                </thead>
                <tbody>
                  {appointment.map((history, index) => (
                    <tr
                      key={history.idappointment}
                      className="hover:bg-gray-100"
                    >
                      <td className="border py-2 px-4">{index + 1}</td>
                      <td className="border py-2 px-4">
                        {history.PatientName}
                      </td>
                      <td className="border py-2 px-4">
                        {history.gender}
                      </td>
                      <td className="border py-2 px-4">
                        {history.ContactNumber}
                      </td>
                      <td className="border py-2 px-4">
                        {history.Age}
                      </td>
                      <td className="border py-2 px-4">
                        {history.BMI}
                      </td>
                      <td className="border py-2 px-4">
                        {history.Address}
                      </td>

                      <td className="border py-2 px-4">
                        {history.Symptoms}
                      </td>
                      <td className="border py-2 px-4">
                        {history.Prescriptions}
                      </td>
                      <td className="border py-2 px-4">
                        {history.VisitDate}
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>
            ) : (
              <p>No history of visited Patients found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
