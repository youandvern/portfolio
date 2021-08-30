import React from 'react';
import {useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import {getRndWave, getRndScale, getRndDuration, getRndAmount} from './waves.js'
import ProjectCarousel from '../ProjectCarousel';
import ContactOrbit from '../ContactOrbit';

// props to include:  ** setFinished function to change state after finish imploding   ** optional text inside of planet
export default function Step3(props) {
  //
  // props.onFinish()

  function finishStep(){
    props.onFinish(false);
    props.onNext(true);
  }

  function renderMotion() {
    gsap.to(".main-outer-container", {scale:1, duration: 1, ease: "sine.inOut"});
    gsap.from(".main-outer-container", {x: props.fromPos.x - window.innerWidth/2, y:0, duration: 1, ease: "sine.inOut"});
  };

  useEffect(() => {
    renderMotion();
    startWaveMotion();
    console.log(props.renderPage);
  }, []);


  function cleanTimelines(){
  }

  function startWaveMotion() {
  }

  function handleTextClick (id, reference) {

    let first_click_tl = gsap.timeline({onComplete: finishStep});

    cleanTimelines();
  }


  return (
    <>
      {(props.renderPage == "menu0") && <ProjectCarousel />}
      {(props.renderPage == "menu2") && <ContactOrbit /> }
    </>
  )

}
