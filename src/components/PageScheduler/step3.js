import React from 'react';
import {useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import {getRndWave, getRndScale, getRndDuration, getRndAmount} from './waves.js'
import ProjectCarousel from '../ProjectCarousel';

// props to include:  ** setFinished function to change state after finish imploding   ** optional text inside of planet
export default function Step2(props) {
  //
  // props.onFinish()

  function finishStep(){
    props.onFinish(true);
  }


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
      <ProjectCarousel />
    </>
  )

}
