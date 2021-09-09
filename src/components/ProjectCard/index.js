import React from 'react';
import './style.css'

export default function ProjectCard(props) {


  return(
    <div className= {"project-card-container " + props.classID}>

      <div className= "project-card">
        <div className="project-image">
            {!props.video && <img src={props.image} alt="Project" /> }
            {props.video && <video className="project-video" autoPlay loop muted playsInline>
                              <source src={props.video} type="video/mp4" />
                                Video showing {props.content.title}.
                            </video>}


        </div>
        <div className="project-title"> {props.content.title} </div>
        <div className="project-content"> {props.content.description} </div>
      </div>

      <div className= "project-card-shadow"> </div>

    </div>
  )
}
