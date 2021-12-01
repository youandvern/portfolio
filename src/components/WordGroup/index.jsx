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
export default function WordGroup({ wordLinkDetails }) {
  // wordLinkDetails = [{id: string, text: string, reference: useRef(null), onClick: function no args}, ...]
  const WRDLNKS = wordLinkDetails.map((menuItem, index) => (
    <WordLink
      key={"word-group-link-" + index}
      text={menuItem.text}
      textref={menuItem.reference}
      menuid={menuItem.id}
      onClick={() => menuItem.onClick()}
    />
  ));

  return <div className="wordlink-list">{WRDLNKS}</div>;
}
