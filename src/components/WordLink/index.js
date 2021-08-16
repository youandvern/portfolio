import React from 'react';
import './style.css'
import { useState } from 'react';

// props to include:  ** setFinished function to change state after finish imploding   ** optional text inside of planet
export default function Planet(props) {

  return(
    <div className= "wordlink-outer-container">
      <div className= "wordlink-container">
        <div id={ props.menuid } ref={props.textref} className="link-text" onClick={props.onClick} >
        {props.text}
        </div>
        <div className= "text-shadow"> </div>

      </div>
    </div>
  )
}
