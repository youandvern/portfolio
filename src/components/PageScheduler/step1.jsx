import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { getRndWave, getRndScale, getRndDuration } from "./waves.js";
import Planet from "../Planet";

/**
 * Landing page controller which displays the Planet button and handles animations.
 * @param   {function(boolean)} onFinish  Function will be called with param=false when ready to unmount this component.
 * @param   {function(boolean)} onNext  Function will be called with param=true when ready to show next component.
 * @return  {html}
 */
export default function Step1({ onFinish, onNext }) {
  // refs used for wave timelines
  const scale_float = useRef(gsap.timeline({ repeat: -1, paused: true }));
  const xfloat = useRef(gsap.timeline({ repeat: -1, paused: true }));
  const yfloat = useRef(gsap.timeline({ repeat: -1, paused: true }));

  // set this step to false (unmount), next step to true (mount)
  function finishStep() {
    onFinish(false);
    onNext(true);
  }

  // start wave motions on component mount
  useEffect(() => {
    startPlanetMotion();
  }, []);

  // kill wave motions before unmount
  function cleanPlanetMotion() {
    scale_float.current.kill();
    xfloat.current.kill();
    yfloat.current.kill();
  }

  // Set up 3D wave motions
  function startPlanetMotion() {
    scale_float.current.clear();

    for (let i = 0; i < 8; i++) {
      scale_float.current.to(".planet-container", {
        scale: getRndScale(),
        ease: "sine.inOut",
        duration: getRndDuration(),
      });
    }

    scale_float.current.to(".planet-container", {
      scale: 1.0,
      ease: "sine.inOut",
      duration: getRndDuration(),
    });

    xfloat.current.clear();
    for (let i = 0; i < 13; i++) {
      xfloat.current.to(".planet-and-shadow", {
        x: getRndWave(),
        ease: "sine.inOut",
        duration: getRndDuration(),
      });
    }

    xfloat.current.to(".planet-and-shadow", {
      x: 0,
      ease: "sine.inOut",
      duration: getRndDuration(),
    });

    yfloat.current.clear();
    for (let i = 0; i < 12; i++) {
      yfloat.current.to(".planet", {
        y: getRndWave(),
        ease: "sine.inOut",
        duration: getRndDuration(),
      });
    }

    yfloat.current.to(".planet", { y: 0, ease: "sine.inOut", duration: getRndDuration() });

    // Play motions when steps are all defined
    scale_float.current.paused(false);
    xfloat.current.paused(false);
    yfloat.current.paused(false);
  }

  // Create motion for onClick event
  function shakeMotion() {
    const step_duration = 0.03;
    let shake_tl = gsap.timeline({ repeat: 2 });
    shake_tl.to(".planet", { x: 1, y: 1, ease: "none", duration: step_duration });
    shake_tl.to(".planet", { x: -1, y: -2, ease: "none", duration: step_duration });
    shake_tl.to(".planet", { x: -3, y: 0, ease: "none", duration: step_duration });
    shake_tl.to(".planet", { x: 3, y: 2, ease: "none", duration: step_duration });
    shake_tl.to(".planet", { x: 1, y: -1, ease: "none", duration: step_duration });
    shake_tl.to(".planet", { x: -1, y: 2, ease: "none", duration: step_duration });
    shake_tl.to(".planet", { x: -3, y: 1, ease: "none", duration: step_duration });
    shake_tl.to(".planet", { x: 3, y: 1, ease: "none", duration: step_duration });
    shake_tl.to(".planet", { x: -1, y: -1, ease: "none", duration: step_duration });
    shake_tl.to(".planet", { x: 1, y: 2, ease: "none", duration: step_duration });
    shake_tl.to(".planet", { x: 1, y: -2, ease: "none", duration: step_duration });

    return shake_tl;
  }

  // handle a click event on the planet
  function handleFirstClick() {
    // stop floating motion
    cleanPlanetMotion();

    let first_click_tl = gsap.timeline({ onComplete: finishStep });
    // start click motion, end with scale to 0
    first_click_tl
      .add(shakeMotion())
      .to(".planet-text", { scale: 0, ease: "power3.inOut", duration: 0.4 }, 0)
      .to([".planet", ".planet-shadow"], { scale: 0, ease: "power3.in", duration: 0.4 });
  }

  return <Planet text="" onClick={handleFirstClick} />;
}
