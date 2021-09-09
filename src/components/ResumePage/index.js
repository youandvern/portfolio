import React from 'react';
import './style.css'
import { useEffect } from 'react';
import {gsap} from 'gsap';
import {WorkItem, EduItem, LanguageCloud, ProjectButton} from './minis.js'
import uwLogo from './logos/UW.png';
import cuLogo from './logos/Columbia.png';
import gtLogo from './logos/GT.png';
import wuLogo from './logos/Whitworth.png';


export default function ResumePage(props) {

  useEffect(() => {
    gsap.to('.resume-button', {opacity:1, duration:1, ease:"sine.inOut", delay:2});
  }, []);

  function moveLeft(){
    document.documentElement.style.setProperty("--box-move-d", '-6em');
  }
  function moveRight(){
    document.documentElement.style.setProperty("--box-move-d", '6em');
  }

  function closeResume(){
    props.lastPage();
    // gsap.to('.wall', {scale: 0, duration: 0.7});
    // gsap.to('.floor', {opacity: 0, duration: 0.3});

  }

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
            <EduItem idno="1" logo={gtLogo} school="Georgia Inst. of Technology" degree="MS in Computer Science" extra="(ongoing)" onMouseEnter={moveRight}/>
            <EduItem idno="2" logo={uwLogo} school="University of Washington" degree="MS in Civil Engineering"  onMouseEnter={moveLeft} />
            <EduItem idno="3" logo={cuLogo} school="Columbia University" degree="BS in Civil Engineering" extra="Mechanical Engineering Minor" onMouseEnter={moveRight} />
            <EduItem idno="4" logo={wuLogo} school="Whitworth University" degree="BA in Applied Physics" onMouseEnter={moveLeft} />
          </div>
        </div>
      </div>

      <div className="resume-group languages-outer">
        <p>Languages and Technologies </p>
        <div className="language-cloud-outer">
          <LanguageCloud />
        </div>
      </div>

      <div className="resume-group projects-outer">
        <ProjectButton onClick={props.toProjects}/>
      </div>

      <div className="resume-button" >
        <p className="resume-home" onClick={closeResume}> <i className="fas fa-bars" alt="menu" title="Menu"></i> </p>
      </div>

    </div>
  )
}
