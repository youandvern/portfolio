import React from 'react';
import './style.css'
import { useState } from 'react';

// props to include:  ** setFinished function to change state after finish imploding   ** optional text inside of planet
export default function Planet(props) {
  const [clicked, setClicked] = useState(false)
  const [explode, setExplode] = useState(false)

  function resetState(){
    setClicked(false);
    setExplode(false);
  }

  function handleClick(){
    setClicked(true);
    setTimeout(() => { setExplode(true); }, 1700);
    setTimeout(() => { props.setFinished ? props.setFinished(true) : resetState(); }, 2040);

  }
  return(
    <div className= "floating-scale planet-container">
      <div className={clicked? "" : "floatingx"}>
        <div className={clicked? explode? "planet implode" : "planet shake " : "planet floatingy"}  onClick={handleClick}>
          <div className={clicked? "planet-text shrink-item" : "planet-text"}>{props.text}</div>
        </div>
        <div className={explode? "implode planet-shadow" : "planet-shadow"}> </div>

      </div>
    </div>
  )
}
