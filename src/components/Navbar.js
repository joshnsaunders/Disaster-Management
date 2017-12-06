import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbarWrapper">
        <div><NavLink exact to="/" className="logo">Disaster Management Technology</NavLink></div>
        <div><NavLink to="/response" className="tileLink"> Smart Response</NavLink></div>
        <div><NavLink to="/map" className="mapLink">Map</NavLink></div>
        <div><NavLink to="/login" className="logInLink">Log In</NavLink></div>
        <div><NavLink to="/about"  className="About">About</NavLink></div>
    </div>
  )
}

export default Navbar
