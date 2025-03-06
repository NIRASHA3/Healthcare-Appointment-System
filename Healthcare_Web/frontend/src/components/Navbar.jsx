import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {
    const navigate =useNavigate();

    const [showMenu,setShowMenu]=useState(false)
    const [token,setToken]=useState(true)

  return (
    <div className="navbar-container">
            <img 
                onClick={() => navigate('/')} 
                className="navbar-logo" 
                src={assets.logo} 
                alt="Logo" 
            />
            <ul className="navbar-links">
                <NavLink to='/'>
                    <li className="navbar-links-li">HOME</li>
                    <hr className="navbar-link-underline" />
                </NavLink>
                <NavLink to='/doctors'>
                    <li className="navbar-links-li">ALL DOCTORS</li>
                    <hr className="navbar-link-underline" />
                </NavLink>
                <NavLink to='/about'>
                    <li className="navbar-links-li">ABOUT</li>
                    <hr className="navbar-link-underline" />
                </NavLink>
                <NavLink to='/contact'>
                    <li className="navbar-links-li">CONTACT</li>
                    <hr className="navbar-link-underline" />
                </NavLink>
            </ul>
            <div className="navbar-right">
                {token ? (
                    <div className="navbar-profile">
                    <img className="navbar-profile-pic" src={assets.profile_pic} alt="Profile" />
                    <img className="navbar-dropdown-icon" src={assets.dropdown_icon} alt="Dropdown" />
                    <div className="navbar-dropdown">
                        <div className="navbar-dropdown-content">
                            <p onClick={() => navigate('my-profile')}>My Profile</p>
                            <p onClick={() => navigate('my-appointment')}>My Appointments</p>
                            <p onClick={() => setToken(false)}>Logout</p>
                        </div>
                    </div>
                </div>
                    
                    
                ) : (
                    <button 
                    onClick={() => navigate('/login')} 
                    className="navbar-create-account"
                >
                    Create account
                </button>
                    
                )}
                {/* Mobile Menu Icon */}
                <img
                    onClick={() => setShowMenu(true)}
                    className="navbar-menu-icon"
                    src={assets.menu_icon}
                    alt="Menu Icon"
                />
                {/* Mobile Menu */}
                <div 
                    className={`navbar-mobile-menu ${showMenu ? "navbar-mobile-menu-open" : ""}`}
                >
                    <div className="navbar-mobile-menu-header">
                        <img className="navbar-mobile-logo" src={assets.logo} alt="Logo" />
                        <img
                            className="navbar-mobile-close-icon"
                            onClick={() => setShowMenu(false)}
                            src={assets.cross_icon}
                            alt="Close Icon"
                        />
                    </div>
                    <ul className="navbar-mobile-links">
                        <NavLink onClick={() => setShowMenu(false)} to="/">
                            <p className="p">HOME</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/doctors">
                            <p className="p" >ALL DOCTORS</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/about">
                            <p className="p">ABOUT</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/contact">
                            <p className="p">CONTACT</p>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Navbar