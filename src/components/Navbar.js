import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbarWrapper">
      <div className="logo"><NavLink exact to="/" className="logo">Disaster Management</NavLink></div>
      <div><NavLink to="/response" className="tileLink">Response</NavLink></div>
      <div><NavLink to="/map" className="mapLink">Map</NavLink></div>
      <div><NavLink to="/howto" className="logInLink">How To</NavLink></div>
    </div>
  )
}

export default Navbar
