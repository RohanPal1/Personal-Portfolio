import React from 'react';
import '../Education/Education.css'

function Education() {
  return (

    <div className='education'> 
        <div className='high-school'>
            <h2>High School</h2>
            <p>Golden Heart Academy <br /> 2014-16 <br />7.4 CGPA</p>
        </div>
        
        <div className='intermediate'>
            <h2>Intermediate</h2>
            <p>Modern Public School <br /> 2016-18 <br />7 CGPA</p>
        </div>
        
        <div className='btech'>
            <h2>BTech</h2>
            <p>Sri Ram Group of Colleges <br /> 2019-23 <br />7.3 CGPA</p>
        </div>
    </div>
  )
}

export default Education