import React from 'react';
import { useEffect } from 'react';
import {gsap} from 'gsap';



function WorkItem(props) {
  return(
    <div className= {"work-item w" + props.idno} >
      <div className= "work-title"> {props.title} </div>
      <div className= "work-company"> <div> {props.company} </div> </div>
    </div>
  )
}

function EduItem(props) {
  return(
    <div className= {"edu-item e" + props.idno} onMouseEnter={props.onMouseEnter}>
      <div className="edu-container">
        <div className="school-text-container">
          <div className= "school-name"> {props.school} </div>
          <div className= "school-degree"> {props.degree} </div>
          <div className= "school-extras"> {props.extra} </div>
        </div>
        <div className="school-facade">
          <div className= "school-cover"> </div>
          <div className= "school-logo"> <img src={props.logo} alt="School Logo" /> </div>
        </div>
      </div>
    </div>
  )
}

function LanguageItem(props) {
  let size = props.size * 0.25 + 0.5;
  return(
    <div className= {"language-item"} >
      <div className= "language-text" style={{fontSize: size + "em"}}> {props.text} </div>
    </div>
  )
}

function LanguageCloud(props) {
  return(
    <div className="language-cloud">
      <LanguageItem text="AWS" size={4} />
      <LanguageItem text="Material UI" size={2} />
      <LanguageItem text="Python" size={6} />
      <div className="break"></div>
      <LanguageItem text="JavaScript" size={5} />
      <LanguageItem text="AutoIt" size={1} />
      <LanguageItem text="C/C++" size={3} />
      <LanguageItem text="Grasshopper" size={2} />
      <LanguageItem text="Git" size={5} />
      <div className="break"></div>
      <LanguageItem text="VBA" size={1} />
      <LanguageItem text="HTML/CSS" size={6} />
      <LanguageItem text="SQL" size={3} />
      <LanguageItem text="Arduino" size={1} />
      <LanguageItem text="React" size={4} />
      <div className="break"></div>
      <LanguageItem text="Flask" size={4} />
      <LanguageItem text="Linux Servers" size={2} />
      <LanguageItem text="NoSQL" size={3} />
    </div>
  )
}

function ProjectButton(props) {

  let xfloat = [];
  let yfloat = [];

  useEffect(() => {
    startWaveMotion();
  }, []);

  function startWaveMotion(){

    let xgroup = gsap.utils.toArray(".project-button");
    let ygroup = gsap.utils.toArray(".project-goto");
    xfloat = [];
    yfloat = [];

    for (let j = 0; j<xgroup.length; j++){
      let xtimeline = gsap.timeline({repeat: -1, delay: (xgroup.length-j-1)/2});

      for (let i = 0; i < 2; i++) {
        xtimeline.to(xgroup[j], {x: -4, ease: "sine.inOut", duration: 1.2})
              .to(xgroup[j], {x: 4, ease: "sine.inOut", duration: 1.8})
              .to(xgroup[j], {x: -6, ease: "sine.inOut", duration: 1.3});
      };
      xtimeline.to(xgroup[j], {x: 0, ease: "sine.inOut", duration: 1.2});

      xfloat.push(xtimeline);
    }

    for (let j = 0; j<ygroup.length; j++){
      let ytimeline = gsap.timeline({repeat: -1, delay: j/3});

      for (let i = 0; i < 2; i++) {
        ytimeline.to(ygroup[j], {y: 6, ease: "sine.inOut", duration: 1.8})
              .to(ygroup[j], {y: -4, ease: "sine.inOut", duration: 1.2})
              .to(ygroup[j], {y: 4, ease: "sine.inOut", duration: 1.6});
      };
      ytimeline.to(ygroup[j], {y: 0, ease: "sine.inOut", duration: 1.2});

      yfloat.push(ytimeline);
    }
  }

  return(
    <div className= {"project-button-container"} >
      <div className= "project-title"> <p>Projects</p> </div>

      <div className="project-button-group" >
        <div className="project-button" >
          <div className="project-goto" onClick={props.onClick}> <i className="fas fa-archive" alt="project" title="See Project"></i> </div>
          <div className= "project-button-shadow"> </div>
        </div>

        <div className="project-button" >
          <div className="project-goto" onClick={props.onClick}> <i className="fas fa-archive" alt="project" title="See Project"></i> </div>
          <div className= "project-button-shadow"> </div>
        </div>

        <div className="project-button" >
          <div className="project-goto" onClick={props.onClick}> <i className="fas fa-archive" alt="project" title="See Project"></i> </div>
          <div className= "project-button-shadow"> </div>
        </div>

        <div className="project-button" >
          <div className="project-goto" onClick={props.onClick}> <i className="fas fa-archive" alt="project" title="See Project"></i> </div>
          <div className= "project-button-shadow"> </div>
        </div>

        <div className="project-button" >
          <div className="project-goto" onClick={props.onClick}> <i className="fas fa-archive" alt="project" title="See Project"></i> </div>
          <div className= "project-button-shadow"> </div>
        </div>
      </div>
    </div>
  )
}



export {WorkItem, EduItem, LanguageCloud, ProjectButton}
