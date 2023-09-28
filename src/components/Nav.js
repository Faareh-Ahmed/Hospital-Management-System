import React from 'react'
import Lottie1 from '../lotties/lottie1.json'
import Lottie from 'lottie-react';
import hamburger from '../icons/hamburger.svg'
export default function Nav() {
  return (
<>
<header className='padding-x py-8 absolute z-10 w-full bg-gray-500'>
        <nav className=' flex justify-between items-center max-container bg-purple-400'>


          <div className='w-1/12 h-1/6 bg-black'>
            <Lottie animationData={Lottie1}  />
          </div>

          <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
              <li>Home</li>
              <li>Description</li>
              <li>Contributors</li>
              <li>Contact Us</li>
              
          </ul>
          <div className='hidden max-lg:block'>
            <img src={hamburger} alt='hamburger' height={25} width={25}/>
          </div>


        </nav>
      </header>
</>
    )
}
