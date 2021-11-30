import React from 'react';
import {useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import {getRndWave, getRndScale, getRndDuration, getRndAmount} from './waves.js'
import WordGroup from '../WordGroup';

export default function Step2(props) {

  const menu_refs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const menu_id = useRef('menu0');

  const scale_float = useRef(gsap.timeline({repeat: -1, paused: true}));
  const xfloat = useRef(gsap.timeline({repeat: -1, paused: true}));
  const yfloat = useRef(gsap.timeline({repeat: -1, paused: true}));
  const first_click_tl = useRef(gsap.timeline({ paused: true}));

  // set this step to false when exiting
  function finishStep(){
    props.onFinish(false);
  }

  function renderMotion() {
    gsap.to(".wordlink-list", {scale:1, duration: 1, ease: "sine.inOut"});
  };

  useEffect(() => {
    renderMotion();

    // navigate directly to projects page if projects clicked from resume page, reset menu
    if (props.menu == "menu0"){
      props.setMenu(false);
      setTimeout(() => { handleTextClick("menu0", menu_refs[0])}, 1000);

      // begin wave motion when rendered
    } else {
      startWaveMotion();
    }
  }, []);


  function cleanTimelines(){
    scale_float.current.kill();
    xfloat.current.kill();
    yfloat.current.kill();
  }

  function startWaveMotion() {
    yfloat.current.clear();
    let y_duration, y_d_sum = 0;
    for (let i = 0; i < 8; i++) {
      y_duration = getRndDuration();
      yfloat.current.to(".link-text", {y: getRndWave(), ease: "sine.inOut", duration: y_duration, stagger: {from:"start", amount:getRndAmount()}}, y_d_sum);
      y_d_sum += y_duration;
    };
    yfloat.current.to(".link-text", {y: 0, ease: "sine.inOut", duration: getRndDuration(), stagger: {from:"start", amount:getRndAmount()}}, y_d_sum);

    xfloat.current.clear();
    let x_duration, x_d_sum = 0;
    for (let i = 0; i < 9; i++) {
      x_duration = getRndDuration();
      xfloat.current.to(".wordlink-container", {x: getRndWave(), ease: "sine.inOut", duration: x_duration, stagger: {from:"end", amount:getRndAmount()}}, x_d_sum);
      x_d_sum += x_duration;
    };
    xfloat.current.to(".wordlink-container", {x: 0, ease: "sine.inOut", duration: getRndDuration(), stagger: {from:"end", amount:getRndAmount()}}, x_d_sum);

    scale_float.current.clear();
    let s_duration, s_d_sum = 0;
    for (let i = 0; i < 4; i++) {
      s_duration = getRndDuration();
      scale_float.current.to(".wordlink-outer-container", {scale: getRndScale(), ease: "sine.inOut", duration: s_duration, stagger: {from:"center", amount:getRndAmount()}}, s_d_sum);
      s_d_sum += s_duration;
    };
    scale_float.current.to(".wordlink-outer-container", {scale: 1, ease: "sine.inOut", duration: getRndDuration(), stagger: {from:"center", amount:getRndAmount()}}, s_d_sum);

    scale_float.current.paused( false );
    xfloat.current.paused(false);
    yfloat.current.paused(false);
  }

  function handleContainerClick (reference) {
    let click_position = reference.current.getBoundingClientRect();
    props.setClickPos({x: (click_position.x + click_position.width / 2 ), y: click_position.y})
  }

  function handleTextClick (id, reference) {
    menu_id.current = id;

    let click_position = reference.current.getBoundingClientRect();
    props.setClickPos({x: (click_position.x + click_position.width / 2 ), y: click_position.y})


    const idno = id.slice(4);
    const def_delay = 0.4;
    const words = gsap.utils.toArray(".wordlink-outer-container");
    gsap.to(".text-shadow", {scale: 0, ease:"power3.in", duration: def_delay});
    for (let i=0; i<words.length; i++) {
      let x_trans = window.innerWidth;
      let spin_dur = 0.9 * Math.abs(idno-i);
      let tran_dur =  1.8 * Math.abs(idno-i);
      let spin_rep = Math.ceil( 3 / spin_dur);
      if (i < idno){
        first_click_tl.current.to(words[i], {x: -x_trans, duration: tran_dur}, def_delay);
        first_click_tl.current.to(words[i], {rotation: '-=360', duration: spin_dur, repeat:spin_rep}, def_delay);
      } else if (i == idno) {
        first_click_tl.current.to(words[i], {scale: 0, ease:"power3.in", duration:def_delay}, 0);
      } else {
        first_click_tl.current.to(words[i], {x: x_trans, duration: tran_dur}, def_delay);
        first_click_tl.current.to(words[i], {rotation: '+=360', duration: spin_dur, repeat:spin_rep}, def_delay);
      }
    }

    first_click_tl.current.paused( false );

    setTimeout( () => props.onNext(menu_id.current), 400); // begin to show clicked page ( onNext != false )
    setTimeout( () => finishStep(), 1000); // un render menu after a second ( allows full animation to play through )
    cleanTimelines();
  }


  return (
    <WordGroup onClick={handleTextClick}  references={menu_refs}/>
  )

}
