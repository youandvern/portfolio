import React from 'react';
import './style.css'

export default function Planet(props) {

  return(
    <div className= "wordlink-outer-container" ref={props.textref} onClick={props.onContainerClick}>
      <div className= "wordlink-container">
        <div id={ props.menuid } className="link-text" onClick={props.onClick} >
        {props.text}
        </div>
        <div className= "text-shadow"> </div>

      </div>
    </div>
  )
}
