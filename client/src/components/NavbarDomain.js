import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavbarDomain({ role }) {
    const navigate = useNavigate();

    const getDashboardText = (role) => {
        switch (role) {
          case 'doctor':
            return 'Doctor Dashboard';
          case 'nurse':
            return 'Nurse Dashboard';
          case 'employee':
            return 'Employee Dashboard';
          case 'patient':
            return 'Patient Dashboard';
          case 'admin':
            return 'Admin Dashboard';
          default:
            return 'Dashboard';
        }
      };

    return (
        <>
            <div className='w-full bg-black text-white py-3 flex'>
                <div className='flex items-center px-4 max-lg:hidden w-2/4 justify-end'>
                    <div className='text-white font-semibold'>
                        <h1>{getDashboardText(role)}</h1>
                    </div>
                </div>
                <div className='flex items-center  w-1/2 justify-end'>
                    <button
                        className='bg-red-600 text-white px-4 py-2 rounded-md border border-cyan-500 hover:bg-red-700 focus:outline-none focus:border-red-700 mx-2'
                        onClick={() => navigate(`/${role}`)}
                    >
                        LogOut
                    </button>
                </div>
            </div>
        </>
    );
}
