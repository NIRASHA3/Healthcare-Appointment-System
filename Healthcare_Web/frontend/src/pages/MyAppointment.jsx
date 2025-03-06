import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'
import "./MyAppointment.css"

const MyAppointments = () => {

  const {doctors} = useContext(AppContext)

  return (
    <div className="appointments-container">
            {/* Appointments Heading */}
            <p className="appointments-heading">My appointments</p>

            {/* Appointments List */}
            <div>
                {doctors.slice(0, 3).map((item, index) => (
                    <div className="appointment-card" key={index}>
                        {/* Doctor Image */}
                        <div>
                            <img className="doctor-image" src={item.image} alt="Doctor" />
                        </div>

                        {/* Doctor Details */}
                        <div className="doctor-details">
                            <p className="doctor-name">{item.name}</p>
                            <p className="doctor-speciality">{item.speciality}</p>
                            <p className="doctor-address-title">Address:</p>
                            <p className="doctor-address-line">{item.address.line1}</p>
                            <p className="doctor-address-line">{item.address.line2}</p>
                            <p className="appointment-date-time">
                                <span>Date & Time:</span> 13, Jan, 2025 | 9:30 AM
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="appointment-buttons">
                            <button className="appointment-button pay">Pay Online</button>
                            <button className="appointment-button cancel">Cancel appointment</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default MyAppointments