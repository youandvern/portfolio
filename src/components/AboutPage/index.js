import React from 'react';
import './style.css'
import { useState, useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import aboutPhoto from './ay_photo.jpg';


export default function AboutPage(props) {

  const [textPlay, setTextPlay] = useState(false);
  const text_slider = useRef(gsap.timeline({repeat: -1, paused:true }));

  const menu_motion = useRef(gsap.timeline({onComplete: startWaveMotion, paused: true}));
  const xfloat = useRef(gsap.timeline({repeat: -1, paused: true}));
  const yfloat = useRef(gsap.timeline({repeat: -1, paused: true}));

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
    xfloat.current.paused(true);
    yfloat.current.paused(true);
    gsap.to('.floor', {opacity: 0, duration: 0.3});

  }

  function beginTextRotation(){
    text_slider.current.to(".about-text-container", {rotationX: 90, ease:"power2.inOut", duration:1}, "+=0.3")
    .to(".about-text-container", {rotationX: 180, ease:"power2.inOut", duration:1}, "+=0.3")
    .to(".about-text-container", {rotationX: 270, ease:"power2.inOut", duration:1}, "+=0.3")
    .to(".about-text-container", {rotationX: 360, ease:"power2.inOut", duration:1}, "+=0.3");
    // text_slider.current.paused( true );
  };

  function bringMenuButton(){
    menu_motion.current.set(".about-button", {yPercent: 330, opacity: 0 })
    .set(".about-button", {opacity: 1}, 1.5)
    .to(".about-button", {yPercent: 0, duration: 3, ease: "back.out(1.2)"}, 2)
    .paused(false);
  };

  function startWaveMotion(){

    xfloat.current.clear();
    for (let i = 0; i < 2; i++) {
      xfloat.current.to(".about-button", {x: -3, ease: "sine.inOut", duration: 1.2})
            .to(".about-button", {x: 3, ease: "sine.inOut", duration: 1.8})
            .to(".about-button", {x: -5, ease: "sine.inOut", duration: 1.3});
    };
    xfloat.current.to(".about-button", {x: 0, ease: "sine.inOut", duration: 1.2});

    yfloat.current.clear();
    for (let i = 0; i < 2; i++) {
      yfloat.current.to(".about-home", {y: 5, ease: "sine.inOut", duration: 1.8})
            .to(".about-home", {y: -3, ease: "sine.inOut", duration: 1.2})
            .to(".about-home", {y: 3, ease: "sine.inOut", duration: 1.6});
    };
    yfloat.current.to(".about-home", {y: 0, ease: "sine.inOut", duration: 1.2});

    xfloat.current.paused(false);
    yfloat.current.paused(false);
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
                    <img src={aboutPhoto} alt="headshot" />
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

            <div className="about-text-outer" onMouseEnter={() => setTextPlay(true)} onMouseLeave={() => setTextPlay(false)}>
              <div className="about-text-container" >
                <div className="about-text-item ati0"> I have a passion for reaching the world through exciting websites and automating the tasks we don’t want to spend our time on.  </div>
                <div className="about-text-item ati1"> My diverse education and career experiences inform my ability to build creative, dependable, and user-centered projects. </div>
                <div className="about-text-item ati2"> I currently live in California with my beautiful wife and dog, but I’ve also lived in Washington, New York, Maryland, and India!   </div>
                <div className="about-text-item ati3"> I love being outdoors whether it’s running, skiing, hiking, surfing, kayaking, playing ultimate frisbee, or nearly anything else.  </div>
              </div>
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
