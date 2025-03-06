import React, { useState } from 'react'
import {assets} from '../assets/assets'
import "./MyProfile.css"

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'Nethmi Perera',
    image: assets.profile_pic,
    email: 'nethmi2p@gmail.com',
    phone: '+91 356 134 679',
    address:{
      line1:'12th floor, Centerhall',
      line2:'Bambalapitiya, Colombo 7'
    },
    gender: 'Female',
    dob:'2002-04-20',
  })

  const [isEdit, setIsEdit] = useState(true)

  return (
    <div className="profile-container">
            {/* Profile Image */}
            <img className="profile-image" src={userData.image} alt="Profile" />

            {/* Profile Name */}
            {isEdit ? (
                <input
                    className="profile-name-input"
                    type="text"
                    value={userData.name}
                    onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
                />
            ) : (
                <p className="profile-name-text">{userData.name}</p>
            )}

            {/* Divider */}
            <hr className="profile-divider" />

            {/* Contact Information */}
            <div>
                <p className="contact-info-title">CONTACT INFORMATION</p>
                <div className="contact-info-grid">
                    <p className="contact-info-label">Email id:</p>
                    <p className="contact-info-email">{userData.email}</p>
                    <p className="contact-info-label">Phone:</p>
                    {isEdit ? (
                        <input
                            className="contact-info-phone-input"
                            type="text"
                            value={userData.phone}
                            onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
                        />
                    ) : (
                        <p className="contact-info-phone-text">{userData.phone}</p>
                    )}
                    <p className="contact-info-label">Address:</p>
                    {isEdit ? (
                        <p>
                            <input
                                className="contact-info-address-input"
                                onChange={(e) =>
                                    setUserData((prev) => ({
                                        ...prev,
                                        address: { ...prev.address, line1: e.target.value },
                                    }))
                                }
                                value={userData.address.line1}
                                type="text"
                            />
                            <br />
                            <input
                                className="contact-info-address-input"
                                onChange={(e) =>
                                    setUserData((prev) => ({
                                        ...prev,
                                        address: { ...prev.address, line2: e.target.value },
                                    }))
                                }
                                value={userData.address.line2}
                                type="text"
                            />
                        </p>
                    ) : (
                        <p className="contact-info-address-text">
                            {userData.address.line1} <br /> {userData.address.line2}
                        </p>
                    )}
                </div>
            </div>

            {/* Basic Information */}
            <div>
                <p className="basic-info-title">BASIC INFORMATION</p>
                <div className="basic-info-grid">
                    <p className="basic-info-label">Gender:</p>
                    {isEdit ? (
                        <select
                            className="basic-info-gender-select"
                            onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
                            value={userData.gender}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    ) : (
                        <p className="basic-info-gender-text">{userData.gender}</p>
                    )}
                    <p className="basic-info-label">Birthday:</p>
                    {isEdit ? (
                        <input
                            className="basic-info-dob-input"
                            type="date"
                            value={userData.dob}
                            onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
                        />
                    ) : (
                        <p className="basic-info-dob-text">{userData.dob}</p>
                    )}
                </div>
            </div>

            {/* Save/Edit Button */}
            <div className="mt-10">
                {isEdit ? (
                    <button className="profile-button" onClick={() => setIsEdit(false)}>
                        Save Information
                    </button>
                ) : (
                    <button className="profile-button" onClick={() => setIsEdit(true)}>
                        Edit
                    </button>
                )}
            </div>
        </div>
  )
}

export default MyProfile