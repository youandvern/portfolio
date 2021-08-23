import React from 'react';
import './style.css'

export default function ProjectCard(props) {


  return(
    <div className= {"project-card-container " + props.classID}>

      <div className= "project-card">
        <div className="project-image"> <img src={props.image} alt="Project Image" /> </div>
        <div className="project-title"> {props.content.title} </div>
        <div className="project-content"> {props.content.description} </div>
      </div>

      <div className= "project-card-shadow"> </div>

    </div>
  )
}
