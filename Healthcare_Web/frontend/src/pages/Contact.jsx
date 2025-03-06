import React from 'react'
import { assets } from '../assets/assets'
import "./Contact.css"
const Contact = () => {
  return (
    <div className="contact-container">
    {/* Contact Us Heading */}
    <div className="contact-heading">
        <p>CONTACT <span>US</span></p>
    </div>

    {/* Contact Content Section */}
    <div className="contact-content">
        <img
            className="contact-image"
            src={assets.contact_image}
            alt="Contact HealthHarmony"
        />
        <div className="contact-details">
            <p className="office-title">Our OFFICE</p>
            <p>Address: 123 Wellness St,<br />
                HealthCity, Colombo</p>
            <p>Tel: (035) 555‑0132 <br /> or +94 112 132 112<br />
                Email: supporthealthharmony@gmail.com</p>
            <p>This system is not for emergency use.<br /> In case of emergency, please call [+94 514 456 123].</p>
            <p className="careers-title">Carrers at HealthHarmony</p>
            <p className="join-team">Join Our Team</p>
            <p>Are you passionate about transforming healthcare?<br />
                Do you want to be a part of a dynamic and innovative team
                that's making a difference? <br />At HealthHarmony, we're on a mission
                to revolutionize the way patients interact with
                healthcare services, and we need talented individuals like you to help us achieve our vision.
            </p>
            <p>Learn more about our teams and job openings.</p>
            <button className="explore-jobs-button">Explore Jobs</button>
        </div>
    </div>
</div>
  )
}

export default Contact