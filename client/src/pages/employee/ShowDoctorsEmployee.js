import React, { useState, useEffect } from "react";
import SideNavbar from "../../components/SideNavbar";
import { IoMdStopwatch } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";
import NavbarDomain from "../../components/NavbarDomain";

export default function ShowDoctorsEmployee() {
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await fetch("/admin/show-doctors");
        if (response.ok) {
          const doctorData = await response.json();
          setDoctorData(doctorData); // Save fetched data to state
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDoctorData(); // Call the fetchDoctorData function when the component mounts
  }, []);

  const employeeMenus = [
    { name: "Info", link: "/employee/info", icon: IoMdSchool },
    {
      name: "Add Appointment",
      link: "/employee/add-appointment",
      icon: IoMdStopwatch,
    },
    {
      name: "Add Patient",
      link: "/employee/add-patient",
      icon: IoMdStopwatch,
  },
    {
      name: "Show Appointments",
      link: "/employee/show-appointment",
      icon: IoMdSchool,
    },
    {
      name: "Available Doctors",
      link: "/employee/available-doctor",
      icon: IoMdSchool,
    },
    { name: "Show Patients", link: "/employee/show-patients", icon: IoMdSchool },

  ];

  return (
    <>
      <div className="flex gap-4">
        <SideNavbar menus={employeeMenus} />
        <div className="flex flex-col w-full">
          <NavbarDomain role="employee" />

          <div className=" text-xl text-gray-900 font-semibold  w-full h-full  ">
            {/* <Form fields={EmployeeFields} /> */}
            <h2 className="text-align:center">Available Doctors</h2>
            <table className="border-collapse border-stone-950 border w-full bg-blue-600 text-white">
              <thead>
                <tr className="bg-purple-600">
                  <th className="border py-2 px-4">ID</th>
                  <th className="border py-2 px-4">Name</th>
                  <th className="border py-2 px-4">Email</th>
                  <th className="border py-2 px-4">Salary</th>
                  <th className="border py-2 px-4">Shift</th>
                  <th className="border py-2 px-4">License Number</th>
                  <th className="border py-2 px-4">Specialization</th>
                  <th className="border py-2 px-4">Experience</th>
                  <th className="border py-2 px-4">Consultation Fee</th>
                </tr>
              </thead>
              <tbody>
                {doctorData.map((doctor) => (
                  <tr key={doctor.iddoctor} className="hover:bg-blue-900">
                    <td className="border py-2 px-4">{doctor.iddoctor}</td>
                    <td className="border py-2 px-4">{doctor.Name}</td>
                    <td className="border py-2 px-4">{doctor.Email}</td>
                    <td className="border py-2 px-4">{doctor.Salary}</td>
                    <td className="border py-2 px-4">{doctor.Shift}</td>
                    <td className="border py-2 px-4">{doctor.LicenseNumber}</td>
                    <td className="border py-2 px-4">
                      {doctor.Specialization}
                    </td>
                    <td className="border py-2 px-4">{doctor.Experience}</td>
                    <td className="border py-2 px-4">
                      {doctor.ConsultationFee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
