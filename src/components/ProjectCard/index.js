import React from 'react';
import './style.css'

export default function ProjectCard(props) {


  return(
    <div className= {"project-card-container " + props.classID}>

      <div className= "project-card">
        <div className="project-image"> props.image </div>
        <div className="project-title"> {props.classID} </div>
        <div className="project-content"> props.content </div>
      </div>

      <div className= "project-card-shadow"> </div>

    </div>
  )
}
