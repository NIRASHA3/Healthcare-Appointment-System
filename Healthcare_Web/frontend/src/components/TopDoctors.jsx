import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import "./TopDoctors.css"

const TopDoctors = () => {
   
   const navigate=useNavigate()
   const {doctors}=useContext(AppContext)
   


  return (
    <div className="top-doctors">
            <h1 className="top-doctors-title">Top Doctors to Book</h1>
            <p className="top-doctors-description">
            Choose your preferred date, time, and healthcare provider.<br/>Schedule appointments with just a few clicks.
            </p>
            <div className="doctors-grid">
                {doctors.slice(0, 10).map((item, index) => (
                    <div
                        onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0); }}
                        className="doctor-card"
                        key={index}
                    >
                        <img className="doctor-image" src={item.image} alt={item.name} />
                        <div className="doctor-details">
                            <div className="availability">
                                <p className="availability-dot"></p>
                                <p >Available</p>
                            </div>
                            <p className="doctor-name">{item.name}</p>
                            <p className="doctor-speciality">{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={() => { navigate('/doctors'); scrollTo(0, 0); }}
                className="more-button"
            >
                more
            </button>
        </div>

        
    
    
  )
}

export default TopDoctors