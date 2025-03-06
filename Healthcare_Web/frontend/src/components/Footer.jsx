import React from 'react'
import { assets } from '../assets/assets'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
            <div className="footer-grid">
                {/*---Right section ---*/}
                <div>
                    <img className="footer-logo" src={assets.logo} alt="HealthHarmony Logo" />
                    <p className="footer-description">
                        HealthHarmony is dedicated to providing a seamless healthcare experience. Easily manage your appointments, access medical records, and connect with healthcare professionals—all in one place.
                    </p>
                </div>

                {/*---Center section ---*/}
                <div>
                    <p className="footer-section-title">COMPANY</p>
                    <ul className="footer-list">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                {/*---Left section ---*/}
                <div>
                    <p className="footer-section-title">GET IN TOUCH</p>
                    <ul className="footer-list">
                        <li>123 Wellness St,<br /> HealthCity, Colombo</li>
                        <li>+94 112 132 112</li>
                        <li>healthharmony@gmail.com</li>
                    </ul>
                </div>
            </div>

            {/*---Copy Right ---*/}
            <div>
                <hr className="footer-hr"/>
                <p className="footer-copy-right-text">Copyright © 2025 HealthHarmony - All Right Reserved.</p>
            </div>
        </div>
  )
}

export default Footer