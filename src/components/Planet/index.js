import React from 'react';
import './style.css'
import { useState } from 'react';

export default function Planet(props) {
  const [clicked, setClicked] = useState(false)
  const [explode, setExplode] = useState(false)

  function handleClick(){
    setClicked(true);
    setTimeout(() => { setExplode(true); }, 1700);
  }
  return(
    <div className= "floating-scale">
      <div className={clicked? "planet-container" : "planet-container floatingx"}>
        <div className={clicked? explode? "expanded" : "planet shake " : "planet floatingy"}  onClick={handleClick}>
          <div className={clicked? "planet-text shrink-button" : "planet-text"}>{props.text}</div>
        </div>
        <div className="planet-shadow"> </div>

      </div>
    </div>
  )
}
