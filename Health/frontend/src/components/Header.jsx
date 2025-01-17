import React from 'react'
import { assets } from '../assets/assets'


const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 stroke-black'>
        {/*--leftside --*/}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] '>
            <p className='text-5xl md:text-5xl lg:text-5xl text-purple-200 font-semibold leading-tight md:leading-tight lg:leading-tight'>Your Health, Simplified</p><br/>
            <p className='lg:text-1xl text-white font-bold'>Get timely, reliable, and compassionate care that suits your lifestyle.<br/> 
            Simply browse through our extensive list of trusted doctors,<br/>schedule your appointment hassle-free.</p>
            <br/><br/><br/><br/>
            <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full font-semibold text-blue-950 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' >Book appointment <img className='w-3' src={assets.arrow_icon} alt="" /></a>
        </div>
        
         {/*--rightside--- */}
         <div   className='hidden md:block md:w-1/2 lg:w-[450px] relative'>
            <img className ='w-auto md:absolute bottom-14 h-96  rounded-lg' src={assets.header_img} alt="" />
         </div>
        
    </div>
  )
}

export default Header