import React from 'react';
import './style.css'


/**
 * Menu item with shadow div including display text, id, useRef hook, and onClick function
 * @param   {string} text       String to be displayed as the menu item
 * @param   {string} menuid     Unique id for text div
 * @param   {useRef} textref    Unique reference for upper level components to interact
 * @param   {function} onClick  Function to be called when menu item is clicked
 * @return  {html}
 */
export default function WordLink({text, menuid, textref, onClick}) {

  return(
    <div className= "wordlink-outer-container" ref={textref} onClick={onClick}>
      <div className= "wordlink-container">
        <div id={ menuid } className="link-text"  >
        {text}
        </div>
        <div className= "text-shadow"> </div>

      </div>
    </div>
  )
}
