import React, { useEffect, useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import { IoMdStopwatch } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";
import NavbarDomain from "../../components/NavbarDomain";

export default function All_AppointmentDoctor() {
  const [appointment, setAppointments] = useState([]);
  const ID = JSON.parse(localStorage.getItem("doctorInfo"));

  const idDoctor = ID.idDoctor; // Replace 'your_nurse_id' with the actual nurse ID

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("/doctor/show-appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idDoctor : idDoctor }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Log the received data for testing
        setAppointments(data); // Update appointment state with fetched data
      } else {
        throw new Error("Failed to fetch appointment data");
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
    },
  ];

  return (
    <>
      <div className="flex gap-4">
        <SideNavbar menus={doctorMenus} />
        <div className="flex flex-col w-full">
          <NavbarDomain role="doctor" />

          <div className="text-xl text-gray-900 font-semibold w-full h-full">
            Assigned appointments
            {Array.isArray(appointment) && appointment.length > 0 ? (
            <table className="border-collapse border w-full">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border py-2 px-4">Appointment No.</th>
                      <th className="border py-2 px-4">Patient ID</th>
                      <th className="border py-2 px-4">Patient Name</th>
                      <th className="border py-2 px-4">Gender</th>
                      <th className="border py-2 px-4">Contact Number</th>
                      <th className="border py-2 px-4">Age</th>
                      <th className="border py-2 px-4">BMI</th>
                      <th className="border py-2 px-4">Address</th>
                      <th className="border py-2 px-4">Appointment Date</th>
                      <th className="border py-2 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointment.map((appointment,index) => (
                      <tr key={appointment.idappointment} className="hover:bg-gray-100">
                        <td className="border py-2 px-4">{index + 1}</td>
                        <td className="border py-2 px-4">{appointment.idPatient}</td>
                        <td className="border py-2 px-4">{appointment.PatientName}</td>
                        <td className="border py-2 px-4">{appointment.gender}</td>
                        <td className="border py-2 px-4">{appointment.ContactNumber}</td>
                        <td className="border py-2 px-4">
                          {appointment.Age}
                        </td>
                        <td className="border py-2 px-4">
                          {appointment.BMI}
                        </td>
                        <td className="border py-2 px-4">
                          {appointment.Address}
                        </td>
                        <td className="border py-2 px-4">
                          {appointment.AppointmentDate}
                        </td>
                        <td className="border py-2 px-4">
                          {appointment.Status}
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table> ): (
              <p>No assigned appointments found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
