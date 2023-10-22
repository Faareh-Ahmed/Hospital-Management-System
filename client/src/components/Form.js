import React from 'react';

export default function Form() {
    return (
        <div className="flex flex-col bg-blue-300 h-full p-4">
            Content started

            <div className="flex flex-wrap -mx-4 bg-slate-600">

                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 bg-blue-300">
                    <form className="bg-white p-8 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="border-2 border-gray-300 p-2 w-full rounded-lg"
                            />
                        </div>
                    </form>
                </div>


                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 bg-blue-300">
                    <form className="bg-white p-8 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Blood Group:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="border-2 border-gray-300 p-2 w-full rounded-lg"
                            />
                        </div>
                    </form>
                </div>



                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 bg-blue-300">
                    <form className="bg-white p-8 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label htmlFor="contactNumber" className="block text-gray-700">Contact Number:</label>
                            <input
                                type="tel"  
                                id="contactNumber"
                                name="contactNumber"
                                required
                                pattern="[0-9]*"  
                                className="border-2 border-gray-300 p-2 w-full rounded-lg"
                            />
                        </div>
                    </form>
                </div>


                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 bg-blue-300">
                    <form className="bg-white p-8 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="border-2 border-gray-300 p-2 w-full rounded-lg"
                            />
                        </div>
                    </form>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 bg-blue-300">
                    <form className="bg-white p-8 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Gender:</label>
                            <select
                                id="gender"
                                name="gender"
                                className="border-2 border-gray-300 p-2 w-full rounded-lg"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </form>
                </div>


                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 bg-blue-300">
                    <form className="bg-white p-8 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label htmlFor="cnic" className="block text-gray-700">CNIC:</label>
                            <input
                                type="text"
                                id="cnic"
                                name="cnic"
                                required
                                className="border-2 border-gray-300 p-2 w-full rounded-lg"
                            />
                        </div>
                    </form>
                </div>


                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 bg-blue-300">
                    <form className="bg-white p-8 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Age:</label>
                            <input
                                type="number"  
                                id="age"
                                name="age"
                                required
                                min="0"  
                                className="border-2 border-gray-300 p-2 w-full rounded-lg"
                            />
                        </div>
                    </form>
                </div>



                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 bg-blue-300">
                    <form className="bg-white p-8 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="border-2 border-gray-300 p-2 w-full rounded-lg"
                            />
                        </div>
                    </form>
                </div>





                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 bg-blue-300">
                    <form className="bg-white p-8 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="border-2 border-gray-300 p-2 w-full rounded-lg"
                            />
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
}
