import React from 'react';
import './style.css'

// props to include:  ** setFinished function to change state after finish imploding   ** optional text inside of planet
export default function Planet(props) {
  // props.onClick
  // props.text

  return(
    <div className= "planet-container">
      <div className="planet-and-shadow">
        <div className= "planet"  onClick={props.onClick}>
          <div className="planet-text">{props.text}</div>
        </div>
        <div className="planet-shadow"> </div>

      </div>
    </div>
  )
}
