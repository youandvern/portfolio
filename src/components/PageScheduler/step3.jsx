import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import ProjectCarousel from "../ProjectCarousel";
import ContactOrbit from "../ContactOrbit";
import AboutPage from "../AboutPage";
import ResumePage from "../ResumePage";

/**
 * Display controller which shows the requested component page.
 * @param   {function(boolean)} onFinish  Function will be called with param=false when ready to unmount this component.
 * @param   {function(boolean)} onPrevious  Function will be called with param=true when ready to show previous component (menu).
 * @param   {function(string)} toMenu  Function will be called with param="menuID" when requesting direct navigation to another menu item.
 * @param   {string} renderPage  ID of the component page requested to render.
 * @param   {{x: float, y: float}} fromPos  Object containing window location component is expected to render (scale) from and return to.
 * @return  {html}
 */
export default function Step3({ onFinish, onPrevious, toMenu, renderPage, fromPos }) {
  // go back to menu
  function previousStep() {
    gsap.to(".main-outer-container", { scale: 0, duration: 0.7, ease: "sine.inOut" });
    gsap.to(".main-outer-container", {
      x: fromPos.x - window.innerWidth / 2,
      y: 0,
      duration: 1,
      ease: "sine.inOut",
    });
    setTimeout(() => onFinish(false), 900);

    onPrevious(true);
  }

  // auto navigate to projects page
  function toProjects() {
    toMenu("menu0");
    previousStep();
  }

  // play render motion when component mounts
  useEffect(() => {
    // scale from 0 when mounting
    gsap.to(".main-outer-container", { scale: 1, duration: 1, ease: "sine.inOut" });
    gsap.from(".main-outer-container", {
      x: fromPos.x - window.innerWidth / 2,
      y: 0,
      duration: 1,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <>
      {renderPage == "menu0" && <ProjectCarousel lastPage={previousStep} />}
      {renderPage === "menu1" && <AboutPage lastPage={previousStep} />}
      {renderPage === "menu2" && <ContactOrbit lastPage={previousStep} />}
      {renderPage === "menu3" && <ResumePage lastPage={previousStep} toProjects={toProjects} />}
    </>
  );
}
