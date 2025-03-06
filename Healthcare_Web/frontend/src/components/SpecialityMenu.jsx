import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'
import "./SpecialityMenu.css"

const SpecialityMenu = () => {
  return (
    <div className="speciality-menu" id="speciality">
    <h1 className="speciality-title">Choose Your Specialist</h1>
    <p className="speciality-description">
        No more waiting rooms or long commutes. Connect with experienced doctors and specialists.
    </p>

    <div className="speciality-list">
        {specialityData.map((item, index) => (
            <Link
                onClick={() => scrollTo(0, 0)}
                className="speciality-item"
                key={index}
                to={`/doctors/${item.speciality}`}
            >
                <img className="speciality-image" src={item.image} alt={item.speciality} />
                <p className="speciality-name">{item.speciality}</p>
            </Link>
        ))}
    </div>
</div>
  )
}

export default SpecialityMenu