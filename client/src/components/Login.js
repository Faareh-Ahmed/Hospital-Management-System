import React from 'react'
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Hero2 from '../images/hero2.jpg'
import Lottie1 from '../lotties/lottie1.json'
import Lottie from 'lottie-react';
export default function Login({role}) {

    const navigate = useNavigate(); // Initialize the navigate function


    const handleLogIn = async () => {
        try {
            // Determine the API endpoint based on the user's role
            let apiUrl = '';
            if (role === 'admin') {
                apiUrl = '/api/admin/login'; // Replace with your admin login API endpoint
            } else if (role === 'doctor') {
                apiUrl = '/api/doctor/login'; // Replace with your doctor login API endpoint
            } else if (role === 'patient') {
                apiUrl = '/api/patient/login'; // Replace with your patient login API endpoint
            } else if (role === 'staff') {
                apiUrl = '/api/staff/login'; // Replace with your staff login API endpoint
            }

            // Make an API call using fetch or axios
            const response = await fetch(apiUrl, {
                method: 'POST',
                // Add any necessary headers or body data for authentication
                headers: {
                    'Content-Type': 'application/json',
                    // Add additional headers if required for authentication or authorization
                },
                // Add body data if required for authentication (e.g., username and password)
                body: JSON.stringify({ /* Add login credentials if needed */ }),
            });

            // Redirect upon successful login
            if (response.ok) {
                navigate(`/${role}/info`); // Redirect to the specific role's info page
            } else {
                // Handle unsuccessful login (e.g., display error messages)
                console.error('Login failed');
            }
        } catch (error) {
            // Handle errors
            console.error('Error logging in:', error);
        }
    };

    return (
        <>
            <div className='relative w-full h-screen bg-zinc-900/90'>
                <img className='absolute w-full h-full object-cover  mix-blend-overlay' src={Hero2} alt='Background  of Login Page'></img>
                <div className='absolute w-1/12 h-1/12 '>
                <Lottie 
                onClick={() => navigate('/')} // Navigate to the Login page
                className='hover:cursor-pointer'
                animationData={Lottie1} />
            </div>
                <div className='flex justify-center items-center  h-full'>
                    <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
                        <h1 className='relative text-4xl font-bold text-center py-4 bg-white'>MediCare</h1>
                        
                        <div className='flex flex-col mb-4'>
                            <label className='relative'>UserName</label>
                            <input  className='relative bg-gray-100 border p-2' type='text' />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='relative'>Password</label>
                            <input  className='relative bg-gray-100 border p-2' type='password' />
                        </div>
                        <button
                        onClick={handleLogIn}
                        className='relative border w-full my-5 py-2 bg-blue-700 hover:bg-blue-600 text-white'>Sign In</button>
                            <p className='relative text-center mt-8'>Create an Account</p>
                    </form>
                </div>

            </div>
        </>
    )
}
