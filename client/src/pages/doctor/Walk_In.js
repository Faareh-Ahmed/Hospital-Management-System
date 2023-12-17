import React, { useEffect, useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import { IoMdStopwatch } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";
import NavbarDomain from "../../components/NavbarDomain";

export default function Walk_In() {
  const [walkin, setWalkin] = useState([]);
  const ID = JSON.parse(localStorage.getItem("doctorInfo"));

  const [clickedRow, setClickedRow] = useState(null);
  const [prescription, setPrescription] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [patientID, setPatientID] = useState();

  const [showForm, setShowForm] = useState(false);

  const handleCheckPatientClick = (walk_in) => {
    setClickedRow(walk_in); // Ensure walk_in object has the idPatient field
    setShowForm(true);
  };

  const idDoctor = ID.idDoctor;

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      console.log(idDoctor);
      const response = await fetch("/doctor/show-walk_in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idDoctor: idDoctor }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Log the received data for testing
        setWalkin(data); // Update walk_in state with fetched data
      } else {
        throw new Error("Failed to fetch walk_in data");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const updatewalk_in = async () => {
    try {
      console.log(clickedRow.idPatient);
      // Perform API call to update walk_in using the walk_in ID and new data (prescription, walk_inDetails)
      const response = await fetch(
        `/doctor/update-walkin/${clickedRow.idPatient}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prescription, symptoms }),
        }
      );

      if (response.ok) {
        // walk_in updated successfully, perform necessary actions if needed
      } else {
        throw new Error("Failed to update walk_in");
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
    {
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
Patients Waiting for Checkup            {Array.isArray(walkin) && walkin.length > 0 ? (
              <table className="border-collapse border-stone-950 border w-full bg-blue-600 text-white">
                <thead>
                  <tr className="bg-purple-600">
                    <th className="border py-2 px-4">ID. </th>
                    <th className="border py-2 px-4">Patient ID</th>
                    <th className="border py-2 px-4">Patient Name</th>
                    <th className="border py-2 px-4">Gender</th>
                    <th className="border py-2 px-4">Contact Number</th>
                    <th className="border py-2 px-4">Age</th>
                    <th className="border py-2 px-4">BMI</th>
                    <th className="border py-2 px-4">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {walkin.map((walk_in, index) => (
                    <tr key={index + 1} className="hover:bg-blue-900">
                      <td className="border py-2 px-4">{index + 1}</td>
                      <td className="border py-2 px-4">{walk_in.idPatient}</td>
                      <td className="border py-2 px-4">
                        {walk_in.PatientName}
                      </td>
                      <td className="border py-2 px-4">{walk_in.gender}</td>
                      <td className="border py-2 px-4">
                        {walk_in.ContactNumber}
                      </td>
                      <td className="border py-2 px-4">{walk_in.Age}</td>
                      <td className="border py-2 px-4">{walk_in.BMI}</td>
                      <td className="border py-2 px-4">{walk_in.Address}</td>
                      <td>
                        <button
                          onClick={() => handleCheckPatientClick(walk_in)}
                        >
                          Check Patient
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                {showForm && clickedRow !== null && (
                  <tr>
                    <td colSpan="10">
                      <form>
                        <div>
                          <label>Patient ID:</label>
                          <span>{clickedRow.idPatient}</span>
                        </div>
                        <div>
                          <label>Patient Name:</label>
                          <span>{clickedRow.PatientName}</span>
                        </div>
                        <div>
                          <label>Appointment Date:</label>
                          <span>{clickedRow.AppointmentDate}</span>
                        </div>
                        <div>
                          <label>Symptoms: </label>
                          <input
                            type="text"
                            value={symptoms}
                            onChange={(e) => setSymptoms(e.target.value)}
                            placeholder="Symptoms"
                          />
                        </div>
                        <div>
                          <label>Prescriptions: </label>
                          <input
                            type="text"
                            value={prescription}
                            onChange={(e) => setPrescription(e.target.value)}
                            placeholder="Appointment Details"
                          />
                        </div>
                        <button type="button" onClick={updatewalk_in}>
                          Save
                        </button>
                      </form>
                    </td>
                  </tr>
                )}
              </table>
            ) : (
              <p>No patients waiting for Checkup</p>

            )}
          </div>
        </div>
      </div>
    </>
  );
}
