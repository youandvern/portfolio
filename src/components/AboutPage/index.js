import React from 'react';
import './style.css'
import { useState, useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import aboutPhoto from './ay_photo.jpg';


// props to include:  ** iconid  ** goto  ** iconClass ** altText
export default function AboutPage(props) {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return function unhideBody () {
      document.body.style.overflow = "auto";
    };
  });

  return(
      <div className="about-container main-outer-container" >
        <div className="about-room">
          <div className="wall left-wall">
            <div className="about-photo" >
              <img src={aboutPhoto} alt="Profile Picture" />
            </div>
          </div>
          <div className="wall right-wall">
            <h3>Testing Text</h3>
          </div>
          <div className="floor">
          </div>
        </div>
     </div>



  )
}
