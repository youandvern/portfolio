import React from 'react';
import './style.css'

// props to include:  ** iconid  ** goto  ** iconClass ** altText
export default function ContactIcon(props) {
  const classList = "orbit-card " + props.iconid;

  return(
      <div className={classList} >
        <div className="orbit-card-icon" >
          <a href={props.goto} target="_blank" rel="noreferrer"> <i className={props.iconClass} alt={props.altText} title={props.altText}></i> </a>
        </div>
        <div className= "orbit-card-shadow"> </div>
       </div>



  )
}
