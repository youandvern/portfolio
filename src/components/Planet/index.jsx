import React from 'react';
import './style.css'


/**
 * Planet component with click action and optional display text.
 * @param   {function} onClick  Function called when planet is clicked
 * @param   {string} text       Last Name of the User
 * @return  {html}              
 */
export default function Planet({onClick, text}) {
  
  return(
    <div className= "planet-container">
      <div className="planet-and-shadow">
        <div className= "planet"  onClick={onClick}>
          <div className="planet-text">{text}</div>
        </div>
        <div className="planet-shadow"> </div>

      </div>
    </div>
  )
}
