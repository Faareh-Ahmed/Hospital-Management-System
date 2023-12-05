

import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import { IoMdStar } from 'react-icons/io';
import { IoMdSubway } from 'react-icons/io';
import NavbarDomain from '../../components/NavbarDomain';

export default function AddRoomAdmin(){

    const AdminMenus = [
        { name: "Info", link: '/admin/info', icon: IoMdSubway },
        { name: "Add Doctor", link: '/admin/add-doctor', icon: IoMdStar },
        { name: "Show Staff", link: '/admin/show-staff', icon: IoMdSubway },
        { name: "Add Nurses", link: '/admin/add-nurse', icon: IoMdSubway },
        { name: "Add Employees", link: '/admin/add-employee', icon: IoMdSubway },
        { name: "Add Rooms", link: '/admin/add-room', icon: IoMdSubway },
        { name: "History", link: '/admin/history', icon: IoMdSubway },
    ];



    return (
        <>
            <div className='flex gap-4'>

<SideNavbar menus={AdminMenus} />
<div className='flex flex-col w-full'>
    <NavbarDomain  role ='admin'/>

    <div className=' text-xl text-gray-900 font-semibold  w-full h-full '>
        {/* <Form fields={EmployeeFields} /> */}
        Add Room
        <form>
            <div className="space-y-12">


                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                       

                        



       


                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Room Type
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option>Clinical Room</option>
                                    <option>Admit Room</option>                                    
                                </select>
                            </div>
                        </div>

  

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                Room Capacity
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="height"
                                    id="height"
                                    autoComplete="off"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter height"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                Floor No.
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="weight"
                                    id="weight"
                                    autoComplete="off"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter Weight"
                                />
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">


                    <div className="mt-10 space-y-10">
                       
                        <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Room Availability</legend>
                            <div className="mt-6 space-y-6">
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="push-everything"
                                        name="push-notifications"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                        Free
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="push-email"
                                        name="push-notifications"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Occupied
                                    </label>
                                </div>
                                
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
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
        </>)
}
