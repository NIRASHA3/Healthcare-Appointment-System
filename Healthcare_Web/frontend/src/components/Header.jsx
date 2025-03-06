import React from 'react'
import { assets } from '../assets/assets'
import "./Header.css"

const Header = () => {
  return (
    <div className="header-container">
    {/* Left Side */}
    <div className="header-left">
        <p className="header-title">Your Health, Simplified</p>
        <br />
        <p className="header-description">
            Get timely, reliable, and compassionate care that suits your lifestyle.<br />
            Simply browse through our extensive list of trusted doctors,<br />
            schedule your appointment hassle-free.
        </p>
        <br /><br /><br/>
        <a href="#speciality" className="header-button">
            Book appointment <img src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
    </div>

    {/* Right Side */}
    <div className="header-right">
        <img className="header-image" src={assets.header_img} alt="Header Image" />
    </div>
</div>
  )
}

export default Header