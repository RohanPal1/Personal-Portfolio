import React from 'react'
import '../Navbar/Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="header">
            <h2><NavLink className="title" to="/">Portfolio</NavLink></h2>
            <ul className="list">
                <li><NavLink to="/">Home</NavLink></li> 
                <li><NavLink to="/education">Education</NavLink></li>
                <li><NavLink to="/skills">Skills</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                {/* <li><NavLink to="/project">Projects</NavLink></li> */}
                
            </ul>
    </div>
  )
}

export default Navbar;