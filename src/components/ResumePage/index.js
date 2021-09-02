import React from 'react';
import './style.css'
import { useState, useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import {WorkItem, EduItem, LanguageCloud, ProjectButton} from './minis.js'


export default function ResumePage(props) {
  return (
    <div className= "resume-outer-container main-outer-container" >
      <div className= "work-education" >
        <div className= "resume-group work-outer" >
          <p>Work Experience </p>

          <div className= "work" >
            <WorkItem idno="1" title="Lead Developer and Founder" company="Encomp" />
            <WorkItem idno="2" title="Design Engineer" company="DN Tanks" />
            <WorkItem idno="3" title="Structural Engineer" company="Arup" />
            <WorkItem idno="4" title="Intern" company="Engineering Ministries International" />
          </div>
        </div>
        <div className= "resume-group education-outer" >
          <p>Education </p>
          <div className= "education" >
            <EduItem idno="1" school="Georgia Institute of Technology" degree="MS in Computer Science" extra="(ongoing)" />
            <EduItem idno="2" school="University of Washington" degree="MS in Civil Engineering"  />
            <EduItem idno="3" school="Columbia University" degree="BS in Civil Engineering" extra="Mechanical Engineering Minor" />
            <EduItem idno="4" school="Whitworth University" degree="BA in Applied Physics"  />
          </div>
        </div>
      </div>

      <div className="resume-group languages-outer">
        <p>Languages and Technologies </p>
        <LanguageCloud />
      </div>

      <div className="resume-group projects-outer">
        <ProjectButton />
      </div>

    </div>
  )
}
