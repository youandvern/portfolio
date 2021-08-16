import React from 'react';
import {useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import {getRndWave, getRndScale, getRndDuration, getRndAmount} from './waves.js'
import WordGroup from '../WordGroup';
// props to include:  ** setFinished function to change state after finish imploding   ** optional text inside of planet
export default function Step2(props) {
  //
  // props.onFinish()

  const menu_refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  function finishStep(){
    props.onFinish(true);
  }

  function renderMotion() {
    gsap.to(".wordlink-list", {scale:1, duration: 1, ease: "sine.inOut"});
  };

  useEffect(() => {
    renderMotion();
    startWaveMotion();
  }, []);

  let scale_float = gsap.timeline({repeat: -1});
  let xfloat = gsap.timeline({repeat: -1});
  let yfloat = gsap.timeline({repeat: -1});

  function cleanTimelines(){
    scale_float.kill();
    xfloat.kill();
    yfloat.kill();
  }

  function startWaveMotion() {
    yfloat.clear();
    let y_duration, y_d_sum = 0;
    for (let i = 0; i < 8; i++) {
      y_duration = getRndDuration();
      yfloat.to(".link-text", {y: getRndWave(), ease: "sine.inOut", duration: y_duration, stagger: {from:"start", amount:getRndAmount()}}, y_d_sum);
      y_d_sum += y_duration;
    };
    yfloat.to(".link-text", {y: 0, ease: "sine.inOut", duration: getRndDuration(), stagger: {from:"start", amount:getRndAmount()}}, y_d_sum);

    xfloat.clear();
    let x_duration, x_d_sum = 0;
    for (let i = 0; i < 9; i++) {
      x_duration = getRndDuration();
      xfloat.to(".wordlink-container", {x: getRndWave(), ease: "sine.inOut", duration: x_duration, stagger: {from:"end", amount:getRndAmount()}}, x_d_sum);
      x_d_sum += x_duration;
    };
    xfloat.to(".wordlink-container", {x: 0, ease: "sine.inOut", duration: getRndDuration(), stagger: {from:"end", amount:getRndAmount()}}, x_d_sum);

    scale_float.clear();
    let s_duration, s_d_sum = 0;
    for (let i = 0; i < 4; i++) {
      s_duration = getRndDuration();
      scale_float.to(".wordlink-outer-container", {scale: getRndScale(), ease: "sine.inOut", duration: s_duration, stagger: {from:"center", amount:getRndAmount()}}, s_d_sum);
      s_d_sum += s_duration;
    };
    scale_float.to(".wordlink-outer-container", {scale: 1, ease: "sine.inOut", duration: getRndDuration(), stagger: {from:"center", amount:getRndAmount()}}, s_d_sum);
  }

  function handleTextClick (id, reference) {

    gsap.to('#'+id, {y: 50, duration: 0.5, ease:"none"});
    const idno = id.slice(4);
    const words = gsap.utils.toArray(".wordlink-outer-container");
    gsap.to(".text-shadow", {scale: 0, ease:"power3.in", duration:0.4});
    for (let i=0; i<4; i++) {
      let x_trans = 2000;
      if (i < idno){
        gsap.to(words[i], {x: -x_trans, duration: 2});
        gsap.to(words[i], {rotation: '-=360', duration: 0.4, repeat:-1});
      } else if (i == idno) {
        gsap.to(words[i], {scale: 0, ease:"power3.in", duration:0.4});
      } else {
        gsap.to(words[i], {x: x_trans, duration: 2});
        gsap.to(words[i], {rotation: '+=360', duration: 0.4, repeat:-1});
      }
    }

    cleanTimelines();
    // console.log(reference.current.getBoundingClientRect());
  }


  return (
    <WordGroup onClick={handleTextClick} references={menu_refs}/>
  )

}
