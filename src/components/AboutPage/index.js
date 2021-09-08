import React from 'react';
import './style.css'
import { useState, useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import aboutPhoto from './ay_photo.jpg';


// props to include:  ** iconid  ** goto  ** iconClass ** altText
export default function AboutPage(props) {

  const [textPlay, setTextPlay] = useState(true);
  const text_slider = useRef(gsap.timeline({repeat: -1}));

  let xfloat = gsap.timeline({repeat: -1});
  let yfloat = gsap.timeline({repeat: -1});
  let menu_motion = gsap.timeline({onComplete: startWaveMotion, paused: true});

  useEffect(() => {
    text_slider.current.paused( !textPlay );
  }, [textPlay]);

  useEffect(() => {
    beginTextRotation();
    bringMenuButton();
    document.body.style.overflow = "hidden";
    return function unhideBody () {
      document.body.style.overflow = "auto";
    };
  }, []);

  function closeAbout(){
    props.lastPage();
    xfloat.paused(true);
    yfloat.paused(true);
    // gsap.to('.wall', {scale: 0, duration: 0.7});
    gsap.to('.floor', {opacity: 0, duration: 0.3});

  }

  function beginTextRotation(){
    let text_elements = gsap.utils.toArray(".about-text-item");
    gsap.set(text_elements, {yPercent:110});
    for (let j=0; j<20; j++){
      for( let i=0; i<text_elements.length; i++){
        let elem = text_elements[i];
        text_slider.current.to(elem, { yPercent:0, duration: 0.5 }, "-=0.4")
        .to(elem, {yPercent:-110, duration: 0.5}, ">3")
        .set(elem,{yPercent:110}, ">");
      }
    }
  };

  function bringMenuButton(){
    menu_motion.set(".about-button", {yPercent: 330, opacity: 0 })
    .set(".about-button", {opacity: 1}, 1.5)
    .to(".about-button", {yPercent: 0, duration: 3, ease: "back.out(1.2)"}, 2)
    .paused(false);
  };

  function startWaveMotion(){

    xfloat.clear();
    for (let i = 0; i < 2; i++) {
      xfloat.to(".about-button", {x: -3, ease: "sine.inOut", duration: 1.2})
            .to(".about-button", {x: 3, ease: "sine.inOut", duration: 1.8})
            .to(".about-button", {x: -5, ease: "sine.inOut", duration: 1.3});
    };
    xfloat.to(".about-button", {x: 0, ease: "sine.inOut", duration: 1.2});

    yfloat.clear();
    for (let i = 0; i < 2; i++) {
      yfloat.to(".about-home", {y: 5, ease: "sine.inOut", duration: 1.8})
            .to(".about-home", {y: -3, ease: "sine.inOut", duration: 1.2})
            .to(".about-home", {y: 3, ease: "sine.inOut", duration: 1.6});
    };
    yfloat.to(".about-home", {y: 0, ease: "sine.inOut", duration: 1.2});
  }



  return(
      <div className="about-container main-outer-container" >
        <div className="about-room">
          <div className="wall left-wall">
            <div className="about-photo-outer" >
              <div className="about-photo-top" >
              </div>
              <div className="about-photo-side" >
              </div>
              <div className="about-photo-frame" >
                <div className="about-photo-mat" >
                  <div className="about-photo" >
                    <img src={aboutPhoto} alt="Profile Picture" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wall right-wall">
            <div className="intro-text">
              <p> Hi there and welcome to my site! </p>
              <p> My name is Andrew Young and I’m a software engineer. </p>
            </div>

            <div className="about-text-container" onMouseEnter={() => setTextPlay(false)} onMouseLeave={() => setTextPlay(true)}>
              <p className="about-text-item"> I have a passion for reaching the world through exciting websites and automating the tasks we don’t want to spend our time on.  </p>
              <p className="about-text-item"> My diverse education and career experiences inform my ability to build creative, dependable, and user-centered projects. </p>
              <p className="about-text-item"> I currently live in California with my beautiful wife and dog, but I’ve also lived in Washington, New York, Maryland, and India!   </p>
              <p className="about-text-item"> I love being outdoors whether it’s running, skiing, hiking, surfing, kayaking, playing ultimate frisbee, or nearly anything else.  </p>
            </div>

          </div>
        </div>
        <div className="floor">
          <div className="about-button" >
            <p className="about-home" onClick={closeAbout}> <i className="fas fa-bars" alt="menu" title="Menu"></i> </p>
          <div className= "about-button-shadow"> </div>
          </div>
        </div>
     </div>



  )
}
