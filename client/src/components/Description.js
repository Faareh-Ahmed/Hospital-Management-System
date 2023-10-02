import React from 'react'
import Lottie2 from '../lotties/lottie2.json'
import Lottie3 from '../lotties/lottie3.json'

import Lottie from 'lottie-react';

export default function Description() {
  return (
    <>
      <div className='w-full bg-blue-200 py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
          <div className='w-full mx-auto my-4'>
            <Lottie animationData={Lottie2} />
          </div>
          <div className='flex flex-col justify-center mt-4'>
            <p className='text-black font-bold'>Data Management</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>DATA HANDLING</h1>
            <p>It can manage all the records perfectly by maintaining the records data digitally to access the trend</p>
            <button className='bg-black w-[200px] rounded font-medium my-6 mx-auto md:m-0 py-3 text-green-500  hover:bg-green-500 hover:text-black'>Get Started</button>
          </div>
        </div>
      </div>



      <div className='w-full bg-blue-200 py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <div className='w-full mx-auto my-4'>
            <Lottie animationData={Lottie3} />
          </div>
          <div className='flex flex-col justify-center mt-4'>
            <p className='text-black font-bold'>Data Management</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>DATA HANDLING</h1>
            <p>It can manage all the records perfectly by maintaining the records data digitally to access the trend</p>
            <button className='bg-black w-[200px] rounded font-medium my-6 mx-auto md:m-0 py-3 text-green-500 hover:bg-green-500 hover:text-black'>Get Started</button>
          </div>
        </div>
      </div>
    </>
  )
}
