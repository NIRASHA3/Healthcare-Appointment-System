import React from 'react'
import { assets } from '../assets/assets'
import "./About.css"

const About = () => {
  return (
    <div className="about-container">
            {/* About Us Heading */}
            <div className="about-heading">
                <p>
                    ABOUT <span>US</span>
                </p>
            </div>

            {/* About Content Section */}
            <div className="about-content">
                <img
                    className="about-image"
                    src={assets.about_image}
                    alt="About HealthHarmony"
                />
                <div className="about-text">
                    <p>
                        Welcome to HealthHarmony, your trusted partner in managing your
                        healthcare needs conveniently and efficiently. We
                        understand the challenges individuals face when it comes to
                        scheduling doctor appointments and managing their health records.
                    </p>
                    <p>
                        HealthHarmony is committed to excellence in healthcare technology. We
                        continuously strive to enhance our platform, integrating the latest
                        advancements to improve user experience and deliver superior
                        service. Whether you're booking your first appointment or managing
                        ongoing care, HealthHarmony is here to support you every step of the
                        way.
                    </p>
                    <b>Our Vision</b>
                    <p>
                        At HealthHarmony, our vision is to revolutionize the healthcare experience by bridging
                        the gap between patients and healthcare providers through seamless, innovative, and user-friendly
                        appointment booking solutions. We aspire to create an accessible and efficient platform that empowers
                        patients to take control of their health journey, fosters stronger patient-provider relationships,
                        and ultimately leads to better health outcomes.
                    </p>
                    <p>
                        Patient-Centric Care: We aim to place patients at the heart of everything we do, offering intuitive and
                        personalized tools that make scheduling healthcare appointments easy and stress-free.
                    </p>
                    <p>
                        Innovative Technology: Our vision includes leveraging cutting-edge technology to provide a secure, efficient, and
                        reliable booking system that integrates seamlessly with healthcare providers' existing systems.
                    </p>
                    <p>
                        By keeping this vision at the forefront of our efforts, HealthHarmony aims to transform the way patients interact
                        with healthcare services, making the process more efficient, convenient, and ultimately, harmonious.
                    </p>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="why-choose-us">
                <p>
                    WHY <span>CHOOSE US</span>
                </p>
            </div>

            {/* Features Section */}
            <div className="features">
                <div className="feature-card">
                    <b>Efficiency:</b>
                    <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                </div>
                <div className="feature-card">
                    <b>Convenience:</b>
                    <p>Access to a network of trusted healthcare professionals in your area.</p>
                </div>
                <div className="feature-card">
                    <b>Personalization:</b>
                    <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
                </div>
            </div>
        </div>
  )
}

export default About