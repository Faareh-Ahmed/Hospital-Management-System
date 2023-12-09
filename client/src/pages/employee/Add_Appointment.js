import React from "react";
import SideNavbar from "../../components/SideNavbar";
import { IoMdStopwatch } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";
import NavbarDomain from "../../components/NavbarDomain";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Add_Appointment() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    gender: "",
    age: "",
    disease: "",
    bloodGroup: "",
    address: "",
    height: "",
    weight: "",
    doctorID: "",
    date: "",
  });

  const [availableDoctors, setAvailableDoctors] = useState([]);

  useEffect(() => {
    fetchDoctorData();
  }, []);

  const fetchDoctorData = async () => {
    try {
      const apiUrl = "/receptionist/show-doctors"; // API endpoint URL
      const response = await axios.get(apiUrl); // Use axios to make a GET request

      if (response.status === 200) {
        const data = response.data;
        setAvailableDoctors(data); // Update availableDoctors state with fetched data
        console.log(data); // Log the received data for testing
      } else {
        throw new Error("Failed to fetch doctor data");
      }
    } catch (error) {
      console.error("Error fetching doctor data:", error);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send the form data to your backend API endpoint
      const apiUrl = "http://localhost:5000/receptionist/add-appointment"; // Replace with your backend API URL
      const response = await axios.post(apiUrl, formData);

      console.log("data bhej diya");
      console.log(formData);
      // Handle response if needed
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);

      console.log(formData);
      console.log("masla ban gaya");
      console.error("Error sending data:", error);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const employeeMenus = [
    { name: "Info", link: "/employee/info", icon: IoMdSchool },
    {
      name: "Add Appointment",
      link: "/employee/add-appointment",
      icon: IoMdStopwatch,
    },
    {
      name: "Show Appointments",
      link: "/employee/show-appointment",
      icon: IoMdSchool,
    },
    { name: "Show Rooms", link: "/employee/show-room", icon: IoMdSchool },
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

          <div className=" text-xl text-gray-900 font-semibold  w-full h-full ">
            {/* <Form fields={EmployeeFields} /> */}
            Add New Patient
            <form>
              <div className="space-y-12 px-8">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          onChange={handleInputChange}
                          name="firstName"
                          value={formData.firstName}
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleInputChange}
                          value={formData.lastName}
                          type="text"
                          name="lastName"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleInputChange}
                          value={formData.email}
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Contact Number
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleInputChange}
                          value={formData.contactNumber}
                          id="contactNumber"
                          name="contactNumber"
                          type="tel"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Disease
                      </label>
                      <div className="mt-2">
                        <textarea
                          name="disease"
                          onChange={handleInputChange}
                          value={formData.disease}
                          rows={3}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                          defaultValue={""}
                        />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        Write a few sentences about the Symptoms and Disease.
                      </p>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Blood Group
                      </label>
                      <div className="mt-2">
                        <select
                          onChange={handleInputChange}
                          value={formData.bloodGroup}
                          name="bloodGroup"
                          autoComplete="country-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 p-2"
                        >
                          <option>O-</option>
                          <option>O+</option>
                          <option>A+</option>
                          <option>A-</option>
                          <option>B+</option>
                          <option>B-</option>
                          <option>AB+</option>
                          <option>AB-</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Street address
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleInputChange}
                          value={formData.address}
                          type="text"
                          name="address"
                          autoComplete="street-address"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Age
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleInputChange}
                          value={formData.age}
                          type="text"
                          name="age"
                          autoComplete="street-address"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Height (cm)
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleInputChange}
                          value={formData.height}
                          type="text"
                          name="height"
                          id="height"
                          autoComplete="off"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                          placeholder="Enter height"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Weight (kg)
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleInputChange}
                          value={formData.weight}
                          type="text"
                          name="weight"
                          id="weight"
                          autoComplete="off"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                          placeholder="Enter Weight"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
  <label
    htmlFor="country"
    className="block text-sm font-medium leading-6 text-gray-900"
  >
    Available Doctors
  </label>
  <div className="mt-2">
    <select
      id="appointmentdoctors"
      name="doctorID"
      autoComplete="country-name"
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 p-2"
      value={formData.doctorID}
      onChange={handleInputChange}
    >
      <option value="">Select Doctor</option>
      {availableDoctors.map((doctor,index) => (
        <option key={doctor.id} value={index+1}>
          {doctor.Name}
        </option>
      ))}
    </select>
  </div>
</div>


                    <div className="sm:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Appointment Date
                      </label>
                      <div className="mt-2">
                        <input
                          type="date"
                          onChange={handleInputChange}
                          value={formData.date}
                          name="date"
                          autoComplete="off"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                          placeholder="Enter Weight"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                  <div className="mt-10 space-y-10">
                    <fieldset>
                      <legend className="text-sm font-semibold leading-6 text-gray-900">
                        Gender
                      </legend>
                      <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                          <input
                            onChange={handleInputChange}
                            value="Male"
                            checked={formData.gender === "Male"}
                            id="gender-male"
                            name="gender"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="gender-male"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Male
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            onChange={handleInputChange}
                            value="Female"
                            checked={formData.gender === "Female"}
                            id="gender-female"
                            name="gender"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="gender-female"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Female
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            onChange={handleInputChange}
                            value="Does not Prefer"
                            checked={formData.gender === "Does not Prefer"}
                            id="gender-not-preferred"
                            name="gender"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="gender-not-preferred"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Does Not Prefer
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  onClick={handleFormSubmit}
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
