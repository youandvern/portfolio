import React from "react";
import "./style.css";

/**
 * Display full height icon card with href link shadow div
 * @param   {string} iconid       An id in the outer div class.
 * @param   {string} goto         Href link for icon click.
 * @param   {string} iconClass    FontAwesome icon class to be displayed.
 * @param   {string} altText      Text displayed as alt and as title of icon.
 * @return  {html}
 */
export default function ContactIcon({ iconid, goto, iconClass, altText }) {
  return (
    <div className={"orbit-card " + iconid}>
      <div className="orbit-card-icon">
        <a href={goto} target="_blank" rel="noreferrer">
          {" "}
          <i className={iconClass} alt={altText} title={altText}></i>{" "}
        </a>
      </div>
      <div className="orbit-card-shadow"> </div>
    </div>
  );
}
