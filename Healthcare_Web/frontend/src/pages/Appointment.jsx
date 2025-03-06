import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";
import "./Appointment.css";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([])

    // getting current date
    let today = new Date()

    for(let i=0; i<7; i++){
      // getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)

      // setting end time of the date with  index
      let endTime = new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0) 
      
      // setting hours
      if(today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while(currentDate < endTime){
        let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

        // add slot to array
        timeSlots.push({
        dateTime: new Date(currentDate),
        time: formattedTime
        })

        // increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots(prev => ([...prev, timeSlots]))
    }
  }

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  },[docInfo]);

  useEffect(()=>{
    console.log(docSlots)
  },[docSlots])

  return (
    docInfo && (
      <div className="appointment-container">
      {/* -----Doctor Details----- */}
      <div className="doctor-details-section">
          <div>
              <img
                  className="doctor-image"
                  src={docInfo.image}
                  alt="Doctor"
              />
          </div>

          <div className="doctor-info">
              {/* -----Doc Info: name, degree, experience----- */}
              <p className="doctor-name">
                  {docInfo.name}{" "}
                  <img className="w-5" src={assets.verified_icon} alt="Verified" />
              </p>
              <div className="doctor-degree">
                  <p>
                      {docInfo.degree} - {docInfo.speciality}
                  </p>
                  <button className="experience-badge">
                      {docInfo.experience}
                  </button>
              </div>
              {/* -----Doctor About----- */}
              <div className="about-section">
                  <p className="about-title">
                      About <img className="w-3" src={assets.info_icon} alt="Info" />
                  </p>
                  <p className="about-text">
                      {docInfo.about}
                  </p>
              </div>
              <p className="appointment-fee">
                  Appointment fee: <span>
                      {currencySymbol}
                      {docInfo.fees}
                  </span>
              </p>
          </div>
      </div>

      {/* -----Booking Slots----- */}
      <div className="booking-slots-section">
          <p className="booking-slots-title">Booking slots</p>
          <div className="slots-days">
              {docSlots.length && docSlots.map((item, index) => (
                  <div
                      onClick={() => setSlotIndex(index)}
                      className={`slot-day ${slotIndex === index ? 'active' : ''}`}
                      key={index}
                  >
                      <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                      <p>{item[0] && item[0].dateTime.getDate()}</p>
                  </div>
              ))}
          </div>

          <div className="slot-times">
              {docSlots.length && docSlots[slotIndex].map((item, index) => (
                  <p
                      onClick={() => setSlotTime(item.time)}
                      className={`slot-time ${item.time === slotTime ? 'active' : ''}`}
                      key={index}
                  >
                      {item.time.toLowerCase()}
                  </p>
              ))}
          </div>
          <button className="book-button">Book an appointment</button>
      </div>

      {/* --Related Doctors-- */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
  </div>
    )
  );
};

export default Appointment;