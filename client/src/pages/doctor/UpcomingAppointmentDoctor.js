import React, { useEffect, useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import { IoMdStopwatch } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";
import NavbarDomain from "../../components/NavbarDomain";

export default function UpcomingAppointmentDoctor() {
  const [appointment, setAppointments] = useState([]);
  const [patientHistory, setPatientHistory] = useState([]);


  const ID = JSON.parse(localStorage.getItem("doctorInfo"));

  const [clickedRow, setClickedRow] = useState(null);
  const [clickedHistoryRow, setClickedHistoryRow] = useState(null);

  const [prescription, setPrescription] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [showForm, setShowForm] = useState(false);

  const handleCheckPatientClick = (appointment) => {
    setClickedRow(appointment);
    setShowForm(true);
  };

  const handlePatientHistoryClick = (patient) => {
    setShowForm(true);
    setClickedHistoryRow(patient);
    // PatientHistory();
  };

  const idDoctor = ID.idDoctor;

  useEffect(() => {
    fetchAppointments();
  }, []);


  const handleRowClick = (patientId) => {
    console.log(`Doctor clicked Patient with idPatient: ${patientId}`);
  };


  const fetchAppointments = async () => {
    try {
      console.log(idDoctor);
      const response = await fetch("/doctor/show-appointments", {
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
        throw new Error("Failed to fetch appointment data");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const updateAppointment = async () => {
    try {
      // Perform API call to update appointment using the appointment ID and new data (prescription, appointmentDetails)
      const response = await fetch(
        `/doctor/update-appointment/${clickedRow.idappointment}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prescription, symptoms }),
        }
      );

      if (response.ok) {
        // Appointment updated successfully, perform necessary actions if needed
      } else {
        throw new Error("Failed to update appointment");
      }
    } catch (error) {
      console.error(error);
    }
  };


  const PatientHistory = async () => {
    try {
      if (!clickedHistoryRow) {
        console.error("clickedHistoryRow is null or undefined");
        return;
      }

      console.log("Calling API");
      const response = await fetch(`/doctor/patient-history/${clickedHistoryRow.idPatient}`);
      console.log("After calling API");
      if (response.ok) {
        const data = await response.json();
        console.log("Successfully Displayed the History Patient", data);
        // Handle the data as needed in your component state
        setPatientHistory(data)
      } else {
        throw new Error("Failed to retrieve patient history");
      }
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    // Move the PatientHistory call here after setting clickedHistoryRow
    if (showForm && clickedHistoryRow !== null) {
      PatientHistory();
    }
  }, [showForm, clickedHistoryRow]);

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
            Upcoming Appointments
            {Array.isArray(appointment) && appointment.length > 0 ? (
              <table className="border-collapse  border w-full  text-white">
                <thead>
                  <tr className="bg-purple-600">
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
                  {appointment.map((singleAppointment, index) => (
                    <tr
                      key={singleAppointment.idappointment}
                      className={`hover:bg-blue-900 ${clickedRow === singleAppointment ? 'bg-red-500' : 'bg-green-500'}`}
                      onClick={() => handleRowClick(singleAppointment.idPatient)}
                    >
                      <td className="border py-2 px-4">{index + 1}</td>
                      <td className="border py-2 px-4">
                        {singleAppointment.idPatient}
                      </td>
                      <td className="border py-2 px-4">
                        {singleAppointment.PatientName}
                      </td>
                      <td className="border py-2 px-4">
                        {singleAppointment.gender}
                      </td>
                      <td className="border py-2 px-4">
                        {singleAppointment.ContactNumber}
                      </td>
                      <td className="border py-2 px-4">
                        {singleAppointment.Age}
                      </td>
                      <td className="border py-2 px-4">
                        {singleAppointment.BMI}
                      </td>
                      <td className="border py-2 px-4">
                        {singleAppointment.Address}
                      </td>
                      <td className="border py-2 px-4">
                        {singleAppointment.AppointmentDate}
                      </td>
                      <td className="border py-2 px-4">
                        {singleAppointment.Status}
                      </td>
                      <td>
                        <button
                          className={`bg-${clickedRow === singleAppointment ? 'red' : 'green'}-500 hover:bg-${clickedRow === singleAppointment ? 'red' : 'green'}-700 text-white font-bold py-2 px-4 rounded`}
                          onClick={() => handleCheckPatientClick(singleAppointment)}>
                          Check Patient
                        </button>
                      </td>
                      <td>
                        <button
                          className={`bg-${clickedRow === singleAppointment ? 'red' : 'green'}-500 hover:bg-${clickedRow === singleAppointment ? 'red' : 'green'}-700 text-white font-bold py-2 px-4 rounded`}
                          onClick={() => handlePatientHistoryClick(singleAppointment)}>
                          Patient History
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                {showForm && clickedRow !== null && (
                  <tr>
                    <td colSpan="10">
                      <form className="bg-blue-300 p-6 rounded shadow-md mb-4">
                        <div className="mb-4">
                          <label className=" text-black text-m font-bold mb-2">
                            Patient ID:
                          </label>
                          <span className="text-red-600 text-m font-bold mb-2 pl-12">{clickedRow.idPatient}</span>
                        </div>
                        <div className="mb-4">
                          <label className="text-black text-m font-bold mb-2">
                            Patient Name:
                          </label>
                          <span className="text-red-600 text-m font-bold mb-2 pl-12">{clickedRow.PatientName}</span>
                        </div>
                        <div className="mb-4">
                          <label className="text-black text-m font-bold mb-2">
                            Appointment Date:
                          </label>
                          <span className="text-red-600 text-m font-bold mb-2 pl-12">{clickedRow.AppointmentDate}</span>
                        </div>
                        <div className="mb-4">
                          <label className="text-black text-m font-bold mb-2">
                            Symptoms:
                          </label>
                          <input
                            type="text"
                            value={symptoms}
                            onChange={(e) => setSymptoms(e.target.value)}
                            placeholder="Enter Symptoms"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="text-black text-m font-bold mb-2">
                            Prescriptions:
                          </label>
                          <input
                            type="text"
                            value={prescription}
                            onChange={(e) => setPrescription(e.target.value)}
                            placeholder="Enter Prescription"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={updateAppointment}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                          Save
                        </button>

                      </form>
                    </td>
                  </tr>
                )}



                {showForm && clickedHistoryRow !== null && (
                  <tr>
                    <td colSpan="10">
                      <h2 className="text-xl text-gray-900 font-semibold mb-4">
                        Patient Medical History
                      </h2>
                      <table className="border-collapse border-stone-950 border w-full bg-blue-600 text-white mb-4">
                        <thead>
                          <tr className="bg-orange-600">
                            <th className="border py-2 px-4">Patient Name</th>
                            <th className="border py-2 px-4">Doctor Name</th>
                            <th className="border py-2 px-4">Visit Date</th>
                            <th className="border py-2 px-4">Symptoms</th>
                            <th className="border py-2 px-4">Prescriptions</th>
                            {/* Add similar headers for other properties */}
                          </tr>
                        </thead>
                        <tbody>
                          {patientHistory.map((patientHistory, index) => (
                            <tr key={index} className="hover:bg-blue-900">
                              <td className="border py-2 px-4">{patientHistory.PatientName}</td>
                              <td className="border py-2 px-4">{patientHistory.DoctorName}</td>
                              <td className="border py-2 px-4">{patientHistory.VisitDate}</td>
                              <td className="border py-2 px-4">{patientHistory.Symptoms}</td>
                              <td className="border py-2 px-4">{patientHistory.Prescriptions}</td>
                              {/* Add similar cells for other properties */}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}






              </table>
            ) : (
              <p>No upcoming appointments found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
