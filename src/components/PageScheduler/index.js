import React from 'react';
import './style.css'
import { useState, useRef, useEffect } from 'react';
import WordGroup from '../WordGroup';
import Planet from '../Planet';
import {gsap} from 'gsap';

// props to include:  ** setFinished function to change state after finish imploding   ** optional text inside of planet
export default function PageScheduler(props) {
  const [phase2, setPhase2] = useState(false);
  const useless = true;
  const step_duration = 0.03;


  let scale_float = gsap.timeline({repeat: -1});
  let xfloat = gsap.timeline({repeat: -1});
  let yfloat = gsap.timeline({repeat: -1});

  function beginP2(){
    setPhase2(true);
  }

  function getRndWave(){
    return Math.floor(Math.random() * 18) - 9;
  }

  function getRndScale(){
    return Math.random() * 0.08 + 0.96;
  }

  function getRndDuration(){
    return Math.random() * 0.6 + 1.2;
  }

  function createPlanetMotion(){
    scale_float.clear();
    for (let i = 0; i < 8; i++) {
      scale_float.to(".planet-container", {scale: getRndScale(), ease: "sine.inOut", duration: getRndDuration()});
    };
    scale_float.to(".planet-container", {scale: 1.0, ease: "sine.inOut", duration: getRndDuration()});

    xfloat.clear();
    for (let i = 0; i < 13; i++) {
      xfloat.to(".planet-and-shadow", {x: getRndWave(), ease: "sine.inOut", duration: getRndDuration()});
    };
    xfloat.to(".planet-and-shadow", {x: 0, ease: "sine.inOut", duration: getRndDuration()});

    yfloat.clear();
    for (let i = 0; i < 12; i++) {
      yfloat.to(".planet", {y: getRndWave(), ease: "sine.inOut", duration: getRndDuration()});
    };
    yfloat.to(".planet", {y: 0, ease: "sine.inOut", duration: getRndDuration()});
  }

  function stopPlanetMotion(){
    scale_float.clear();
    xfloat.clear();
    yfloat.clear();
  }

  function shakeMotion() {
    let shake_tl = gsap.timeline({repeat: 2});
    shake_tl.to(".planet", {x: 1, y: 1, ease:"none", duration:step_duration});
    shake_tl.to(".planet", {x: -1, y: -2, ease:"none", duration: step_duration});
    shake_tl.to(".planet", {x: -3, y: 0, ease:"none", duration:step_duration});
    shake_tl.to(".planet", {x: 3, y: 2, ease:"none", duration:step_duration});
    shake_tl.to(".planet", {x: 1, y: -1, ease:"none", duration:step_duration});
    shake_tl.to(".planet", {x: -1, y: 2, ease:"none", duration:step_duration});
    shake_tl.to(".planet", {x: -3, y: 1, ease:"none", duration:step_duration});
    shake_tl.to(".planet", {x: 3, y: 1, ease:"none", duration:step_duration});
    shake_tl.to(".planet", {x: -1, y: -1, ease:"none", duration:step_duration});
    shake_tl.to(".planet", {x: 1, y: 2, ease:"none", duration:step_duration});
    shake_tl.to(".planet", {x: 1, y: -2, ease:"none", duration:step_duration});

    return shake_tl;
  }

  useEffect(() => {
    createPlanetMotion();

  }, []);


  function handleFirstClick(){
    // stop floating motion
    stopPlanetMotion();

    let first_click_tl = gsap.timeline({onComplete: beginP2});
    // start click motion
    first_click_tl.add(shakeMotion())
      .to(".planet-text", {scale: 0, ease: "power3.inOut", duration: 0.4}, 0)
      .to([".planet", ".planet-shadow"], {scale: 0, ease:"power3.in", duration:0.4});
  }

  if (useless){
    return (
      <>
        <Planet text="" onClick={handleFirstClick}/>
        <WordGroup display={phase2}/>
      </>
    )
  }
}
