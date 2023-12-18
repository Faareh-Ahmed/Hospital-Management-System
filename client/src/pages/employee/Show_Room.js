import React from "react";
import SideNavbar from "../../components/SideNavbar";
import { IoMdStopwatch } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";
import NavbarDomain from "../../components/NavbarDomain";
import { useEffect } from "react";
import { useState } from "react";
export default function Show_Room() {
  const [rooms, setRooms] = useState([]);

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

  useEffect(() => {
    fetchRooms();
  }, []); // Fetch rooms on component mount

  const fetchRooms = async () => {
    try {
      const response = await fetch("/receptionist/show-room");
      const data = await response.json();
      setRooms(data); // Update the rooms state with fetched data
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  return (
    <>
      <div className="flex gap-4">
        <SideNavbar menus={employeeMenus} />
        <div className="flex flex-col w-full">
          <NavbarDomain role="employee" />

          <div className="text-xl text-gray-900 font-semibold w-full h-full">
            <h2>Show Rooms</h2>
            <table className="border-collapse border-stone-950 border w-full bg-blue-600 text-white">
              <thead>
                <tr className="bg-purple-600">
                  <th className="border py-2 px-4">ID</th>
                  <th className="border py-2 px-4">Floor</th>
                  <th className="border py-2 px-4">Capacity</th>
                  <th className="border py-2 px-4">RoomType</th>
                  <th className="border py-2 px-4">Availability</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <tr key={room.idRoom} className="hover:bg-blue-900">
                    <td className="border py-2 px-4">{room.idRoom}</td>
                    <td className="border py-2 px-4">{room.Floor}</td>
                    <td className="border py-2 px-4">{room.Capacity}</td>
                    <td className="border py-2 px-4">{room.RoomType}</td>
                    <td className="border py-2 px-4">{room.Availability}</td>
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
