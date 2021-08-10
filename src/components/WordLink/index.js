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
    <div className= "wordlink-container floating-scale">
      <div className= "floatingx">
        <div className={clicked? "link-text implode" : "link-text floatingy"}  onClick={handleClick}>
        {props.text}
        </div>
        <div className={clicked? "implode text-shadow" : "text-shadow"}> </div>

      </div>
    </div>
  )
}
