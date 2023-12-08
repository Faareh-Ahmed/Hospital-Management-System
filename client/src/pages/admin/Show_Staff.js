import React from "react";
import SideNavbar from "../../components/SideNavbar";
import { IoMdStar } from "react-icons/io";
import { IoMdSubway } from "react-icons/io";
import NavbarDomain from "../../components/NavbarDomain";
import { useState } from "react";

export default function Show_Staff() {
  const AdminMenus = [
    { name: "Info", link: "/admin/info", icon: IoMdSubway },
    { name: "Add Doctor", link: "/admin/add-doctor", icon: IoMdStar },
    { name: "Show Staff", link: "/admin/show-staff", icon: IoMdSubway },
    { name: "Add Nurses", link: "/admin/add-nurse", icon: IoMdSubway },
    { name: "Add Employees", link: "/admin/add-employee", icon: IoMdSubway },
    { name: "History", link: "/admin/history", icon: IoMdSubway },
  ];

  const [activeButton, setActiveButton] = useState(null);
  const [doctorData, setDoctorData] = useState([]);
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

  const [nurseData, setNurseData] = useState([]);
  const fetchNurseData = async () => {
    try {
      const response = await fetch("/admin/show-nurses");
      if (response.ok) {
        const nurseData = await response.json();
        setNurseData(nurseData); // Save fetched data to state
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const [receptionistData, setReceptionistData] = useState([]);
  const fetchReceptionistData = async () => {
    try {
      const response = await fetch("/admin/show-receptionist");
      if (response.ok) {
        const receptionistData = await response.json();
        setReceptionistData(receptionistData); // Save fetched data to state
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleButtonClick = async (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "Doctors") {
      await fetchDoctorData();
    }
    if (buttonName == "Nurses") {
      await fetchNurseData();
    }
    if (buttonName == "Receptionists") {
      await fetchReceptionistData();
    }
  };

  return (
    <>
      <div className="flex gap-4">
        <SideNavbar menus={AdminMenus} />
        <div className="flex flex-col w-full">
          <NavbarDomain role="admin" />

          <div className=" text-xl text-gray-900 font-semibold  w-full h-full ">
            Show Staff
            <div className="w-full p-4 justify-between flex">
              <button
                className={`${
                  activeButton === "Doctors"
                    ? "bg-green-500 text-black"
                    : "bg-black text-green-500"
                }
                                 w-[150px] rounded font-medium my-6 mx-auto md:m-0 py-3`}
                onClick={() => handleButtonClick("Doctors")}
              >
                Doctors
              </button>

              <button
                className={`${
                  activeButton === "Nurses"
                    ? "bg-green-500 text-black"
                    : "bg-black text-green-500"
                }
                                 w-[150px] rounded font-medium my-6 mx-auto md:m-0 py-3 `}
                onClick={() => handleButtonClick("Nurses")}
              >
                Nurses
              </button>

              <button
                className={`${
                  activeButton === "Receptionists"
                    ? "bg-green-500 text-black"
                    : "bg-black text-green-500"
                }
                                 w-[150px] rounded font-medium my-6 mx-auto md:m-0 py-3 `}
                onClick={() => handleButtonClick("Receptionists")}
              >
                Receptionists
              </button>


            </div>
            {activeButton === "Doctors" && (
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">
                  Doctors Information
                </h2>
                <table className="border-collapse border w-full">
                  <thead>
                    <tr className="bg-gray-200">
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
                      <tr key={doctor.iddoctor} className="hover:bg-gray-100">
                        <td className="border py-2 px-4">{doctor.iddoctor}</td>
                        <td className="border py-2 px-4">{doctor.Name}</td>
                        <td className="border py-2 px-4">{doctor.Email}</td>
                        <td className="border py-2 px-4">{doctor.Salary}</td>
                        <td className="border py-2 px-4">{doctor.Shift}</td>
                        <td className="border py-2 px-4">
                          {doctor.LicenseNumber}
                        </td>
                        <td className="border py-2 px-4">
                          {doctor.Specialization}
                        </td>
                        <td className="border py-2 px-4">
                          {doctor.Experience}
                        </td>
                        <td className="border py-2 px-4">
                          {doctor.ConsultationFee}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeButton === "Nurses" && (
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">
                  Nurses Information
                </h2>
                <table className="border-collapse border w-full">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border py-2 px-4">ID</th>
                      <th className="border py-2 px-4">Name</th>
                      <th className="border py-2 px-4">Email</th>
                      <th className="border py-2 px-4">Salary</th>
                      <th className="border py-2 px-4">Shift</th>
                      <th className="border py-2 px-4">Responsibilities</th>
                      <th className="border py-2 px-4">Specialization</th>
                      <th className="border py-2 px-4">Experience</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nurseData.map((nurse) => (
                      <tr key={nurse.idnurse} className="hover:bg-gray-100">
                        <td className="border py-2 px-4">{nurse.idnurse}</td>
                        <td className="border py-2 px-4">{nurse.Name}</td>
                        <td className="border py-2 px-4">{nurse.Email}</td>
                        <td className="border py-2 px-4">{nurse.Salary}</td>
                        <td className="border py-2 px-4">{nurse.Shift}</td>
                        <td className="border py-2 px-4">
                          {nurse.Responsibilities}
                        </td>
                        <td className="border py-2 px-4">
                          {nurse.Specialization}
                        </td>
                        <td className="border py-2 px-4">{nurse.Experience}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeButton === "Receptionists" && (
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">
                  Receptionists Information
                </h2>
                <table className="border-collapse border w-full">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border py-2 px-4">ID</th>
                      <th className="border py-2 px-4">Name</th>
                      <th className="border py-2 px-4">Email</th>
                      <th className="border py-2 px-4">Salary</th>
                      <th className="border py-2 px-4">Shift</th>
                      <th className="border py-2 px-4">CNIC</th>
                      <th className="border py-2 px-4">Certificate Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {receptionistData.map((receptionist) => (
                      <tr
                        key={receptionist.idreceptionist}
                        className="hover:bg-gray-100"
                      >
                        <td className="border py-2 px-4">
                          {receptionist.idreceptionist}
                        </td>
                        <td className="border py-2 px-4">
                          {receptionist.Name}
                        </td>
                        <td className="border py-2 px-4">
                          {receptionist.Email}
                        </td>
                        <td className="border py-2 px-4">
                          {receptionist.Salary}
                        </td>
                        <td className="border py-2 px-4">
                          {receptionist.Shift}
                        </td>
                        <td className="border py-2 px-4">
                          {receptionist.CNIC}
                        </td>
                        <td className="border py-2 px-4">
                          {receptionist.CertificateNumber}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
