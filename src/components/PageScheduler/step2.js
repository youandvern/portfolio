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
  let menu_id = 'menu0';

  function finishStep(){
    props.onFinish(false);
  }

  function renderMotion() {
    gsap.to(".wordlink-list", {scale:1, duration: 1, ease: "sine.inOut"});
  };

  useEffect(() => {
    renderMotion();

    if (props.menu == "menu0"){
      props.setMenu(false);

      for (let i=0; i<menu_refs.length; i++){
        menu_refs[i].current.style.cursor = "not-allowed";
      }

      setTimeout(() => {handleContainerClick(menu_refs[0]); handleTextClick("menu0")}, 1000);
    } else {
      startWaveMotion();
    }

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

  function handleContainerClick (reference) {
    let click_position = reference.current.getBoundingClientRect();
    props.setClickPos({x: (click_position.x + click_position.width / 2 ), y: click_position.y})
  }

  function handleTextClick (id) {
    menu_id = id;
    let first_click_tl = gsap.timeline();

    const idno = id.slice(4);
    const def_delay = 0.4;
    const words = gsap.utils.toArray(".wordlink-outer-container");
    gsap.to(".text-shadow", {scale: 0, ease:"power3.in", duration: def_delay});
    for (let i=0; i<4; i++) {
      let x_trans = window.innerWidth;
      let spin_dur = 0.9 * Math.abs(idno-i);
      let tran_dur =  1.8 * Math.abs(idno-i);
      let spin_rep = Math.ceil( 3 / spin_dur);
      if (i < idno){
        first_click_tl.to(words[i], {x: -x_trans, duration: tran_dur}, def_delay);
        first_click_tl.to(words[i], {rotation: '-=360', duration: spin_dur, repeat:spin_rep}, def_delay);
      } else if (i == idno) {
        first_click_tl.to(words[i], {scale: 0, ease:"power3.in", duration:def_delay}, 0);
      } else {
        first_click_tl.to(words[i], {x: x_trans, duration: tran_dur}, def_delay);
        first_click_tl.to(words[i], {rotation: '+=360', duration: spin_dur, repeat:spin_rep}, def_delay);
      }
    }

    setTimeout( () => props.onNext(menu_id), 400);
    setTimeout( () => finishStep(), 1000);
    cleanTimelines();
  }


  return (
    <WordGroup onClick={handleTextClick} onContainerClick={handleContainerClick} references={menu_refs}/>
  )

}
