import React from 'react';
import {useEffect } from 'react';
import {gsap} from 'gsap';
import ProjectCarousel from '../ProjectCarousel';
import ContactOrbit from '../ContactOrbit';
import AboutPage from '../AboutPage';
import ResumePage from '../ResumePage';

export default function Step3(props) {

  function finishStep(){
    props.onFinish(false);
    props.onNext(true);
  }

  // go back to menu
  function previousStep(){
    gsap.to(".main-outer-container", {scale:0, duration: 0.7, ease: "sine.inOut"});
    gsap.to(".main-outer-container", {x: props.fromPos.x - window.innerWidth/2, y:0, duration: 1, ease: "sine.inOut"});
    setTimeout( () => props.onFinish(false), 900);

    props.onPrevious(true);
  }

  // auto navigate to projects page
  function toProjects(){
    props.toMenu("menu0");
    previousStep();
  }

  // scale from 0
  function renderMotion() {
    gsap.to(".main-outer-container", {scale:1, duration: 1, ease: "sine.inOut"});
    gsap.from(".main-outer-container", {x: props.fromPos.x - window.innerWidth/2, y:0, duration: 1, ease: "sine.inOut"});
  };

  useEffect(() => {
    renderMotion();
  }, []);


  return (
    <>
      {(props.renderPage == "menu0") && <ProjectCarousel lastPage={previousStep}/>}
      {(props.renderPage == "menu1") && <AboutPage lastPage={previousStep} /> }
      {(props.renderPage == "menu2") && <ContactOrbit lastPage={previousStep} /> }
      {(props.renderPage == "menu3") && <ResumePage lastPage={previousStep} toProjects={toProjects} /> }
    </>
  )

}
