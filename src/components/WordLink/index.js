import React from 'react';
import './style.css'
import { useState } from 'react';

// props to include:  ** setFinished function to change state after finish imploding   ** optional text inside of planet
export default function Planet(props) {
  const [clicked, setClicked] = useState(false)

  function handleClick(){
    setClicked(true);
    setTimeout(() => { (props.clickAction && props.clickAction()) ; }, 250)


  }
  return(
    <div className= "outer-container floating-scale">
      <div className="text-container floatingx">
        <div className={clicked? "text imploded" : "text floatingy"}  onClick={handleClick}>
        {props.text}
        </div>
        <div className={clicked? "imploded text-shadow" : "text-shadow"}> </div>

      </div>
    </div>
  )
}
