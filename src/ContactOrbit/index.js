import React from 'react';
import './style.css'
import { useState, useEffect } from 'react';

// props to include:  ** setFinished function to change state after finish imploding   ** optional text inside of planet
export default function ContactOrbit(props) {

  return(
    <div className= "contact-orbit-container main-outer-container" >
      <div className="orbit-buttons" >
        <p className="orbit-skip" >&#8592; </p>
      </div>
      <div className= "contact-orbit" >
        <a className="o1" href="https://www.linkedin.com/in/andrew-v-young/" target="_blank"> <i className="fab fa-linkedin" alt="LinkedIn"></i> </a>
        <a className="o2" href="https://github.com/youandvern" target="_blank"> <i className="fab fa-github-square" alt="GitHub"></i> </a>
        <a className="o3" href="mailto:youandvern@gmail.com" target="_blank"> <i className="fas fa-envelope" alt="email"></i> </a>
        <a className="o4" href="https://encompapp.com/contact" target="_blank"> <i className="fab fa-wpforms" alt="Website Form"></i> </a>
        <a className="o5" href="https://www.instagram.com/youngandvern/" target="_blank"> <i className="fab fa-instagram-square" alt="Instagram"></i> </a>
      </div>
    </div>
  )
}
