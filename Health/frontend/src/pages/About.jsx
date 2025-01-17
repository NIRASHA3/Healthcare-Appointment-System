import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12 ">
        <img className="w-full md:max-w-[400px] rounded-lg"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-700 ">
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
          <b className="text-gray-800">Our Vision</b>
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
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20 bg-purple-100 rounded-lg">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] rounded-lg  border-gray-400 hover:bg-primary hover:text-white transition-all duration-300 text-gray-600">
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] rounded-lg  border-gray-400 hover:bg-primary hover:text-white transition-all duration-300 text-gray-600">
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] rounded-lg  border-gray-400 hover:bg-primary hover:text-white transition-all duration-300 text-gray-600">
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      
      </div>
    </div>
  )
}

export default About