import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
   <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm  '>
        {/*---Right section ---*/}
        <div>
          <img className=' mb-5 w-44 cursor-pointer' src={assets.logo} alt=""/>
          <p className='w-full md:w-2/3 text-gray-700 leading-6'>HealthHarmony is dedicated to providing a seamless healthcare experience. Easily manage your appointments, access medical records, and connect with healthcare professionals—all in one place.</p>   
         </div>
      
      {/*---Center section ---*/}
      <div>
        <p className='text-lg font-medium mb-5 text-gray-800'>COMPANY</p>
        <ul className='flex flex-col gap-2 text-gray-700'>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Privacy policy</li>
        </ul>

      </div>
      {/*---Left section ---*/}
      <div>
      <p className='text-lg font-medium mb-5 text-gray-800'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-2 text-gray-700'>
          <li>123 Wellness St,<br/> HealthCity, Colombo</li>
          <li>+94 112 132 112</li>
          <li>supporthealthharmony@gmail.com</li>
        </ul>  
      </div>
      </div>
      {/*---Copy Right ---*/}
      <div>
        <hr className='border-b-2 border-b-primary '/>
        <p className='py-5 text-sm text-center'>Copyright © 2024 HealthHarmony - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer