import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import "./Banner.css";
const Banner = () => {
    const navigate = useNavigate()
  return (

    <div className="banner">
        {/* -----Left Side----- */}
        <div className="leftSide">
            <div className="title">
                <p>Book Appointments with your trusted doctors</p>
            </div><br/>
            <div className="description">
                <p >Wide Range of Specialties: From general practitioners to specialized surgeons.</p><hr />
                <p >Convenient Booking: Schedule your appointment at your preferred date.</p><hr /> 
                <p >Secure and Confidential: Your personal health information is protected.</p><hr /> 
                
            </div><br/>
            <button onClick={()=> {navigate('/login'); scrollTo(0,0)}} className="button" >Create account</button>
        </div>

         {/* -----Right Side----- */}
         <div className="rightSide">
         <img className="image" src={assets.appointment_img} alt="" />
         </div>
      
    </div>
  )
}

export default Banner