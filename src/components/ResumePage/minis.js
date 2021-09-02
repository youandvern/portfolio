import React from 'react';


function WorkItem(props) {
  return(
    <div className= {"work-item w" + props.idno} >
      <div className= "work-title"> {props.title} </div>
      <div className= "work-company"> {props.company} </div>
    </div>
  )
}

function EduItem(props) {
  return(
    <div className= {"edu-item e" + props.idno} >
      <div className= "school-name"> {props.school} </div>
      <div className= "school-degree"> {props.degree} </div>
      <div className= "school-extras"> {props.extra} </div>
    </div>
  )
}

function LanguageItem(props) {
  let size = props.size * 0.25 + 0.5;
  let fontsize = "font-size:" + size + ";";
  return(
    <div className= {"language-item"} >
      <div className= "school-name" style={fontsize}> {props.text} </div>
    </div>
  )
}

function LanguageCloud(props) {
  return(
    <>
      <LanguageItem text="AWS" size={4} />
      <LanguageItem text="Material UI" size={2} />
      <LanguageItem text="Python" size={6} />
      <LanguageItem text="JavaScript" size={5} />
      <LanguageItem text="AutoIt" size={1} />
      <LanguageItem text="C/C++" size={3} />
      <LanguageItem text="Grasshopper" size={2} />
      <LanguageItem text="Git" size={5} />
      <LanguageItem text="VBA" size={1} />
      <LanguageItem text="React" size={4} />
      <LanguageItem text="SQL" size={3} />
      <LanguageItem text="Arduino" size={1} />
      <LanguageItem text="HTML/CSS" size={6} />
      <LanguageItem text="Flask" size={4} />
      <LanguageItem text="Linux Servers" size={2} />
      <LanguageItem text="NoSQL" size={3} />
    </>
  )
}

function ProjectButton(props) {

  return(
    <div className= {"project-button-container"} >
      <div className= "project-button"> Projects </div>
    </div>
  )
}



export {WorkItem, EduItem, LanguageCloud, ProjectButton}
