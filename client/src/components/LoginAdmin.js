import React from "react";
import { useNavigate } from "react-router-dom";
import Hero2 from "../images/hero2.jpg";
import Lottie1 from "../lotties/lottie1.json";
import Lottie from "lottie-react";
import axios from "axios";

export default function LoginAdmin() {
  const navigate = useNavigate();

  const handleLogIn = async (event) => {
    event.preventDefault();

    try {
      console.log("sending data");
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const apiUrl = "http://localhost:5000/admin/login";
      const response = await axios.post(apiUrl, { username, password });

      // Check the response data for successful authentication
      if (response.data.message === "Authentication successful") {
        const adminInfo = response.data.userInfo;
        localStorage.setItem('adminInfo', JSON.stringify(adminInfo));
        navigate("/admin/info" );
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error response:", error.response.data);
        console.error("Status code:", error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error setting up the request:", error.message);
      }
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <div className="relative w-full h-screen bg-zinc-900/90">
        <img
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={Hero2}
          alt="Background of Login Page"
        />
        <div className="absolute w-1/12 h-1/12">
          <Lottie
            onClick={() => navigate("/domain")}
            className="hover:cursor-pointer"
            animationData={Lottie1}
          />
        </div>
        <div className="flex justify-center items-center h-full">
          <form className="max-w-[400px] w-full mx-auto bg-white p-8">
            <h1 className="relative text-4xl font-bold text-center py-4 bg-white">
              MediCare
            </h1>
            <div className="flex flex-col mb-4">
              <label className="relative">UserName</label>
              <input
                id="username"
                className="relative bg-gray-100 border p-2"
                type="text"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="relative">Password</label>
              <input
                id="password"
                className="relative bg-gray-100 border p-2"
                type="password"
              />
            </div>
            <button
              onClick={handleLogIn} // This will trigger the handleLogIn function on button click
              className="relative border w-full my-5 py-2 bg-blue-700 hover:bg-blue-600 text-white"
            >
              Sign In
            </button>
            
            <p className="relative text-center mt-8">Admin Portal</p>
          </form>
        </div>
      </div>
    </>
  );
}
