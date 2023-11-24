import React from 'react';

export default function Form({ fields }) {
    return (
        <div className="flex flex-col bg-blue-300 h-full p-4">
            Content started

            <div className="flex flex-wrap -mx-4 bg-slate-600">
                {fields.map((field, index) => (
                    <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 bg-blue-300">
                        <form className="bg-white p-8 rounded-lg shadow-md">
                            <div className="mb-4">
                                <label htmlFor={field.name} className="block text-gray-700">
                                    {field.label}:
                                </label>
                                <input
                                    type={field.type}
                                    id={field.name}
                                    name={field.name}
                                    required={field.required}
                                    pattern={field.pattern}
                                    min={field.min}
                                    className="border-2 border-gray-300 p-2 w-full rounded-lg"
                                />
                            </div>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    );
}
