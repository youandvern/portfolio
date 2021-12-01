import React from "react";
import { useEffect, useRef, createRef } from "react";
import { gsap } from "gsap";
import { getRndWave, getRndScale, getRndDuration, getRndAmount } from "./waves.js";
import WordGroup from "../WordGroup";

/**
 * Menu component which is a collection of WordLinks as menu options. Currently cannot be updated dynamically.
 * @param   {function(boolean)} onFinish  Function will be called with param=false when ready to unmount this component.
 * @param   {function(string)} onNext  Function will be called with param=id when ready to show next component (Id).
 * @param   {function({x: Float32Array, y: float})} setClickPos  Function will be called with param=clickLocation when a menu item is clicked.
 * @param   {string} menu  Set to "menu0" if navigation should automatically select the first menu item.
 * @param   {function(string)} setMenu  Will be called with param=false to reset autonavigation.
 * @return  {html}
 */
export default function Step2({ onFinish, onNext, setClickPos, menu, setMenu }) {
  // prepare data for wordlink menu items
  // wordLinkDetails = [{id: string, text: string, reference: useRef(null), onClick: function no args}, ...]
  const menu_items = ["PROJECTS", "ABOUT", "CONTACT", "RESUME"];
  const menu_refs = menu_items.map(() => createRef());
  const wordLinkDetails = menu_items.map((text, index) => ({
    id: "menu" + index,
    text: text,
    reference: menu_refs[index],
    onClick: () => handleTextClick("menu" + index, menu_refs[index]),
  }));

  // create references for motion timelines
  const scale_float = useRef(gsap.timeline({ repeat: -1, paused: true }));
  const xfloat = useRef(gsap.timeline({ repeat: -1, paused: true }));
  const yfloat = useRef(gsap.timeline({ repeat: -1, paused: true }));
  const first_click_tl = useRef(gsap.timeline({ paused: true }));

  // set this step to false when exiting
  function finishStep() {
    onFinish(false);
  }

  // show the WordGroup menu on render (scale from 0)
  function renderMotion() {
    gsap.to(".wordlink-list", { scale: 1, duration: 1, ease: "sine.inOut" });
  }

  // create steps to execute when component renders
  useEffect(() => {
    // always show render motion
    renderMotion();

    // navigate directly to projects page if projects clicked from resume page, reset menu
    if (menu === "menu0") {
      setMenu(false);
      setTimeout(() => {
        handleTextClick("menu0", menu_refs[0]);
      }, 1000);

      // begin wave motion when rendered if not going straight to projects page
    } else {
      startWaveMotion();
    }
  }, []);

  // kill timelines before exiting
  function cleanTimelines() {
    scale_float.current.kill();
    xfloat.current.kill();
    yfloat.current.kill();
  }

  // set wave motions in 3D for items in menu
  function startWaveMotion() {
    // clear and set y-direction motions (text elements only)
    yfloat.current.clear();
    let y_duration,
      y_d_sum = 0;
    for (let i = 0; i < 8; i++) {
      y_duration = getRndDuration();
      yfloat.current.to(
        ".link-text",
        {
          y: getRndWave(),
          ease: "sine.inOut",
          duration: y_duration,
          stagger: { from: "start", amount: getRndAmount() },
        },
        y_d_sum
      );
      y_d_sum += y_duration;
    }
    yfloat.current.to(
      ".link-text",
      {
        y: 0,
        ease: "sine.inOut",
        duration: getRndDuration(),
        stagger: { from: "start", amount: getRndAmount() },
      },
      y_d_sum
    );

    // clear and set x-direction motions (container with text and shadow)
    xfloat.current.clear();
    let x_duration,
      x_d_sum = 0;
    for (let i = 0; i < 9; i++) {
      x_duration = getRndDuration();
      xfloat.current.to(
        ".wordlink-container",
        {
          x: getRndWave(),
          ease: "sine.inOut",
          duration: x_duration,
          stagger: { from: "end", amount: getRndAmount() },
        },
        x_d_sum
      );
      x_d_sum += x_duration;
    }
    xfloat.current.to(
      ".wordlink-container",
      {
        x: 0,
        ease: "sine.inOut",
        duration: getRndDuration(),
        stagger: { from: "end", amount: getRndAmount() },
      },
      x_d_sum
    );

    // clear and set z-direction (scale) motions (outer container)
    scale_float.current.clear();
    let s_duration,
      s_d_sum = 0;
    for (let i = 0; i < 4; i++) {
      s_duration = getRndDuration();
      scale_float.current.to(
        ".wordlink-outer-container",
        {
          scale: getRndScale(),
          ease: "sine.inOut",
          duration: s_duration,
          stagger: { from: "center", amount: getRndAmount() },
        },
        s_d_sum
      );
      s_d_sum += s_duration;
    }
    scale_float.current.to(
      ".wordlink-outer-container",
      {
        scale: 1,
        ease: "sine.inOut",
        duration: getRndDuration(),
        stagger: { from: "center", amount: getRndAmount() },
      },
      s_d_sum
    );

    // play all 3 motion timelines once steps are defined
    scale_float.current.paused(false);
    xfloat.current.paused(false);
    yfloat.current.paused(false);
  }

  // handle click event on a menu item. Spin other items away from clicked item.
  function handleTextClick(id, reference) {
    // get position of clicked item from reference
    let click_position = reference.current.getBoundingClientRect();
    setClickPos({ x: click_position.x + click_position.width / 2, y: click_position.y });

    // create spinning motions for not-clicked menu items
    const idno = id.slice(4);
    const def_delay = 0.4;
    const words = gsap.utils.toArray(".wordlink-outer-container");
    gsap.to(".text-shadow", { scale: 0, ease: "power3.in", duration: def_delay });
    for (let i = 0; i < words.length; i++) {
      let x_trans = window.innerWidth;
      let spin_dur = 0.9 * Math.abs(idno - i);
      let tran_dur = 1.8 * Math.abs(idno - i);
      let spin_rep = Math.ceil(3 / spin_dur);
      if (i < idno) {
        first_click_tl.current.to(words[i], { x: -x_trans, duration: tran_dur }, def_delay);
        first_click_tl.current.to(
          words[i],
          { rotation: "-=360", duration: spin_dur, repeat: spin_rep },
          def_delay
        );
      } else if (i == idno) {
        first_click_tl.current.to(
          words[i],
          { scale: 0, ease: "power3.in", duration: def_delay },
          0
        );
      } else {
        first_click_tl.current.to(words[i], { x: x_trans, duration: tran_dur }, def_delay);
        first_click_tl.current.to(
          words[i],
          { rotation: "+=360", duration: spin_dur, repeat: spin_rep },
          def_delay
        );
      }
    }

    // play click motion once steps defined
    first_click_tl.current.paused(false);

    setTimeout(() => onNext(id), 400); // begin to show clicked page ( onNext != false )
    setTimeout(() => finishStep(), 1000); // un render menu after a second ( allows full animation to play through )
    cleanTimelines();
  }

  return <WordGroup wordLinkDetails={wordLinkDetails} />;
}
