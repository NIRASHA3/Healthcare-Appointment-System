import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import "./RelatedDoctors.css"

const RelatedDoctors = ({speciality, docId}) => {

    const {doctors} = useContext(AppContext)
    const navigate = useNavigate()

    const [relDoc, setRelDocs] = useState([])

    useEffect(()=>{
       if(doctors.length > 0 && speciality){
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id!== docId)
            setRelDocs(doctorsData)
       }
    },[doctors, speciality, docId])


  return (
    <div className="related-doctors-container">
    <h1 className="related-doctors-heading">Related Doctors</h1>
    <p className="related-doctors-description">
        Simply browse through our extensive list of trusted doctors.
    </p>
    <div className="related-doctors-grid">
        {relDoc.slice(0, 5).map((item, index) => (
            <div
                key={index}
                className="doctor-card"
                onClick={() => {
                    navigate(`/appointment/${item._id}`);
                    window.scrollTo(0, 0);
                }}
            >
                <img className="doctor-image" src={item.image} alt={item.name} />
                <div className="doctor-details">
                    <div className="availability">
                        <div className="availability-dot"></div>
                        <p className='availability-p'>Available</p>
                    </div>
                    <p className="doctor-name">{item.name}</p>
                    <p className="doctor-speciality">{item.speciality}</p>
                </div>
            </div>
        ))}
    </div>
    <button
        className="more-button"
        onClick={() => {
            navigate('/doctors');
            window.scrollTo(0, 0);
        }}
    >
        more
    </button>
</div>
  )
}

export default RelatedDoctors