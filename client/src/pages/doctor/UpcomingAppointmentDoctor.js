import React, { useEffect, useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import { IoMdStopwatch } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";
import NavbarDomain from "../../components/NavbarDomain";

export default function UpcomingAppointmentDoctor() {
  const [appointment, setAppointments] = useState([]);
  const ID = JSON.parse(localStorage.getItem("doctorInfo"));

  const [clickedRow, setClickedRow] = useState(null);
  const [prescription, setPrescription] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [showForm, setShowForm] = useState(false);

  const handleCheckPatientClick = (appointment) => {
    setClickedRow(appointment);
    setShowForm(true);
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
              <table className="border-collapse border-stone-950 border w-full bg-blue-600 text-white">
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
                        <button type="button" onClick={updateAppointment}>
                          Save
                        </button>
                      </form>
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
