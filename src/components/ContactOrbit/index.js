import React from 'react';
import './style.css'
import { useState, useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import ContactIcon from '../ContactIcon';

// props to include:  ** setFinished function to change state after finish imploding   ** optional text inside of planet
export default function ContactOrbit(props) {
  const [orbitPlay, setOrbitPlay] = useState(true);
  const [position, setPosition] = useState({x: 0, y: 0});

  const orbitAnim = useRef(gsap.timeline({repeat: -1}));

  useEffect(() => {
    gsap.to(".contact-orbit-container", {rotationX: -20, ease:"none", duration: 1});
    gsap.to(".orbit-card-icon", {rotationX: 10, ease:"none", duration: 1});
    orbitAnim.current.to(".contact-orbit", {rotationY: 180, duration: 4, ease: "none"});
    orbitAnim.current.to(".contact-orbit", {rotationY: 360, duration: 4, ease: "none"});

    const setFromEvent = e => setPosition({x: e.clientX, y: e.clientY});
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  useEffect(() => {
    orbitAnim.current.paused( !orbitPlay );
  }, [orbitPlay]);

  useEffect(() => {
    orbitAnim.current.timeScale(2.5 * (Math.abs(window.innerWidth/2 - position.x) / window.innerWidth + Math.abs(window.innerHeight/2 - position.y) / window.innerHeight) );
  }, [position])

  function switchPlay(){
    setOrbitPlay( !orbitPlay );
  };

  return(
    <div className= "contact-orbit-container main-outer-container" >

      <div className= "contact-orbit" >
        <ContactIcon iconid="o1" goto = "https://www.linkedin.com/in/andrew-v-young/" iconClass= "fab fa-linkedin" altText="LinkedIn" />
        <ContactIcon iconid="o2" goto = "https://github.com/youandvern" iconClass= "fab fa-github-square" altText="GitHub" />
        <ContactIcon iconid="o3" goto = "mailto:youandvern@gmail.com" iconClass= "fas fa-envelope" altText="email" />
        <ContactIcon iconid="o4" goto = "https://encompapp.com/contact" iconClass= "fab fa-wpforms" altText="Website Form" />
        <ContactIcon iconid="o5" goto = "https://www.instagram.com/youngandvern/" iconClass= "fab fa-instagram-square" altText="Instagram" />
      </div>

      <div className="orbit-buttons" onClick={switchPlay}>
        {orbitPlay && <p className="orbit-pause" > <i className="far fa-pause-circle"></i> </p>}
        {!orbitPlay && <p className="orbit-play" > <i className="far fa-play-circle"></i> </p>}
      </div>
    </div>
  )
}
