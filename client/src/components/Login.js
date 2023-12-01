import React from 'react'
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Hero2 from '../images/hero2.jpg'
import Lottie1 from '../lotties/lottie1.json'
import Lottie from 'lottie-react';
export default function Login({role}) {

    const navigate = useNavigate(); // Initialize the navigate function


    const handleLogIn = () => {
        // Determine the redirect path based on the user's role
        const redirectPath = `/${role}/info`;
        navigate(redirectPath);
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
                            <p className='relative flex items-center'><input className='mr-2 relative' type='checkbox' />Remember Me</p>
                            <p className='relative text-center mt-8'>Create an Account</p>
                    </form>
                </div>

            </div>
        </>
    )
}
