import React, { useState, useEffect } from "react";
import SideNavbar from "../../components/SideNavbar";
import { IoMdStopwatch } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";
import NavbarDomain from "../../components/NavbarDomain";

export default function AssignedRoomNurse() {
  const [roomData, setRoomData] = useState([]);
  const ID = JSON.parse(localStorage.getItem('nurseInfo'));

  const nurseID = ID.idNurse; // Replace 'your_nurse_id' with the actual nurse ID

  useEffect(() => {
    fetchRoomData();
  }, []);

  const fetchRoomData = async () => {
    try {
      const response = await fetch("/nurse/show-room", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nurseID }),
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

  const nurseMenus = [
    { name: "Info", link: "/nurse/info", icon: IoMdSchool },
    {
      name: "Assigned Rooms",
      link: "/nurse/assigned-room",
      icon: IoMdStopwatch,
    },
  ];

  return (
    <>
      <div className="flex gap-4">
        <SideNavbar menus={nurseMenus} />
        <div className="flex flex-col w-full">
          <NavbarDomain role="nurse" />

          <div className="text-xl text-gray-900 font-semibold w-full h-full">
            Assigned Rooms
            {Array.isArray(roomData) && roomData.length > 0 ? (
            <table className="border-collapse border w-full">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border py-2 px-4">Room</th>
                      <th className="border py-2 px-4">Floor</th>
                      <th className="border py-2 px-4">Availability</th>
                      <th className="border py-2 px-4">Capacity</th>
                      <th className="border py-2 px-4">AdmitDate</th>
                      <th className="border py-2 px-4">DischargeDate</th>
                      <th className="border py-2 px-4">PricePerDay</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roomData.map((room,index) => (
                      <tr key={room.idroom} className="hover:bg-gray-100">
                        <td className="border py-2 px-4">{index + 1}</td>
                        <td className="border py-2 px-4">{room.Floor}</td>
                        <td className="border py-2 px-4">{room.Availability}</td>
                        <td className="border py-2 px-4">{room.Capacity}</td>
                        <td className="border py-2 px-4">{room.AdmitDate}</td>
                        <td className="border py-2 px-4">
                          {room.DischargeDate}
                        </td>
                        <td className="border py-2 px-4">
                          {room.PricePerDay}
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table> ): (
              <p>No assigned rooms found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
