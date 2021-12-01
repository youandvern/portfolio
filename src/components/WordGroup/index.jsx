import React from "react";
import "./style.css";
import WordLink from "../WordLink";

/**
 * Menu component which is a collection of WordLinks as menu options. Currently cannot be updated dynamically.
 * @param   {Object[]} wordLinkDetails  Details used to create WordLink menu items.
 * @param   {string} wordLinkDetails[].id  Unique id used in WordLink menu item.
 * @param   {string} wordLinkDetails[].text  Display text for WordLink menu item.
 * @param   {useRef} wordLinkDetails[].reference  Unique useRef hook attached to WordLink menu item.
 * @param   {function} wordLinkDetails[].onClick  No-argument function called when WordLink menu item is clicked.
 * @return  {html} 
 */
export default function WordGroup({wordLinkDetails}) {
  // wordLinkDetails = [{id: string, text: string, reference: useRef(null), onClick: function no args}, ...]
  const WRDLNKS = wordLinkDetails.map( (menuItem, index) => 
    <WordLink
      key={"word-group-link-"+index}
      text= {menuItem.text}
      textref={menuItem.reference}
      menuid= {menuItem.id}
      onClick={() => menuItem.onClick()} 
    />
  );

  return (
    <div className="wordlink-list">
      {WRDLNKS}
    </div>
  );
}

{/* <WordLink
        text="PROJECTS"
        textref={props.references[0]}
        menuid="menu0"
        onClick={() => props.onClick("menu0", props.references[0])}
      />
      <WordLink
        text="ABOUT"
        textref={props.references[1]}
        menuid="menu1"
        onClick={() => props.onClick("menu1", props.references[1])}
      />
      <WordLink
        text="CONTACT"
        textref={props.references[2]}
        menuid="menu2"
        onClick={() => props.onClick("menu2", props.references[2])}
      />
      <WordLink
        text="RESUME"
        textref={props.references[3]}
        menuid="menu3"
        onClick={() => props.onClick("menu3", props.references[3])}
      /> */}
