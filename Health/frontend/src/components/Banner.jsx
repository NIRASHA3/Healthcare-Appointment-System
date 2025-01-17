import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()
  return (

    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
        {/* -----Left Side----- */}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-purple-200'>
                <p>Book Appointments with your trusted doctors</p>
            </div><br/>
            <div>
                <p className='font-semibold text-white'>Wide Range of Specialties: From general practitioners to specialized surgeons.<hr/><br/>
                    Convenient Booking: Schedule your appointment at your preferred date. <hr/><br/>
                   Secure and Confidential: Your personal health information is protected.<hr/></p>
                
            </div><br/>
            <button onClick={()=> {navigate('/login'); scrollTo(0,0)}} className='bg-white text-sm sm:text-base text-blue-950 font-semibold px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Create account</button>
        </div>

         {/* -----Right Side----- */}
         <div className='hidden md:block md:w-1/2 lg:w-[450px] relative'>
         <img className='w-auto  bottom-14  h-96 rounded-lg absolute' src={assets.appointment_img} alt="" />
         </div>
      
    </div>
  )
}

export default Banner