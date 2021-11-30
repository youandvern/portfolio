import React from 'react';
import './style.css'

export default function WordLink(props) {

  return(
    <div className= "wordlink-outer-container" ref={props.textref} onClick={props.onClick}>
      <div className= "wordlink-container">
        <div id={ props.menuid } className="link-text"  >
        {props.text}
        </div>
        <div className= "text-shadow"> </div>

      </div>
    </div>
  )
}
