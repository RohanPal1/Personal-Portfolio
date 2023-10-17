import React from 'react';
import '../Contact/Contact.css';
import { BsPhone, BsLinkedin } from 'react-icons/bs';
import { SiGmail, SiHackerrank } from 'react-icons/si';
import { FaMapLocationDot, FaSquareGithub } from 'react-icons/fa6'

function Contact() {
  return (
    <div className='main'>
      <h2 className='heading-h2'>Contact</h2>
      
      <div className='contact'>
        <h3 className='phone'><BsPhone /></h3>
        <p id='para'><a href="tel:+91-7906571083">+91-7906571083</a></p>
      </div>

      <div className='contact'>
        <h3 className='gmail'><SiGmail /></h3>
        <p id='para'><a href="mailto:rohanpalcse@gmail.com">Gmail</a></p>
      </div>
      
      <div className='contact'>
        <h3 className='linkedin'><BsLinkedin /></h3>
        <p id='para'><a href="http://www.linkedin.com/in/rohan-pal-3075a0232">LinkedIn</a></p>
      </div>
      
      <div className='contact'>
        <h3 className='hackerrank'><SiHackerrank /></h3>
        <p id='para'><a href="https://www.hackerrank.com/Rohan_pal11?hr_r=1">HackerRank</a></p>
      </div>

      <div className='contact'>
        <h3 className='location'><FaMapLocationDot /></h3>
        <p id='para'><a href="https://maps.app.goo.gl/v7XehCPsTJC9AeGn7">Vijay Nagar, Delhi</a></p>
      </div>

      <div className='contact'>
        <h3 className='location'><FaSquareGithub /></h3>
        <p id='para'><a href="https://github.com/RohanPal1">GitHub</a></p>
      </div>

    </div>
  )
}

export default Contact;