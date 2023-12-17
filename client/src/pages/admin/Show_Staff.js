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

  const [clickedRowStaff, setClickedRowStaff] = useState(null);
  const [showFormStaff, setShowFormStaff] = useState(false);

  const [salary, setSalary] = useState("");
  const [shift, setShift] = useState("");


  const handleRowClickStaff = (staffId, staffDetails) => {
    setClickedRowStaff(staffId);
    setShowFormStaff(true);
    
    // setStaffDetails(staffDetails);
  };


  const updateStaffDetails = async () => {
    try {
      // Perform API call to update staff details using the staff ID and new data
      const response = await fetch(
        `/admin/update-staff/${clickedRowStaff}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ salary, shift }),
        }
      );
  
      if (response.ok) {
        // Staff details updated successfully, perform necessary actions if needed
  
        // Display a pop-up message
        alert(`Data updated for staff member: ${clickedRowStaff}`);
  
        // Clear input fields
        setSalary("");
        setShift("");
      } else {
        throw new Error("Failed to update staff details");
      }
    } catch (error) {
      console.error(error);
    }
  };
  


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
        <div className="flex flex-col w-full ">
          <NavbarDomain role="admin" />

          <div className=" text-xl text-gray-900 font-semibold  w-full h-full ">
            Show Staff
            <div className="w-full p-4 justify-between flex">
              <button
                className={`${activeButton === "Doctors"
                  ? "bg-green-500 text-black"
                  : "bg-black text-green-500"
                  }
                                 w-[150px] rounded font-medium my-6 mx-auto md:m-0 py-3`}
                onClick={() => handleButtonClick("Doctors")}
              >
                Doctors
              </button>

              <button
                className={`${activeButton === "Nurses"
                  ? "bg-green-500 text-black"
                  : "bg-black text-green-500"
                  }
                                 w-[150px] rounded font-medium my-6 mx-auto md:m-0 py-3 `}
                onClick={() => handleButtonClick("Nurses")}
              >
                Nurses
              </button>

              <button
                className={`${activeButton === "Receptionists"
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
              <div className="mt-4 p-4">
                <h2 className="text-xl font-semibold mb-2 text-blue-900">
                  Doctors Information
                </h2>
                <table className="border-collapse border-stone-950 border w-full bg-blue-600 text-white">
                  <thead>
                    <tr className="bg-purple-600">
                      <th className="border py-2 px-4">Staff.ID</th>
                      <th className="border py-2 px-4">Doc.ID</th>
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
                      <tr key={doctor.idDoctor}
                        className={`hover:bg-blue-900 ${clickedRowStaff === doctor.idStaff ? 'bg-red-500' : 'bg-green-500'}`}
                        onClick={() => handleRowClickStaff(doctor.idStaff, doctor)}
                      >
                        <td className="border py-2 px-4">{doctor.idStaff}</td>
                        <td className="border py-2 px-4">{doctor.idDoctor}</td>
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


                  {showFormStaff && clickedRowStaff !== null && (
                    <tr>
                      <td colSpan="10">
                        <form className="bg-blue-300 p-6 rounded shadow-md">
                          
                          

                          <div className="mb-4">
                            <label className="text-black text-m font-bold mb-2">
                              Salary:
                            </label>
                            <input
                              type="text"
                              value={salary}
                              onChange={(e) => setSalary(e.target.value)}
                              placeholder="Enter Salary"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="text-black text-m font-bold mb-2">
                              Shift:
                            </label>
                            <input
                              type="text"
                              value={shift}
                              onChange={(e) => setShift(e.target.value)}
                              placeholder="Select Shift"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={updateStaffDetails}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          >
                            Update
                          </button>
                        </form>
                      </td>
                    </tr>
                  )}



                </table>
              </div>
            )}
            {activeButton === "Nurses" && (
              <div className="mt-4 p-4">
                <h2 className="text-xl font-semibold mb-2 text-blue-900">
                  Nurses Information
                </h2>
                <table className="border-collapse border-stone-950 border w-full bg-blue-600 text-white">
                  <thead>
                    <tr className="bg-purple-600">
                    <th className="border py-2 px-4">Staff.ID</th>
                      <th className="border py-2 px-4">Nur.ID</th>
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
                      <tr key={nurse.idNurse} 
                      className={`hover:bg-blue-900 ${clickedRowStaff === nurse.idStaff ? 'bg-red-500' : 'bg-green-500'}`}
                      onClick={() => handleRowClickStaff(nurse.idStaff, nurse)}
                      >
                        <td className="border py-2 px-4">{nurse.idStaff}</td>
                        <td className="border py-2 px-4">{nurse.idNurse}</td>
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


                  {showFormStaff && clickedRowStaff !== null && (
                    <tr>
                      <td colSpan="10">
                        <form className="bg-blue-300 p-6 rounded shadow-md">
                          
                          

                          <div className="mb-4">
                            <label className="text-black text-m font-bold mb-2">
                              Salary:
                            </label>
                            <input
                              type="text"
                              value={salary}
                              onChange={(e) => setSalary(e.target.value)}
                              placeholder="Enter Salary"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="text-black text-m font-bold mb-2">
                              Shift:
                            </label>
                            <input
                              type="text"
                              value={shift}
                              onChange={(e) => setShift(e.target.value)}
                              placeholder="Select Shift"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={updateStaffDetails}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          >
                            Update
                          </button>
                        </form>
                      </td>
                    </tr>
                  )}



                </table>
              </div>
            )}
            {activeButton === "Receptionists" && (
              <div className="mt-4 p-4">
                <h2 className="text-xl font-semibold mb-2 text-blue-900">
                  Receptionists Information
                </h2>
                <table className="border-collapse border-stone-950 border w-full bg-blue-600 text-white">
                  <thead>
                    <tr className="bg-purple-600">
                    <th className="border py-2 px-4">Staff.ID</th>
                      <th className="border py-2 px-4">Rec.ID</th>
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
                        key={receptionist.idReceptionist}
                        className={`hover:bg-blue-900 ${clickedRowStaff === receptionist.idStaff ? 'bg-red-500' : 'bg-green-500'}`}
                        onClick={() => handleRowClickStaff(receptionist.idStaff, receptionist)}
                      >
                        <td className="border py-2 px-4">
                          {receptionist.idStaff}
                        </td>
                        <td className="border py-2 px-4">
                          {receptionist.idReceptionist}
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


                  {showFormStaff && clickedRowStaff !== null && (
                    <tr>
                      <td colSpan="10">
                        <form className="bg-blue-300 p-6 rounded shadow-md">
                          
                          

                          <div className="mb-4">
                            <label className="text-black text-m font-bold mb-2">
                              Salary:
                            </label>
                            <input
                              type="text"
                              value={salary}
                              onChange={(e) => setSalary(e.target.value)}
                              placeholder="Enter Salary"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="text-black text-m font-bold mb-2">
                              Shift:
                            </label>
                            <input
                              type="text"
                              value={shift}
                              onChange={(e) => setShift(e.target.value)}
                              placeholder="Select Shift"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={updateStaffDetails}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          >
                            Update
                          </button>
                        </form>
                      </td>
                    </tr>
                  )}


                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
