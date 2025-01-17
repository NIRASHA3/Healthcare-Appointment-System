import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'

const MyAppointments = () => {

  const {doctors} = useContext(AppContext)

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My appointments</p>
      <div>
        {doctors.slice(0,3).map((item, index)=>(
          <div className='grid grid-cols[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
            <div>
              <img className='w-36 bg-purple-50 rounded-lg' src={item.image} alt="" />
            </div>
            <div className='flex-1 text-sm text-zinc-700'>
              <p className='text-neutral-800 font-semibold'>{item.name}</p>
              <p>{item.speciality}</p>
              <p className='text-zinc-700 font-medium mt-1'>Address:</p>
              <p className='text-xs'>{item.address.line1}</p>
              <p className='text-xs'>{item.address.line2}</p>
              <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> 13, Jan, 2025 | 9:30 AM</p>
            </div>
            <div></div>
            <div className='flex flex-col gap-2 justify-center'>
              <button className='text-sm text-stone-600 border-gray-600 text-center sm:min-w-48 py-2 border rounded hover:bg-blue-950 hover:text-white transition-all duration-300'>Pay Online</button>
              <button className='text-sm text-stone-600 border-gray-600 text-center sm:min-w-48 py-2 border rounded hover:bg-red-950 hover:text-white transition-all duration-300'>Cancel appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments