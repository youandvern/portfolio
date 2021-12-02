import React from "react";
import "./style.css";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import ContactIcon from "../ContactIcon";

/**
 * Component to display my orbiting ContactIcons.
 * @param   {function()} lastPage  Callback function will be called with when ready to navigate to last page (i.e. menu page).
 * @return  {html}
 */
export default function ContactOrbit({ lastPage }) {
  // Initialize state variable used to pause/play orbit animation
  const [orbitPlay, setOrbitPlay] = useState(true);

  // Initialize state variable for mouse tracking to determine orbit speed
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Initialize ref to save orbit timeline motions
  const orbitAnim = useRef(gsap.timeline({ repeat: -1 }));

  // Callback function to unmount this page and return to last page
  function closePage() {
    gsap.to(".contact-orbit-container", { rotationX: 0, ease: "none", duration: 1 });
    lastPage();
  }

  // Create orbit animations and mouse listener on mount. Release mouse listener on unmount.
  useEffect(() => {
    gsap.to(".contact-orbit-container", { rotationX: -20, ease: "none", duration: 1 });
    gsap.to(".orbit-card-icon", { rotationX: 10, ease: "none", duration: 1 });
    orbitAnim.current.to(".contact-orbit", { rotationY: 180, duration: 4, ease: "none" });
    orbitAnim.current.to(".contact-orbit", { rotationY: 360, duration: 4, ease: "none" });

    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  // pause orbit motion whenever the pause/play state changes
  useEffect(() => {
    orbitAnim.current.paused(!orbitPlay);
  }, [orbitPlay]);

  // Set the orbit speed proportional to current mouse distance from orbit center.
  useEffect(() => {
    orbitAnim.current.timeScale(
      2.5 *
        (Math.abs(window.innerWidth / 2 - position.x) / window.innerWidth +
          Math.abs(window.innerHeight / 2 - position.y) / window.innerHeight)
    );
  }, [position]);

  // Toggle pause/play of orbit
  function switchPlay() {
    setOrbitPlay(!orbitPlay);
  }

  // set up information for all icons to be used
  const ICON_INFO = [
    {
      altText: "LinkedIn",
      iconClass: "fab fa-linkedin",
      goto: "https://www.linkedin.com/in/andrew-v-young/",
    },
    {
      altText: "GitHub",
      iconClass: "fab fa-github-square",
      goto: "https://github.com/youandvern",
    },
    {
      altText: "email",
      iconClass: "fas fa-envelope",
      goto: "mailto:youandvern@gmail.com",
    },
    {
      altText: "Website Form",
      iconClass: "fab fa-wpforms",
      goto: "https://encompapp.com/contact",
    },
    {
      altText: "Instagram",
      iconClass: "fab fa-instagram-square",
      goto: "https://www.instagram.com/youngandvern/",
    },
  ];

  // map information to icons
  const ICONS = ICON_INFO.map((iconItem, index) => (
    <ContactIcon
      iconid={"o" + index}
      goto={iconItem.goto}
      iconClass={iconItem.iconClass}
      altText={iconItem.altText}
    />
  ));

  return (
    <div className="contact-orbit-container main-outer-container">
      <div className="contact-orbit">{ICONS}</div>

      <div className="orbit-buttons">
        <div>
          <p className="orbit-home" onClick={closePage}>
            {" "}
            <i className="fas fa-bars" alt="menu" title="Menu"></i>{" "}
          </p>
        </div>
        <div onClick={switchPlay}>
          {orbitPlay && (
            <p className="orbit-pause">
              {" "}
              <i className="far fa-pause-circle" alt="pause" title="Pause"></i>{" "}
            </p>
          )}
          {!orbitPlay && (
            <p className="orbit-play">
              {" "}
              <i className="far fa-play-circle" alt="play" title="Play"></i>{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
