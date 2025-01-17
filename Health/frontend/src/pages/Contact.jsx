import React from 'react'
import { assets } from '../assets/assets'
const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500 '>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span> </p>
      </div>

      <div className='my-10 flex flex-col gap-20 justify-center md:flex-row  mb-28 text-sm '>
      
        <img className='w-auto  md:max-w-[550px] rounded-lg border-l-slate-900' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
          <p className='text-gray-700'>Address: 123 Wellness St,<br/>
             HealthCity, Colombo</p>
          <p className='text-gray-700'>Tel: (035) 555‑0132 <br/> or    +94 112 132 112<br />
           Email: supporthealthharmony@gmail.com</p>
          <p className='text-gray-700'>This system is not for emergency use.<br/> In case of emergency, please call [+94 514 456 123].</p>
          <p className='font-semibold text-lg text-gray-600'>Carrers at HealthHarmony</p>
          <p className='font-bold text-md text-gray-500'>Join Our Team</p>
         
          <p className='text-gray-700'>Are you passionate about transforming healthcare?<br/> 
            Do you want to be a part of a dynamic and innovative team 
            that's making a difference? <br/>At HealthHarmony, we're on a mission
             to revolutionize the way patients interact with
             healthcare services,<br/> and we need talented individuals like you to help us achieve our vision.
          </p>
          <p className='text-gray-700'>Learn more about our teams and job openings.</p>
          <button className=' bg-purple-100 rounded-lg border border-black px-8 py-4 text-sm hover:bg-blue-950 hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact