import React from "react";
import "./style.css";
import WordLink from "../WordLink";

/**
 * Menu component which is a collection of WordLinks as menu options.
 * @param   {Object[]} references  Array of useRef hooks for accessing
 * @param   {string} text       Last Name of the User
 * @return  {html}
 */
export default function WordGroup(props) {
  // const props = [{reference: 1, onClick: 2}]

  return (
    <div className="wordlink-list">
      <WordLink
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
      />
    </div>
  );
}
